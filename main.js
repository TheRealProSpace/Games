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
let pole = {x: 140, y: 100, w: 10, h: 200};
let top1 = {x: 140, y: 100, w: 80, h: 10};
let rope = {x: 220, y: 100, w: 10, h: 30};

//hangman
let head1 = {x: 225, y: 150, r: 30};
let head2 = {x: 225, y: 150, r: 25};
let body = {x: 220, y: 175, w: 10, h: 70};
let Larm = {x: 185, y: 220, w: 50, h: 10};
let Rarm = {x: 230, y: 185, w: 50, h: 10};
let Lleg = {x: 195, y: 280, w: 50, h: 10};
let Rleg = {x: 230, y: 235, w: 50, h: 10};


let hang = 6;

function randWord() {
	let rand = Math.floor(Math.random() * words.length);
	randomWord = words[rand];
}

function hangManStructure() {
	ctx.fillStyle = "white";
	ctx.fillRect(base.x, base.y, base.w, base.h);
	ctx.fillRect(pole.x, pole.y, pole.w, pole.h);
	ctx.fillRect(top1.x, top1.y, top1.w, top1.h);
	ctx.fillRect(rope.x, rope.y, rope.w, rope.h);
	
	switch (hang) {
	    case 1:
	    	//head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
	    case 2:
	    	/head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
			//body
			ctx.fillStyle = "white";
			ctx.fillRect(body.x, body.y, body.w, body.h);
	    case 3:
	    	/head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
			//body
			ctx.fillStyle = "white";
			ctx.fillRect(body.x, body.y, body.w, body.h);
			//left arm
			ctx.save();
			ctx.translate(Larm.x, Larm.y);
			ctx.rotate(Math.PI / -4);
			ctx.fillRect(0, 0, Larm.w, Larm.h);
			ctx.restore();
	    case 4:
	    	/head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
			//body
			ctx.fillStyle = "white";
			ctx.fillRect(body.x, body.y, body.w, body.h);
			//left arm
			ctx.save();
			ctx.translate(Larm.x, Larm.y);
			ctx.rotate(Math.PI / -4);
			ctx.fillRect(0, 0, Larm.w, Larm.h);
			ctx.restore();
			//right arm
			ctx.save();
			ctx.translate(Rarm.x, Rarm.y);
			ctx.rotate(Math.PI / 4);
			ctx.fillRect(0, 0, Rarm.w, Rarm.h);
			ctx.restore();
	    case 5:
	    	/head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
			//body
			ctx.fillStyle = "white";
			ctx.fillRect(body.x, body.y, body.w, body.h);
			//left arm
			ctx.save();
			ctx.translate(Larm.x, Larm.y);
			ctx.rotate(Math.PI / -4);
			ctx.fillRect(0, 0, Larm.w, Larm.h);
			ctx.restore();
			//right arm
			ctx.save();
			ctx.translate(Rarm.x, Rarm.y);
			ctx.rotate(Math.PI / 4);
			ctx.fillRect(0, 0, Rarm.w, Rarm.h);
			ctx.restore();
			//left leg
			ctx.save();
			ctx.translate(Lleg.x, Lleg.y);
			ctx.rotate(Math.PI / -3);
			ctx.fillRect(0, 0, Lleg.w, Lleg.h);
			ctx.restore();
	    case 6:
	    	//head
	    	ctx.beginPath();
	    	ctx.arc(head1.x, head1.y, head1.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = "#333";
			ctx.beginPath();
			ctx.arc(head2.x, head2.y, head2.r, 0, Math.PI * 2);
			ctx.fill();
			//body
			ctx.fillStyle = "white";
			ctx.fillRect(body.x, body.y, body.w, body.h);
			//left arm
			ctx.save();
			ctx.translate(Larm.x, Larm.y);
			ctx.rotate(Math.PI / -4);
			ctx.fillRect(0, 0, Larm.w, Larm.h);
			ctx.restore();
			//right arm
			ctx.save();
			ctx.translate(Rarm.x, Rarm.y);
			ctx.rotate(Math.PI / 4);
			ctx.fillRect(0, 0, Rarm.w, Rarm.h);
			ctx.restore();
			//left leg
			ctx.save();
			ctx.translate(Lleg.x, Lleg.y);
			ctx.rotate(Math.PI / -3);
			ctx.fillRect(0, 0, Lleg.w, Lleg.h);
			ctx.restore();
			//right leg
			ctx.save();
			ctx.translate(Rleg.x, Rleg.y);
			ctx.rotate(Math.PI / 3);
			ctx.fillRect(0, 0, Rleg.w, Rleg.h);
			ctx.restore();
	}
}

//update
function update() {
	requestAnimationFrame(update);
	ctx.clearRect(0, 0, 400, 400);
	
	//updates
	hangManStructure();
}

randWord();
update();