const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


//ultimate tick tack toe

let sqr = [{x: 0, y: 0, w: 133, h: 133},{x: 133, y: 0, w: 133, h: 133},{x: 266, y: 0, w: 133, h: 133};{x: 0, y: 133, w: 133, h: 133},{x: 133, y: 133, w: 133, h: 133},{x: 266, y: 133, w: 133, h: 133},{x: 0, y: 266, w: 133, h: 133},{x: 133, y: 266, w: 133, h: 133},{x: 266, y: 266, w: 133, h: 133}];

function drawBoard() {
	//buttons
	ctx.fillStyle = "white";
	for (let i = 0; i < sqr.length; i++) {
	    ctx.fillRect(sqr[i].x, sqr[i].y, sqr[i].w, sqr[i].h);
	}


	//lines
	ctx.fillStyle = "black";
	ctx.fillRect(133, 0, 10, 400);
	ctx.fillRect(266, 0, 10, 400);
	ctx.fillRect(0, 133, 400, 10);
	ctx.fillRect(0, 266, 400, 10);
}








//click detection for game
canvas.addEventListener("click", e => {
	const rect = canvas.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;
	//tops
	for (let i = 0; i < sqr.length; i++) {
	    if (
			mouseX >= sqr[i].x &&
			mouseX <= sqr[i].x + sqr[i].w &&
			mouseY >= sqr[i].y &&
			mouseY <= sqr[i].y + sqr[i].h
		) {
			//add event here
		}
	}
	
});

//update loop
function update() {
	requestAnimationFrame(update);
	ctx.clearRect(0, 0, 400, 400);
	
	//updates
	drawBoard();
}
update();