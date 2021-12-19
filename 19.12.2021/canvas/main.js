const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// context.fillStyle = "black";
// context.fillRect(0, 0, 50, 50)
// let x = 0; let dir = "rtl";
// let id = setInterval(() => {
//     context.clearRect(x, 0, 50, 50)
//     context.fillStyle = "black";
//     if (dir == "ltr") x += 80
//     else x -= 80;
//     if (x >= canvas.width - (50 + 80))
//         dir = "rtl";
//     if (x <= 0) dir = "ltr"
//     context.fillRect(x, 0, 50, 50)
// }, 500)


context.fillStyle = "black";
const floor = {
    x: 0,
    y: canvas.height - 80,
    width: canvas.width,
    height: 80,
}
const player = {
    x: 0,
    y: floor.y - 100,
    width: 100,
    height: 100
}

context.fillRect(floor.x, floor.y, floor.width, floor.height);
context.fillStyle = "red";
context.fillRect(player.x, player.y, player.width, player.height);

let playerMoves = () => {
    context.clearRect(player.x, player.y, player.width, player.height)
    player.x += 2;
    context.fillRect(player.x, player.y, player.width, player.height);
    requestAnimationFrame(playerMoves)
}

playerMoves();