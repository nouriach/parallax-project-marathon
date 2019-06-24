// This speaks to the starting position of the runner.

let player = {
  top: 1090,
  left: 0
};

let roadLimits = {
  top: 1020,
  bottom: 1150,
  left: -10,
  right: 2470
};

document.onkeydown = function(e) {
  console.log(e.code);
  if (e.code === "ArrowUp") {
    console.log("UP");
    player.top = player.top - 10;
    console.log(player.top);
    movePlayerUp();
  } else if (e.code === "ArrowLeft") {
    console.log("LEFT");
    player.left = player.left - 10;
    movePlayerForward();
  } else if (e.code === "ArrowRight") {
    console.log("RIGHT");
    player.left = player.left + 10;
    console.log(player.top);
    movePlayerForward();
  } else if (e.code === "ArrowDown") {
    console.log("DOWN");
    player.top = player.top + 10;
    movePlayerDown();
  } else {
    console.log("no other moves available.");
  }
};

function movePlayerForward() {
  if (player.left < roadLimits.left) {
    console.log(player.left);
  } else if (player.left > roadLimits.right) {
    console.log(player.left);
  } else {
    document.getElementById("runner").style.left = player.left + "px";
    console.log("move");
  }
}

function movePlayerUp() {
  if (player.top > roadLimits.top) {
    document.getElementById("runner").style.top = player.top + "px";
  } else {
    console.log("you can't move anymore");
  }
}

function movePlayerDown() {
  if (player.top < roadLimits.bottom) {
    document.getElementById("runner").style.top = player.top + "px";
  } else {
    console.log("you can't move anymore");
  }
}

/* 
a game loop could be used to bring in additional elements every
so often.

*/

function gameLoop() {
  setTimeout(gameLoop, 1000);
  console.log("gameloop running");
}

gameLoop();

// function update() {
//   updatePlayer();
//   window.requestAnimationFrame(update);
// }

// window.requestAnimationFrame(update);
