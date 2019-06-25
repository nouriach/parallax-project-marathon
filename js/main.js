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

/* 
can we create obstacles and store them within this array? 
*/

let obstacles = [
  { top: 1090, left: 300 },
  { top: 1090, left: 300 },
  { top: 1090, left: 300 }
];

function makeObstacles() {
  document.getElementsByClassName("obstacles").innerhtml = "";

  for (let obstacle = 0; obstacle < obstacles.length; obstacle++) {
    console.log(obstacles[obstacle]);

    let parentDiv = document.getElementsByClassName("obstacles");
    let div = document.createElement("div");
    div.className = "obstacle";

    // let text = document.createTextNode(obstacles[obstacle]);
    // div.appendChild(text);

    parentDiv[0].appendChild(div);
  }
}

// document.getElementsByClassName("obstacles").innerhtml += `<div class = 'obstacle' style = "left: ${obstacles[obstacle].left}px"; "top:${obstacles[obstacle].top}px"></div>`;

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
  setTimeout(gameLoop, 10000);
  makeObstacles();
  console.log("gameloop running");
  // below will create an obstacle to appear at a certain point in the game.
}

// gameLoop();

// function update() {
//   updatePlayer();
//   window.requestAnimationFrame(update);
// }

// window.requestAnimationFrame(update);
