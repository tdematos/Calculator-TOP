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

const zerobtn = document.querySelector(".zero");
const onebtn = document.querySelector(".one");
const twobtn = document.querySelector(".two");
const threebtn = document.querySelector(".three");
const fourbtn = document.querySelector(".four");
const fivebtn = document.querySelector(".five");
const sixbtn = document.querySelector(".six");
const sevenbtn = document.querySelector(".seven");
const eightbtn = document.querySelector(".eight");
const ninebtn = document.querySelector(".nine");

const displayScreen = document.querySelector(".calc-display");
const pTag = document.createElement("p");
const allBtns = document.querySelectorAll("button");

allBtns.forEach(function (button) {
  button.addEventListener("click", () => {
    if ((button = onebtn)) {
      pTag.textContent += "1";
      displayScreen.appendChild(pTag);
    }

    if ((button = twobtn)) {
      pTag.textContent += "2";
      displayScreen.appendChild(pTag);
      console.log(displayScreen);
    }
  });
});

//create a variable to select all the button
//created a command for itterating through all of the buttons
//once a button is pressed,
