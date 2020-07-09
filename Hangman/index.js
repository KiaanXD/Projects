let words = ['html', 'javascript', 'crush', 'teamfortress', 'smite'];
let rng = Math.floor(Math.random() * words.length)
let hints = ['mark up language', 'no foundation programming lang', 'fuck scylla 2', 'best multiclass first person shooter', 'best moba'];
let answer = words[rng];
const keyboardKeys = document.querySelectorAll('.keyboardKey');
let wordToBeGuessed = document.getElementById('wordSpotlight');
let mistakeCount = document.getElementById('mistakeCount');
let winStatus = document.getElementById('winStatus');
let restartBtn = document.getElementById('restartBtn');
let hintBtn = document.getElementById('hintKey');
let hintSpotlight = document.getElementById('hintSpotlight');
restartBtn.addEventListener('click', restartGame);
keyboardKeys.forEach(key => key.addEventListener('click', keyPress));
hintBtn.addEventListener('click', getHint, {once: true});
let winGame = false;
let wordStatus;
let mistakes = 0;
let guessedLetters = [];
let answerArr = [];
let factor;
function keyPress() {
    handleGuess(this.dataset.key);
    if (answer.split('').indexOf(this.dataset.key) >= 0) {
        this.classList.add('correctDisabled');
       } else {
        this.classList.add('disabled');
       }
}
function handleGuess (chosenLetter) {
   guessedLetters.push(chosenLetter);
   if (answer.split('').indexOf(chosenLetter) >= 0) {
    guessedWord();
   } else if (answer.split('').indexOf(chosenLetter) < 0) {
       mistakes++
       mistakeCount.innerHTML = mistakes;
       updateHangmanPic();
       checkForLoss();
   }
}

function guessedWord () {
    wordStatus = answer.split('').map(letter => {
        if (guessedLetters.indexOf(letter) >= 0) {
            return letter;
        } else {
            return ' _ ';
        }
    }).join('')
    wordToBeGuessed.innerHTML = wordStatus;
    checkGame();
}

function checkGame() {
  factor = answer.split('').every(letter => guessedLetters.indexOf(letter) >= 0);
  if (factor) {
      winStatus.style.color = 'green';
      winStatus.innerHTML = 'VICTORY!'
      deactivateKeyboard();
  }
}
function checkForLoss() {
    if (mistakes >= 6) {
        winStatus.style.color = 'red';
        winStatus.innerHTML = 'LOSS';
        deactivateKeyboard();
    }
}
function deactivateKeyboard () {
    keyboardKeys.forEach(key => key.removeEventListener('click', keyPress));
    if (factor) {
        keyboardKeys.forEach(key => key.classList.add('correctDisabled'));
    } else if (!factor) {
        keyboardKeys.forEach(key => key.classList.add('disabled'));
    }
}
function updateHangmanPic () {
    document.getElementById('hangmanPic').src = `${mistakes}.png`
}
function restartGame () {
    location.reload();
    return false;
}
function getHint() {
    hintSpotlight.classList.remove('noDisplay');
    hintSpotlight.innerHTML = hints[rng];
    hintBtn.style.backgroundColor = 'red';
}
guessedWord();
updateHangmanPic();