/* ============================================
   MCU COMPLETE GUIDE — Interactive App v2
   ============================================ */

/* MCU_DATA is loaded from mcu_data.js */

// ============================================
// WATCH TRACKER
// ============================================
class WatchTracker {
  constructor() {
    this.state = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem('mcu-tracker');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  }

  save() {
    localStorage.setItem('mcu-tracker', JSON.stringify(this.state));
  }

  isWatched(id) { return this.state[id] === true; }

  toggle(id) {
    this.state[id] = !this.state[id];
    if (!this.state[id]) delete this.state[id];
    this.save();
    return !!this.state[id];
  }

  setWatched(id, val) {
    if (val) this.state[id] = true;
    else delete this.state[id];
    this.save();
  }

  getEntryProgress(entryId, episodes) {
    if (!episodes) return null;
    let watched = 0;
    episodes.forEach(ep => {
      if (this.isWatched(`ep-${entryId}-${ep.code}`)) watched++;
    });
    return { watched, total: episodes.length };
  }

  getOverallStats() {
    let totalEntries = 0, watchedEntries = 0, totalEpisodes = 0, watchedEpisodes = 0;
    let mcuEntries = 0, mcuWatched = 0, nonMcuEntries = 0, nonMcuWatched = 0;
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(entry => {
          totalEntries++;
          if (this.isWatched(`entry-${entry.id}`)) watchedEntries++;
          if (entry.nonMcu) {
            nonMcuEntries++;
            if (this.isWatched(`entry-${entry.id}`)) nonMcuWatched++;
          } else {
            mcuEntries++;
            if (this.isWatched(`entry-${entry.id}`)) mcuWatched++;
          }
          if (entry.episodes) {
            totalEpisodes += entry.episodes.length;
            entry.episodes.forEach(ep => {
              if (this.isWatched(`ep-${entry.id}-${ep.code}`)) watchedEpisodes++;
            });
          }
        });
      });
    });
    return { totalEntries, watchedEntries, totalEpisodes, watchedEpisodes, mcuEntries, mcuWatched, nonMcuEntries, nonMcuWatched };
  }

  reset() {
    this.state = {};
    this.save();
  }
}

// ============================================
// MCU APP
// ============================================
class MCUApp {
  constructor() {
    this.tracker = new WatchTracker();
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.searchTimeout = null;
    this.activeTab = 'phase-1'; // Default tab
    this.completedPhases = new Set();
    this.currentView = 'home';
    this.entryMap = new Map();
    MCU_DATA.sagas.forEach(s => s.phases.forEach(p => p.entries.forEach(e => {
      this.entryMap.set(e.id, e);
    })));
    this.initCompletedPhases();
    this.bindEvents();
    this.render();
    this.setupGlobalListeners();
  }

  setupGlobalListeners() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const toolbar = document.getElementById('toolbar');
          if (toolbar) toolbar.classList.toggle('scrolled', window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Close dropdown on outside click
    window.addEventListener('click', () => {
      const menu = document.getElementById('phase-menu');
      if (menu) menu.classList.remove('show');
    });
  }

  render() {
    const app = document.getElementById('app');
    
    let mainContent = '';
    
    if (this.currentView === 'home' && !this.searchQuery) {
      mainContent = 
        this.renderToolbar() +
        this.renderHero() +
        '<div class="main-content">' +
          this.renderHomeView() +
          this.renderFastTrack() +
        '</div>';
    } else {
      mainContent = 
        this.renderToolbar() +
        '<div class="main-content">' +
          this.renderContent() +
        '</div>';
    }

    app.innerHTML = mainContent + this.renderBottomNavigation() + this.renderFooter() + this.renderToastContainer();
    
    this.updateAllProgress();
    if (this.currentView === 'phase' || this.searchQuery) {
      this.applyFilters();
    }
  }

