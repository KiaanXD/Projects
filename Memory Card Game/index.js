const cards = document.querySelectorAll('.memory-card')
let cardsBg = document.querySelectorAll('.front-face')
let restartBtn = document.getElementById('restartBtn')
let timerCenter = document.querySelector('.timerCenter')
let scoreSub = document.querySelector('.scoreSub');
let score = document.getElementById('score');
let gameScore = 0;
let wrongGameScore = 0;
let wrongScore = document.getElementById('wrongScore');
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;
let winCount = 0;
let intervalId;
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let timerStart = false;
let winStatus = document.getElementById('winStatus');
cards.forEach(card => card.addEventListener('click', flipCard));
restartBtn.addEventListener('click', restartGame);

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

function restartGame() {
hasFlippedCard = false;
lockboard = false;
[firstCard, secondCard] = [null, null];
wrongGameScore = 0;
wrongScore.innerHTML = wrongGameScore;
winCount = 0;
shuffle();
clearInterval(intervalId);
cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.classList.remove('flip'));
cardsBg.forEach(cardFace => cardFace.classList.remove('correctMatch'));
minutesLabel.innerHTML = 0;
minutesLabel.style.color = 'black';
secondsLabel.innerHTML = 0;
secondsLabel.style.color = 'black';
timerCenter.classList.remove('gold');
totalSeconds = 0;
timerStart = false;
winStatus.style.color = 'black';
score.style.color = black;
gameScore = 0;
score.innerHTML = gameScore;


}
function flipCard () {
    if (!lockboard) {
    if (!timerStart) {
    intervalId = setInterval(setTime, 1000);
    timerStart = true;
     }
    if (this !== firstCard) {
    this.classList.add('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch()
    }
  }
}
function checkForMatch() {
    if (firstCard.dataset.cardface === secondCard.dataset.cardface) {
        winCount++;
        gameScore+=2;
        score.innerHTML= gameScore;
        firstCard.firstElementChild.classList.add('correctMatch');
        secondCard.firstElementChild.classList.add('correctMatch');
        disableCards();
        winMatch();
        resetBoard();
    } else {
    unflipCards();
    }
}
function disableCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}
function unflipCards() {
    wrongGameScore += 1;
    wrongScore.innerHTML = wrongGameScore;
    firstCard.firstElementChild.classList.add('incorrectMatch');
    secondCard.firstElementChild.classList.add('incorrectMatch');
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard()
    }, 1500)
}
function resetBoard () {
    firstCard.firstElementChild.classList.remove('incorrectMatch');
    secondCard.firstElementChild.classList.remove('incorrectMatch');
    hasFlippedCard = false;
    lockboard = false;
    [firstCard, secondCard] = [null, null];
}
function winMatch() {
    if (winCount === 6) {
        clearInterval(intervalId);
        minutesLabel.style.color = "#FFD700";
        secondsLabel.style.color = "#FFD700";
        timerCenter.classList.add('gold');
        winStatus.style.color = 'green';
        score.style.color = 'green';
    }
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

