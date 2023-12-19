//variables and operator for storing numbers
const op1 = "";
const op2 = "";
const opperators = ["add", "subtract", "multiply", "divide"];
//calculation operation functions
const add = (a, b) => {
  return a + b;
};
add(op1, op2);

const subtract = (a, b) => {
  return a - b;
};
subtract(op1, op2);

const multiply = (a, b) => {
  return a * b;
};
multiply(op1, op2);

const divide = (a, b) => {
  return a / b;
};
divide(op1, op2);

//function to execute calculations
let operate = (a, b, operand) => {
  return operand(a, b);
};

let displayScreen = document.querySelector(".calc-display");
let numDisplay = document.querySelector(".calc-numbers");
let allBtns = document.querySelectorAll("button");

allBtns.forEach(function (button) {
  button.addEventListener("click", (e) => {
    updateDisplay(e.target.textContent);
  });
});

// function clearScreen() {
//   numDisplay.value  = "";
// }

function updateDisplay(number) {
  if (numDisplay.textContent.length <= 10) {
    numDisplay.textContent += number;
  } else {
  }
}
