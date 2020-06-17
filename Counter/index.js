let counter = document.querySelector(".counter");
const incrementUpBtn = document.querySelector("#incrementUp");
const incrementDownBtn = document.querySelector("#incrementDown");

let count = 0;

incrementUpBtn.addEventListener("click", incrementCount);
incrementDownBtn.addEventListener("click", deincrementCount);

function incrementCount() {
  count++;
  counter.innerHTML = count;
  if (count > 0) {
    counter.style.color = "green";
  } else if (count === 0) {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 800,
    fill: "forwards",
  });
}
function deincrementCount() {
  count--;
  counter.innerHTML = count;
  if (count < 0) {
    counter.style.color = "red";
  } else if (count === 0) {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 800,
    fill: "forwards",
  });
}
