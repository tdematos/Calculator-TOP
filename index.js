//variables and operator for storing numbers
let currentValue = "";
let previousValue = "";
let selectedOperator = null;
let result;
let decimalAdded = false;

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
      if (numDisplay.textContent.length <= 10) {
        if (e.target.textContent === "." && decimalAdded) {
          return; // Prevent adding multiple decimal points
        }

        if (e.target.textContent === ".") {
          decimalAdded = true; // Set flag to true after adding the decimal point
        }

        numDisplay.textContent += e.target.textContent;
        currentValue = numDisplay.innerText;
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
        decimalAdded = false;
        selectedOperator = e.target.textContent;
        document.querySelector(".calc-numbers").textContent = "";
      }
    });
  });
};

// function to calculate numbers
const calculateNumbers = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  const equalsButton = document.querySelector(".func-equals");

  equalsButton.addEventListener("click", (e) => {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
      numDisplay.textContent = "Abort!";
      return;
    }

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

    numDisplay.textContent = parseFloat(result.toFixed(8));
    currentValue = "";
    currentValue = parseFloat(result.toFixed(8));
    previousValue = "";
    selectedOperator = null;
    decimalAdded = false;
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

//adding function for converting numbers into percentages
const convertToPercentage = () => {
  const numDisplay = document.querySelector(".calc-numbers");
  const percentBtn = document.querySelector(".Percent");

  percentBtn.addEventListener("click", () => {
    let targetNumber = numDisplay.innerText;
    let percentValue = targetNumber / 100;
    numDisplay.textContent = percentValue;
  });
};

// Function to handle keyboard input
const handleKeyboardInput = () => {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    const numDisplay = document.querySelector(".calc-numbers");

    if (!isNaN(key) || key === ".") {
      if (numDisplay.textContent.length <= 10) {
        if (key === "." && decimalAdded) {
          return;
        }

        if (key === ".") {
          decimalAdded = true;
        }

        numDisplay.textContent += key;
        currentValue = numDisplay.innerText;
        console.log(currentValue);
      }
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      if (currentValue !== "") {
        previousValue = currentValue;
        currentValue = "";
        decimalAdded = false;
        selectedOperator = key;
        console.log(selectedOperator);
        numDisplay.textContent = "";
      }
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();

      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentValue);

      if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
        numDisplay.textContent = "Abort!";
        return;
      }

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
        case "/":
          if (num2 === 0) {
            numDisplay.textContent = "Error: Division by zero";
            return;
          }
          result = divide(num1, num2);
          break;
        default:
          return;
      }

      numDisplay.textContent = result;
      currentValue = "";
      currentValue = result;
      previousValue = "";
      selectedOperator = null;
      decimalAdded = false;
    } else if (key === "C" || key === "Delete") {
      numDisplay.textContent = "";
      currentValue = "";
      previousValue = "";
      selectedOperator = null;
      result = "";
    }
  });
};

// Function for initializing the calculator
const initialize = () => {
  displayCurrentValue();
  selectOperation();
  convertToPercentage();
  calculateNumbers();
  clearScreen();
  handleKeyboardInput();
};

document.addEventListener("DOMContentLoaded", initialize);

//add jquery to code
