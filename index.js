//variables and operator for storing numbers
let currentvalue;
const opperators = ["add", "subtract", "multiply", "divide"];

//calculation operation functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

//function to display current value on screen
function displayCurrentValue() {
  let numDisplay = document.querySelector(".calc-numbers");
  let allBtns = document.querySelectorAll("button");

  allBtns.forEach(function (button) {
    button.addEventListener("click", (e) => {
      numDisplay.textContent += e.target.textContent;
      let currentValue = numDisplay.innerText;
      console.log(currentValue);
    });
  });
}

// function to calculate numbers

// function clearScreen() {

// Function for initializing the calculator
const initialize = () => {
  displayCurrentValue();
};

document.addEventListener("DOMContentLoaded", initialize);

//Make sure can only type in numbers and not symbols
//Make sure period can only be typed in once.
