// This speaks to the starting position of the runner.

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight || 0
);
console.log(`window height: ${h}`);
console.log(`window width: ${w}`);

let player = {
  top: 80,
  left: 0
};

/** 
 The below code limits the space where the runner can move. Therefore, it cannot
 leave the road.
**/

let roadLimits = {
  top: 70,
  bottom: 86,
  left: 0,
  right: 99.9
};

/* 
can we create obstacles and store them within this array? 
*/

let obstacles = [
  { top: 0, left: 20 },
  { top: 1, left: 40 },
  { top: 2, left: 90 }
];

let playerPosition = 4;

function makeObstacles() {
  for (let obstacle = 0; obstacle < obstacles.length; obstacle++) {
    // console.log(obstacles[obstacle].top);
    // console.log(obstacles[obstacle].left);

    let parentDiv = document.getElementsByClassName("road");

    let div = document.createElement("div");
    div.className = "runnerFast";

    div.style.marginLeft = obstacles[obstacle].left + "vw";
    div.style.marginTop = obstacles[obstacle].top + "vh";

    parentDiv[0].appendChild(div);
  }
}

document.onkeydown = function(e) {
  if (e.code === "ArrowUp") {
    player.top = player.top - 0.5;
    console.log(`On arrow up: ${player.top}`);
    movePlayerUp();
  } else if (e.code === "ArrowLeft") {
    player.left = player.left - 5;
    console.log(`On arrow left: ${player.left}`);

    movePlayerForward();
    collisionDetection();
  } else if (e.code === "ArrowRight") {
    player.left = player.left + 5;
    console.log(`On arrow right: ${player.left}`);

    movePlayerForward();
    collisionDetection();
  } else if (e.code === "ArrowDown") {
    player.top = player.top + 0.5;
    console.log(`On arrow down: ${player.top}`);

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
    document.getElementById("runner").style.left = player.left + "vw";
    // console.log(player.left + "px");
  }
}

function movePlayerUp() {
  if (player.top > roadLimits.top) {
    document.getElementById("runner").style.top = player.top + "vh";
  } else {
    // console.log("you can't move anymore");
  }
}

function movePlayerDown() {
  if (player.top < roadLimits.bottom) {
    document.getElementById("runner").style.top = player.top + "vh";
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
  if (player.left === obstacles[0].left) {
    playerPosition = playerPosition - 1;
    console.log(
      `collision: player position, ${player.left} and the runner position, ${
        obstacles[0].left
      }`
    );
    insertFlag();
  } else if (player.left === obstacles[1].left) {
    playerPosition = playerPosition - 1;
    console.log(
      `collision: player position, ${player.left} and the runner position, ${
        obstacles[1].left
      }`
    );
    insertFlag();
  } else if (player.left === obstacles[2].left) {
    console.log(
      `collision: player position, ${player.left} and the runner position, ${
        obstacles[2].left
      }`
    );

    playerPosition = playerPosition - 1;
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