  renderHero() {
    const stats = this.tracker.getOverallStats();
    const pct = stats.totalEntries ? Math.round((stats.watchedEntries / stats.totalEntries) * 100) : 0;
    // Find the next unwatched chronological entry for the hero
    let upNext = null;
    for (const saga of MCU_DATA.sagas) {
      if (upNext) break;
      for (const phase of saga.phases) {
        if (upNext) break;
        for (const entry of phase.entries) {
          if (!this.tracker.isWatched(`entry-${entry.id}`)) {
            upNext = entry;
            break;
          }
        }
      }
    }
    const heroTitle = upNext ? upNext.title : "Avengers: Doomsday";
    const heroStatus = upNext ? `Next up in ${upNext.year}` : "All Caught Up";
    
    const ctaHtml = upNext ? `
        <button class="hero-cta" onclick="app.tracker.toggle('entry-${upNext.id}'); app.render();">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Mark as Watched
        </button>
    ` : `<span class="hero-status" style="color: var(--status-watched); margin-top: 8px;">✓ All caught up — you're ready for Doomsday!</span>`;

    return `
    <section class="hero-section" style="background-image: url('images/hero_banner.jpg?v=3');">
      <div class="hero-content">
        <span class="hero-status">${heroStatus}</span>
        <h1 class="hero-title">${heroTitle}</h1>
        ${ctaHtml}
      </div>
    </section>
    <div class="overall-progress-container">
      <div class="overall-progress-bar">
        <div class="overall-progress-fill" style="width: ${pct}%"></div>
      </div>
    </div>`;
  }

  renderLegend() {
    return `
    <div class="legend-bar">
      <span class="legend-item"><span class="legend-dot essential"></span>Essential / Must Watch</span>
      <span class="legend-item"><span class="legend-dot recommended"></span>Recommended</span>
      <span class="legend-item"><span class="legend-dot optional"></span>Optional</span>
      <span class="legend-item"><span class="legend-dot skip"></span>Skip</span>
    </div>`;
  }

  renderToolbar() {
    const stats = this.tracker.getOverallStats();
    return `
    <nav class="toolbar" id="toolbar">
      <div class="toolbar-inner">
        <div class="site-logo">
          MCU<span>Tracker</span>
        </div>
        <div class="filter-group">
          <button class="filter-btn ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
          <button class="filter-btn ${this.activeFilter === 'film' ? 'active' : ''}" data-filter="film">Films</button>
          <button class="filter-btn ${this.activeFilter === 'series' ? 'active' : ''}" data-filter="series">Series</button>
        </div>
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" id="search-input" placeholder="Search movies, series..." value="${this.searchQuery}">
        </div>
        <div class="header-progress">
          ${stats.watchedEntries} / ${stats.totalEntries} watched
        </div>
      </div>
    </nav>`;
  }

