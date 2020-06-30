let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let btnPlay = document.getElementById("btnPlay");
let btnHit = document.getElementById("btnHit");
let btnStand = document.getElementById("btnStand");
let playerCards = document.getElementById('playerCards')
let playerCardsValue = document.getElementById('playerCardsValue')
let winStatus = document.getElementById('winStatus');
let dealerCards = document.getElementById('dealerCards');
let dealerCardsValue = document.getElementById('dealerCardsValue');
let dealerWinStatus = document.getElementById('dealerWinStatus');
let intervalID;
let playerWinValue;
let dealerWinValue;
let compTurn;
let dealerDraw;
let dealerHandValue;
let playerDraw;
let playerHandValue;
let power;
btnPlay.addEventListener("click", play);
function play() {
  winStatus.innerHTML = "";
  dealerWinStatus.innerHTML = "";
  dealerCardsValue.innerHTML = "";
  power = true;
  intervalID = 0;
  playerDraw = [];
  dealerDraw = [];
  playerHandValue = 0;
  dealerHandValue = 0;
  playerWinValue;
  dealerWinValue;
  drawCard(dealerDraw);
  while (playerDraw.length !== 2) {
    drawCard(playerDraw);
  }
  playerCards.innerHTML = playerDraw;
  dealerCards.innerHTML = dealerDraw;
  calculateValue(playerDraw)
}
btnHit.addEventListener("click", hit)
btnStand.addEventListener("click", stand)
function drawCard(arr) {
  arr.push(cards[Math.floor(Math.random() * 13)]);
}
function calculateValue (arr) {
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
    switch(arr[i]) {
      case 'J':
        total += 10;
        break;
      case 'Q':
        total+= 10;
        break;
      case 'K':
        total += 10;
        break;
      case 'A':
        if (total < 11) {
          total+= 11
        } else if (total >= 11) {
          total+=1
        }
        break;
    }
  } else if (typeof arr[i] === "number") {
    total += arr[i]
    }
  }
  playerHandValue = total;
  playerCardsValue.innerHTML = playerHandValue;
  playerCheck()
}
function calculateDealerValue (arr) {
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
    switch(arr[i]) {
      case 'J':
        total += 10;
        break;
      case 'Q':
        total+= 10;
        break;
      case 'K':
        total += 10;
        break;
      case 'A':
        if (total < 11) {
          total+= 11
        } else if (total >= 11) {
          total+=1
        }
        break;
    }
  } else if (typeof arr[i] === "number") {
    total += arr[i]
    }
  }
  dealerHandValue = total;
  dealerCardsValue.innerHTML = dealerHandValue;
  dealerCheck()
}
function hit() {
  if (power) {
  playerDraw.push(cards[Math.floor(Math.random() * 13)]);
  playerCards.innerHTML = playerDraw;
  calculateValue(playerDraw);
  }
}
function stand() {
  if (power) {
  power = false;
  intervalID = setInterval(dealerTurn, 1000)
  }
}
function playerCheck () {
  if (playerHandValue > 21) {
    playerWinValue = false;
    playergameEnd();
  } else if (playerHandValue === 21) {
    playerWinValue = true;
    playergameEnd()
  }
}
function playergameEnd() {
  power = false;
  if (playerWinValue === true && playerHandValue === 21) {
    winStatus.style.color = "green";
    winStatus.innerHTML = "BLACKJACK!"
  } 
  else if (playerWinValue === false && playerHandValue > 21) {
    winStatus.style.color = 'red'
    winStatus.innerHTML = 'You busted!'
  }
  else if (playerWinValue) {
    winStatus.style.color = 'green';
    winStatus.innerHTML = "You win!"
  } 
  else if (!playerWinValue) {
    winStatus.style.color = 'red';
    winStatus.innerHTML = "You lose!"
  }
}
function dealerTurn () {
  if (!power) {
    dealerDraw.push(cards[Math.floor(Math.random() * 13)]);
    dealerCards.innerHTML = dealerDraw;
    calculateDealerValue(dealerDraw)
  }
}
function dealerCheck () {
  if (dealerHandValue > 21) {
    dealerWinValue = false;
    playerWinValue = true;
    clearInterval(intervalID);
    dealerGameEnd();
  } else if (dealerHandValue === 21) {
    dealerWinValue = true;
    playerWinValue = false;
    clearInterval(intervalID);
    dealerGameEnd();
  } else if (dealerHandValue > playerHandValue && dealerHandValue < 21) {
    dealerWinValue = true;
    playerWinValue = false;
    clearInterval(intervalID);
    dealerGameEnd()
  }
}
function dealerGameEnd () {
  if (dealerWinValue === true && dealerHandValue === 21) {
    dealerWinStatus.style.color = 'green';
    dealerWinStatus.innerHTML = 'Dealer BLACKJACK!'
    playergameEnd();
  }
  else if (dealerWinValue) {
    dealerWinStatus.style.color = 'green';
    dealerWinStatus.innerHTML = 'Dealer wins!'
    playergameEnd();
  } else if (!dealerWinValue) {
    dealerWinStatus.style.color = 'red';
    dealerWinStatus.innerHTML = 'Dealer Busts!'
    playergameEnd();
  }
}