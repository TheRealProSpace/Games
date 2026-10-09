const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//variables
let bird = { x: 50, y: 170, w: 30, h: 30 };
let pillar = [
	{ x: 400, y: 100, w: 50, h: 200 },
	{ x: 200, y: 100, w: 59, h: 200}
];
let pillar2 = ;

function drawPillars() {
    ctx.fillStyle = "green";
    for (let i = 0; i < pillar.length; i++) {
        ctx.fillRect(pillar[i].x, pillar[i].y, pillar[i].w, pillar[i].h);
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
}
update();