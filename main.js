const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//variables
let bird = { x: 50, y: 170, w: 30, h: 30 };
let pillar = [
	{ x: 400, y: -50, w: 50, h: 200 },
	{ x: 400, y: 250, w: 50, h: 200 },
	{ x: 600, y: -50, w: 50, h: 200 },
	{ x: 600, y: 250, w: 50, h: 200 }
];
let direction = "down";

function drawPillars() {
	ctx.fillStyle = "lime";
	for (let i = 0; i < pillar.length; i++) {
		ctx.fillRect(pillar[i].x, pillar[i].y, pillar[i].w, pillar[i].h);
	}
}

function movePillars() {
	for (let i = 0; i < pillar.length; i++) {
	    pillar[i].x -= 3;
	}
	if (pillar[0].x <= 0) {
	    pillar[0].x = 400;
	    pillar[1].x = 400;
	}
	if (pillar[2].x <= 0) {
	    pillar[2].x = 600;
	    pillar[3].x = 600;
	}
}



//bird
function drawBird() {
	ctx.fillStyle = "yellow";
	ctx.fillRect(bird.x, bird.y, bird.w, bird.h);
}


//update
function update() {
	requestAnimationFrame(update);
	ctx.clearRect(0, 0, 400, 400);
	
	//updates
	drawBird();
	drawPillars();
	movePillars();
}
update();