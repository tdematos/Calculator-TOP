const firstNum = 15;
const secNum = 2;

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

let operate = function (a, b) {
  return multiply(a, b);
};
operate(firstNum, secNum);
