//variables and operator for storing numbers
let currentvalue;

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
const displayCurrentValue = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  const numberButtons = document.querySelectorAll(".num-btn");
  const numBtns = Array.from(numberButtons);

  numBtns.forEach(function (button) {
    button.addEventListener("click", (e) => {
      numDisplay.textContent += e.target.textContent;
      let currentValue = numDisplay.innerText;
      console.log(currentValue);
      return currentValue;
    });
  });
};

//function for selecting the operation
const selectOperation = () => {
  const functionButtons = document.querySelectorAll(".func");
  const funcBtns = Array.from(functionButtons);

  funcBtns.forEach((Btn) => {
    Btn.addEventListener("click", (e) => {
      let operator = e.target.textContent;
      console.log(operator);
      return operator;
    });
  });
};

// function to calculate numbers
const calculateNumbers = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  displayCurrentValue();
  selectOperation();

  if (selectOperation() === "+") {
    let valueA = displayCurrentValue();
    numDisplay.textContent = "";
  }
};

// function clearScreen() {

// Function for initializing the calculator
const initialize = () => {
  // selectOperation();
  calculateNumbers();
};

document.addEventListener("DOMContentLoaded", initialize);

//Make sure can only type in numbers and not symbols
//Make sure period can only be typed in once.
//Add parameter for only being able to type in 10 numbers on the screen so no overflow happens
