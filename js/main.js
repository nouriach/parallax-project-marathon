// This speaks to the starting position of the runner.

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
console.log(`window height: ${h}`);
console.log(`window width: ${w}`);

let player = {
  top: 1090,
  left: 0
};

/** 
 The below code limits the space where the runner can move. Therefore, it cannot
 leave the road.
**/

let roadLimits = {
  top: 950,
  bottom: 1180,
  left: `${w}` / 100,
  right: `${w}`
};

console.log(`${roadLimits.left}`);
/* 
can we create obstacles and store them within this array? 
*/

let obstacles = [
  { top: -10, left: 400 },
  { top: -5, left: 800 },
  { top: 0, left: 1100 }
];

let playerPosition = 4;

function makeObstacles() {
  for (let obstacle = 0; obstacle < obstacles.length; obstacle++) {
    // console.log(obstacles[obstacle].top);
    // console.log(obstacles[obstacle].left);

    let parentDiv = document.getElementsByClassName("road");

    let div = document.createElement("div");
    div.className = "runnerFast";

    div.style.marginLeft = obstacles[obstacle].left + "px";
    div.style.marginTop = obstacles[obstacle].top + "px";

    parentDiv[0].appendChild(div);
  }
}

document.onkeydown = function(e) {
  //   console.log(e.code);
  if (e.code === "ArrowUp") {
    // console.log("UP");
    player.top = player.top - 10;
    console.log(player.top);
    movePlayerUp();
  } else if (e.code === "ArrowLeft") {
    // console.log("LEFT");
    player.left = player.left - 10;
    movePlayerForward();
    collisionDetection();
  } else if (e.code === "ArrowRight") {
    // console.log("RIGHT");
    collisionDetection();
    player.left = player.left + 10;
    // console.log(player.top);
    movePlayerForward();
  } else if (e.code === "ArrowDown") {
    // console.log("DOWN");
    player.top = player.top + 10;
    movePlayerDown();
  } else {
    // console.log("no other moves available.");
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
    // console.log("you can't move anymore");
  }
}

function movePlayerDown() {
  if (player.top < roadLimits.bottom) {
    document.getElementById("runner").style.top = player.top + "px";
  } else {
    // console.log("you can't move anymore");
  }
}

function insertFlag() {
  console.log("flag function");
  if (playerPosition === 3) {
    let parentDiv = document.getElementById("skySpace");

    let div = document.createElement("div");
    div.className = "thirdPlace";

    parentDiv.appendChild(div);
  } else if (playerPosition === 2) {
    let parentDiv = document.getElementById("skySpace");
    let div = document.createElement("div");
    div.className = "secondPlace";

    parentDiv.appendChild(div);
  } else if (playerPosition === 1) {
    let parentDiv = document.getElementById("skySpace");

    let div = document.createElement("div");
    div.className = "firstPlace";

    parentDiv.appendChild(div);
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
  if (player.left == obstacles[0].left) {
    playerPosition = playerPosition - 1;
    console.log(`${playerPosition}`);
    insertFlag();
  } else if (player.left == obstacles[1].left) {
    playerPosition = playerPosition - 1;
    console.log(`${playerPosition}`);
    insertFlag();
  } else if (player.left == obstacles[2].left) {
    playerPosition = playerPosition - 1;
    console.log(`${playerPosition}`);
    insertFlag();
  }
}
/* 
a game loop could be used to bring in additional elements every
so often.

*/

function gameLoop() {
  /* 
this is important because it will only run the makeObstalces code after 9 seconds.
*/
  setTimeout(makeObstacles, 9000);
  //   console.log();
  collisionDetection();
  console.log("gameloop running");
  // below will create an obstacle to appear at a certain point in the game.
}

gameLoop();

// function update() {
//   updatePlayer();
//   window.requestAnimationFrame(update);
// }

// window.requestAnimationFrame(update);
