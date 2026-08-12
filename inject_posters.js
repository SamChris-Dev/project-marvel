const fs = require('fs');

const posters = JSON.parse(fs.readFileSync('posters.json'));
let appJs = fs.readFileSync('app.js', 'utf8');

for (const [title, url] of Object.entries(posters)) {
  if (!url) continue;
  const regex = new RegExp(`(title:\\s*['"]${title.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}['"]\\s*,)`);
  
  if (appJs.match(regex)) {
    // Only inject if it doesn't already have a poster
    const lineIndex = appJs.indexOf(appJs.match(regex)[0]);
    const lineEnd = appJs.indexOf('}', lineIndex);
    const line = appJs.slice(lineIndex, lineEnd);
    if (!line.includes('poster:')) {
      appJs = appJs.replace(regex, `$1 poster: '${url}', `);
    }
  }
}

fs.writeFileSync('app.js', appJs);
console.log('Posters injected into app.js');
