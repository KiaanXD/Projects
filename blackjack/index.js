let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let btnPlay = document.getElementById("btnPlay");
let btnHit = document.getElementById("btnHit");
let btnStand = document.getElementById("btnStand");
let intervalID;
let playerWinValue;
let cpuWinValue;
let compTurn;
let dealerDraw;
let playerDraw;
let power;
btnPlay.addEventListener("click", play);
function play() {
  console.clear();
  dealerDraw = [];
  playerDraw = [];
  compTurn = false;
  power = true;
  intervalID = 0;
  let incrementer = 0;
  while (incrementer < 2) {
    playerDraw.push(cards[randomNumber(13)]);
    dealerDraw.push(cards[randomNumber(13)]);
    incrementer++;
  }
  console.log("player Arr");
  console.log(playerDraw);
  console.log("dealer Arr");
  console.log(dealerDraw);
  playerCheck(playerDraw);
  cpuCheck(dealerDraw);
}
btnHit.addEventListener("click", () => {
  if (power) hit();
});
btnStand.addEventListener("click", () => {
  if (power) {
    stand();
  }
});

function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

function translate(x) {
  let translatedCard;
  switch (x) {
    case "J":
      translatedCard = 10;
      break;
    case "Q":
      translatedCard = 10;
      break;
    case "K":
      translatedCard = 10;
      break;
    case "A":
      translatedCard = 11;
      break;
  }
  return translatedCard;
}
function playerCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arr[i] = translate(arr[i]);
    }
  }
  playerDraw = reduceBJ(arr);
  if (playerDraw[0] > 21) {
    playerWinValue = false;
    playerGameEnd();
  } else if (playerDraw[0] === 21) {
    playerWinValue = true;
    playerGameEnd();
  }
}
function cpuCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arr[i] = translate(arr[i]);
    }
  }
  dealerDraw = reduceBJ(arr);
  if (dealerDraw[0] > 21) {
    cpuWinValue = false;
    clearInterval(intervalID);
    cpuGameEnd();
  } else if (dealerDraw[0] === 21) {
    cpuWinValue = true;
    clearInterval(intervalID);
    cpuGameEnd();
  }
  if (!power) {
    if (dealerDraw[0] > playerDraw[0] && dealerDraw[0] < 21) {
      cpuWinValue = true;
      clearInterval(intervalID);
      cpuGameEnd();
    }
  }
}
function reduceBJ(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return [sum];
}

function hit() {
  playerDraw.push(cards[randomNumber(13)]);
  console.log(playerDraw);
  playerCheck(playerDraw);
}
function stand() {
  power = false;
  intervalID = setInterval(cpuTurn, 1000);
}
function cpuTurn() {
  if (!power) {
    dealerDraw.push(cards[randomNumber(13)]);
    console.log("Dealer...");
    console.log(dealerDraw);
    cpuCheck(dealerDraw);
  }
}
function playerGameEnd() {
  if (playerWinValue) {
    console.log("Player Wins!");
  } else {
    console.log("Player Loses!");
  }
}
function cpuGameEnd() {
  if (cpuWinValue) {
    console.log("Dealer wins!");
  } else {
    console.log("Dealer busts!");
  }
}
