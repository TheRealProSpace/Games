const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//snake game
//variables
let  direction = "right";

//snake
let snake = [{x: 250, y: 250}];

//draw the snake
function drawSnake() {
    ctx.fillStyle = "pink";
    ctx.fillRect(snake[0].x, snake[0].y, 10, 10);
}

//update the game state
function update() {
    ctx.clearRect(0, 0, 500, 500);
    requestAnimationFrame(update);

    //updates
    drawSnake();
}
update();