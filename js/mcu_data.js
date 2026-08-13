/* ============================================
   MCU COMPLETE GUIDE — Data Module
   ============================================ */

const MCU_DATA = {
  sagas: [
    {
      id: 'infinity', name: 'The Infinity Saga', years: '2008–2019', icon: '🟣',
      phases: [
        {
          id: 'phase-1', name: 'Phase One', years: '2008–2012',
          entries: [
            { id: 1, title: 'Iron Man', poster: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX600_.jpg',  year: '2008', type: 'film', verdict: 'recommended', description: 'Billionaire Tony Stark builds a high-tech suit of armor to escape captivity and becomes Earth\'s first modern superhero.', episodes: null },
            { id: 2, title: 'The Incredible Hulk', poster: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_FMjpg_UX600_.jpg',  year: '2008', type: 'film', verdict: 'skip', description: 'Bruce Banner hunts for a cure to his gamma-powered condition while evading the military.', episodes: null },
            { id: 3, title: 'Iron Man 2', poster: 'https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2010', type: 'film', verdict: 'skip', description: 'Tony Stark faces government pressure, a rival inventor, and the consequences of revealing his identity.', episodes: null },
            { id: 4, title: 'Thor', poster: 'https://m.media-amazon.com/images/M/MV5BNjRhNGZjZjEtYTQzYS00OWUxLThjNGEtMTIwMTE2ZDFlZTZkXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2011', type: 'film', verdict: 'optional', description: 'The arrogant God of Thunder is banished to Earth, where he learns humility and discovers his true heroic potential.', episodes: null },
            { id: 5, title: 'Captain America: The First Avenger', poster: 'https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2011', type: 'film', verdict: 'recommended', description: 'A frail soldier is transformed into a super-soldier during WWII to fight the villainous Hydra organization.', episodes: null },
            { id: 6, title: 'Marvel\'s The Avengers', poster: 'https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2012', type: 'film', verdict: 'must-watch', description: 'Earth\'s mightiest heroes assemble for the first time to stop Loki and his alien army from conquering New York.', episodes: null }
          ]
        },
        {
          id: 'phase-2', name: 'Phase Two', years: '2013–2015',
          entries: [
            { id: 7, title: 'Iron Man 3', poster: 'https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_FMjpg_UX600_.jpg',  year: '2013', type: 'film', verdict: 'skip', description: 'Tony Stark deals with PTSD from the Battle of New York while facing the Mandarin.', episodes: null },
            { id: 8, title: 'Thor: The Dark World', poster: 'https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX600_.jpg',  year: '2013', type: 'film', verdict: 'skip', description: 'Thor teams up with Loki to save the Nine Realms from dark elves seeking an Infinity Stone.', episodes: null },
            { id: 9, title: 'Captain America: The Winter Soldier', poster: 'https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2014', type: 'film', verdict: 'recommended', description: 'Steve Rogers uncovers a deep conspiracy within S.H.I.E.L.D. while confronting a deadly assassin from his past.', episodes: null },
            { id: 10, title: 'Guardians of the Galaxy', poster: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2014', type: 'film', verdict: 'optional', description: 'A ragtag group of intergalactic outlaws joins forces to stop a fanatic from destroying the galaxy.', episodes: null },
            { id: 11, title: 'Avengers: Age of Ultron', poster: 'https://m.media-amazon.com/images/M/MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2015', type: 'film', verdict: 'must-watch', description: 'The Avengers battle a rogue AI created by Tony Stark that threatens all of humanity.', episodes: null },
            { id: 12, title: 'Ant-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX600_.jpg',  year: '2015', type: 'film', verdict: 'optional', description: 'A master thief is recruited to wear a shrinking suit and pull off a high-stakes heist.', episodes: null }
          ]
        },
        {
          id: 'phase-3', name: 'Phase Three', years: '2016–2019',
          entries: [
            { id: 13, title: 'Captain America: Civil War', poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_FMjpg_UX600_.jpg',  year: '2016', type: 'film', verdict: 'recommended', description: 'Internal conflict over government oversight divides the Avengers, forcing heroes to choose sides.', episodes: null },
            { id: 14, title: 'Doctor Strange', poster: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_FMjpg_UX600_.jpg',  year: '2016', type: 'film', verdict: 'recommended', description: 'A brilliant neurosurgeon discovers the mystical arts to protect the world from supernatural threats.', episodes: null },
            { id: 15, title: 'Guardians of the Galaxy Vol. 2', poster: 'https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2017', type: 'film', verdict: 'optional', description: 'The Guardians navigate complex family dynamics while facing a powerful celestial being.', episodes: null },
            { id: 16, title: 'Spider-Man: Homecoming', poster: 'https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_FMjpg_UX600_.jpg',  year: '2017', type: 'film', verdict: 'optional', description: 'Young Peter Parker balances high school life with his superhero identity under Tony Stark\'s mentorship.', episodes: null },
            { id: 17, title: 'Thor: Ragnarok', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_FMjpg_UX600_.jpg',  year: '2017', type: 'film', verdict: 'optional', description: 'Thor fights to save Asgard from Hela while trapped in a gladiatorial arena on a distant planet.', episodes: null },
            { id: 18, title: 'Black Panther', poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'film', verdict: 'recommended', description: 'T\'Challa returns to Wakanda to claim the throne but faces a dangerous challenger.', episodes: null },
            { id: 19, title: 'Avengers: Infinity War', poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'film', verdict: 'must-watch', description: 'The Avengers race to stop Thanos from collecting all six Infinity Stones and wiping out half of all life.', episodes: null },
            { id: 20, title: 'Ant-Man and the Wasp', poster: 'https://m.media-amazon.com/images/M/MV5BMThkYWY5ZjQtYjJlMS00MDFmLWFkYzEtODEzZjg5YWFmMGY4XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'film', verdict: 'optional', description: 'Scott Lang teams up with Hope van Dyne for an urgent mission into the Quantum Realm.', episodes: null },
            { id: 21, title: 'Captain Marvel', poster: 'https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2019', type: 'film', verdict: 'optional', description: 'Carol Danvers discovers her cosmic powers while caught in an intergalactic war in the 1990s.', episodes: null },
            { id: 22, title: 'Avengers: Endgame', poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX600_.jpg',  year: '2019', type: 'film', verdict: 'must-watch', description: 'The surviving heroes assemble one final time to reverse the devastation caused by Thanos.', episodes: null },
            { id: 23, title: 'Spider-Man: Far From Home', poster: 'https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2019', type: 'film', verdict: 'optional', description: 'Peter Parker faces new threats on a school trip to Europe while grappling with the aftermath of Endgame.', episodes: null }
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
            { id: 24, title: 'WandaVision', poster: 'https://m.media-amazon.com/images/M/MV5BZTMxMmM1ODItMTZiMS00NjI1LWEwODctMjQ4ZjY4ODliNDI0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'series', verdict: 'recommended', description: 'Wanda and Vision live an idealized suburban life that unravels as Wanda confronts her grief.', episodes: [
              { code: 'S1E1', title: 'Filmed Before a Live Studio Audience' }, { code: 'S1E2', title: 'Don\'t Touch That Dial' }, { code: 'S1E3', title: 'Now in Color' }, { code: 'S1E4', title: 'We Interrupt This Program' }, { code: 'S1E5', title: 'On a Very Special Episode...' }, { code: 'S1E6', title: 'All-New Halloween Spooktacular!' }, { code: 'S1E7', title: 'Breaking the Fourth Wall' }, { code: 'S1E8', title: 'Previously On' }, { code: 'S1E9', title: 'The Series Finale' }
            ]},
            { id: 25, title: 'The Falcon and the Winter Soldier', poster: 'https://m.media-amazon.com/images/M/MV5BYmJkOGNlNmEtMmQyOS00YjZiLTgxM2EtNmEzNzUzNTU5ODYwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'series', verdict: 'recommended', description: 'Sam Wilson and Bucky Barnes team up in a post-Blip world, grappling with the legacy of Captain America.', episodes: [
              { code: 'S1E1', title: 'New World Order' }, { code: 'S1E2', title: 'The Star-Spangled Man' }, { code: 'S1E3', title: 'Power Broker' }, { code: 'S1E4', title: 'The Whole World Is Watching' }, { code: 'S1E5', title: 'Truth' }, { code: 'S1E6', title: 'One World, One People' }
            ]},
            { id: 26, title: 'Black Widow', poster: 'https://m.media-amazon.com/images/M/MV5BZTMyZTA0ZTItYjY3Yi00ODNjLWExYTgtYzgxZTk0NTg0Y2FlXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'film', verdict: 'optional', description: 'Natasha Romanoff confronts her past as a spy and reconnects with the broken family she left behind.', episodes: null },
            { id: 27, title: 'Loki — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2021', type: 'series', verdict: 'must-watch', description: 'The God of Mischief is recruited by the TVA and discovers the secret architecture of the multiverse.', episodes: [
              { code: 'S1E1', title: 'Glorious Purpose' }, { code: 'S1E2', title: 'The Variant' }, { code: 'S1E3', title: 'Lamentis' }, { code: 'S1E4', title: 'The Nexus Event' }, { code: 'S1E5', title: 'Journey Into Mystery' }, { code: 'S1E6', title: 'For All Time. Always.' }
            ]},
            { id: 28, title: 'What If...? — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BYWFiOTcwNzItMTg5Mi00ZTU4LThkZWYtYWNmZWQ1ODE5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2021', type: 'animated', verdict: 'skip', description: 'Animated anthology exploring alternate realities where pivotal MCU moments happened differently.', episodes: [
              { code: 'S1E1', title: 'What If... Captain Carter Were the First Avenger?' }, { code: 'S1E2', title: 'What If... T\'Challa Became a Star-Lord?' }, { code: 'S1E3', title: 'What If... the World Lost Its Mightiest Heroes?' }, { code: 'S1E4', title: 'What If... Doctor Strange Lost His Heart?' }, { code: 'S1E5', title: 'What If... Zombies?!' }, { code: 'S1E6', title: 'What If... Killmonger Rescued Tony Stark?' }, { code: 'S1E7', title: 'What If... Thor Were an Only Child?' }, { code: 'S1E8', title: 'What If... Ultron Won?' }, { code: 'S1E9', title: 'What If... the Watcher Broke His Oath?' }
            ]},
            { id: 29, title: 'Hawkeye', poster: 'https://m.media-amazon.com/images/M/MV5BOGU5ZDBlOTAtOTZmYS00MWE0LTg0NzktNDcxZGJhN2FhZmM2XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'series', verdict: 'optional', description: 'Clint Barton tries to get home for Christmas but gets pulled into a conspiracy alongside Kate Bishop.', episodes: [
              { code: 'S1E1', title: 'Never Meet Your Heroes' }, { code: 'S1E2', title: 'Hide and Seek' }, { code: 'S1E3', title: 'Echoes' }, { code: 'S1E4', title: 'Partners, Am I Right?' }, { code: 'S1E5', title: 'Ronin' }, { code: 'S1E6', title: 'So This Is Christmas?' }
            ]},
            { id: 30, title: 'Shang-Chi and the Legend of the Ten Rings', poster: 'https://m.media-amazon.com/images/M/MV5BZmY5MDcyNzAtYzg3MC00MGNlLTg3OGItNmRjYThkZGVlNzAyXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'film', verdict: 'recommended', description: 'Shang-Chi must confront his father\'s dark legacy and the clandestine Ten Rings organization.', episodes: null },
            { id: 31, title: 'Eternals', poster: 'https://m.media-amazon.com/images/M/MV5BZTBiZjI2M2UtZTNiNy00NmU4LWJiMjYtZjk4MDIzMzhlMjFlXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'film', verdict: 'skip', description: 'An immortal alien race emerges from hiding to protect humanity from their ancient counterparts.', episodes: null },
            { id: 32, title: 'Spider-Man: No Way Home', poster: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'film', verdict: 'must-watch', description: 'Peter Parker\'s identity crisis cracks the multiverse open, bringing villains from other realities.', episodes: null },
            { id: 33, title: 'Moon Knight', poster: 'https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'series', verdict: 'skip', description: 'Marc Spector, a man with dissociative identity disorder, becomes the conduit for the Egyptian moon god.', episodes: [
              { code: 'S1E1', title: 'The Goldfish Problem' }, { code: 'S1E2', title: 'Summon the Suit' }, { code: 'S1E3', title: 'The Friendly Type' }, { code: 'S1E4', title: 'The Tomb' }, { code: 'S1E5', title: 'Asylum' }, { code: 'S1E6', title: 'Gods and Monsters' }
            ]},
            { id: 34, title: 'Doctor Strange in the Multiverse of Madness', poster: 'https://m.media-amazon.com/images/M/MV5BN2YxZGRjMzYtZjE1ZC00MDI0LThjZmQtZTZmMzVmMmQ2NzBmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'film', verdict: 'must-watch', description: 'Strange navigates the multiverse while facing a corrupted and immensely powerful Scarlet Witch.', episodes: null },
            { id: 35, title: 'Ms. Marvel', poster: 'https://m.media-amazon.com/images/M/MV5BNzlkNjBmOWUtOTgzZS00OWIzLThkNWEtZTg5MGY2ODAyYzZjXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'series', verdict: 'optional', description: 'Teenager Kamala Khan discovers she has extraordinary cosmic powers and a hidden legacy.', episodes: [
              { code: 'S1E1', title: 'Generation Why' }, { code: 'S1E2', title: 'Crushed' }, { code: 'S1E3', title: 'Destined' }, { code: 'S1E4', title: 'Seeing Red' }, { code: 'S1E5', title: 'Time and Again' }, { code: 'S1E6', title: 'No Normal' }
            ]},
            { id: 36, title: 'Thor: Love and Thunder', poster: 'https://m.media-amazon.com/images/M/MV5BZjRiMDhiZjQtNjk5Yi00ZDcwLTkyYTEtMDc1NjdmNjFhNGIzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'film', verdict: 'skip', description: 'Thor battles Gorr the God Butcher alongside Jane Foster as the Mighty Thor.', episodes: null },
            { id: 37, title: 'She-Hulk: Attorney at Law', poster: 'https://m.media-amazon.com/images/M/MV5BNjg4ZTQ1MjctNzEyMS00YWM2LTk1ZTQtNDU3ZDJjNjhhMDhkXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'series', verdict: 'skip', description: 'Lawyer Jennifer Walters navigates her career after gaining Hulk-like powers.', episodes: [
              { code: 'S1E1', title: 'A Normal Amount of Rage' }, { code: 'S1E2', title: 'Superhuman Law' }, { code: 'S1E3', title: 'The People vs. Emil Blonsky' }, { code: 'S1E4', title: 'Is This Not Real Magic?' }, { code: 'S1E5', title: 'Mean, Green, and Straight Poured into These Jeans' }, { code: 'S1E6', title: 'Just Jen' }, { code: 'S1E7', title: 'The Retreat' }, { code: 'S1E8', title: 'Ribbit and Rip It' }, { code: 'S1E9', title: 'Whose Show Is This?' }
            ]},
            { id: 38, title: 'I Am Groot — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BMzBlODMyZGQtN2QzOS00MDAzLWFjOGQtMGRjN2JmZWM0NWJkXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2022', type: 'shorts', verdict: 'skip', description: 'Adorable animated shorts following Baby Groot\'s mischievous adventures.', episodes: [
              { code: 'S1E1', title: 'Groot\'s First Steps' }, { code: 'S1E2', title: 'The Little Guy' }, { code: 'S1E3', title: 'Groot\'s Pursuit' }, { code: 'S1E4', title: 'Groot Takes a Bath' }, { code: 'S1E5', title: 'Magnum Opus' }
            ]},
            { id: 39, title: 'Black Panther: Wakanda Forever', poster: 'https://m.media-amazon.com/images/M/MV5BYWY5NDY1ZjItZDQxMy00MTAzLTgyOGQtNTQxYjFiMzZjMjUyXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2022', type: 'film', verdict: 'recommended', description: 'Wakanda mourns T\'Challa\'s death while fighting Namor and the undersea kingdom of Talokan.', episodes: null }
          ]
        },
        {
          id: 'phase-5', name: 'Phase Five', years: '2023–2025',
          entries: [
            { id: 40, title: 'Ant-Man and the Wasp: Quantumania', poster: 'https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWFhYi00ZmI5LTg0YTMtYWQ1NjQ5NzBjMGQ2XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2023', type: 'film', verdict: 'optional', description: 'The heroes plunge into the Quantum Realm and encounter Kang the Conqueror.', episodes: null },
            { id: 41, title: 'Secret Invasion', poster: 'https://m.media-amazon.com/images/M/MV5BNmYzYzA2NzMtOTVmMC00ZDY4LThlMDctZmUyN2NlMjQ2ODViXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2023', type: 'series', verdict: 'skip', description: 'Nick Fury uncovers a Skrull plot to infiltrate and conquer Earth from within.', episodes: [
              { code: 'S1E1', title: 'Resurrection' }, { code: 'S1E2', title: 'Promises' }, { code: 'S1E3', title: 'Betrayed' }, { code: 'S1E4', title: 'Beloved' }, { code: 'S1E5', title: 'Harvest' }, { code: 'S1E6', title: 'Home' }
            ]},
            { id: 42, title: 'Guardians of the Galaxy Vol. 3', poster: 'https://m.media-amazon.com/images/M/MV5BOTJhOTMxMmItZmE0Ny00MDc3LWEzOGEtOGFkMzY4MWYyZDQ0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2023', type: 'film', verdict: 'optional', description: 'The team embarks on one final mission to save Rocket from the horrors of his past.', episodes: null },
            { id: 43, title: 'Loki — Season 2', poster: 'https://m.media-amazon.com/images/M/MV5BYzA2YjM2ZWQtYTZhMS00OTI3LTlhYzQtZjBiZWZkMDdlNjA5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2023', type: 'series', verdict: 'must-watch', description: 'Loki fights to save the multiverse itself, leading to a sacrifice that reshapes all realities.', episodes: [
              { code: 'S2E1', title: 'Ouroboros' }, { code: 'S2E2', title: 'Breaking Brad' }, { code: 'S2E3', title: '1893' }, { code: 'S2E4', title: 'Heart of the TVA' }, { code: 'S2E5', title: 'Science/Fiction' }, { code: 'S2E6', title: 'Glorious Purpose' }
            ]},
            { id: 44, title: 'What If...? — Season 2', poster: 'https://m.media-amazon.com/images/M/MV5BYWFiOTcwNzItMTg5Mi00ZTU4LThkZWYtYWNmZWQ1ODE5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2023', type: 'animated', verdict: 'skip', description: 'More alternate-reality adventures exploring \"what if\" scenarios across the multiverse.', episodes: [
              { code: 'S2E1', title: 'What If... Nebula Joined the Nova Corps?' }, { code: 'S2E2', title: 'What If... Peter Quill Attacked Earth\'s Mightiest Heroes?' }, { code: 'S2E3', title: 'What If... Happy Hogan Saved Christmas?' }, { code: 'S2E4', title: 'What If... Iron Man Crashed Into the Grandmaster?' }, { code: 'S2E5', title: 'What If... Captain Carter Fought the Hydra Stomper?' }, { code: 'S2E6', title: 'What If... Kahhori Reshaped the World?' }, { code: 'S2E7', title: 'What If... Hela Found the Ten Rings?' }, { code: 'S2E8', title: 'What If... the Avengers Assembled in 1602?' }, { code: 'S2E9', title: 'What If... Strange Supreme Intervened?' }
            ]},
            { id: 45, title: 'Echo', poster: 'https://m.media-amazon.com/images/M/MV5BOGFiYzI1ZDctM2U1Zi00ZWI5LWFiMmQtNGU0NTU5MTg3OWM3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2024', type: 'series', verdict: 'skip', description: 'Maya Lopez reconnects with her roots while being pursued by Wilson Fisk\'s criminal empire.', episodes: [
              { code: 'S1E1', title: 'Chafa' }, { code: 'S1E2', title: 'Lowak' }, { code: 'S1E3', title: 'Tuklo' }, { code: 'S1E4', title: 'Taloa' }, { code: 'S1E5', title: 'Maya' }
            ]},
            { id: 46, title: 'X-Men \'97 — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BZDE0Zjk5OGYtZTk3OC00ZDZhLWE2NGQtNzc3NmJhNjljYzY5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2024', type: 'animated', verdict: 'optional', description: 'Revival of the beloved 90s animated series, following the X-Men after Professor X\'s departure.', episodes: [
              { code: 'S1E1', title: 'To Me, My X-Men' }, { code: 'S1E2', title: 'Mutant Liberation Begins' }, { code: 'S1E3', title: 'Fire Made Flesh' }, { code: 'S1E4', title: 'Motendo / Lifedeath – Part 1' }, { code: 'S1E5', title: 'Remember It' }, { code: 'S1E6', title: 'Lifedeath – Part 2' }, { code: 'S1E7', title: 'Bright Eyes' }, { code: 'S1E8', title: 'Tolerance Is Extinction – Part 1' }, { code: 'S1E9', title: 'Tolerance Is Extinction – Part 2' }, { code: 'S1E10', title: 'Tolerance Is Extinction – Part 3' }
            ]},
            { id: 47, title: 'Deadpool & Wolverine', poster: 'https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2024', type: 'film', verdict: 'must-watch', description: 'The Merc with a Mouth teams up with Wolverine in a multiverse adventure that bridges Fox\'s X-Men into the MCU.', episodes: null },
            { id: 48, title: 'Agatha All Along', poster: 'https://m.media-amazon.com/images/M/MV5BMDcyZTNjOTEtNzc5Yy00Y2UzLThkMWYtNTY4YmM4OWI5OTMzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2024', type: 'series', verdict: 'optional', description: 'Agatha Harkness breaks free from Wanda\'s spell and embarks on a quest down the Witches\' Road.', episodes: [
              { code: 'S1E1', title: 'Seekest Thou the Road' }, { code: 'S1E2', title: 'Circle Sewn with Fate' }, { code: 'S1E3', title: 'Through Many Miles' }, { code: 'S1E4', title: 'If I Can\'t Reach You' }, { code: 'S1E5', title: 'Darkest Hour / Wake Thy Power' }, { code: 'S1E6', title: 'Familiar by Thy Side' }, { code: 'S1E7', title: 'Death\'s Hand in Mine' }, { code: 'S1E8', title: 'Follow Me My Friend' }, { code: 'S1E9', title: 'Maiden Mother Crone' }
            ]},
            { id: 49, title: 'Your Friendly Neighborhood Spider-Man', poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/m58aoxOk8JLEybVV1hQDlcizn4J.jpg', year: '2025', type: 'animated', verdict: 'skip', description: 'Animated series exploring Peter Parker\'s early days within the MCU\'s multiverse.', episodes: [
              { code: 'S1E1', title: 'Amazing Fantasy' }, { code: 'S1E2', title: 'The Parker Luck' }, { code: 'S1E3', title: 'Secret Identity Crisis' }, { code: 'S1E4', title: 'Hitting the Big Time' }, { code: 'S1E5', title: 'The Unicorn Unleashed' }, { code: 'S1E6', title: 'Duel with the Devil' }, { code: 'S1E7', title: 'Scorpion Rising' }, { code: 'S1E8', title: 'Tangled Web' }, { code: 'S1E9', title: 'Hero or Menace' }, { code: 'S1E10', title: 'If This Be My Destiny...' }
            ]},
            { id: 50, title: 'Captain America: Brave New World', poster: 'https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2025', type: 'film', verdict: 'recommended', description: 'Sam Wilson fully steps into the role of Captain America, navigating global tensions.', episodes: null },
            { id: 51, title: 'Daredevil: Born Again — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BNDBkMWRhMzEtM2M0Ny00OGZhLThkZGMtMTY1NWUwZWNhODdiXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2025', type: 'series', verdict: 'recommended', description: 'Matt Murdock continues his fight for justice while clashing with Wilson Fisk\'s political rise.', episodes: [
              { code: 'S1E1', title: 'Heaven\'s Half Hour' }, { code: 'S1E2', title: 'Optics' }, { code: 'S1E3', title: 'The Hollow of His Hand' }, { code: 'S1E4', title: 'Sic Semper Systema' }, { code: 'S1E5', title: 'With Interest' }, { code: 'S1E6', title: 'Excessive Force' }, { code: 'S1E7', title: 'Art for Art\'s Sake' }, { code: 'S1E8', title: 'Isle of Joy' }, { code: 'S1E9', title: 'Straight to Hell' }
            ]},
            { id: 52, title: 'Ironheart', poster: 'https://m.media-amazon.com/images/M/MV5BN2EzMGZhOTktYjVhZi00NmIwLWIxZDEtNWUxZTQyNjhkYWQ4XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2025', type: 'series', verdict: 'optional', description: 'Genius inventor Riri Williams builds an advanced suit and discovers a magical threat.', episodes: [
              { code: 'S1E1', title: 'Take Me Home' }, { code: 'S1E2', title: 'Will the Real Natalie Please Stand Up?' }, { code: 'S1E3', title: 'We in Danger, Girl' }, { code: 'S1E4', title: 'Bad Magic' }, { code: 'S1E5', title: 'Karma\'s a Glitch' }, { code: 'S1E6', title: 'The Past Is the Past' }
            ]},
            { id: 53, title: 'Thunderbolts*', poster: 'https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2025', type: 'film', verdict: 'must-watch', description: 'A team of anti-heroes are assembled by the government — leading to a \"New Avengers.\"', episodes: null },
            { id: 54, title: 'Eyes of Wakanda', poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vHLqKJKRKLlN4MeJgftZWfOFSVm.jpg', year: '2025', type: 'animated', verdict: 'skip', description: 'Animated anthology exploring Wakanda\'s warriors who protected its secrets throughout the ages.', episodes: [
              { code: 'S1E1', title: 'Into the Lion\'s Den' }, { code: 'S1E2', title: 'Legends and Lies' }, { code: 'S1E3', title: 'Lost and Found' }, { code: 'S1E4', title: 'The Last Panther' }
            ]},
            { id: 55, title: 'Marvel Zombies', poster: 'https://m.media-amazon.com/images/M/MV5BYWFiOTcwNzItMTg5Mi00ZTU4LThkZWYtYWNmZWQ1ODE5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2025', type: 'animated', verdict: 'skip', description: 'Animated series set in the zombie-overrun universe first seen in What If...?', episodes: [
              { code: 'S1E1', title: 'Episode 1' }, { code: 'S1E2', title: 'Episode 2' }, { code: 'S1E3', title: 'Episode 3' }, { code: 'S1E4', title: 'Episode 4' }
            ]}
          ]
        },
        {
          id: 'phase-6', name: 'Phase Six', years: '2025–2027',
          entries: [
            { id: 56, title: 'The Fantastic Four: First Steps', poster: 'https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: 'Jul 2025', type: 'film', verdict: 'must-watch', description: 'Marvel\'s First Family is introduced as they face a cosmic threat — central to Doomsday.', episodes: null },
            { id: 57, title: 'Wonder Man', poster: 'https://m.media-amazon.com/images/M/MV5BMDk5YzQ3NjQtNzY3MC00NzM3LWE4NzYtZGRkNDQxYjdiZDkyXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2026', type: 'series', verdict: 'optional', description: 'Simon Williams, an actor-turned-hero with ionic powers, navigates Hollywood and heroism.', episodes: [
              { code: 'S1E1', title: 'Matinee' }, { code: 'S1E2', title: 'Self-Tape' }, { code: 'S1E3', title: 'Pacoima' }, { code: 'S1E4', title: 'Doorman' }, { code: 'S1E5', title: 'Found Footage' }, { code: 'S1E6', title: 'Callback' }, { code: 'S1E7', title: 'Kathy Friedman' }, { code: 'S1E8', title: 'Yucca Valley' }
            ]},
            { id: 58, title: 'Daredevil: Born Again — Season 2', poster: 'https://m.media-amazon.com/images/M/MV5BNDBkMWRhMzEtM2M0Ny00OGZhLThkZGMtMTY1NWUwZWNhODdiXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2026', type: 'series', verdict: 'recommended', description: 'Continuation of Matt Murdock\'s war on crime, with deeper ties to the MCU.', episodes: [
              { code: 'S2E1', title: 'The Northern Star' }, { code: 'S2E2', title: 'Shoot the Moon' }, { code: 'S2E3', title: 'The Scales & The Sword' }, { code: 'S2E4', title: 'Gloves Off' }, { code: 'S2E5', title: 'The Grand Design' }, { code: 'S2E6', title: 'Requiem' }, { code: 'S2E7', title: 'The Hateful Darkness' }, { code: 'S2E8', title: 'The Southern Cross' }
            ]},
            { id: 59, title: 'X-Men \'97 — Season 2', poster: 'https://m.media-amazon.com/images/M/MV5BZDE0Zjk5OGYtZTk3OC00ZDZhLWE2NGQtNzc3NmJhNjljYzY5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2026', type: 'animated', verdict: 'optional', description: 'The X-Men continue their fight for mutant coexistence in this animated revival.', episodes: [
              { code: 'S2E1', title: 'Days of Past Future' }, { code: 'S2E2', title: 'A Force to Be Reckoned With' }, { code: 'S2E3', title: 'Rise of Apocalypse – Part 1' }, { code: 'S2E4', title: 'Rise of Apocalypse – Part 2' }, { code: 'S2E5', title: 'Weapon X, Lies, and DVDs' }, { code: 'S2E6', title: 'Danger.Exe' }, { code: 'S2E7', title: 'Strange Land, Savage Heart' }, { code: 'S2E8', title: 'The Dead Man\'s Hand' }, { code: 'S2E9', title: 'Survival of the Fittest' }
            ]},
            { id: 60, title: 'Spider-Man: Brand New Day', poster: 'https://m.media-amazon.com/images/M/MV5BOWNjYWM3NWItOGE0ZS00MWRjLThiZWEtYjc4ZmNmMmU5ZTVmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: 'Jul 2026', type: 'film', verdict: 'must-watch', description: 'Peter Parker navigates life after reclaiming his anonymity, with direct setup for Doomsday.', episodes: null },
            { id: 61, title: 'Avengers: Doomsday', poster: 'https://m.media-amazon.com/images/M/MV5BMTdlMDgxNjAtNjkxOC00ZDYxLTg3MDEtZmIwZjIxOGMwYjVkXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: 'Dec 2026', type: 'film', verdict: 'must-watch', description: 'THE EVENT. The Avengers face Doctor Doom in a multiversal showdown that will change everything.', episodes: null },
            { id: 62, title: 'Avengers: Secret Wars', poster: 'https://m.media-amazon.com/images/M/MV5BYTQyZTQ5MWQtN2M4NC00YWQwLTg3ZTctM2JiZDE4NDBkZDJkXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: 'Dec 2027', type: 'film', verdict: 'must-watch', description: 'The climactic finale of the Multiverse Saga — promising to reshape the MCU forever.', episodes: null }
          ]
        }
      ]
    },
    {
      id: 'beyond', name: 'Beyond the MCU', years: '2000–2024', icon: '⚡', nonMcu: true,
      phases: [
        {
          id: 'fox-xmen', name: 'Fox X-Men Franchise', years: '2000–2020',
          entries: [
            { id: 101, title: 'X-Men', poster: 'https://m.media-amazon.com/images/M/MV5BZDE0Zjk5OGYtZTk3OC00ZDZhLWE2NGQtNzc3NmJhNjljYzY5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2000', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Introduces Wolverine, Magneto, Professor X, and the concept of mutants. Core characters referenced in Deadpool & Wolverine.', episodes: null },
            { id: 102, title: 'X2: X-Men United', poster: 'https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_FMjpg_UX600_.jpg',  year: '2003', type: 'film', verdict: 'optional', nonMcu: true, description: 'Deepens the X-Men team dynamics and Wolverine\'s Weapon X backstory.', episodes: null },
            { id: 103, title: 'X-Men: The Last Stand', poster: 'https://m.media-amazon.com/images/M/MV5BMThmOWE3OWEtODJmNC00ZDEzLTk4MWUtNzEzM2RiNmJiZmU3XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2006', type: 'film', verdict: 'optional', nonMcu: true, description: 'Introduces the Phoenix Force. Kelsey Grammer\'s Beast appeared in The Marvels post-credits.', episodes: null },
            { id: 104, title: 'X-Men Origins: Wolverine', poster: 'https://m.media-amazon.com/images/M/MV5BZjQwOGEzNjUtNDgwYS00NzUzLWJhZjAtNmFlNzY2YTQyOTllXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2009', type: 'film', verdict: 'optional', nonMcu: true, description: 'First appearance of Ryan Reynolds as Wade Wilson — directly parodied in Deadpool & Wolverine.', episodes: null },
            { id: 105, title: 'X-Men: First Class', poster: 'https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_FMjpg_UX600_.jpg',  year: '2011', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Introduces young Charles Xavier and Magneto. Sets up the timeline leading to Days of Future Past.', episodes: null },
            { id: 106, title: 'The Wolverine', poster: 'https://m.media-amazon.com/images/M/MV5BNGU0MzRhMWEtYTBkNS00NzliLWJkMmUtMDFlMjkyOTkyYmZlXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2013', type: 'film', verdict: 'optional', nonMcu: true, description: 'Wolverine\'s solo adventure in Japan, bridging his arc before Days of Future Past.', episodes: null },
            { id: 107, title: 'X-Men: Days of Future Past', poster: 'https://m.media-amazon.com/images/M/MV5BNzNiYWE4NjMtMTU4OS00NmM4LWE4ZjAtYmE5OTA5NjkzODExXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2014', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Major timeline-altering event merging both X-Men casts. Key multiverse/timeline rewriting concepts.', episodes: null },
            { id: 108, title: 'Deadpool', poster: 'https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2016', type: 'film', verdict: 'essential', nonMcu: true, description: 'Wade Wilson\'s origin in the Fox universe. Direct prequel to the MCU\'s Deadpool & Wolverine.', episodes: null },
            { id: 109, title: 'X-Men: Apocalypse', poster: 'https://m.media-amazon.com/images/M/MV5BNjVhNWY3NjItNmZjOS00NTU3LWFiZTctNzdjNGM5Y2Y0MDUwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2016', type: 'film', verdict: 'optional', nonMcu: true, description: 'Features En Sabah Nur and introduces younger versions of Cyclops, Jean Grey, and Storm.', episodes: null },
            { id: 110, title: 'Logan', poster: 'https://m.media-amazon.com/images/M/MV5BM2JjODdkMGMtNmY2YS00OGM2LThiY2YtZGYyNzE4Nzc2ODA0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2017', type: 'film', verdict: 'essential', nonMcu: true, description: 'Wolverine\'s final story — the \"Anchor Being\" event directly impacting Deadpool & Wolverine.', episodes: null },
            { id: 111, title: 'Deadpool 2', poster: 'https://m.media-amazon.com/images/M/MV5BNGY3N2ZhYmMtYTlmYi00ZWIzLWJiZWMtMjgxMjljYTk3MDAwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'film', verdict: 'essential', nonMcu: true, description: 'Introduces Cable, X-Force, and time-travel that causes the TVA to detain Wade.', episodes: null },
            { id: 112, title: 'X-Men: Dark Phoenix', poster: 'https://m.media-amazon.com/images/M/MV5BZjcwMDIyNjctMDVmNS00MzkyLTgxMDMtNTFmNTk0NDkyNzdjXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2019', type: 'film', verdict: 'optional', nonMcu: true, description: 'The Fox X-Men\'s final mainline film. The \"death\" of the Fox universe.', episodes: null },
            { id: 113, title: 'The New Mutants', poster: 'https://m.media-amazon.com/images/M/MV5BZGVlMjBkYmMtZDhmYS00N2QyLWI2YTgtMDU2N2UwOWYzM2MxXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2020', type: 'film', verdict: 'skip', nonMcu: true, description: 'Final Fox X-Men film featuring young mutants. Minor connections to the wider franchise.', episodes: null }
          ]
        },
        {
          id: 'sony-spidey', name: 'Previous Spider-Man Films', years: '2002–2014',
          entries: [
            { id: 201, title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2002', type: 'film', verdict: 'essential', nonMcu: true, description: 'Tobey Maguire\'s Spider-Man origin. Willem Dafoe\'s Green Goblin returned in No Way Home.', episodes: null },
            { id: 202, title: 'Spider-Man 2', poster: 'https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2004', type: 'film', verdict: 'essential', nonMcu: true, description: 'Introduces Alfred Molina\'s Doc Ock, who crossed into the MCU during No Way Home.', episodes: null },
            { id: 203, title: 'Spider-Man 3', poster: 'https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2007', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Features Sandman (returned in No Way Home) and early live-action symbiote lore.', episodes: null },
            { id: 204, title: 'The Amazing Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX600_.jpg',  year: '2012', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Andrew Garfield\'s Peter Parker and the Lizard, both pulled into the MCU in No Way Home.', episodes: null },
            { id: 205, title: 'The Amazing Spider-Man 2', poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_FMjpg_UX600_.jpg',  year: '2014', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Introduces Electro (returned in No Way Home). Gwen Stacy\'s death gives Garfield\'s Spider-Man emotional depth.', episodes: null }
          ]
        },
        {
          id: 'ff-films', name: 'Previous Fantastic Four Films', years: '2005–2015',
          entries: [
            { id: 301, title: 'Fantastic Four', poster: 'https://m.media-amazon.com/images/M/MV5BNjY2YmZmMzUtZWY5Mi00MzI3LTljOTgtYTMwMWY1ODI5ZWY5XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2005', type: 'film', verdict: 'essential', nonMcu: true, description: 'First F4 team. Chris Evans as Johnny Storm reprised this role in Deadpool & Wolverine. Introduces Doctor Doom.', episodes: null },
            { id: 302, title: 'Fantastic Four: Rise of the Silver Surfer', poster: 'https://m.media-amazon.com/images/M/MV5BNmZmMTU0OGQtOWRmNS00ZjA1LWJkM2EtYmUwNGEzMjIyZDM1XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2007', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Doctor Doom hijacks cosmic power from the Silver Surfer — mirroring Doomsday comic storylines.', episodes: null },
            { id: 303, title: 'Fantastic Four (Fant4stic)', poster: 'https://m.media-amazon.com/images/M/MV5BMTk0OTMyMDA0OF5BMl5BanBnXkFtZTgwMzY5NTkzNTE@._V1_FMjpg_UX600_.jpg', year: '2015', type: 'film', verdict: 'optional', nonMcu: true, description: 'Dark reboot with alternate Doom origin. Shows different multiverse interpretation of the team.', episodes: null }
          ]
        },
        {
          id: 'netflix-marvel', name: 'Netflix Marvel (Defenders Saga)', years: '2015–2019',
          entries: [
            { id: 401, title: 'Daredevil — Season 1', poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i9X1kpqxfLYbMoZGdh9HNPTtqq.jpg', year: '2015', type: 'series', verdict: 'essential', nonMcu: true, description: 'Establishes Charlie Cox\'s Matt Murdock and Vincent D\'Onofrio\'s Kingpin. Direct prequel to Born Again.', episodes: [
              { code: 'S1E1', title: 'Into the Ring' }, { code: 'S1E2', title: 'Cut Man' }, { code: 'S1E3', title: 'Rabbit in a Snowstorm' }, { code: 'S1E4', title: 'In the Blood' }, { code: 'S1E5', title: 'World on Fire' }, { code: 'S1E6', title: 'Condemned' }, { code: 'S1E7', title: 'Stick' }, { code: 'S1E8', title: 'Shadows in the Glass' }, { code: 'S1E9', title: 'Speak of the Devil' }, { code: 'S1E10', title: 'Nelson v. Murdock' }, { code: 'S1E11', title: 'The Path of the Righteous' }, { code: 'S1E12', title: 'The Ones We Leave Behind' }, { code: 'S1E13', title: 'Daredevil' }
            ]},
            { id: 402, title: 'Jessica Jones — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BMDhhY2VlMWItMjM3Yi00MDc1LTlmYjctNjMzNDIxZjc5NGEwXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2015', type: 'series', verdict: 'recommended', nonMcu: true, description: 'Introduces Krysten Ritter\'s Jessica Jones and David Tennant\'s Kilgrave.', episodes: null },
            { id: 403, title: 'Daredevil — Season 2', poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i9X1kpqxfLYbMoZGdh9HNPTtqq.jpg', year: '2016', type: 'series', verdict: 'recommended', nonMcu: true, description: 'Introduces Jon Bernthal\'s Punisher and Elodie Yung\'s Elektra. Key Daredevil lore.', episodes: null },
            { id: 404, title: 'Luke Cage — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_FMjpg_UX600_.jpg', year: '2016', type: 'series', verdict: 'optional', nonMcu: true, description: 'Introduces Luke Cage and expands Harlem\'s criminal underworld.', episodes: null },
            { id: 405, title: 'Iron Fist — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_FMjpg_UX600_.jpg', year: '2017', type: 'series', verdict: 'skip', nonMcu: true, description: 'Introduces Danny Rand/Iron Fist and the mystical order of The Hand.', episodes: null },
            { id: 406, title: 'The Defenders', poster: 'https://m.media-amazon.com/images/M/MV5BMTUwMjA5NTg4MF5BMl5BanBnXkFtZTgwODUyODkwMzI@._V1_FMjpg_UX600_.jpg',  year: '2017', type: 'series', verdict: 'optional', nonMcu: true, description: 'Crossover uniting Daredevil, Jessica Jones, Luke Cage, and Iron Fist.', episodes: null },
            { id: 407, title: 'The Punisher — Season 1', poster: 'https://m.media-amazon.com/images/M/MV5BZTI2NDllMjgtOWEyYi00Y2YxLThhYjQtNTQ0NTgwNDE1YmYzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2017', type: 'series', verdict: 'recommended', nonMcu: true, description: 'Frank Castle\'s solo series. Jon Bernthal\'s Punisher appears in Born Again.', episodes: null },
            { id: 408, title: 'Daredevil — Season 3', poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9i9X1kpqxfLYbMoZGdh9HNPTtqq.jpg', year: '2018', type: 'series', verdict: 'essential', nonMcu: true, description: 'The best season. Kingpin\'s return to power. Directly sets up Born Again.', episodes: [
              { code: 'S3E1', title: 'Resurrection' }, { code: 'S3E2', title: 'Please' }, { code: 'S3E3', title: 'No Good Deed' }, { code: 'S3E4', title: 'Blindsided' }, { code: 'S3E5', title: 'The Perfect Game' }, { code: 'S3E6', title: 'The Devil You Know' }, { code: 'S3E7', title: 'Aftermath' }, { code: 'S3E8', title: 'Upstairs/Downstairs' }, { code: 'S3E9', title: 'Revelations' }, { code: 'S3E10', title: 'Karen' }, { code: 'S3E11', title: 'Reunion' }, { code: 'S3E12', title: 'One Last Shot' }, { code: 'S3E13', title: 'A New Napkin' }
            ]},
            { id: 409, title: 'The Punisher — Season 2', poster: 'https://m.media-amazon.com/images/M/MV5BZTI2NDllMjgtOWEyYi00Y2YxLThhYjQtNTQ0NTgwNDE1YmYzXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg', year: '2019', type: 'series', verdict: 'optional', nonMcu: true, description: 'Continues Frank Castle\'s war on corruption. Sets up his Born Again return.', episodes: null }
          ]
        },
        {
          id: 'sony-ssu', name: 'Sony\'s Spider-Man Universe', years: '2018–2024',
          entries: [
            { id: 501, title: 'Venom', poster: 'https://m.media-amazon.com/images/M/MV5BNTYwMDg5MDItNjhmZi00NmVmLThjNWItMmNkMjVkMWRhNzI2XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'film', verdict: 'optional', nonMcu: true, description: 'Tom Hardy\'s Eddie Brock/Venom. Post-credits links to the MCU.', episodes: null },
            { id: 502, title: 'Venom: Let There Be Carnage', poster: 'https://m.media-amazon.com/images/M/MV5BZGIxMTU1MjItM2FmMi00YmFiLTgwNDMtMTczYmVjYTBhNGZhXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2021', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Post-credits scene teleports Eddie Brock directly into the MCU during No Way Home.', episodes: null },
            { id: 503, title: 'Spider-Man: Into the Spider-Verse', poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX600_.jpg',  year: '2018', type: 'animated', verdict: 'recommended', nonMcu: true, description: 'The definitive multiverse Spider-Man story. Conceptually essential for understanding the multiverse.', episodes: null },
            { id: 504, title: 'Spider-Man: Across the Spider-Verse', poster: 'https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2023', type: 'animated', verdict: 'optional', nonMcu: true, description: 'Continues the multiverse Spider-Man saga. References Earth-616 and Doctor Strange.', episodes: null },
            { id: 505, title: 'Venom: The Last Dance', poster: 'https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2024', type: 'film', verdict: 'optional', nonMcu: true, description: 'Concludes Eddie Brock\'s journey. A piece of symbiote was left in the MCU.', episodes: null }
          ]
        },
        {
          id: 'legacy', name: 'Legacy Marvel', years: '1998–2011',
          entries: [
            { id: 601, title: 'Blade', poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX600_.jpg',  year: '1998', type: 'film', verdict: 'recommended', nonMcu: true, description: 'Wesley Snipes\' Blade returned in Deadpool & Wolverine as part of the Void Resistance team.', episodes: null },
            { id: 602, title: 'Blade II', poster: 'https://m.media-amazon.com/images/M/MV5BMGE5ZmY2NzEtZTEyMi00MWIyLThmOWYtYzJkOTQ0Y2U3ZWU1XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2002', type: 'film', verdict: 'optional', nonMcu: true, description: 'Sequel directed by Guillermo del Toro. Deepens the Blade mythology.', episodes: null },
            { id: 603, title: 'Blade: Trinity', poster: 'https://m.media-amazon.com/images/M/MV5BMjE0Nzg2MzI3MF5BMl5BanBnXkFtZTYwMjExODQ3._V1_FMjpg_UX600_.jpg',  year: '2004', type: 'film', verdict: 'optional', nonMcu: true, description: 'Final Blade film. Also features Ryan Reynolds as Hannibal King before becoming Deadpool.', episodes: null },
            { id: 604, title: 'Daredevil', poster: 'https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_FMjpg_UX600_.jpg',  year: '2003', type: 'film', verdict: 'optional', nonMcu: true, description: 'Ben Affleck as Matt Murdock. Introduces the Kingpin and Elektra in a different continuity.', episodes: null },
            { id: 605, title: 'Elektra', poster: 'https://m.media-amazon.com/images/M/MV5BMTI3MTUwNzM5MV5BMl5BanBnXkFtZTcwNzczMDIzMw@@._V1_FMjpg_UX600_.jpg',  year: '2005', type: 'film', verdict: 'optional', nonMcu: true, description: 'Jennifer Garner reprised this legacy Elektra from the Void in Deadpool & Wolverine.', episodes: null },
            { id: 606, title: 'Ghost Rider', poster: 'https://m.media-amazon.com/images/M/MV5BMzIyNDE5ODI1OV5BMl5BanBnXkFtZTcwNTIyNDE0MQ@@._V1_FMjpg_UX600_.jpg',  year: '2007', type: 'film', verdict: 'skip', nonMcu: true, description: 'Nicolas Cage as Johnny Blaze/Ghost Rider. Introduced supernatural hellfire to Marvel films.', episodes: null },
            { id: 607, title: 'Ghost Rider: Spirit of Vengeance', poster: 'https://m.media-amazon.com/images/M/MV5BN2FmZGVlNTgtYTllNC00YmUzLTk5YmUtNWNhMzk3ZmE2NmQ0XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2011', type: 'film', verdict: 'skip', nonMcu: true, description: 'Ghost Rider sequel with minor connections to the wider Marvel multiverse.', episodes: null }
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
    { priority: 9, title: 'Thunderbolts*', type: 'Film', reason: 'The \"New Avengers\" team forms' },
    { priority: 10, title: 'The Fantastic Four: First Steps', type: 'Film', reason: 'Introduces the team central to Doomsday' },
    { priority: 11, title: 'Spider-Man: Brand New Day', type: 'Film', reason: 'Direct Doomsday setup' }
  ],
  tips: [
    'Captain America: Civil War — The Avengers\' fracture point',
    'Shang-Chi — Introduces a key Doomsday hero',
    'Black Panther: Wakanda Forever — Sets up Wakanda\'s new leadership',
    'WandaVision → Multiverse of Madness — The Scarlet Witch arc',
    'Captain America: Brave New World — Sam\'s full Captain America story',
    'Daredevil: Born Again — Wilson Fisk\'s political rise',
    'Deadpool 1 & 2 + Logan — Essential context for Deadpool & Wolverine',
    'Spider-Man 1 & 2 (Raimi) — Green Goblin and Doc Ock return in No Way Home',
    'Fantastic Four (2005) — Chris Evans\' Johnny Storm appeared in Deadpool & Wolverine',
    'Netflix Daredevil S1 & S3 — Direct prequel to Born Again'
  ]
};
