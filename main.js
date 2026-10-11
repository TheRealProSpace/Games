const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


//ultimate tick tack toe

let topLeft = {x: 0, y: 0, w: 133, h: 133};
let topMiddle = {x: 133, y: 0, w: 133, h: 133};
let topRight = {x: 266, y: 0, w: 133, h: 133};

let middleLeft = {x: 0, y: 133, w: 133, h: 133};
let middleMiddle = {x: 133, y: 133, w: 133, h: 133};
let middleRight = {x: 266, y: 133, w: 133, h: 133};

let bottomLeft = {x: 0, y: 266, w: 133, h: 133};
let bottomMiddle = {x: 133, y: 266, w: 133, h: 133};
let bottomRight = {x: 266, y: 266, w: 133, h: 133};

function drawBoard() {
	//buttons
	ctx.fillStyle = "white";
	ctx.fillRect(topLeft.x, topLeft.y, topLeft.w, topLeft.h);
	ctx.fillRect(topMiddle.x, topMiddle.y, topMiddle.w, topMiddle.h);
	ctx.fillRect(topRight.x, topRight.y, topRight.w, topRight.h);

	ctx.fillRect(middleLeft.x, middleLeft.y, middleLeft.w, middleLeft.h);
	ctx.fillRect(middleMiddle.x, middleMiddle.y, middleMiddle.w, middleMiddle.h);
	ctx.fillRect(middleRight.x, middleRight.y, middleRight.w, middleRight.h);

	ctx.fillRect(bottomLeft.x, bottomLeft.y, bottomLeft.w, bottomLeft.h);
	ctx.fillRect(bottomMiddle.x, bottomMiddle.y, bottomMiddle.w, bottomMiddle.h);
	ctx.fillRect(bottomRight.x, bottomRight.y, bottomRight.w, bottomRight.h);


	//lines
	ctx.fillStyle = "black";
	ctx.fillRect(133, 0, 10, 400);
	ctx.fillRect(266, 0, 10, 400);
	ctx.fillRect(0, 133, 400, 10);
	ctx.fillRect(0, 266, 400, 10);
}

let square = 0;
let choice1 = 0;
let gameComplete = false;

let sq1 = "o";
let sq2 = "o";
let sq3 = "x";

let sq4 = "x";
let sq5 = "x";
let sq6 = "x";

let sq7 = "x";
let sq8 = "x";
let sq9 = "x";


function returnBoard() {
	if (gameComplete) {
		square = 0;
		gameComplete = false;
	}
}


function choice() {
	if (square === 0) {
			switch (sq1) {
				case "x":
					ctx.save();
					ctx.translate(80, 15);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(40, 20);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq2) {
				case "x":
					ctx.save();
					ctx.translate(220, 15);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(180, 20);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq3) {
				case "x":
					ctx.save();
					ctx.translate(360, 15);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(320, 20);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq4) {
				case "x":
					ctx.save();
					ctx.translate(80, 155);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(40, 160);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq5) {
				case "x":
					ctx.save();
					ctx.translate(220, 155);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(180, 160);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq6) {
				case "x":
					ctx.save();
					ctx.translate(360, 155);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(320, 160);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq7) {
				case "x":
					ctx.save();
					ctx.translate(80, 295);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(40, 300);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq8) {
				case "x":
					ctx.save();
					ctx.translate(220, 295);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(180, 300);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			switch (sq9) {
				case "x":
					ctx.save();
					ctx.translate(360, 295);
					ctx.rotate(Math.PI / 8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					
					
					ctx.save();
					ctx.translate(320, 300);
					ctx.rotate(Math.PI / -8);
					ctx.fillStyle = "red";
					ctx.fillRect(0, 0, 10, 100);
					ctx.restore();
					break;
				case "o":
				break;
			}
			
			
			switch (choice1) {
			   case 1:
					
			   case 2:
			   case 3:
			   case 4:
			   case 5:
			   case 6:
			   case 7:
			   case 8:
			   case 9:
			   
			   
			}
			
			
			
			
		choice1 = 0;
	}
}



//click detection for game
canvas.addEventListener("click", e => {
	const rect = canvas.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;
	//tops
	if (
		mouseX >= topLeft.x &&
		mouseX <= topLeft.x + topLeft.w &&
		mouseY >= topLeft.y &&
		mouseY <= topLeft.y + topLeft.h
	) {
		//add event here
		choice();
		choice1 = 1;
	}
	if (
		mouseX >= topMiddle.x &&
		mouseX <= topMiddle.x + topMiddle.w &&
		mouseY >= topMiddle.y &&
		mouseY <= topMiddle.y + topMiddle.h
	) {
		//add event here
		choice();
		choice1 = 2;
	}
	if (
		mouseX >= topRight.x &&
		mouseX <= topRight.x + topRight.w &&
		mouseY >= topRight.y &&
		mouseY <= topRight.y + topRight.h
	) {
		//add event here
		choice();
		choice1 = 3;
	}
	//middles
	if (
		mouseX >= middleLeft.x &&
		mouseX <= middleLeft.x + middleLeft.w &&
		mouseY >= middleLeft.y &&
		mouseY <= middleLeft.y + middleLeft.h
	) {
		//add event here
		choice();
		choice1 = 4;
	}
	if (
		mouseX >= middleMiddle.x &&
		mouseX <= middleMiddle.x + middleMiddle.w &&
		mouseY >= middleMiddle.y &&
		mouseY <= middleMiddle.y + middleMiddle.h
	) {
		//add event here
		choice();
		choice1 = 5;
	}
	if (
		mouseX >= middleRight.x &&
		mouseX <= middleRight.x + middleRight.w &&
		mouseY >= middleRight.y &&
		mouseY <= middleRight.y + middleRight.h
	) {
		//add event here
		choice();
		choice1 = 6;
	}
	//bottoms
	if (
		mouseX >= bottomLeft.x &&
		mouseX <= bottomLeft.x + bottomLeft.w &&
		mouseY >= bottomLeft.y &&
		mouseY <= bottomLeft.y + bottomLeft.h
	) {
		//add event here
		choice();
		choice1 = 7;
	}
	if (
		mouseX >= bottomMiddle.x &&
		mouseX <= bottomMiddle.x + bottomMiddle.w &&
		mouseY >= bottomMiddle.y &&
		mouseY <= bottomMiddle.y + bottomMiddle.h
	) {
		//add event here
		choice();
		choice1 = 8;
	}
	if (
		mouseX >= bottomRight.x &&
		mouseX <= bottomRight.x + bottomRight.w &&
		mouseY >= bottomRight.y &&
		mouseY <= bottomRight.y + bottomRight.h
	) {
		//add event here
		choice();
		choice1 = 9;
	}
});

//update loop
function update() {
	requestAnimationFrame(update);
	ctx.clearRect(0, 0, 400, 400);
	
	//updates
	drawBoard();
	choice();
}
update();
