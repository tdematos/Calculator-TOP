//variables for storing numbers
const firstNum = 15;
const secNum = 2;
//calculation operation functions
function add(a, b) {
  return a + b;
}
add(firstNum, secNum);

function subtract(a, b) {
  return a - b;
}
subtract(firstNum, secNum);

function multiply(a, b) {
  return a * b;
}
multiply(firstNum, secNum);

function divide(a, b) {
  return a / b;
}
divide(firstNum, secNum);
//function to execute calculations
let operate = function (a, b) {
  return multiply(a, b);
};
operate(firstNum, secNum);
//function for displaying value on calculator

const allBtns = document.querySelectorAll("button");

allBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    console.log(button);
  });
});

//create a variable to select all the button
