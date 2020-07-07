const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;
cards.forEach(card => card.addEventListener('click', flipCard));
function flipCard () {
    if (!lockboard) {
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
        console.log('W')
        disableCards();
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
    lockboard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard()
    }, 1500)
}
function resetBoard () {
    hasFlippedCard = false;
    lockboard = false;
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


