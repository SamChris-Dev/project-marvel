/* ============================================
   MCU COMPLETE GUIDE — Interactive App v2
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
            { id: 40, title: 'Ant-Man and the Wasp: Quantumania', poster: 'https://m.media-amazon.com/images/M/MV5BMThkYWY5ZjQtYjJlMS00MDFmLWFkYzEtODEzZjg5YWFmMGY4XkEyXkFqcGc@._V1_FMjpg_UX600_.jpg',  year: '2023', type: 'film', verdict: 'optional', description: 'The heroes plunge into the Quantum Realm and encounter Kang the Conqueror.', episodes: null },
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
    this.initCompletedPhases();
    this.bindEvents();
    this.render();
    this.setupScrollListener();
  }

  setupScrollListener() {
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
        const randomPoster = posters.length > 0 ? posters[Math.floor(Math.random() * posters.length)] : '';
        const bgHtml = randomPoster ? `<div class="phase-card-bg" style="background-image: url('${randomPoster}')"></div>` : '';
        
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
    const randomPoster = posters.length > 0 ? posters[Math.floor(Math.random() * posters.length)] : '';
    
    const bgHtml = randomPoster ? `
      <div class="phase-page-bg-container">
        <div class="phase-page-bg" style="background-image: url('${randomPoster}')"></div>
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
          ${posterHtml}
          <div class="status-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="poster-overlay">
            <button class="action-btn" onclick="event.stopPropagation(); app.tracker.toggle('entry-${entry.id}'); app.render();" title="Mark Watched">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>
            <button class="action-btn" onclick="event.stopPropagation(); app.openModal(${entry.id})" title="Quick Info">
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
    let entry = null;
    MCU_DATA.sagas.forEach(saga => {
      saga.phases.forEach(phase => {
        phase.entries.forEach(e => { if (e.id === entryId) entry = e; });
      });
    });
    return entry;
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
    let entry = null;
    MCU_DATA.sagas.forEach(s => s.phases.forEach(p => p.entries.forEach(e => { if(e.id === entryId) entry = e; })));
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
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new MCUApp();
});
