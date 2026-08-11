/* ============================================
   MCU COMPLETE GUIDE — Interactive App
   ============================================ */

// ============================================
// MCU DATA
// ============================================
const MCU_DATA = {
  sagas: [
    {
      id: 'infinity', name: 'The Infinity Saga', years: '2008–2019', icon: '🟣',
      phases: [
        {
          id: 'phase-1', name: 'Phase One', years: '2008–2012',
          entries: [
            { id: 1, title: 'Iron Man', year: '2008', type: 'film', verdict: 'recommended', description: 'Billionaire Tony Stark builds a high-tech suit of armor to escape captivity and becomes Earth\'s first modern superhero.', episodes: null },
            { id: 2, title: 'The Incredible Hulk', year: '2008', type: 'film', verdict: 'skip', description: 'Bruce Banner hunts for a cure to his gamma-powered condition while evading the military. Loosely connected to the wider MCU.', episodes: null },
            { id: 3, title: 'Iron Man 2', year: '2010', type: 'film', verdict: 'skip', description: 'Tony Stark faces government pressure, a rival inventor, and the consequences of revealing his identity.', episodes: null },
            { id: 4, title: 'Thor', year: '2011', type: 'film', verdict: 'optional', description: 'The arrogant God of Thunder is banished to Earth, where he learns humility and discovers his true heroic potential.', episodes: null },
            { id: 5, title: 'Captain America: The First Avenger', year: '2011', type: 'film', verdict: 'recommended', description: 'A frail soldier is transformed into a super-soldier during WWII to fight the villainous Hydra organization.', episodes: null },
            { id: 6, title: 'Marvel\'s The Avengers', year: '2012', type: 'film', verdict: 'must-watch', description: 'Earth\'s mightiest heroes assemble for the first time to stop Loki and his alien army from conquering New York.', episodes: null }
          ]
        },
        {
          id: 'phase-2', name: 'Phase Two', years: '2013–2015',
          entries: [
            { id: 7, title: 'Iron Man 3', year: '2013', type: 'film', verdict: 'skip', description: 'Tony Stark deals with PTSD from the Battle of New York while facing a mysterious terrorist known as the Mandarin.', episodes: null },
            { id: 8, title: 'Thor: The Dark World', year: '2013', type: 'film', verdict: 'skip', description: 'Thor teams up with Loki to save the Nine Realms from an ancient race of dark elves seeking an Infinity Stone.', episodes: null },
            { id: 9, title: 'Captain America: The Winter Soldier', year: '2014', type: 'film', verdict: 'recommended', description: 'Steve Rogers uncovers a deep conspiracy within S.H.I.E.L.D. while confronting a deadly assassin from his past.', episodes: null },
            { id: 10, title: 'Guardians of the Galaxy', year: '2014', type: 'film', verdict: 'optional', description: 'A ragtag group of intergalactic outlaws joins forces to stop a fanatic from destroying the galaxy with a powerful artifact.', episodes: null },
            { id: 11, title: 'Avengers: Age of Ultron', year: '2015', type: 'film', verdict: 'must-watch', description: 'The Avengers battle a rogue AI created by Tony Stark that threatens all of humanity\'s existence.', episodes: null },
            { id: 12, title: 'Ant-Man', year: '2015', type: 'film', verdict: 'optional', description: 'A master thief is recruited to wear a shrinking suit and pull off a high-stakes heist to save the world.', episodes: null }
          ]
        },
        {
          id: 'phase-3', name: 'Phase Three', years: '2016–2019',
          entries: [
            { id: 13, title: 'Captain America: Civil War', year: '2016', type: 'film', verdict: 'recommended', description: 'Internal conflict over government oversight divides the Avengers, forcing heroes to choose sides in an epic showdown.', episodes: null },
            { id: 14, title: 'Doctor Strange', year: '2016', type: 'film', verdict: 'recommended', description: 'A brilliant neurosurgeon discovers and masters the mystical arts to protect the world from supernatural threats.', episodes: null },
            { id: 15, title: 'Guardians of the Galaxy Vol. 2', year: '2017', type: 'film', verdict: 'optional', description: 'The Guardians navigate complex family dynamics while facing off against a powerful celestial being claiming to be Peter\'s father.', episodes: null },
            { id: 16, title: 'Spider-Man: Homecoming', year: '2017', type: 'film', verdict: 'optional', description: 'Young Peter Parker balances high school life with his superhero identity under Tony Stark\'s reluctant mentorship.', episodes: null },
            { id: 17, title: 'Thor: Ragnarok', year: '2017', type: 'film', verdict: 'optional', description: 'Thor fights to save Asgard from his powerful sister Hela while trapped in a gladiatorial arena on a distant planet.', episodes: null },
            { id: 18, title: 'Black Panther', year: '2018', type: 'film', verdict: 'recommended', description: 'T\'Challa returns home to Wakanda to claim the throne but faces a dangerous challenger who threatens his nation\'s future.', episodes: null },
            { id: 19, title: 'Avengers: Infinity War', year: '2018', type: 'film', verdict: 'must-watch', description: 'The Avengers and allies race to stop Thanos from collecting all six Infinity Stones and wiping out half of all life.', episodes: null },
            { id: 20, title: 'Ant-Man and the Wasp', year: '2018', type: 'film', verdict: 'optional', description: 'Scott Lang teams up with Hope van Dyne for an urgent mission into the Quantum Realm to rescue her mother.', episodes: null },
            { id: 21, title: 'Captain Marvel', year: '2019', type: 'film', verdict: 'optional', description: 'Carol Danvers discovers her origins and cosmic powers while caught in the middle of an intergalactic war in the 1990s.', episodes: null },
            { id: 22, title: 'Avengers: Endgame', year: '2019', type: 'film', verdict: 'must-watch', description: 'The surviving heroes assemble one final time to reverse the devastation caused by Thanos and restore the universe.', episodes: null },
            { id: 23, title: 'Spider-Man: Far From Home', year: '2019', type: 'film', verdict: 'optional', description: 'Peter Parker faces new threats on a school trip to Europe while grappling with the aftermath of Endgame.', episodes: null }
          ]
        }
      ]
    },
    {
      id: 'multiverse', name: 'The Multiverse Saga', years: '2021–2027', icon: '🔵',
      phases: [
        {
          id: 'phase-4', name: 'Phase Four', years: '2021–2022',
          entries: [
            { id: 24, title: 'WandaVision', year: '2021', type: 'series', verdict: 'recommended', description: 'Wanda and Vision live an idealized suburban life that unravels as Wanda confronts her grief — unlocking terrifying new powers.', episodes: [
              { code: 'S1E1', title: 'Filmed Before a Live Studio Audience' }, { code: 'S1E2', title: 'Don\'t Touch That Dial' }, { code: 'S1E3', title: 'Now in Color' }, { code: 'S1E4', title: 'We Interrupt This Program' }, { code: 'S1E5', title: 'On a Very Special Episode...' }, { code: 'S1E6', title: 'All-New Halloween Spooktacular!' }, { code: 'S1E7', title: 'Breaking the Fourth Wall' }, { code: 'S1E8', title: 'Previously On' }, { code: 'S1E9', title: 'The Series Finale' }
            ]},
            { id: 25, title: 'The Falcon and the Winter Soldier', year: '2021', type: 'series', verdict: 'recommended', description: 'Sam Wilson and Bucky Barnes team up in a post-Blip world, grappling with the legacy of Captain America\'s shield.', episodes: [
              { code: 'S1E1', title: 'New World Order' }, { code: 'S1E2', title: 'The Star-Spangled Man' }, { code: 'S1E3', title: 'Power Broker' }, { code: 'S1E4', title: 'The Whole World Is Watching' }, { code: 'S1E5', title: 'Truth' }, { code: 'S1E6', title: 'One World, One People' }
            ]},
            { id: 26, title: 'Black Widow', year: '2021', type: 'film', verdict: 'optional', description: 'Natasha Romanoff confronts her past as a spy and reconnects with the broken family she left behind.', episodes: null },
            { id: 27, title: 'Loki — Season 1', year: '2021', type: 'series', verdict: 'must-watch', description: 'The God of Mischief is recruited by the Time Variance Authority and discovers the secret architecture of the multiverse.', episodes: [
              { code: 'S1E1', title: 'Glorious Purpose' }, { code: 'S1E2', title: 'The Variant' }, { code: 'S1E3', title: 'Lamentis' }, { code: 'S1E4', title: 'The Nexus Event' }, { code: 'S1E5', title: 'Journey Into Mystery' }, { code: 'S1E6', title: 'For All Time. Always.' }
            ]},
            { id: 28, title: 'What If...? — Season 1', year: '2021', type: 'animated', verdict: 'skip', description: 'An animated anthology exploring alternate realities where pivotal MCU moments happened differently.', episodes: [
              { code: 'S1E1', title: 'What If... Captain Carter Were the First Avenger?' }, { code: 'S1E2', title: 'What If... T\'Challa Became a Star-Lord?' }, { code: 'S1E3', title: 'What If... the World Lost Its Mightiest Heroes?' }, { code: 'S1E4', title: 'What If... Doctor Strange Lost His Heart Instead of His Hands?' }, { code: 'S1E5', title: 'What If... Zombies?!' }, { code: 'S1E6', title: 'What If... Killmonger Rescued Tony Stark?' }, { code: 'S1E7', title: 'What If... Thor Were an Only Child?' }, { code: 'S1E8', title: 'What If... Ultron Won?' }, { code: 'S1E9', title: 'What If... the Watcher Broke His Oath?' }
            ]},
            { id: 29, title: 'Hawkeye', year: '2021', type: 'series', verdict: 'optional', description: 'Clint Barton tries to get home for Christmas but gets pulled into a conspiracy alongside protégé Kate Bishop.', episodes: [
              { code: 'S1E1', title: 'Never Meet Your Heroes' }, { code: 'S1E2', title: 'Hide and Seek' }, { code: 'S1E3', title: 'Echoes' }, { code: 'S1E4', title: 'Partners, Am I Right?' }, { code: 'S1E5', title: 'Ronin' }, { code: 'S1E6', title: 'So This Is Christmas?' }
            ]},
            { id: 30, title: 'Shang-Chi and the Legend of the Ten Rings', year: '2021', type: 'film', verdict: 'recommended', description: 'Shang-Chi is drawn into the clandestine Ten Rings organization and must confront his father\'s dark legacy.', episodes: null },
            { id: 31, title: 'Eternals', year: '2021', type: 'film', verdict: 'skip', description: 'An immortal alien race emerges from hiding after millennia to protect humanity from their ancient counterparts, the Deviants.', episodes: null },
            { id: 32, title: 'Spider-Man: No Way Home', year: '2021', type: 'film', verdict: 'must-watch', description: 'Peter Parker\'s attempt to fix his identity crisis cracks the multiverse open, bringing villains from other realities into his world.', episodes: null },
            { id: 33, title: 'Moon Knight', year: '2022', type: 'series', verdict: 'skip', description: 'Marc Spector, a man with dissociative identity disorder, becomes the conduit for the Egyptian moon god Khonshu.', episodes: [
              { code: 'S1E1', title: 'The Goldfish Problem' }, { code: 'S1E2', title: 'Summon the Suit' }, { code: 'S1E3', title: 'The Friendly Type' }, { code: 'S1E4', title: 'The Tomb' }, { code: 'S1E5', title: 'Asylum' }, { code: 'S1E6', title: 'Gods and Monsters' }
            ]},
            { id: 34, title: 'Doctor Strange in the Multiverse of Madness', year: '2022', type: 'film', verdict: 'must-watch', description: 'Strange navigates the dangers of the multiverse while facing a corrupted and immensely powerful Scarlet Witch.', episodes: null },
            { id: 35, title: 'Ms. Marvel', year: '2022', type: 'series', verdict: 'optional', description: 'Teenager Kamala Khan, a massive Captain Marvel fan, discovers she has extraordinary cosmic powers and a hidden legacy.', episodes: [
              { code: 'S1E1', title: 'Generation Why' }, { code: 'S1E2', title: 'Crushed' }, { code: 'S1E3', title: 'Destined' }, { code: 'S1E4', title: 'Seeing Red' }, { code: 'S1E5', title: 'Time and Again' }, { code: 'S1E6', title: 'No Normal' }
            ]},
            { id: 36, title: 'Thor: Love and Thunder', year: '2022', type: 'film', verdict: 'skip', description: 'Thor embarks on a journey of self-discovery while battling Gorr the God Butcher alongside Jane Foster as the Mighty Thor.', episodes: null },
            { id: 37, title: 'She-Hulk: Attorney at Law', year: '2022', type: 'series', verdict: 'skip', description: 'Lawyer Jennifer Walters navigates her career and new life after gaining Hulk-like powers from her cousin Bruce Banner.', episodes: [
              { code: 'S1E1', title: 'A Normal Amount of Rage' }, { code: 'S1E2', title: 'Superhuman Law' }, { code: 'S1E3', title: 'The People vs. Emil Blonsky' }, { code: 'S1E4', title: 'Is This Not Real Magic?' }, { code: 'S1E5', title: 'Mean, Green, and Straight Poured into These Jeans' }, { code: 'S1E6', title: 'Just Jen' }, { code: 'S1E7', title: 'The Retreat' }, { code: 'S1E8', title: 'Ribbit and Rip It' }, { code: 'S1E9', title: 'Whose Show Is This?' }
            ]},
            { id: 38, title: 'I Am Groot — Season 1', year: '2022', type: 'shorts', verdict: 'skip', description: 'Adorable animated shorts following Baby Groot\'s mischievous adventures.', episodes: [
              { code: 'S1E1', title: 'Groot\'s First Steps' }, { code: 'S1E2', title: 'The Little Guy' }, { code: 'S1E3', title: 'Groot\'s Pursuit' }, { code: 'S1E4', title: 'Groot Takes a Bath' }, { code: 'S1E5', title: 'Magnum Opus' }
            ]},
            { id: 39, title: 'Black Panther: Wakanda Forever', year: '2022', type: 'film', verdict: 'recommended', description: 'Wakanda mourns T\'Challa\'s death while fighting to protect the nation from Namor and the undersea kingdom of Talokan.', episodes: null }
          ]
        },
        {
          id: 'phase-5', name: 'Phase Five', years: '2023–2025',
          entries: [
            { id: 40, title: 'Ant-Man and the Wasp: Quantumania', year: '2023', type: 'film', verdict: 'optional', description: 'The heroes plunge into the Quantum Realm and encounter Kang the Conqueror, a powerful multiversal threat.', episodes: null },
            { id: 41, title: 'Secret Invasion', year: '2023', type: 'series', verdict: 'skip', description: 'Nick Fury uncovers a clandestine Skrull plot to infiltrate and conquer Earth from within. Widely considered disappointing.', episodes: [
              { code: 'S1E1', title: 'Resurrection' }, { code: 'S1E2', title: 'Promises' }, { code: 'S1E3', title: 'Betrayed' }, { code: 'S1E4', title: 'Beloved' }, { code: 'S1E5', title: 'Harvest' }, { code: 'S1E6', title: 'Home' }
            ]},
            { id: 42, title: 'Guardians of the Galaxy Vol. 3', year: '2023', type: 'film', verdict: 'optional', description: 'The team embarks on one final, emotional mission to save Rocket Raccoon from the horrors of his past.', episodes: null },
            { id: 43, title: 'Loki — Season 2', year: '2023', type: 'series', verdict: 'must-watch', description: 'Loki fights to save the multiverse itself, leading to a profound sacrifice that reshapes the fabric of all realities.', episodes: [
              { code: 'S2E1', title: 'Ouroboros' }, { code: 'S2E2', title: 'Breaking Brad' }, { code: 'S2E3', title: '1893' }, { code: 'S2E4', title: 'Heart of the TVA' }, { code: 'S2E5', title: 'Science/Fiction' }, { code: 'S2E6', title: 'Glorious Purpose' }
            ]},
            { id: 44, title: 'What If...? — Season 2', year: '2023', type: 'animated', verdict: 'skip', description: 'More alternate-reality adventures exploring "what if" scenarios across the multiverse.', episodes: [
              { code: 'S2E1', title: 'What If... Nebula Joined the Nova Corps?' }, { code: 'S2E2', title: 'What If... Peter Quill Attacked Earth\'s Mightiest Heroes?' }, { code: 'S2E3', title: 'What If... Happy Hogan Saved Christmas?' }, { code: 'S2E4', title: 'What If... Iron Man Crashed Into the Grandmaster?' }, { code: 'S2E5', title: 'What If... Captain Carter Fought the Hydra Stomper?' }, { code: 'S2E6', title: 'What If... Kahhori Reshaped the World?' }, { code: 'S2E7', title: 'What If... Hela Found the Ten Rings?' }, { code: 'S2E8', title: 'What If... the Avengers Assembled in 1602?' }, { code: 'S2E9', title: 'What If... Strange Supreme Intervened?' }
            ]},
            { id: 45, title: 'Echo', year: '2024', type: 'series', verdict: 'skip', description: 'Maya Lopez reconnects with her Native American roots while being pursued by Wilson Fisk\'s criminal empire.', episodes: [
              { code: 'S1E1', title: 'Chafa' }, { code: 'S1E2', title: 'Lowak' }, { code: 'S1E3', title: 'Tuklo' }, { code: 'S1E4', title: 'Taloa' }, { code: 'S1E5', title: 'Maya' }
            ]},
            { id: 46, title: 'X-Men \'97 — Season 1', year: '2024', type: 'animated', verdict: 'optional', description: 'A revival of the beloved 90s animated series, following the X-Men after Professor X\'s departure from Earth.', episodes: [
              { code: 'S1E1', title: 'To Me, My X-Men' }, { code: 'S1E2', title: 'Mutant Liberation Begins' }, { code: 'S1E3', title: 'Fire Made Flesh' }, { code: 'S1E4', title: 'Motendo / Lifedeath – Part 1' }, { code: 'S1E5', title: 'Remember It' }, { code: 'S1E6', title: 'Lifedeath – Part 2' }, { code: 'S1E7', title: 'Bright Eyes' }, { code: 'S1E8', title: 'Tolerance Is Extinction – Part 1' }, { code: 'S1E9', title: 'Tolerance Is Extinction – Part 2' }, { code: 'S1E10', title: 'Tolerance Is Extinction – Part 3' }
            ]},
            { id: 47, title: 'Deadpool & Wolverine', year: '2024', type: 'film', verdict: 'must-watch', description: 'The Merc with a Mouth teams up with Wolverine in a multiverse-hopping adventure that bridges Fox\'s X-Men into the MCU.', episodes: null },
            { id: 48, title: 'Agatha All Along', year: '2024', type: 'series', verdict: 'optional', description: 'Witch Agatha Harkness breaks free from Wanda\'s spell and embarks on a quest down the Witches\' Road to reclaim her power.', episodes: [
              { code: 'S1E1', title: 'Seekest Thou the Road' }, { code: 'S1E2', title: 'Circle Sewn with Fate / Unlock Thy Hidden Gate' }, { code: 'S1E3', title: 'Through Many Miles / Of Tricks and Trials' }, { code: 'S1E4', title: 'If I Can\'t Reach You / Let My Song Teach You' }, { code: 'S1E5', title: 'Darkest Hour / Wake Thy Power' }, { code: 'S1E6', title: 'Familiar by Thy Side' }, { code: 'S1E7', title: 'Death\'s Hand in Mine' }, { code: 'S1E8', title: 'Follow Me My Friend / To Glory at the End' }, { code: 'S1E9', title: 'Maiden Mother Crone' }
            ]},
            { id: 49, title: 'Your Friendly Neighborhood Spider-Man', year: '2025', type: 'animated', verdict: 'skip', description: 'An animated series exploring Peter Parker\'s early days and origin within the MCU\'s multiverse.', episodes: [
              { code: 'S1E1', title: 'Amazing Fantasy' }, { code: 'S1E2', title: 'The Parker Luck' }, { code: 'S1E3', title: 'Secret Identity Crisis' }, { code: 'S1E4', title: 'Hitting the Big Time' }, { code: 'S1E5', title: 'The Unicorn Unleashed' }, { code: 'S1E6', title: 'Duel with the Devil' }, { code: 'S1E7', title: 'Scorpion Rising' }, { code: 'S1E8', title: 'Tangled Web' }, { code: 'S1E9', title: 'Hero or Menace' }, { code: 'S1E10', title: 'If This Be My Destiny...' }
            ]},
            { id: 50, title: 'Captain America: Brave New World', year: '2025', type: 'film', verdict: 'recommended', description: 'Sam Wilson fully steps into the role of Captain America, navigating global political tensions and a powerful new threat.', episodes: null },
            { id: 51, title: 'Daredevil: Born Again — Season 1', year: '2025', type: 'series', verdict: 'recommended', description: 'Matt Murdock continues his fight for justice in Hell\'s Kitchen while clashing with Wilson Fisk\'s political rise to power.', episodes: [
              { code: 'S1E1', title: 'Heaven\'s Half Hour' }, { code: 'S1E2', title: 'Optics' }, { code: 'S1E3', title: 'The Hollow of His Hand' }, { code: 'S1E4', title: 'Sic Semper Systema' }, { code: 'S1E5', title: 'With Interest' }, { code: 'S1E6', title: 'Excessive Force' }, { code: 'S1E7', title: 'Art for Art\'s Sake' }, { code: 'S1E8', title: 'Isle of Joy' }, { code: 'S1E9', title: 'Straight to Hell' }
            ]},
            { id: 52, title: 'Ironheart', year: '2025', type: 'series', verdict: 'optional', description: 'Genius inventor Riri Williams builds an advanced suit of armor and discovers a magical threat tied to her family\'s past.', episodes: [
              { code: 'S1E1', title: 'Take Me Home' }, { code: 'S1E2', title: 'Will the Real Natalie Please Stand Up?' }, { code: 'S1E3', title: 'We in Danger, Girl' }, { code: 'S1E4', title: 'Bad Magic' }, { code: 'S1E5', title: 'Karma\'s a Glitch' }, { code: 'S1E6', title: 'The Past Is the Past' }
            ]},
            { id: 53, title: 'Thunderbolts*', year: '2025', type: 'film', verdict: 'must-watch', description: 'A team of anti-heroes and reformed villains are assembled by the government — leading to the formation of a "New Avengers."', episodes: null },
            { id: 54, title: 'Eyes of Wakanda', year: '2025', type: 'animated', verdict: 'skip', description: 'Animated anthology exploring the history of Wakanda\'s warriors who protected its secrets throughout the ages.', episodes: [
              { code: 'S1E1', title: 'Into the Lion\'s Den' }, { code: 'S1E2', title: 'Legends and Lies' }, { code: 'S1E3', title: 'Lost and Found' }, { code: 'S1E4', title: 'The Last Panther' }
            ]},
            { id: 55, title: 'Marvel Zombies', year: '2025', type: 'animated', verdict: 'skip', description: 'An animated series set in the zombie-overrun universe first seen in What If...?', episodes: [
              { code: 'S1E1', title: 'Episode 1' }, { code: 'S1E2', title: 'Episode 2' }, { code: 'S1E3', title: 'Episode 3' }, { code: 'S1E4', title: 'Episode 4' }
            ]}
          ]
        },
        {
          id: 'phase-6', name: 'Phase Six', years: '2025–2027',
          entries: [
            { id: 56, title: 'The Fantastic Four: First Steps', year: 'Jul 2025', type: 'film', verdict: 'must-watch', description: 'Marvel\'s First Family is introduced as they face a cosmic threat — central to the events of Doomsday.', episodes: null },
            { id: 57, title: 'Wonder Man', year: '2026', type: 'series', verdict: 'optional', description: 'Simon Williams, an actor-turned-hero with ionic powers, navigates Hollywood and heroism.', episodes: [
              { code: 'S1E1', title: 'Matinee' }, { code: 'S1E2', title: 'Self-Tape' }, { code: 'S1E3', title: 'Pacoima' }, { code: 'S1E4', title: 'Doorman' }, { code: 'S1E5', title: 'Found Footage' }, { code: 'S1E6', title: 'Callback' }, { code: 'S1E7', title: 'Kathy Friedman' }, { code: 'S1E8', title: 'Yucca Valley' }
            ]},
            { id: 58, title: 'Daredevil: Born Again — Season 2', year: '2026', type: 'series', verdict: 'recommended', description: 'Continuation of Matt Murdock\'s war on crime, with deeper ties to the wider MCU political landscape.', episodes: [
              { code: 'S2E1', title: 'The Northern Star' }, { code: 'S2E2', title: 'Shoot the Moon' }, { code: 'S2E3', title: 'The Scales & The Sword' }, { code: 'S2E4', title: 'Gloves Off' }, { code: 'S2E5', title: 'The Grand Design' }, { code: 'S2E6', title: 'Requiem' }, { code: 'S2E7', title: 'The Hateful Darkness' }, { code: 'S2E8', title: 'The Southern Cross' }
            ]},
            { id: 59, title: 'X-Men \'97 — Season 2', year: '2026', type: 'animated', verdict: 'optional', description: 'The X-Men continue their fight for mutant coexistence in this beloved animated revival.', episodes: [
              { code: 'S2E1', title: 'Days of Past Future' }, { code: 'S2E2', title: 'A Force to Be Reckoned With' }, { code: 'S2E3', title: 'Rise of Apocalypse – Part 1' }, { code: 'S2E4', title: 'Rise of Apocalypse – Part 2' }, { code: 'S2E5', title: 'Weapon X, Lies, and DVDs' }, { code: 'S2E6', title: 'Danger.Exe' }, { code: 'S2E7', title: 'Strange Land, Savage Heart' }, { code: 'S2E8', title: 'The Dead Man\'s Hand' }, { code: 'S2E9', title: 'Survival of the Fittest' }
            ]},
            { id: 60, title: 'Spider-Man: Brand New Day', year: 'Jul 2026', type: 'film', verdict: 'must-watch', description: 'Peter Parker navigates life after reclaiming his anonymity, with direct setup for the Doomsday event.', episodes: null },
            { id: 61, title: 'Avengers: Doomsday', year: 'Dec 2026', type: 'film', verdict: 'must-watch', description: 'THE EVENT. The Avengers face Doctor Doom in a multiversal showdown that will change everything.', episodes: null },
            { id: 62, title: 'Avengers: Secret Wars', year: 'Dec 2027', type: 'film', verdict: 'must-watch', description: 'The climactic finale of the entire Multiverse Saga — promising to reshape the MCU forever.', episodes: null }
          ]
        }
      ]
    }
  ],
  fastTrack: [
    { priority: 1, title: 'The Avengers', type: 'Film', reason: 'Establishes the original team dynamic' },
    { priority: 2, title: 'Avengers: Infinity War', type: 'Film', reason: 'The Thanos saga — mandatory context' },
    { priority: 3, title: 'Avengers: Endgame', type: 'Film', reason: 'Direct predecessor to Doomsday\'s story' },
    { priority: 4, title: 'Loki (S1 & S2)', type: 'Series', reason: 'Explains the current state of the multiverse' },
    { priority: 5, title: 'Spider-Man: No Way Home', type: 'Film', reason: 'The multiverse cracks open' },
    { priority: 6, title: 'Doctor Strange: Multiverse of Madness', type: 'Film', reason: 'Multiversal incursions and dangers' },
    { priority: 7, title: 'Deadpool & Wolverine', type: 'Film', reason: 'Bridges X-Men into the MCU' },
    { priority: 8, title: 'The Falcon and the Winter Soldier', type: 'Series', reason: 'Sam Wilson becomes Captain America' },
    { priority: 9, title: 'Thunderbolts*', type: 'Film', reason: 'The "New Avengers" team forms' },
    { priority: 10, title: 'The Fantastic Four: First Steps', type: 'Film', reason: 'Introduces the team central to Doomsday' },
    { priority: 11, title: 'Spider-Man: Brand New Day', type: 'Film', reason: 'Direct Doomsday setup' }
  ],
  tips: [
    'Captain America: Civil War — The Avengers\' fracture point',
    'Shang-Chi — Introduces a key Doomsday hero',
    'Black Panther: Wakanda Forever — Sets up Wakanda\'s new leadership',
    'WandaVision → Multiverse of Madness — The Scarlet Witch arc',
    'Captain America: Brave New World — Sam\'s full Captain America story',
    'Daredevil: Born Again — Wilson Fisk\'s political rise'
  ]
};

