const fs = require('fs');

const titles = [
  "Iron Man",
  "The Incredible Hulk",
  "Iron Man 2",
  "Thor",
  "Captain America: The First Avenger",
  "Marvel's The Avengers",
  "Iron Man 3",
  "Thor: The Dark World",
  "Captain America: The Winter Soldier",
  "Guardians of the Galaxy",
  "Avengers: Age of Ultron",
  "Ant-Man",
  "Captain America: Civil War",
  "Doctor Strange",
  "Guardians of the Galaxy Vol. 2",
  "Spider-Man: Homecoming",
  "Thor: Ragnarok",
  "Black Panther",
  "Avengers: Infinity War",
  "Ant-Man and the Wasp",
  "Captain Marvel",
  "Avengers: Endgame",
  "Spider-Man: Far From Home",
  "WandaVision",
  "The Falcon and the Winter Soldier",
  "Black Widow",
  "Loki",
  "What If...?",
  "Hawkeye",
  "Shang-Chi and the Legend of the Ten Rings",
  "Eternals",
  "Spider-Man: No Way Home",
  "Moon Knight",
  "Doctor Strange in the Multiverse of Madness",
  "Ms. Marvel",
  "Thor: Love and Thunder",
  "She-Hulk: Attorney at Law",
  "I Am Groot",
  "Black Panther: Wakanda Forever",
  "Ant-Man and the Wasp: Quantumania",
  "Secret Invasion",
  "Guardians of the Galaxy Vol. 3",
  "Echo",
  "X-Men '97",
  "Deadpool & Wolverine",
  "Agatha All Along",
  "Captain America: Brave New World",
  "Daredevil: Born Again",
  "Ironheart",
  "Thunderbolts",
  "The Fantastic Four: First Steps",
  "Wonder Man",
  "Spider-Man: Brand New Day",
  "Avengers: Doomsday",
  "Avengers: Secret Wars",
  "X-Men",
  "X2: X-Men United",
  "X-Men: The Last Stand",
  "X-Men Origins: Wolverine",
  "X-Men: First Class",
  "The Wolverine",
  "X-Men: Days of Future Past",
  "Deadpool",
  "X-Men: Apocalypse",
  "Logan",
  "Deadpool 2",
  "X-Men: Dark Phoenix",
  "The New Mutants",
  "Spider-Man",
  "Spider-Man 2",
  "Spider-Man 3",
  "The Amazing Spider-Man",
  "The Amazing Spider-Man 2",
  "Fantastic Four",
  "Fantastic Four: Rise of the Silver Surfer",
  "Fantastic Four (Fant4stic)",
  "Daredevil",
  "Jessica Jones",
  "Luke Cage",
  "Iron Fist",
  "The Defenders",
  "The Punisher",
  "Venom",
  "Venom: Let There Be Carnage",
  "Spider-Man: Into the Spider-Verse",
  "Spider-Man: Across the Spider-Verse",
  "Venom: The Last Dance",
  "Blade",
  "Blade II",
  "Blade: Trinity",
  "Elektra",
  "Ghost Rider",
  "Ghost Rider: Spirit of Vengeance"
];

async function fetchImdbPoster(title) {
  try {
    const query = title.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    const firstChar = query.charAt(0);
    const url = `https://v3.sg.media-imdb.com/suggests/${firstChar}/${query}.json`;
    
    const res = await fetch(url);
    const text = await res.text();
    
    const start = text.indexOf('(') + 1;
    const end = text.lastIndexOf(')');
    const jsonStr = text.slice(start, end);
    const data = JSON.parse(jsonStr);
    
    if (data.d && data.d.length > 0) {
      let bestItem = null;
      
      // Try to find exact title match and is movie/tv
      for (const item of data.d) {
        if (item.i && item.i[0] && item.l) {
          const l = item.l.toLowerCase();
          const t = title.toLowerCase();
          if ((l === t || l === "marvel's " + t || "marvel's " + l === t) && (item.q === 'feature' || item.q === 'TV series' || item.q === 'TV mini-series')) {
            bestItem = item;
            break;
          }
        }
      }
      
      // Fallback: just find a feature or TV series
      if (!bestItem) {
        for (const item of data.d) {
          if (item.i && item.i[0] && (item.q === 'feature' || item.q === 'TV series' || item.q === 'TV mini-series')) {
            bestItem = item;
            break;
          }
        }
      }
      
      // Fallback 2: first item with an image
      if (!bestItem) {
        bestItem = data.d.find(item => item.i && item.i[0] && item.i[0].indexOf('nopicture') === -1);
      }
      
      if (bestItem) {
        let imgUrl = bestItem.i[0];
        imgUrl = imgUrl.replace(/_V1_.*\\.jpg$/, '_V1_FMjpg_UX600_.jpg');
        
        // Prevent default IMDB generic placeholders
        if (imgUrl.includes('MV5BMjJkZjE4NjMtNWVjMC00YzIzLWIwYmUtNTBmY2Q0OTQxYTVjXkEyXkFqcGc')) return null;
        
        return imgUrl;
      }
    }
    return null;
  } catch(e) {
    return null;
  }
}

async function main() {
  const result = {};
  for (const title of titles) {
    const img = await fetchImdbPoster(title);
    if (img) {
      result[title] = img;
      console.log(`[OK] ${title}`);
    } else {
      console.log(`[FAILED] ${title}`);
    }
    await new Promise(r => setTimeout(r, 200)); // Be nice to IMDB
  }
  
  fs.writeFileSync('posters.json', JSON.stringify(result, null, 2));
  console.log("Done! Saved to posters.json");
}

main();
