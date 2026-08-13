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
  "Thunderbolts*",
  "The Fantastic Four: First Steps",
  "Wonder Man",
  "Spider-Man: Brand New Day",
  "Avengers: Doomsday",
  "Avengers: Secret Wars"
];

async function fetchWikiImage(title) {
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(title + ' film')}&utf8=&format=json`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'MarvelTrackerApp/1.0 (contact@example.com)'
      }
    });
    const searchData = await searchRes.json();
    if (!searchData.query || searchData.query.search.length === 0) return null;
    
    const pageTitle = searchData.query.search[0].title;
    
    const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=500`;
    const imgRes = await fetch(imgUrl, {
      headers: {
        'User-Agent': 'MarvelTrackerApp/1.0 (contact@example.com)'
      }
    });
    const imgData = await imgRes.json();
    
    const pages = imgData.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId].thumbnail?.source || null;
  } catch(e) {
    console.error(e);
    return null;
  }
}

async function main() {
  const result = {};
  for (const title of titles) {
    console.log("Fetching:", title);
    const img = await fetchWikiImage(title);
    if (img) {
      result[title] = img;
      console.log(" -> Found:", img);
    } else {
      console.log(" -> NOT FOUND");
    }
    // Sleep to avoid rate limiting
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync('posters.json', JSON.stringify(result, null, 2));
  console.log("Done! Saved to posters.json");
}

main();
