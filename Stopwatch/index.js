function Stopwatch(elem) {
  let time = 0;
  let interval;
  let offset;
  let running = false;

  function update() {
    if (running === true) {
      time += delta();
    }
    let formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    let time = new Date(timeInMilliseconds);
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }
    return minutes + ":" + seconds + "." + milliseconds;
  }

  this.start = function () {
    if (running === false) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      running = true;
      error.innerHTML = "";
    } else {
      error.innerHTML = "Stopwatch is already running.";
    }
  };

  this.stop = function () {
    if (running === true) {
      clearInterval(interval);
      interval = null;
      running = false;
      error.innerHTML = "";
    } else {
      error.innerHTML = "Stopwatch is not running.";
    }
  };

  this.reset = function () {
    if (running === true) {
      clearInterval(interval);
      interval = null;
      running = false;
      time = 0;
      update();
    } else {
      time = 0;
      updated();
    }
  };
}

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");
let timer = document.querySelector("#timer");
let error = document.querySelector(".errorTxt");

let watch = new Stopwatch(timer);

startBtn.addEventListener("click", watch.start);
stopBtn.addEventListener("click", watch.stop);
resetBtn.addEventListener("click", watch.reset);
