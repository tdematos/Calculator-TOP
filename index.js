//variables and operator for storing numbers
let currentValue = "";
let previousValue = "";
let selectedOperator = null;
let result;

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
  let decimalAdded = false; // Flag to track if the decimal point is already added

  numBtns.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (numDisplay.textContent.length <= 10) {
        if (e.target.textContent === "." && decimalAdded) {
          return; // Prevent adding multiple decimal points
        }

        if (e.target.textContent === ".") {
          decimalAdded = true; // Set flag to true after adding the decimal point
        }

        numDisplay.textContent += e.target.textContent;
        currentValue = numDisplay.innerText;
        console.log(currentValue);
      } else {
        return;
      }
    });
  });
};

//function for selecting the operation
const selectOperation = () => {
  const functionButtons = document.querySelectorAll(".func");
  const funcBtns = Array.from(functionButtons);

  funcBtns.forEach((Btn) => {
    Btn.addEventListener("click", (e) => {
      if (currentValue !== "") {
        previousValue = currentValue;
        currentValue = "";
        selectedOperator = e.target.textContent;
        console.log(selectedOperator);
        document.querySelector(".calc-numbers").textContent = "";
      }
    });
  });
};

// function to calculate numbers
const calculateNumbers = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  const equalsButton = document.querySelector(".func-equals");
  console.log(equalsButton);

  equalsButton.addEventListener("click", (e) => {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
      numDisplay.textContent = "Abort!";
      return;
    }

    console.log(e.target.textContent);
    switch (selectedOperator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "÷":
        if (num2 === 0) {
          numDisplay.textContent = "Error: Division by zero";
          return;
        }
        result = divide(num1, num2);
        break;
      default:
        return;
    }

    console.log(result);
    numDisplay.textContent = result;
    currentValue = "";
    currentValue = result;
    previousValue = "";
    selectedOperator = null;
  });
};

// function for clearing the screen
const clearScreen = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  const clearButton = document.querySelector(".clear");

  clearButton.addEventListener("click", () => {
    numDisplay.textContent = "";
    currentValue = "";
    previousValue = "";
    selectedOperator = null;
    result = "";
  });
};

// Function for initializing the calculator
const initialize = () => {
  displayCurrentValue();
  selectOperation();
  calculateNumbers();
  clearScreen();
};

document.addEventListener("DOMContentLoaded", initialize);

//add jquery to code
//Make sure can only type in numbers and not symbols
//Make sure period can only be typed in once.
//add keyboard functionality to code
//add function to percentage button
