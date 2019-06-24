let player = {
  top: 50,
  left: 50
};

document.onkeydown = function(e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("UP");
    player.top = player.top - 1;
    movePlayerUp();
  } else if (e.code === "ArrowLeft") {
    console.log("LEFT");
    player.left = player.left - 1;
    movePlayerForward();
  } else if (e.code === "ArrowRight") {
    console.log("RIGHT");
    player.left = player.left + 1;
    movePlayerForward();
  } else if (e.code === "ArrowDown") {
    console.log("DOWN");
    player.top = player.top + 1;
    movePlayerUp();
  } else {
    console.log("no other moves available.");
  }
};

function movePlayerForward() {
  document.getElementById("runner").style.left = player.left + "%";
}

function movePlayerUp() {
  document.getElementById("runner").style.top = player.top + "%";
}

/******* 
 
const gameWidth = 800;
const gameHeight = 1000;

const gameState = {
  playerX: 0,
  playerY: 0
};

function setPosition(el, x, y) {
  el.style.transform = `translate ${x}px, ${y}px`;
}

function createPlayer(container) {
  gameState.playerX = gameWidth / 2;
  gameState.playerY = gameHeight - 50;
  const player = document.getElementById(".runner");
    player.src = "../img/manRunning.png";
    player.className = "player";
    container.appendChild(player);
  setPosition(player, gameState.playerX, gameState.playerY);
}

function init() {
  const container = document.querySelector(".road");
  createPlayer(container);
}

function onKeyDown(e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    gameState.playerX -= 5;
    const player = document.querySelector(".player");
    setPosition(player, gameState.playerX, gameState.playerY);
  } else {
    console.log("not a correct movement");
  }
}

init();
window.addEventListener("keydown", onKeyDown);

*********/

/*
ArrowUp = 38
*/
