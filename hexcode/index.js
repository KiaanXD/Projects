const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");
const hexcode = document.querySelector(".colorNumber");

colorBtn.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    let rng = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[rng];
  }
  bodyBcg.style.backgroundColor = hexCol;
  hexcode.innerHTML = hexCol;
}
