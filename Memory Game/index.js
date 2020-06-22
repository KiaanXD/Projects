//Declaring start/submit buttons
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitBtn");
const btnOne = document.getElementById("btn1");
const btnTwo = document.getElementById("btn2");
const btnThree = document.getElementById("btn3");
const btnFour = document.getElementById("btn4");
const displayMemory = document.getElementById("displayMemory");
const previewSubmit = document.getElementById("previewSubmit");
const results = document.getElementById("results");
//Adding eventListeners
startBtn.addEventListener("click", gameStart);
//Function that runs on button Start
function gameStart() {
  let rngArr = [];
  let inputArr = [];
  let index = 0;
  previewSubmit.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    rngArr.push(Math.ceil(Math.random() * 4));
  }
  console.log(rngArr);

  (function displayRng() {
    displayMemory.innerHTML = rngArr[index];
    if (++index < rngArr.length) {
      setTimeout(displayRng, 3000);
    } else {
      setTimeout(btnEvent, 3000);
    }
  })();

  function btnEvent() {
    displayMemory.innerHTML = "Good Luck!";
    btnOne.addEventListener("click", userInput1);
    btnTwo.addEventListener("click", userInput2);
    btnThree.addEventListener("click", userInput3);
    btnFour.addEventListener("click", userInput4);
  }

  function userInput1() {
    inputArr.push(1);
    previewSubmit.innerHTML = inputArr;
  }
  function userInput2() {
    inputArr.push(2);
    previewSubmit.innerHTML = inputArr;
  }
  function userInput3() {
    inputArr.push(3);
    previewSubmit.innerHTML = inputArr;
  }
  function userInput4() {
    inputArr.push(4);
    previewSubmit.innerHTML = inputArr;
  }

  submitBtn.addEventListener("click", gameSubmit);
  function gameSubmit() {
    let winValue = null;
    if (rngArr.toString() === inputArr.toString()) {
      winValue = "You Win!";
    } else {
      winValue = "You Lose!";
    }
    results.innerHTML = winValue;
  }
}
