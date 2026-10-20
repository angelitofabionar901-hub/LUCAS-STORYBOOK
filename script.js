const books = [
  {
    "title": "The Last Shadow",
    "author": "Marcus Vale",
    "genre": "Mystery",
    "synopsis": "A young investigator returns to a forgotten town where shadows conceal a dangerous secret.",
    "chapter": "Chapter 1: The Forgotten Town",
    "image": "images/story01.jpg",
    "content": [
      "A rain-soaked street leads Adrian toward the abandoned mansion where his brother disappeared three years ago.",
      "Beneath the moon, a shadow moves against the wind. The town remembers what everyone else has tried to forget."
    ]
  },
  {
    "title": "Iron District",
    "author": "Jaxon Reed",
    "genre": "Action",
    "synopsis": "A street fighter takes on a powerful criminal empire to protect his neighborhood.",
    "chapter": "Chapter 1: No Way Back",
    "image": "images/story02.jpg",
    "content": [
      "Kai had one night to rescue his friend from the gang that ruled the Iron District.",
      "He stepped into the factory arena, knowing that protecting his neighborhood would cost him more than a few bruises."
    ]
  },
  {
    "title": "Kingdom of Ash",
    "author": "Darius Stone",
    "genre": "Fantasy",
    "synopsis": "An exiled warrior discovers an ancient power buried beneath a ruined kingdom.",
    "chapter": "Chapter 1: The Fallen Crown",
    "image": "images/story03.jpg",
    "content": [
      "Kael returned to the burned palace carrying his father’s sword and a promise he could not break.",
      "Beneath the throne room, a crown glowed with blue fire. The old legends said it could restore a fallen kingdom."
    ]
  },
  {
    "title": "Midnight Caller",
    "author": "Ethan Cross",
    "genre": "Horror",
    "synopsis": "A mysterious late-night call pulls a lonely person toward a secret that should have stayed buried.",
    "chapter": "Chapter 1: Unknown Number",
    "image": "images/story04.jpg",
    "content": [
      "At exactly midnight, Mara’s phone rang from a number that had been disconnected for ten years.",
      "A whisper said her name, then gave her an address. By morning, she knew the caller was connected to the night her brother vanished."
    ]
  },
  {
    "title": "The Forgotten Library",
    "author": "Sienna Brooks",
    "genre": "Mystery",
    "synopsis": "A girl discovers a library where every book holds a secret and a forgotten truth.",
    "chapter": "Chapter 1: The Hidden Aisle",
    "image": "images/story05.jpg",
    "content": [
      "Behind a locked door in the old library, Elara found shelves of books with no titles.",
      "When she opened one, the pages described a memory she had never told anyone. Somewhere in the stacks, a bell began to ring."
    ]
  },
  {
    "title": "The Whispering Forest",
    "author": "Lila Hart",
    "genre": "Fantasy",
    "synopsis": "A girl follows a mysterious voice in the forest and finds a hidden world.",
    "chapter": "Chapter 1: A Voice Between Trees",
    "image": "images/story06.jpg",
    "content": [
      "Every evening, Mira heard someone calling from the woods beyond her village.",
      "One morning she followed the sound and found a deer waiting beside a path covered in glowing flowers. The forest had been waiting for her."
    ]
  },
  {
    "title": "The Last in the Rain",
    "author": "Caleb Monroe",
    "genre": "Romance",
    "synopsis": "A stranger’s arrival during a storm changes everything.",
    "chapter": "Chapter 1: Under the Red Umbrella",
    "image": "images/story07.jpg",
    "content": [
      "Noah had almost reached the station when the rain turned the street into a river of light.",
      "A stranger shared her red umbrella with him. They missed the last train, but neither hurried to find another way home."
    ]
  },
  {
    "title": "Lost in the Rain",
    "author": "Nadia Foster",
    "genre": "Drama",
    "synopsis": "A girl wakes in a dreamlike world where the skies never stop crying.",
    "chapter": "Chapter 1: Streets of Rain",
    "image": "images/story08.jpg",
    "content": [
      "When Lena woke, every street was unfamiliar and rain fell upward into a silver sky.",
      "She followed a trail of paper stars through the empty city, hoping each one would bring her closer to home."
    ]
  },
  {
    "title": "The Silent Town",
    "author": "Nora Ellis",
    "genre": "Mystery",
    "synopsis": "A town with no memories hides a past that refuses to stay buried.",
    "chapter": "Chapter 1: No One Remembers",
    "image": "images/story09.jpg",
    "content": [
      "Every resident of Bellweather had forgotten the same night, including the mayor.",
      "When a clock struck thirteen, old photographs changed and a voice came through the church bell. Only newcomer June remembered what she saw."
    ]
  },
  {
    "title": "The Ocean’s Secret",
    "author": "Jasper Cole",
    "genre": "Fantasy",
    "synopsis": "A girl befriends a sea creature that knows more than it should.",
    "chapter": "Chapter 1: Beneath the Blue",
    "image": "images/story10.jpg",
    "content": [
      "Diving beyond the reef, Aria met a whale whose song sounded almost like words.",
      "It led her to a sunken doorway covered in symbols. Beyond it lay the answer to why the ocean had begun glowing at night."
    ]
  },
  {
    "title": "The Lost Necklace",
    "author": "Aria Bennett",
    "genre": "Drama",
    "synopsis": "A stolen necklace leads to a family secret and a long-lost heirloom.",
    "chapter": "Chapter 1: The Blue Gem",
    "image": "images/story11.jpg",
    "content": [
      "The sapphire necklace disappeared the night of the family celebration.",
      "While searching the old house, Nina found a hidden letter tucked beneath the velvet box. The jewel was valuable, but the truth inside the letter mattered more."
    ]
  },
  {
    "title": "The Enchanted Garden",
    "author": "Maya Collins",
    "genre": "Fantasy",
    "synopsis": "A girl finds a secret garden that only appears to those who believe in magic.",
    "chapter": "Chapter 1: The Flower Gate",
    "image": "images/story12.jpg",
    "content": [
      "At the end of a forgotten lane, a gate appeared only when the moon was full.",
      "Inside, flowers glowed like lanterns and every path led to a memory. The garden offered to heal one regret, but asked for a secret in return."
    ]
  },
  {
    "title": "The Time Traveler’s Notebook",
    "author": "Elliot Gray",
    "genre": "Sci-Fi",
    "synopsis": "A forgotten notebook opens the door to different times and worlds.",
    "chapter": "Chapter 1: The First Page",
    "image": "images/story13.jpg",
    "content": [
      "Leo found the notebook inside his grandfather’s locked desk. Its first page showed tomorrow’s date and a drawing of the town clock.",
      "When he wrote a time in the margin, the room trembled and the clock outside began to run backward."
    ]
  },
  {
    "title": "The Dragon’s Quest",
    "author": "Kael Freeman",
    "genre": "Fantasy",
    "synopsis": "A young hero inherits a dragon and a destiny he never expected.",
    "chapter": "Chapter 1: Wings at Dawn",
    "image": "images/story14.jpg",
    "content": [
      "On his sixteenth birthday, Rowan discovered a dragon egg beneath the ruins of an ancient watchtower.",
      "The hatchling chose him as its rider. Together they set out to find the lost star-flame before it fell into the wrong hands."
    ]
  },
  {
    "title": "The Little Inventor",
    "author": "Zoe Sinclair",
    "genre": "Adventure",
    "synopsis": "A boy builds a machine that could change the future.",
    "chapter": "Chapter 1: The Clockwork Heart",
    "image": "images/story15.jpg",
    "content": [
      "Pip’s workshop was full of broken toys, copper wires, and ideas nobody believed in.",
      "One rainy afternoon, his newest machine began to glow. It could turn thoughts into inventions—but each use made the future harder to predict."
    ]
  },
  {
    "title": "The Festival Lanterns",
    "author": "Elise Park",
    "genre": "Fantasy",
    "synopsis": "A girl’s wish sets off a chain of events that connects strangers across worlds.",
    "chapter": "Chapter 1: A Wish in the Sky",
    "image": "images/story16.jpg",
    "content": [
      "At the lantern festival, Hana wrote one wish and released it into the violet evening.",
      "Her lantern drifted farther than the others, crossing a hidden boundary between worlds and bringing a mysterious reply back to her doorstep."
    ]
  },
  {
    "title": "The Umbrella Exchange",
    "author": "Harper Lane",
    "genre": "Romance",
    "synopsis": "Two strangers, one umbrella, and a chance encounter that changes everything.",
    "chapter": "Chapter 1: A Small Mix-Up",
    "image": "images/story17.jpg",
    "content": [
      "At a crowded café, June accidentally took the wrong umbrella and found a handwritten note in its pocket.",
      "The note led her to its owner, a quiet artist who had been trying to return a sketchbook to its rightful owner for weeks."
    ]
  },
  {
    "title": "The Last Seed",
    "author": "Rowan Blake",
    "genre": "Hope",
    "synopsis": "A small seed holds the key to a brighter tomorrow.",
    "chapter": "Chapter 1: A Green Beginning",
    "image": "images/story18.jpg",
    "content": [
      "After years of drought, the village had only one seed left in its collection.",
      "Young Eli planted it in the cracked earth and cared for it every day. When the first green shoot appeared, neighbors who had given up began helping again."
    ]
  },
  {
    "title": "The Clockmaker’s Daughter",
    "author": "Violet Grant",
    "genre": "Fantasy",
    "synopsis": "A girl uncovers her father’s secret and a clock that can stop time.",
    "chapter": "Chapter 1: The Thirteenth Bell",
    "image": "images/story19.jpg",
    "content": [
      "Every clock in her father’s shop stopped at the same minute each night.",
      "When Ada opened the tallest clock, she found a hidden room where time stood still and a message explaining why her father had disappeared."
    ]
  },
  {
    "title": "The Hidden Island",
    "author": "Caspian Brooks",
    "genre": "Adventure",
    "synopsis": "A map, a mystery island, and a secret that should have stayed hidden.",
    "chapter": "Chapter 1: Beyond the Reef",
    "image": "images/story20.jpg",
    "content": [
      "A faded map washed ashore after the storm, marked with an island missing from every chart.",
      "Kai and his sister sailed at dawn. On the island, the trees grew in a circle around a stone door that opened only when the tide turned."
    ]
  },
  {
    "title": "The Broken Mirror",
    "author": "Seraphine Cole",
    "genre": "Fantasy",
    "synopsis": "A girl steps into a reflection and finds a version of herself she never knew.",
    "chapter": "Chapter 1: The Other Side",
    "image": "images/story21.jpg",
    "content": [
      "When the antique mirror cracked, Mira saw another girl standing in the glass—wearing her face but living a different life.",
      "Touching the broken edge carried her into the reflection. To return, she had to help her other self make a choice neither had dared to make."
    ]
  },
  {
    "title": "The Snowy Bet",
    "author": "Finn Hughes",
    "genre": "Romance",
    "synopsis": "A bet, a journey, and a love that wasn’t part of the plan.",
    "chapter": "Chapter 1: The Winter Challenge",
    "image": "images/story22.jpg",
    "content": [
      "Best friends Theo and Emma made a silly bet to reach the mountain village before the first snowfall ended.",
      "The journey tested their courage and their friendship. Somewhere along the snowy trail, the prize stopped mattering as much as the person beside them."
    ]
  },
  {
    "title": "The Paper Crane",
    "author": "Luna Reyes",
    "genre": "Drama",
    "synopsis": "A simple paper crane carries a message across time and hearts.",
    "chapter": "Chapter 1: Folded Wishes",
    "image": "images/story23.jpg",
    "content": [
      "In the hospital waiting room, Mei folded paper cranes for every wish she was afraid to say aloud.",
      "One crane returned to her with a message written inside—an answer from someone she had not seen since childhood."
    ]
  },
  {
    "title": "The Stolen Crown",
    "author": "Ryder Shaw",
    "genre": "Fantasy",
    "synopsis": "A crown is stolen, and a kingdom falls into chaos.",
    "chapter": "Chapter 1: The Empty Throne",
    "image": "images/story24.jpg",
    "content": [
      "By sunrise, the royal crown had vanished and every gate in the kingdom was locked.",
      "Princess Elowen followed a trail of gold dust beyond the palace walls, discovering that the thief wanted to expose a secret hidden by the royal family."
    ]
  },
  {
    "title": "The Whispering Lake",
    "author": "Ivy Collins",
    "genre": "Mystery",
    "synopsis": "A quiet lake holds a voice that calls to those who listen.",
    "chapter": "Chapter 1: Voices on the Water",
    "image": "images/story25.jpg",
    "content": [
      "At dusk, the lake whispered names across its still surface.",
      "When Milo heard his missing mother’s name, he rowed to the lake’s center and found a small bell tied to a branch beneath the water."
    ]
  },
  {
    "title": "The City of Glass",
    "author": "Felix Ward",
    "genre": "Sci-Fi",
    "synopsis": "In a city of glass, nothing is as it seems.",
    "chapter": "Chapter 1: The Shattered Skyline",
    "image": "images/story26.jpg",
    "content": [
      "The towers of Glass City reflected a perfect world, but every reflection showed one small difference.",
      "Engineer Sera discovered the city was hiding an entire district behind its mirrored walls—and its residents were asking for help."
    ]
  },
  {
    "title": "The Golden Compass",
    "author": "Tessa Vaughn",
    "genre": "Adventure",
    "synopsis": "A compass that doesn’t just point north, but to the truth.",
    "chapter": "Chapter 1: The Needle Turns",
    "image": "images/story27.jpg",
    "content": [
      "The old compass never pointed north. It turned toward whatever its holder most needed to find.",
      "When it pointed toward the mountains, Tessa followed it through forgotten roads and learned that the truth she sought had been hidden by her own family."
    ]
  },
  {
    "title": "The Black Carnival",
    "author": "Elias Stone",
    "genre": "Horror",
    "synopsis": "A mysterious carnival brings dreams—and nightmares.",
    "chapter": "Chapter 1: One Ticket Only",
    "image": "images/story28.jpg",
    "content": [
      "The carnival appeared on the edge of town without a sound, its lights shining even though no power lines reached it.",
      "Every ride showed a visitor a dream. The final tent showed their greatest fear, and its exit would not open until they faced it."
    ]
  },
  {
    "title": "The Wishmaker",
    "author": "Nadia Foster",
    "genre": "Fantasy",
    "synopsis": "A girl finds a star that grants wishes—but at a price.",
    "chapter": "Chapter 1: A Star in Her Hands",
    "image": "images/story29.jpg",
    "content": [
      "After a meteor shower, Liora found a tiny star resting in the grass, warm as a heartbeat.",
      "It granted her first wish instantly, but took a precious memory in return. Liora had to decide what mattered enough to wish for again."
    ]
  },
  {
    "title": "The Eternal Bloom",
    "author": "Silas Vaughn",
    "genre": "Fantasy",
    "synopsis": "A flower that never fades holds the key to a timeless love.",
    "chapter": "Chapter 1: The Flower That Stayed",
    "image": "images/story30.jpg",
    "content": [
      "In a hidden greenhouse, one white flower never wilted, even through winter.",
      "Botanist Amara discovered it bloomed where a promise had been made long ago, and its petals could reunite two people separated by time."
    ]
  },
  {
    "title": "The Final Chapter",
    "author": "Elowen Pierce",
    "genre": "Fantasy",
    "synopsis": "Every story has an end—but this one is just the beginning.",
    "chapter": "Chapter 1: The Blank Page",
    "image": "images/story31.jpg",
    "content": [
      "On the last page of the oldest book, Elowen found a blank space that shimmered like a doorway.",
      "When she wrote the first word, the characters from every tale began to move. The final chapter was not an ending—it was an invitation to begin again."
    ]
  }
];
const grid=document.getElementById("bookGrid"), searchBox=document.getElementById("searchBox"), resultsCount=document.getElementById("resultsCount");
let activeGenre="All",currentBook=0; const liked={},likes={};
function renderBooks(){
 const query=searchBox.value.toLowerCase().trim();
 const filtered=books.map((book,index)=>({...book,index})).filter(book=>(activeGenre==="All"||book.genre===activeGenre)&&`${book.title} ${book.author} ${book.genre} ${book.synopsis}`.toLowerCase().includes(query));
 resultsCount.textContent=`${filtered.length} stories available`;
 grid.innerHTML=filtered.map(book=>`<article class="book-card"><div class="cover-wrap"><img class="book-cover" src="${book.image}" alt="Illustration for ${book.title}" loading="lazy"><span class="cover-label">${book.genre}</span></div><div class="book-info"><h3>${book.title}</h3><p class="author">By ${book.author}</p><p class="synopsis" id="synopsis-${book.index}">${book.synopsis}</p><div class="card-actions"><button class="read-btn" onclick="openStory(${book.index})">READ STORY ↗</button><button class="hide-synopsis-btn" onclick="toggleCardSynopsis(${book.index},this)" aria-expanded="true">Hide Synopsis</button></div></div></article>`).join("");
}
function toggleCardSynopsis(index,button){const p=document.getElementById(`synopsis-${index}`);const hidden=p.classList.toggle('hidden');button.textContent=hidden?'Show Synopsis':'Hide Synopsis';button.setAttribute('aria-expanded',String(!hidden));}
function openStory(index){
 currentBook=index;const book=books[index];
 document.getElementById("readerTitle").textContent=book.title;document.getElementById("readerGenre").textContent=book.genre.toUpperCase();document.getElementById("readerAuthor").textContent=`Written by ${book.author}`;
 document.getElementById("readerImage").src=book.image;document.getElementById("readerImage").alt=`Cover for ${book.title}`;document.getElementById("supportImage").src=book.image;document.getElementById("supportImage").alt=`Illustration for ${book.title}`;
 document.getElementById("chapterTitle").textContent=book.chapter;document.getElementById("storyContent").innerHTML=book.content.map(p=>`<p>${p}</p>`).join("");
 document.getElementById("synopsisBox").textContent=book.synopsis;document.getElementById("detailsBox").textContent=`Title: ${book.title} | Author: ${book.author} | Genre: ${book.genre} | Chapters: 1`;
 document.getElementById("synopsisBox").classList.remove("hidden");document.getElementById("detailsBox").classList.add("hidden");document.getElementById("synopsisBtn").textContent="Hide Synopsis";document.getElementById("detailsBtn").textContent="Book Details";document.getElementById("synopsisBtn").setAttribute("aria-expanded","true");
 document.getElementById("progressBar").style.width="0%";document.getElementById("progressPercent").textContent="0%";document.getElementById("finishMessage").textContent="";updateLikeButton();
 document.getElementById("stories").classList.add("hidden");document.querySelector(".hero").classList.add("hidden");document.getElementById("reader").classList.remove("hidden");window.scrollTo({top:0,behavior:"smooth"});
}
function closeStory(){document.getElementById("reader").classList.add("hidden");document.getElementById("stories").classList.remove("hidden");document.querySelector(".hero").classList.remove("hidden");window.scrollTo({top:document.getElementById("stories").offsetTop,behavior:"smooth"});}
function updateLikeButton(){document.getElementById("likeBtn").innerHTML=`${liked[currentBook]?"♥":"♡"} ${liked[currentBook]?"Liked":"Like"} <span>${likes[currentBook]||0}</span>`;}
document.getElementById("likeBtn").addEventListener("click",()=>{liked[currentBook]=!liked[currentBook];likes[currentBook]=Math.max(0,(likes[currentBook]||0)+(liked[currentBook]?1:-1));updateLikeButton();});
document.getElementById("synopsisBtn").addEventListener("click",()=>{const panel=document.getElementById("synopsisBox"),hidden=panel.classList.toggle("hidden");document.getElementById("synopsisBtn").textContent=hidden?"Show Synopsis":"Hide Synopsis";document.getElementById("synopsisBtn").setAttribute("aria-expanded",String(!hidden));});
document.getElementById("detailsBtn").addEventListener("click",()=>{const panel=document.getElementById("detailsBox"),hidden=panel.classList.toggle("hidden");document.getElementById("detailsBtn").textContent=hidden?"Book Details":"Hide Details";});
function finishReading(){document.getElementById("progressBar").style.width="100%";document.getElementById("progressPercent").textContent="100%";document.getElementById("finishMessage").textContent="Chapter completed! Thank you for reading.";}
document.getElementById("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");document.getElementById("themeBtn").textContent=document.body.classList.contains("dark")?"☀ Light Mode":"☾ Dark Mode";});
document.querySelectorAll(".filter-btn").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(btn=>btn.classList.remove("active"));button.classList.add("active");activeGenre=button.dataset.genre;renderBooks();}));
searchBox.addEventListener("input",renderBooks);renderBooks();
