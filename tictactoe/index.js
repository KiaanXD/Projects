const X_CLASS = "x";
const O_CLASS = "o";
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const startBtn = document.getElementById("startBtn");
const restartButton = document.getElementById("restartButton");
restartButton.classList.add("hidden");
const winningMessage = document.querySelector(".winning-message");
const whoWins = document.getElementById("whoWins");
let circleTurn;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  restartButton.classList.remove("hidden");
  startGame();
});
restartButton.addEventListener("click", startGame);

function startGame() {
  winningMessage.classList.add("hide");
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(O_CLASS);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (check(currentClass)) {
    winningMessage.classList.remove("hide");
    whoWins.innerHTML = `${currentClass} wins!`;
  } else if (isDraw()) {
    winningMessage.classList.remove("hide");
    whoWins.innerHTML = "Draw!";
  }
  swapTurns();
  setBoardHoverClass();
}
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurns() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);
  if (circleTurn) {
    board.classList.add(O_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
function check(currentClass) {
  return WINNING_COMBOS.some((combo) => {
    return combo.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
function isDraw() {
  return [...cellElements].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
}
