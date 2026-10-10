const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let buttons = [
	{x: 120, y: 120, r: 40, c: "red"},
	{x: 200, y: 120, r: 40, c: "yellow"},
	{x: 120, y: 200, r: 40, c: "green"},
	{x: 200, y: 200, r: 40, c: "blue"},
	{x: 160, y: 160, r: 40, c: "black"}
];

let randoms = [];
let player = [];
let ammount = 1;

for (let i = 0; i < 31; i++) {
	let e = Math.random() * (3);
	if (e === 0) {
		randoms.push("red");
	} else if (e === 1) {
		randoms.push("yellow");
	} else if (e === 2) {
		randoms.push("green");
	} else if (e === 3) {
		randoms.push("blue");
	}
}


canvas.addEventListener("click", (e) => {
	const rect = canvas.getBoundingClientRect();
	const mouseX = e.clientX - rect.left;
	const mouseY = e.clientY - rect.top;

	// Check which button was clicked
	buttons.forEach(btn => {
		const distance = Math.sqrt(
			Math.pow(mouseX - btn.x, 2) + Math.pow(mouseY - btn.y, 2)
		);

		if (distance < btn.r) {
			console.log(`Clicked ${btn.c}`);
			// Add to sequence or handle click
			switch (btn.c) {
				case "red":
					player.push("red");
				case "yellow":
					player.push("yellow");
				case "green":
					player.push("green");
				case "blue":
					player.push("blue");
			}
		}
	});
});

function updateButtons() {
	switch (ammount) {
		for (let i = 0; i < 31; i++) {
		    case i:
		    	
		}
		case 1:
			let e1 = randoms[0];
			switch (e1) {
			    case "red":
			    	buttons[0].c = "black";
			    	setTimeout(() => {
			    	    buttons[0].c = "red";
			    	});
			    case "yellow":
			    	buttons[0].c = "black";
			    	setTimeout(() => {
			    	    buttons[0].c = "yellow";
			    	});
			    case "green":
			    	buttons[0].c = "black";
			    	setTimeout(() => {
			    	    buttons[0].c = "green";
			    	});
			    case "blue":
			    	buttons[0].c = "black";
			    	setTimeout(() => {
			    	    buttons[0].c = "blue";
			    	});
			}
			
			
	}
}


function drawButtons() {
	for (let i = 0; i < buttons.length; i++) {
		ctx.fillStyle = buttons[i].c;
		ctx.beginPath();
		ctx.arc(buttons[i].x, buttons[i].y, buttons[i].r, 0, Math.PI * 2);
		 ctx.fill();
	}
}


//update
function update() {
	requestAnimationFrame(update);
	ctx.clearRect(0, 0, 400, 400);
	
	//updates
	drawButtons();
}
update();