// ============================================
// WATCH TRACKER (localStorage State)
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
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(entry => {
          totalEntries++;
          if (this.isWatched(`entry-${entry.id}`)) watchedEntries++;
          if (entry.episodes) {
            totalEpisodes += entry.episodes.length;
            entry.episodes.forEach(ep => {
              if (this.isWatched(`ep-${entry.id}-${ep.code}`)) watchedEpisodes++;
            });
          }
        });
      });
    });
    return { totalEntries, watchedEntries, totalEpisodes, watchedEpisodes };
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
    this.completedPhases = new Set();
    this.render();
    this.setupScrollListener();
  }

  // ---- Render ----
  render() {
    const app = document.getElementById('app');
    app.innerHTML =
      this.renderHero() +
      this.renderLegend() +
      this.renderToolbar() +
      '<div class="main-content">' +
        this.renderContent() +
      '</div>' +
      this.renderFastTrack() +
      this.renderFooter() +
      this.renderToastContainer();
    this.bindEvents();
    this.updateAllProgress();
    this.initCompletedPhases();
  }

  renderHero() {
    const stats = this.tracker.getOverallStats();
    const pct = stats.totalEntries ? Math.round((stats.watchedEntries / stats.totalEntries) * 100) : 0;
    return `
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">MCU Complete Guide</h1>
        <p class="hero-subtitle">Your Road to Avengers: Doomsday</p>
        <span class="hero-badge">🎬 62 Projects · 📺 160+ Episodes</span>
        <div class="stats-row">
          <div class="stat-card"><span class="stat-number" id="stat-entries">${stats.watchedEntries}</span><span class="stat-label">Projects Watched</span></div>
          <div class="stat-card"><span class="stat-number" id="stat-episodes">${stats.watchedEpisodes}</span><span class="stat-label">Episodes Watched</span></div>
          <div class="stat-card"><span class="stat-number" id="stat-pct">${pct}%</span><span class="stat-label">Completion</span></div>
        </div>
        <div class="progress-section">
          <div class="progress-bar-container"><div class="progress-fill" id="progress-fill" style="width:${pct}%"></div></div>
          <p class="progress-text"><span class="progress-percentage" id="progress-pct">${stats.watchedEntries}/${stats.totalEntries}</span> projects completed</p>
        </div>
      </div>
    </section>`;
  }

  renderLegend() {
    return `
    <div class="legend-bar">
      <span class="legend-item"><span class="legend-dot must-watch"></span>Must Watch</span>
      <span class="legend-item"><span class="legend-dot recommended"></span>Recommended</span>
      <span class="legend-item"><span class="legend-dot optional"></span>Optional</span>
      <span class="legend-item"><span class="legend-dot skip"></span>Skip</span>
    </div>`;
  }

  renderToolbar() {
    return `
    <nav class="toolbar" id="toolbar">
      <div class="toolbar-inner">
        <div class="filter-group">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="film">🎬 Films</button>
          <button class="filter-btn" data-filter="series">📺 Series</button>
          <button class="filter-btn" data-filter="animated">📺 Animated</button>
          <button class="filter-btn" data-filter="shorts">📺 Shorts</button>
        </div>
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" id="search-input" placeholder="Search titles...">
        </div>
      </div>
    </nav>`;
  }

  renderContent() {
    return MCU_DATA.sagas.map(saga => `
      <section class="saga-section" data-saga="${saga.id}">
        <div class="saga-header">
          <span class="saga-icon">${saga.icon}</span>
          <h2 class="saga-title">${saga.name}</h2>
          <div class="saga-line"></div>
        </div>
        <p class="saga-subtitle">${saga.years}</p>
        ${saga.phases.map(phase => this.renderPhase(phase)).join('')}
      </section>
    `).join('');
  }

  renderPhase(phase) {
    const phaseImages = {
      'phase-1': { img: 'images/phase_1.jpg', sub: 'Where It All Began' },
      'phase-2': { img: 'images/phase_2.jpg', sub: 'The Age of Ultron' },
      'phase-3': { img: 'images/phase_3.jpg', sub: 'The Infinity Saga Finale' },
      'phase-4': { img: 'images/phase_4.jpg', sub: 'The Multiverse Cracks Open' },
      'phase-5': { img: 'images/phase_5.jpg', sub: 'Worlds Collide' },
      'phase-6': { img: 'images/phase_6.jpg', sub: 'The Road to Doomsday' }
    };
    const banner = phaseImages[phase.id];
    let idx = 0;
    return `
      <div class="phase-section" data-phase="${phase.id}">
        ${banner ? `
        <div class="phase-banner">
          <img src="${banner.img}" alt="${phase.name}" loading="lazy">
          <div class="phase-banner-overlay">
            <div class="phase-banner-text">${phase.name}<span>${banner.sub}</span></div>
          </div>
        </div>` : ''}
        <div class="phase-header">
          <h3 class="phase-title">${phase.name} <span class="phase-years">${phase.years}</span></h3>
          <span class="phase-progress-text" id="progress-${phase.id}"></span>
        </div>
        <div class="entries-grid">
          ${phase.entries.map(entry => {
            const html = this.renderEntry(entry, idx);
            idx++;
            return html;
          }).join('')}
        </div>
      </div>`;
  }

  renderEntry(entry, index) {
    const watched = this.tracker.isWatched(`entry-${entry.id}`);
    const delay = Math.min(index * 0.05, 0.5);
    const typeLabel = { film: '🎬 Film', series: '📺 Series', animated: '📺 Animated', shorts: '📺 Shorts' }[entry.type];
    const verdictLabel = { 'must-watch': '🟢 Must Watch', recommended: '🟡 Recommended', optional: '🔵 Optional', skip: '🔴 Skip' }[entry.verdict];
    const checkSvg = '<svg class="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    let episodesHtml = '';
    if (entry.episodes) {
      const prog = this.tracker.getEntryProgress(entry.id, entry.episodes);
      const epPct = prog.total ? Math.round((prog.watched / prog.total) * 100) : 0;
      episodesHtml = `
        <div class="episodes-section">
          <button class="episodes-toggle" data-entry-id="${entry.id}">
            <span class="ep-count-text">${entry.episodes.length} Episodes</span>
            <div class="ep-progress-mini"><div class="ep-progress-mini-fill" id="ep-bar-${entry.id}" style="width:${epPct}%"></div></div>
            <span class="ep-progress-text" id="ep-text-${entry.id}">${prog.watched}/${prog.total}</span>
            <span class="toggle-chevron">▸</span>
          </button>
          <div class="episodes-list" id="episodes-${entry.id}">
            ${entry.episodes.map(ep => {
              const epWatched = this.tracker.isWatched(`ep-${entry.id}-${ep.code}`);
              return `
              <label class="episode-item${epWatched ? ' watched' : ''}" data-ep-id="ep-${entry.id}-${ep.code}">
                <span class="ep-checkbox-wrapper">
                  <input type="checkbox" class="ep-check-input" ${epWatched ? 'checked' : ''}>
                  <span class="ep-check-box${epWatched ? ' checked' : ''}">
                    <svg class="ep-check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                </span>
                <span class="ep-label">${ep.code}: "${ep.title}"</span>
              </label>`;
            }).join('')}
          </div>
        </div>`;
    }

    return `
      <div class="entry-card${watched ? ' watched' : ''}" data-id="${entry.id}" data-type="${entry.type}" data-verdict="${entry.verdict}" style="--delay:${delay}s">
        <div class="card-content">
          <div class="card-header">
            <div class="card-checkbox-area">
              <label class="checkbox-wrapper">
                <input type="checkbox" class="check-input" data-entry-id="${entry.id}" ${watched ? 'checked' : ''}>
                <span class="check-box${watched ? ' checked' : ''}">${checkSvg}</span>
              </label>
            </div>
            <div class="card-info">
              <div class="card-title-row">
                <span class="card-num">${entry.id}.</span>
                <span class="card-title-text">${entry.title}</span>
                <span class="card-year">(${entry.year})</span>
              </div>
              <div class="card-badges">
                <span class="badge badge-${entry.type}">${typeLabel}</span>
                <span class="badge badge-${entry.verdict}">${verdictLabel}</span>
              </div>
            </div>
          </div>
          <p class="card-desc">${entry.description}</p>
          ${episodesHtml}
        </div>
      </div>`;
  }

  renderFastTrack() {
    return `
    <section class="fast-track-section">
      <h2 class="fast-track-title">🎯 The Doomsday Fast Track</h2>
      <p class="fast-track-subtitle">Short on time? Here's your bare minimum watchlist in order.</p>
      <div class="fast-track-grid">
        ${MCU_DATA.fastTrack.map(item => `
          <div class="ft-card">
            <span class="ft-priority">${item.priority}</span>
            <div class="ft-info">
              <span class="ft-title">${item.title}<span class="ft-type-badge">${item.type}</span></span>
              <p class="ft-reason">${item.reason}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="tips-section">
        <h3 class="tips-title">💡 Got more time? Add these for richer context:</h3>
        <ul class="tips-list">
          ${MCU_DATA.tips.map(t => `<li class="tip-item">${t}</li>`).join('')}
        </ul>
      </div>
    </section>`;
  }

  renderFooter() {
    return `
    <footer class="footer">
      <p class="footer-text">Built with <span class="footer-heart">❤</span> for the MCU · Accurate as of August 2026</p>
      <button class="reset-btn" id="reset-btn">Reset All Progress</button>
    </footer>`;
  }

  renderToastContainer() {
    return '<div class="toast-container" id="toast-container"></div>';
  }

  // ---- Events ----
  bindEvents() {
    const app = document.getElementById('app');
    app.addEventListener('click', (e) => {
      // Main checkbox
      const checkBox = e.target.closest('.check-box');
      if (checkBox) {
        const input = checkBox.parentElement.querySelector('.check-input');
        const entryId = parseInt(input.dataset.entryId);
        this.handleMainCheck(entryId);
        return;
      }

      // Episode checkbox
      const epCheckBox = e.target.closest('.ep-check-box');
      if (epCheckBox) {
        const item = epCheckBox.closest('.episode-item');
        const epId = item.dataset.epId;
        this.handleEpisodeCheck(epId);
        return;
      }

      // Episodes toggle
      const toggle = e.target.closest('.episodes-toggle');
      if (toggle) {
        const entryId = toggle.dataset.entryId;
        const list = document.getElementById(`episodes-${entryId}`);
        toggle.classList.toggle('open');
        list.classList.toggle('expanded');
        return;
      }

      // Filter buttons
      const filterBtn = e.target.closest('.filter-btn');
      if (filterBtn) {
        this.handleFilter(filterBtn.dataset.filter);
        return;
      }

      // Reset button
      if (e.target.closest('#reset-btn')) {
        if (confirm('Reset all watch progress? This cannot be undone.')) {
          this.tracker.reset();
          this.render();
        }
        return;
      }
    });

    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          this.applyFilters();
        }, 200);
      });
    }
  }

  handleMainCheck(entryId) {
    const newState = this.tracker.toggle(`entry-${entryId}`);
    const card = document.querySelector(`.entry-card[data-id="${entryId}"]`);
    const checkBox = card.querySelector('.check-box');

    card.classList.toggle('watched', newState);
    checkBox.classList.toggle('checked', newState);

    // Find entry data to check for episodes
    let entry = null;
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(e => { if (e.id === entryId) entry = e; });
      });
    });

    // Auto-toggle episodes
    if (entry && entry.episodes) {
      entry.episodes.forEach(ep => {
        this.tracker.setWatched(`ep-${entryId}-${ep.code}`, newState);
        const epItem = document.querySelector(`[data-ep-id="ep-${entryId}-${ep.code}"]`);
        if (epItem) {
          epItem.classList.toggle('watched', newState);
          const epBox = epItem.querySelector('.ep-check-box');
          if (epBox) epBox.classList.toggle('checked', newState);
        }
      });
    }

    this.updateAllProgress();
  }

  handleEpisodeCheck(epId) {
    const newState = this.tracker.toggle(epId);
    const epItem = document.querySelector(`[data-ep-id="${epId}"]`);
    epItem.classList.toggle('watched', newState);
    const epBox = epItem.querySelector('.ep-check-box');
    epBox.classList.toggle('checked', newState);

    // Extract entryId from epId: "ep-{entryId}-{code}"
    const parts = epId.split('-');
    const entryId = parseInt(parts[1]);

    // Find entry
    let entry = null;
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(e => { if (e.id === entryId) entry = e; });
      });
    });

    if (entry && entry.episodes) {
      const allWatched = entry.episodes.every(ep =>
        this.tracker.isWatched(`ep-${entryId}-${ep.code}`)
      );
      this.tracker.setWatched(`entry-${entryId}`, allWatched);
      const card = document.querySelector(`.entry-card[data-id="${entryId}"]`);
      card.classList.toggle('watched', allWatched);
      const mainBox = card.querySelector('.check-box');
      mainBox.classList.toggle('checked', allWatched);
    }

    this.updateAllProgress();
  }

  handleFilter(filter) {
    this.activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    this.applyFilters();
  }

  applyFilters() {
    document.querySelectorAll('.entry-card').forEach(card => {
      const type = card.dataset.type;
      const title = card.querySelector('.card-title-text').textContent.toLowerCase();
      const matchesFilter = this.activeFilter === 'all' || type === this.activeFilter;
      const matchesSearch = !this.searchQuery || title.includes(this.searchQuery);
      card.classList.toggle('hidden', !(matchesFilter && matchesSearch));
    });
  }

  // ---- Progress Updates ----
  updateAllProgress() {
    const stats = this.tracker.getOverallStats();
    const pct = stats.totalEntries ? Math.round((stats.watchedEntries / stats.totalEntries) * 100) : 0;

    // Update hero stats
    const el = (id) => document.getElementById(id);
    if (el('stat-entries')) el('stat-entries').textContent = stats.watchedEntries;
    if (el('stat-episodes')) el('stat-episodes').textContent = stats.watchedEpisodes;
    if (el('stat-pct')) el('stat-pct').textContent = pct + '%';
    if (el('progress-fill')) el('progress-fill').style.width = pct + '%';
    if (el('progress-pct')) el('progress-pct').textContent = `${stats.watchedEntries}/${stats.totalEntries}`;

    // Update phase progress
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        const total = phase.entries.length;
        let watched = 0;
        phase.entries.forEach(entry => {
          if (this.tracker.isWatched(`entry-${entry.id}`)) watched++;
        });
        const phaseEl = el(`progress-${phase.id}`);
        if (phaseEl) phaseEl.innerHTML = `<span>${watched}</span>/${total}`;

        // Check phase completion
        if (watched === total && total > 0 && !this.completedPhases.has(phase.id)) {
          this.completedPhases.add(phase.id);
          this.showToast('🎉', `${phase.name} Complete!`);
        }
      });
    });

    // Update episode progress for each series
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

  // ---- Toast Notifications ----
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
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  // ---- Scroll Effects ----
  setupScrollListener() {
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
  }
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  new MCUApp();
});
