//variables and operator for storing numbers
const firstNum = 15;
const secNum = 2;
const opperators = ["+", "-", "*", "/"];
//calculation operation functions
const add = (a, b) => {
  return a + b;
};
add(firstNum, secNum);

const subtract = (a, b) => {
  return a - b;
};
subtract(firstNum, secNum);

const multiply = (a, b) => {
  return a * b;
};
multiply(firstNum, secNum);

const divide = (a, b) => {
  return a / b;
};
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
    if (button === onebtn) {
      const one = (pTag.textContent += "1");
      displayScreen.appendChild(pTag);
      console.log(one);
    }

    if (button === twobtn) {
      const two = (pTag.textContent += "2");
      displayScreen.appendChild(pTag);
      console.log(two);
    }

    if (button === threebtn) {
      const three = (pTag.textContent += "3");
      displayScreen.appendChild(pTag);
      console.log(three);
    }

    if (button === fourbtn) {
      pTag.textContent += "4";
      displayScreen.appendChild(pTag);
    }

    if (button === fivebtn) {
      pTag.textContent += "5";
      displayScreen.appendChild(pTag);
    }

    if (button === sixbtn) {
      pTag.textContent += "6";
      displayScreen.appendChild(pTag);
    }

    if (button === sevenbtn) {
      pTag.textContent += "7";
      displayScreen.appendChild(pTag);
    }

    if (button === eightbtn) {
      pTag.textContent += "8";
      displayScreen.appendChild(pTag);
    }

    if (button === ninebtn) {
      pTag.textContent += "9";
      displayScreen.appendChild(pTag);
    }

    if (button === zerobtn) {
      pTag.textContent += "0";
      displayScreen.appendChild(pTag);
    }
  });
});

//create a variable to select all the button
//created a command for itterating through all of the buttons
//once a button is pressed,