  renderHomeView() {
    let html = '<div class="sagas-container">';

    MCU_DATA.sagas.forEach(saga => {
      html += `
        <div class="home-saga-section">
          <h2 class="home-saga-title">${saga.name}</h2>
          <div class="home-phases-grid">
      `;

      saga.phases.forEach(phase => {
        const total = phase.entries.length;
        let watched = 0;
        const posters = [];
        
        phase.entries.forEach(entry => {
          if (this.tracker.isWatched(`entry-${entry.id}`)) watched++;
          if (entry.poster) posters.push(entry.poster);
        });
        
        const pct = total ? Math.round((watched / total) * 100) : 0;
        const posterIndex = posters.length > 0 ? phase.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % posters.length : 0;
        const stablePoster = posters.length > 0 ? posters[posterIndex] : '';
        const bgHtml = stablePoster ? `<div class="phase-card-bg" style="background-image: url('${stablePoster}')"></div>` : '';
        
        html += `
          <div class="phase-card" onclick="app.navigateToPhase('${phase.id}')">
            ${bgHtml}
            <div class="phase-card-overlay"></div>
            <div class="phase-card-content">
              <div class="phase-card-header">
                <h3 class="phase-card-title">${phase.name}</h3>
                <p class="phase-card-saga">${saga.years}</p>
              </div>
              <div class="phase-card-progress">
                <div class="phase-progress-bar"><div class="phase-progress-fill" style="width: ${pct}%"></div></div>
                <span class="phase-progress-text">${watched}/${total}</span>
              </div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }


  renderBottomNavigation() {
    if (this.currentView === 'home' && !this.searchQuery) {
      return `
        <div class="bottom-navigation" style="justify-content: center;">
          <button class="reset-btn" id="reset-btn">Reset All Progress</button>
        </div>
      `;
    }

    const allPhases = [];
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => allPhases.push(phase));
    });
    
    const currentIndex = allPhases.findIndex(p => p.id === this.activeTab);
    const prevPhase = currentIndex > 0 ? allPhases[currentIndex - 1] : null;
    const nextPhase = currentIndex < allPhases.length - 1 ? allPhases[currentIndex + 1] : null;
    
    return `
      <div class="bottom-navigation">
        <button class="nav-btn prev-btn" ${prevPhase ? `onclick="app.navigateToPhase('${prevPhase.id}')"` : 'style="visibility: hidden;"'}>
          &larr; ${prevPhase ? prevPhase.name : 'None'}
        </button>
        
        <button class="reset-btn" id="reset-btn">Reset All Progress</button>
        
        <button class="nav-btn next-btn" ${nextPhase ? `onclick="app.navigateToPhase('${nextPhase.id}')"` : 'style="visibility: hidden;"'}>
          ${nextPhase ? nextPhase.name : 'None'} &rarr;
        </button>
      </div>
    `;
  }

  navigateToPhase(phaseId) {
    this.activeTab = phaseId;
    this.currentView = 'phase';
    this.searchQuery = '';
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  navigateToHome() {
    this.currentView = 'home';
    this.searchQuery = '';
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  renderContent() {
    return MCU_DATA.sagas.map(saga => `
      <section class="saga-section" data-saga="${saga.id}">
        <div class="saga-header">
          <h2 class="saga-title">${saga.name}</h2>
          <div class="saga-line"></div>
          <button class="nav-btn home-btn" onclick="app.navigateToHome()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </button>
        </div>
        <p class="saga-subtitle">${saga.years}</p>
        ${saga.phases.map(phase => this.renderPhase(phase)).join('')}
      </section>
    `).join('');
  }

  renderPhase(phase) {
    let idx = 0;
    const stats = { total: phase.entries.length, watched: 0 };
    const posters = [];
    phase.entries.forEach(e => { 
      if (this.tracker.isWatched(`entry-${e.id}`)) stats.watched++; 
      if (e.poster) posters.push(e.poster);
    });
    
    const pct = stats.total ? Math.round((stats.watched / stats.total) * 100) : 0;
    const isComplete = stats.watched === stats.total && stats.total > 0;
    const posterIndex = posters.length > 0 ? phase.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % posters.length : 0;
    const stablePoster = posters.length > 0 ? posters[posterIndex] : '';
    
    const bgHtml = stablePoster ? `
      <div class="phase-page-bg-container">
        <div class="phase-page-bg" style="background-image: url('${stablePoster}')"></div>
        <div class="phase-page-overlay"></div>
      </div>
    ` : '';

    return `
      <div class="phase-section" data-phase="${phase.id}">
        ${bgHtml}
        <div class="phase-header ${isComplete ? 'complete' : ''}">
          <div class="phase-header-title-row">
            <h3 class="phase-title">${phase.name}</h3>
            ${isComplete ? `<span class="phase-complete-badge">✓ Complete</span>` : `<span class="phase-progress-text"><span>${stats.watched}</span> / ${stats.total} watched</span>`}
          </div>
          <div class="phase-header-bar-container">
            <div class="phase-header-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <div class="entries-grid">
          ${phase.entries.map(entry => {
            const html = this.renderEntry(entry, idx);
            idx++;
            return html;
          }).join('')}
        </div>
      </div>
    `;
  }

  renderEntry(entry, index, priority = null) {
    const isWatched = this.tracker.isWatched(`entry-${entry.id}`);
    
    // Determine if it is the "up next" entry
    let isUpNext = false;
    let foundUnwatched = false;
    for (const s of MCU_DATA.sagas) {
      if (foundUnwatched) break;
      for (const p of s.phases) {
        if (foundUnwatched) break;
        for (const e of p.entries) {
          if (!this.tracker.isWatched(`entry-${e.id}`)) {
            if (e.id === entry.id) isUpNext = true;
            foundUnwatched = true;
            break;
          }
        }
      }
    }

    const stateClass = isWatched ? 'watched' : (isUpNext ? 'up-next' : 'unwatched');
    
    let posterHtml = '';
    const badgeHtml = priority ? `<div class="priority-badge">${priority}</div>` : '';
    const verdictLabel = entry.verdict === 'must-watch' ? 'Must Watch' : entry.verdict === 'skip' ? 'Skip' : entry.verdict.charAt(0).toUpperCase() + entry.verdict.slice(1);
    const verdictHtml = `<div class="verdict-pill ${entry.verdict}">${verdictLabel}</div>`;
    if (entry.poster) {
      posterHtml = `<img src="${entry.poster}" alt="${entry.title} Poster" class="poster-img" loading="lazy">`;
    } else {
      const hue1 = (entry.id * 137) % 360;
      const hue2 = (entry.id * 271) % 360;
      const gradient = `linear-gradient(135deg, hsl(${hue1}, 40%, 15%), hsl(${hue2}, 50%, 10%))`;
      posterHtml = `
        <div style="background: ${gradient}; width: 100%; height: 100%; position: absolute; inset: 0;">
          <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; padding:16px; text-align:center; opacity:0.6;">
            <span style="font-family: var(--font-display); font-size: 1.2rem; color: #fff; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.1;">${entry.title}</span>
          </div>
        </div>
      `;
    }
    
    return `
      <div class="entry-card ${stateClass}" data-id="${entry.id}" data-type="${entry.type}" data-non-mcu="${!!entry.nonMcu}">
        <div class="poster-container" onclick="app.openModal(${entry.id})">
          ${badgeHtml}
          ${verdictHtml}
          ${posterHtml}
          <div class="status-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="poster-overlay">
            <button class="action-btn" onclick="event.stopPropagation(); app.tracker.toggle('entry-${entry.id}'); app.render();" aria-label="Mark ${entry.title} as watched">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>
            <button class="action-btn" onclick="event.stopPropagation(); app.openModal(${entry.id})" aria-label="View details for ${entry.title}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </button>
          </div>
        </div>
        <div class="card-meta-container">
          <h4 class="card-title">${entry.title}</h4>
          <span class="card-meta-line">${entry.year} · ${entry.type.toUpperCase()}</span>
        </div>
      </div>
    `;
  }

  renderFastTrack() {
    const fastTrackIds = [
      { id: 6, priority: 1, reason: 'Establishes the original team dynamic' },
      { id: 19, priority: 2, reason: 'The Thanos saga — mandatory context' },
      { id: 22, priority: 3, reason: "Direct predecessor to Doomsday's story" },
      { id: 27, priority: 4, reason: 'Explains the current state of the multiverse' },
      { id: 32, priority: 5, reason: 'The multiverse cracks open' },
      { id: 34, priority: 6, reason: 'Multiversal incursions and dangers' },
      { id: 47, priority: 7, reason: 'Bridges X-Men into the MCU' },
      { id: 25, priority: 8, reason: 'Sam Wilson becomes Captain America' },
      { id: 53, priority: 9, reason: 'The "New Avengers" team forms' },
      { id: 56, priority: 10, reason: 'Introduces the team central to Doomsday' },
      { id: 60, priority: 11, reason: 'Direct Doomsday setup' }
    ];

    const fastTrackEntries = [];
    fastTrackIds.forEach(item => {
      let found = null;
      MCU_DATA.sagas.forEach(s => s.phases.forEach(p => p.entries.forEach(e => {
        if (e.id === item.id) found = e;
      })));
      if (found) {
        fastTrackEntries.push({ entry: found, priority: item.priority, reason: item.reason });
      }
    });

    return `
    <section class="fast-track-section">
      <h2 class="fast-track-title">The Doomsday Fast Track</h2>
      <p class="fast-track-subtitle">Short on time? Here's your bare minimum MCU watchlist in order.</p>
      
      <div class="fast-track-carousel">
        ${fastTrackEntries.map((item, idx) => `
          <div class="ft-carousel-item" title="${item.reason}">
            ${this.renderEntry(item.entry, idx, item.priority)}
          </div>
        `).join('')}
      </div>
      <div class="tips-section">
        <h3 class="tips-title">Got more time? Add these for richer context:</h3>
        <div class="tips-grid">
          ${MCU_DATA.tips.map(t => {
            const parts = t.split(' — ');
            const title = parts[0];
            const reason = parts[1] || '';
            return `
              <div class="tip-mini-card">
                <div class="tip-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
                <div class="tip-content">
                  <h4 class="tip-title">${title}</h4>
                  ${reason ? `<p class="tip-reason">${reason}</p>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>`;
  }

  renderFooter() {
    const year = new Date().getFullYear();
    return `
    <footer class="footer">
      <p class="footer-text">&copy; ${year} Sam Chris&trade;. Created this website with <span class="footer-heart">❤</span> for the MCU.</p>
    </footer>`;
  }

  renderToastContainer() {
    return '<div class="toast-container" id="toast-container"></div>';
  }

  // ---- Events ----
  bindEvents() {
    const app = document.getElementById('app');
    app.addEventListener('click', (e) => {
      const filterBtn = e.target.closest('.filter-btn');
      if (filterBtn) {
        this.handleFilter(filterBtn.dataset.filter);
        return;
      }

      if (e.target.closest('#reset-btn')) {
        if (confirm('Reset all watch progress? This cannot be undone.')) {
          this.tracker.reset();
          this.completedPhases.clear();
          this.render();
        }
        return;
      }
    });

    app.addEventListener('input', (e) => {
      if (e.target.id === 'search-input') {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          this.applyFilters();
        }, 200);
      }
    });
  }

  findEntry(entryId) {
    return this.entryMap.get(entryId) || null;
  }

  handleFilter(filter) {
    this.activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    this.applyFilters();
  }

  applyFilters() {
    const isSearchActive = !!this.searchQuery;

    document.querySelectorAll('.phase-section').forEach(phaseEl => {
      const matchesTab = phaseEl.dataset.phase === this.activeTab;
      let phaseHasVisibleEntries = false;

      phaseEl.querySelectorAll('.entry-card').forEach(card => {
        const type = card.dataset.type;
        const isNonMcu = card.dataset.nonMcu === 'true';
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        let matchesFilter = true;
        
        if (this.activeFilter === 'non-mcu') matchesFilter = isNonMcu;
        else if (this.activeFilter !== 'all') matchesFilter = type === this.activeFilter;
        
        const matchesSearch = !isSearchActive || title.includes(this.searchQuery);
        const isVisible = matchesFilter && matchesSearch;
        
        card.classList.toggle('hidden', !isVisible);
        if (isVisible) phaseHasVisibleEntries = true;
      });

      if (isSearchActive) {
        phaseEl.classList.toggle('hidden', !phaseHasVisibleEntries);
      } else {
        phaseEl.classList.toggle('hidden', !matchesTab);
      }
    });

    document.querySelectorAll('.saga-section').forEach(sagaEl => {
      const visiblePhases = Array.from(sagaEl.querySelectorAll('.phase-section')).filter(p => !p.classList.contains('hidden'));
      sagaEl.classList.toggle('hidden', visiblePhases.length === 0);
    });
  }

  updateAllProgress() {
    const stats = this.tracker.getOverallStats();
    const pct = stats.totalEntries ? Math.round((stats.watchedEntries / stats.totalEntries) * 100) : 0;

    const el = (id) => document.getElementById(id);
    if (el('stat-entries')) el('stat-entries').textContent = stats.watchedEntries;
    if (el('stat-episodes')) el('stat-episodes').textContent = stats.watchedEpisodes;
    if (el('stat-pct')) el('stat-pct').textContent = pct + '%';
    if (el('progress-fill')) el('progress-fill').style.width = pct + '%';
    if (el('progress-pct')) el('progress-pct').textContent = `${stats.watchedEntries}/${stats.totalEntries}`;

    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        const total = phase.entries.length;
        let watched = 0;
        phase.entries.forEach(entry => {
          if (this.tracker.isWatched(`entry-${entry.id}`)) watched++;
        });
        const phaseEl = el(`progress-${phase.id}`);
        if (phaseEl) phaseEl.innerHTML = `<span>${watched}</span>/${total}`;

        if (watched === total && total > 0 && !this.completedPhases.has(phase.id)) {
          this.completedPhases.add(phase.id);
          this.showToast('🎉', `${phase.name} Complete!`);
        }
      });
    });

    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(entry => {
          if (entry.episodes) {
            const prog = this.tracker.getEntryProgress(entry.id, entry.episodes);
            const epPct = prog.total ? Math.round((prog.watched / prog.total) * 100) : 0;
            const bar = el(`ep-bar-${entry.id}`);
            const text = el(`ep-text-${entry.id}`);
            if (bar) bar.style.width = epPct + '%';
            if (text) text.textContent = `${prog.watched}/${prog.total}`;
          }
        });
      });
    });
  }

  
  openModal(entryId) {
    const entry = this.findEntry(entryId);
    if (!entry) return;
    
    const isWatched = this.tracker.isWatched(`entry-${entry.id}`);
    
    let backdropHtml = '';
    if (entry.poster) {
      backdropHtml = `<div class="modal-backdrop" style="background-image: url('${entry.poster}')"></div>`;
    } else {
      const hue1 = (entry.id * 137) % 360;
      const hue2 = (entry.id * 271) % 360;
      backdropHtml = `<div class="modal-backdrop" style="background: linear-gradient(135deg, hsl(${hue1}, 40%, 15%), hsl(${hue2}, 50%, 10%)); opacity: 0.2"></div>`;
    }
    
    const modalHtml = `
      <div class="modal-overlay active" id="modal-overlay" onclick="if(event.target.id==='modal-overlay') app.closeModal()">
        <div class="modal-content">
          <button class="modal-close" onclick="app.closeModal()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          ${backdropHtml}
          <div class="modal-body">
            <h2 class="modal-title">${entry.title}</h2>
            <div class="modal-meta">
              <span>📅 ${entry.year}</span>
              <span>🎬 ${entry.type.toUpperCase()}</span>
            </div>
            <p class="modal-desc">${entry.description}</p>
            
            <div class="modal-actions">
              <button class="btn-primary ${isWatched ? 'watched' : ''}" onclick="app.tracker.toggle('entry-${entry.id}'); app.closeModal(); app.render();">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ${isWatched ? 'Watched' : 'Mark as Watched'}
              </button>
            </div>
            ${entry.episodes && entry.episodes.length > 0 ? `
            <div class="modal-episodes">
              <h3 style="font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">Episodes (${entry.episodes.length})</h3>
              <div class="ep-list">
                ${entry.episodes.map(ep => {
                  const epId = 'ep-' + entry.id + '-' + ep.code;
                  const epWatched = this.tracker.isWatched(epId);
                  return '<div class="ep-item ' + (epWatched ? 'watched' : '') + '" data-ep-id="' + epId + '">' +
                    '<div class="ep-check ' + (epWatched ? 'checked' : '') + '" onclick="app.toggleEpisodeInModal(\'' + epId + '\', ' + entry.id + ')">' +
                      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg>' +
                    '</div>' +
                    '<div class="ep-info">' +
                      '<span class="ep-title">' + ep.code + ': ' + ep.title + '</span>' +
                    '</div>' +
                  '</div>';
                }).join('')}
              </div>
            </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
    
    let modalContainer = document.getElementById('modal-container');
    if (!modalContainer) {
      modalContainer = document.createElement('div');
      modalContainer.id = 'modal-container';
      document.body.appendChild(modalContainer);
    }
    modalContainer.innerHTML = modalHtml;
  }

  closeModal() {
    const modalContainer = document.getElementById('modal-container');
    if (modalContainer) modalContainer.innerHTML = '';
  }

  toggleEpisodeInModal(epId, entryId) {
    const newState = this.tracker.toggle(epId);
    const epItem = document.querySelector(`[data-ep-id="${epId}"]`);
    if (epItem) {
      epItem.classList.toggle('watched', newState);
      const epCheck = epItem.querySelector('.ep-check');
      if (epCheck) epCheck.classList.toggle('checked', newState);
    }
    const entry = this.findEntry(entryId);
    if (entry && entry.episodes) {
      const allWatched = entry.episodes.every(ep => this.tracker.isWatched(`ep-${entryId}-${ep.code}`));
      this.tracker.setWatched(`entry-${entryId}`, allWatched);
    }
    this.updateAllProgress();
  }

  initCompletedPhases() {
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        const allWatched = phase.entries.every(e => this.tracker.isWatched(`entry-${e.id}`));
        if (allWatched && phase.entries.length > 0) {
          this.completedPhases.add(phase.id);
        }
      });
    });
  }

  showToast(icon, message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new MCUApp();
});
