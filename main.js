const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//hangman game
const words = [
    "apple", "banana", "orange", "grape", "lemon", "mango", "peach", "plum", "pear", "kiwi",
    "tiger", "lion", "zebra", "bear", "wolf", "fox", "deer", "otter", "panda", "koala",
    "planet", "rocket", "asteroid", "comet", "galaxy", "orbit", "venus", "mars", "jupiter", "saturn",
    "piano", "guitar", "drum", "violin", "flute", "trumpet", "harp", "cello", "saxophone", "keyboard",
    "river", "mountain", "forest", "desert", "island", "ocean", "valley", "meadow", "canyon", "volcano",
    "teacher", "student", "library", "science", "history", "writing", "reading", "computer", "school", "pencil",
    "window", "door", "chair", "table", "lamp", "clock", "phone", "camera", "watch", "keyboard",
    "soccer", "basketball", "tennis", "baseball", "hockey", "golf", "swimming", "cycling", "running", "throwing",
    "shadow", "sunlight", "rainbow", "cloud", "storm", "thunder", "lightning", "wind", "snow", "rain",
    "friend", "family", "holiday", "journey", "adventure", "memory", "dream", "happy", "smile", "music",
    "garden", "flower", "tree", "branch", "leaf", "root", "breeze", "petal", "sunflower", "rose",
    "castle", "forest", "dragon", "knight", "shield", "sword", "ancient", "travel", "magic", "quest"
];

let randomWord;
let base = {x: 100, y: 300, w: 100, h: 10};
let pole = {x: 140, y: 300, w: 10, h: -200};
let top = {x: 140, y: 100, w: 50, h: 10};

function randWord() {
    let rand = Math.floor(Math.random() * (words.length));
    randomWord = words[rand];
}

function hangManStructure() {
    ctx.fillStyle = "white";
    ctx.fillRect(base.x, base.y, base.w, base.h);
    ctx.fillRect(pole.x, pole.y, pole.w, pole.h);
    ctx.fillRect(top.x, top.y, top.w, top.h);
}

//update
function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, 400, 400);
    
    //updates
    hangManSttucture();
}
update();
randWord();