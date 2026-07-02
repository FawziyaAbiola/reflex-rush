// ==========================
// DOM ELEMENTS
// ==========================

const number = document.querySelector(".num");
const addButton = document.querySelector(".add");
const minusButton = document.querySelector(".minus");
const resetButton = document.querySelector(".reset");
const startGame = document.querySelector(".start");
const highest = document.querySelector(".highest");
const timeLeft = document.querySelector(".time");

// ==========================
// INITIAL UI STATE
// ==========================

addButton.disabled = true;
minusButton.disabled = true;

// ==========================
// GAME STATE
// ==========================

let highestCount = 0;
let remainingTime = 10;

// ==========================
// EVENT LISTENERS
// ==========================

// Add Button

addButton.addEventListener("click", function () {
  console.log("Button clicked!");

  const currentCount = Number(number.innerText);
  number.innerText = currentCount + 1;

  const newCount = Number(number.innerText);

  if (newCount > highestCount) {
    highestCount = newCount;
    highest.innerText = highestCount;
  }

  updateColor();
});

// Minus Button

minusButton.addEventListener("click", function () {
  const currentCount = Number(number.innerText);

  if (currentCount === 0) {
    return;
  }

  number.innerText = currentCount - 1;

  updateColor();
});

// Reset Button

resetButton.addEventListener("click", function () {
  number.innerText = 0;

  updateColor();
});

// Start Game

startGame.addEventListener("click", function () {
  startGame.disabled = true;

  addButton.disabled = false;
  minusButton.disabled = false;

  const gameDuration = 10;

  remainingTime = gameDuration;
  timeLeft.innerText = remainingTime;

  number.innerText = 0;
  updateColor();

  const timer = setInterval(function () {
    remainingTime--;
    timeLeft.innerText = remainingTime;

    if (remainingTime === 0) {
      clearInterval(timer);

      startGame.disabled = false;
      addButton.disabled = true;
      minusButton.disabled = true;
    }
  }, 1000);
});

// ==========================
// FUNCTIONS
// ==========================

function updateColor() {
  const currentCount = Number(number.innerText);

  if (currentCount === 0) {
    number.style.color = "gold";
  } else {
    number.style.color = "white";
  }
}
