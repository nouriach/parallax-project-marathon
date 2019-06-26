// This speaks to the starting position of the runner.

let player = {
  top: 1090,
  left: 0
};

/** 
 The below code limits the space where the runner can move. Therefore, it cannot
 leave the road.
**/

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
  { top: -30, left: 950 },
  { top: -50, left: 840 },
  { top: -50, left: 1400 },
  { top: -35, left: 800 },
  { top: -85, left: 1000 },
  { top: -110, left: 1800 }
];

function makeObstacles() {
  for (let obstacle = 0; obstacle < obstacles.length; obstacle++) {
    console.log(obstacles[obstacle].top);
    console.log(obstacles[obstacle].left);

    let parentDiv = document.getElementsByClassName("obstacles");

    let div = document.createElement("div");
    div.className = "runnerFast";

    div.style.marginLeft = obstacles[obstacle].left + "px";
    div.style.marginTop = obstacles[obstacle].top + "px";

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
    collisionDetection();
  } else if (e.code === "ArrowRight") {
    console.log("RIGHT");
    collisionDetection();
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
    // console.log(player.left + "px");
  } else if (player.left > roadLimits.right) {
    // console.log(player.left + "px");
  } else {
    document.getElementById("runner").style.left = player.left + "px";
    // console.log(player.left + "px");
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

/***** 
 The collission detection function will move through both the player array and the 
 obstacle array and check to see whether, for instance:

 if (
     (player.top = obstacles[obstacle].top) &&
     (player.left = obstacles[obstacle].left)
     )
     
and then if they match then you can splice the obstacle from the array.

*/

function collisionDetection() {
  console.log(`collission detection: ${player.left} + "px"`);
  console.log(`collission detection: ${obstacles[0].left} + "px"`);
  if (player.left + "px" === obstacles[0].left + "px") {
    alert("COLLISSION");
    // alert(`${obstacles}`);
    obstacles = obstacles.slice(0);
  } else {
  }
}

/* 
a game loop could be used to bring in additional elements every
so often.

*/

function gameLoop() {
  setTimeout(gameLoop, 50000);
  makeObstacles();
  collisionDetection();
  console.log("gameloop running");
  // below will create an obstacle to appear at a certain point in the game.
}

// gameLoop();

// function update() {
//   updatePlayer();
//   window.requestAnimationFrame(update);
// }

// window.requestAnimationFrame(update);
