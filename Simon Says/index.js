//Declartion of variables
let powerBtn = document.getElementById("powerOn");
powerBtn.checked = false;
let counter = document.getElementById("counter");
counter.innerHTML = "OFF";
let startBtn = document.getElementById("startBtn");
let colorBoxes = document.querySelector(".divBox");
let results = document.getElementById("results");
let redBox = document.getElementById("redBox");
let blueBox = document.getElementById("blueBox");
let greenBox = document.getElementById("greenBox");
let yellowBox = document.getElementById("yellowBox");
let playerOrder = [];
let cpuOrder = [];
let winValue = 0;
let good;
let compTurn;
let intervalId;
let on;
let flash;
let turnCount;
//Program Start
startBtn.addEventListener("click", gameStart);
powerBtn.addEventListener("click", powerOn);
function powerOn() {
  clearColor();
  if (powerBtn.checked) {
    on = true;
    counter.innerHTML = "-";
    results.innerHTML = "";
  } else {
    on = false;
    counter.innerHTML = "OFF";
    results.innerHTML = "";
  }
}
function gameStart() {
  if (on) {
    clearColor();
    winValue = 0;
    playerOrder = [];
    cpuOrder = [];
    flash = 0;
    good = true;
    intervalId = 0;
    turnCount = 1;
    counter.innerHTML = 1;
    for (let i = 0; i < 10; i++) {
      cpuOrder.push(Math.floor(Math.random() * 4) * 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 1000);
    console.log(cpuOrder);
  }
}
function gameTurn() {
  on = false;
  playerOrder = [];
  setTimeout(clearColor(), 300);
  if (flash === turnCount) {
    clearInterval(intervalId);
    compTurn = false;
    on = true;
    playerOptions();
    console.log("done");
  }
  if (compTurn) {
    playerOptions();
    setTimeout(() => {
      if (cpuOrder[flash] === 0) one();
      if (cpuOrder[flash] === 1) two();
      if (cpuOrder[flash] === 2) three();
      if (cpuOrder[flash] === 3) four();
      flash++;
    }, 200);
  }
}
//Box event listener Start
redBox.addEventListener("click", function () {
  if (on && compTurn == false) one();
});
blueBox.addEventListener("click", function () {
  if (on && compTurn == false) two();
});
greenBox.addEventListener("click", function () {
  if (on && compTurn == false) three();
});
yellowBox.addEventListener("click", function () {
  if (on && compTurn == false) four();
});
//Box color functions
function one() {
  if (compTurn && on == false && winValue === 0) {
    redBox.style.background = "rgba(255, 0, 0, 1)";
    let audio = document.getElementById("clip1");
    audio.play();
  } else {
    playerOrder.push(0);
    check();
    if (winValue === 0) {
      redBox.style.background = "rgb(255, 0, 0, 100%)";
      let audio = document.getElementById("clip1");
      audio.play();
      setTimeout(clearColor, 400);
      console.log(playerOrder);
    }
  }
}
function two() {
  if (compTurn && on == false && winValue === 0) {
    blueBox.style.background = "rgb(0, 191, 255, 1)";
    let audio = document.getElementById("clip2");
    audio.play();
  } else {
    playerOrder.push(1);
    check();
    if (winValue === 0) {
      blueBox.style.background = "rgb(0, 191, 255, 100%)";
      let audio = document.getElementById("clip2");
      audio.play();
      setTimeout(clearColor, 400);
      console.log(playerOrder);
    }
  }
}
function three() {
  if (compTurn && on == false && winValue === 0) {
    greenBox.style.background = "rgb(64, 255, 0, 1)";
    let audio = document.getElementById("clip3");
    audio.play();
  } else {
    playerOrder.push(2);
    check();
    if (winValue === 0) {
      greenBox.style.background = "rgb(64, 255, 0, 100%)";
      let audio = document.getElementById("clip3");
      audio.play();
      setTimeout(clearColor, 400);
      console.log(playerOrder);
    }
  }
}
function four() {
  if (compTurn && on == false && winValue === 0) {
    yellowBox.style.background = "rgb(255, 255, 0, 1)";
    let audio = document.getElementById("clip4");
    audio.play();
  } else {
    playerOrder.push(3);
    check();
    if (winValue === 0) {
      yellowBox.style.background = "rgb(255, 255, 0, 100%)";
      let audio = document.getElementById("clip4");
      audio.play();
      setTimeout(clearColor, 400);
      console.log(playerOrder);
    }
  }
}
//Clear Color
function clearColor() {
  redBox.style.background = "rgb(255, 102, 102, 0.5)";
  blueBox.style.background = "rgb(102, 217, 255, 0.5)";
  greenBox.style.background = "rgb(140, 255, 102, 0.5)";
  yellowBox.style.background = "rgb(255, 255, 102, 0.5)";
}
//Curor function
function playerOptions() {
  switch (on) {
    case true:
      redBox.style.cursor = "pointer";
      blueBox.style.cursor = "pointer";
      greenBox.style.cursor = "pointer";
      yellowBox.style.cursor = "pointer";
      break;
    case false:
      redBox.style.cursor = "default";
      blueBox.style.cursor = "default";
      greenBox.style.cursor = "default";
      yellowBox.style.cursor = "default";
  }
}
function check() {
  if (
    playerOrder[playerOrder.length - 1] !== cpuOrder[playerOrder.length - 1]
  ) {
    good = false;
  }
  if (good == false) {
    winValue = -1;
    on = false;
    powerBtn.checked = false;
    playerOptions();
    colorFlash();
    gameEnd();
  }
  if (cpuOrder.length === playerOrder.length && good) {
    winValue = 1;
    on = false;
    powerBtn.checked = false;
    playerOptions();
    colorFlash();
    gameEnd();
  }
  if (turnCount == playerOrder.length && good && winValue === 0) {
    compTurn = true;
    playerOrder = [];
    flash = 0;
    turnCount++;
    counter.innerHTML = turnCount;
    intervalId = setInterval(gameTurn, 1000);
  }
}
function colorFlash() {
  redBox.style.background = "rgb(255, 0, 0, 100%)";
  blueBox.style.background = "rgb(0, 191, 255, 100%)";
  greenBox.style.background = "rgb(64, 255, 0, 100%)";
  yellowBox.style.background = "rgb(255, 255, 0, 100%)";
}
function gameEnd() {
  if (winValue < 0) {
    let audio = document.getElementById("lose");
    audio.play();
    results.style.color = "#fa2727";
    counter.innerHTML = "LOSE";
    results.innerHTML = "You lose!";
  } else if (winValue > 0) {
    let audio = document.getElementById("victory");
    audio.play();
    results.style.color = "#6ff98b";
    counter.innerHTML = "WIN";
    results.innerHTML = "You Win!";
  }
}
