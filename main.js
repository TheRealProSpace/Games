const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//snake game
//variables
let  direction = "right";



//update the game state
function update() {
    ctx.clearRect(0, 0, 500, 500);
    requestAnimationFrame(update);
}
update();