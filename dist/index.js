"use strict";
//variables and operator for storing numbers
let currentValue = "";
let previousValue = "";
let selectedOperator = null;
let result = null;
let decimalAdded = false;
let calculationArr = [];
let currentArrIndex = 0;
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
            var _a;
            if (numDisplay.textContent.length <= 10) {
                const target = e.target;
                if (target.textContent === "." && decimalAdded) {
                    return;
                }
                if (target.textContent === ".") {
                    decimalAdded = true;
                }
                numDisplay.textContent += (_a = target === null || target === void 0 ? void 0 : target.textContent) !== null && _a !== void 0 ? _a : "";
                currentValue = numDisplay.innerText;
            }
            else {
                return;
            }
        });
    });
};
//function for selecting the operation
const selectOperation = () => {
    const functionButtons = document.querySelectorAll(".func");
    const funcBtns = Array.from(functionButtons);
    const numDisplay = document.querySelector(".calc-numbers");
    funcBtns.forEach((Btn) => {
        Btn.addEventListener("click", (e) => {
            if (currentValue !== "") {
                currentValue = numDisplay.innerText;
                previousValue = currentValue;
                currentValue = "";
                decimalAdded = false;
                const target = e.target;
                selectedOperator = target.textContent;
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
        currentValue = numDisplay.innerText;
        const num1 = parseFloat(String(previousValue));
        const num2 = parseFloat(String(currentValue));
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
        numDisplay.textContent = parseFloat(result.toFixed(8)).toString();
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
        let targetNumber = parseFloat(numDisplay.innerText);
        let percentValue = targetNumber / 100;
        numDisplay.textContent = percentValue.toString();
    });
};
// Function to handle keyboard input
const handleKeyboardInput = () => {
    document.addEventListener("keydown", (event) => {
        var _a;
        const key = event.key;
        const numDisplay = document.querySelector(".calc-numbers");
        if (!isNaN(parseFloat(key)) || key === ".") {
            if (numDisplay.textContent.length <= 10) {
                if (key === "." && decimalAdded) {
                    return;
                }
                if (key === ".") {
                    decimalAdded = true;
                }
                numDisplay.textContent += key;
                currentValue = (_a = numDisplay === null || numDisplay === void 0 ? void 0 : numDisplay.textContent) !== null && _a !== void 0 ? _a : "";
                console.log(currentValue);
            }
        }
        else if (key === "+" || key === "-" || key === "*" || key === "/") {
            if (currentValue !== "") {
                previousValue = currentValue;
                currentValue = "";
                decimalAdded = false;
                selectedOperator = key;
                console.log(selectedOperator);
                numDisplay.textContent = "";
            }
        }
        else if (key === "Enter" || key === "=") {
            event.preventDefault();
            const num1 = parseFloat(String(previousValue));
            const num2 = parseFloat(String(currentValue));
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
            numDisplay.textContent = String(result);
            currentValue = "";
            currentValue = result;
            previousValue = "";
            selectedOperator = null;
            decimalAdded = false;
        }
        else if (key === "C" || key === "Delete") {
            numDisplay.textContent = "";
            currentValue = "";
            previousValue = "";
            selectedOperator = null;
            result = "";
        }
    });
};
//Code for adding calculation to table
const saveCalculation = () => {
    const allButtons = document.querySelectorAll(".button");
    const table = document.querySelector("table");
    const numDisplay = document.querySelector(".calc-numbers");
    allButtons.forEach((button) => {
        button === null || button === void 0 ? void 0 : button.addEventListener("click", (event) => {
            const targetElement = event.target;
            const secondRow = table === null || table === void 0 ? void 0 : table.rows[1];
            if (secondRow && secondRow.cells[0].innerText === "...") {
                const firstRow = document.querySelector(".starting-row");
                if (firstRow)
                    firstRow.innerText = "";
            }
            if (!calculationArr[currentArrIndex]) {
                calculationArr[currentArrIndex] = "";
            }
            calculationArr[currentArrIndex] += targetElement.innerText || "";
            if (targetElement.innerText === "AC") {
                calculationArr[currentArrIndex] = "";
                return;
            }
            if (targetElement.innerText === "=") {
                calculationArr[currentArrIndex] += (numDisplay === null || numDisplay === void 0 ? void 0 : numDisplay.textContent) || "";
                const lastRow = table === null || table === void 0 ? void 0 : table.rows[table.rows.length - 1];
                if (lastRow) {
                    const lastCell = lastRow.cells[0];
                    lastCell.innerText += calculationArr[currentArrIndex] || "";
                }
                currentArrIndex++;
                calculationArr[currentArrIndex] = (numDisplay === null || numDisplay === void 0 ? void 0 : numDisplay.textContent) || "";
                const newRow = document.createElement("tr");
                const newCell = document.createElement("td");
                newRow.appendChild(newCell);
                table === null || table === void 0 ? void 0 : table.appendChild(newRow);
            }
            console.log(currentValue, previousValue);
            console.log(calculationArr);
        });
    });
};
//add code for the save button to local storage below
const saveToLocalStorage = () => {
    const saveButton = document.querySelector(".save-btn");
    saveButton === null || saveButton === void 0 ? void 0 : saveButton.addEventListener("click", () => {
        localStorage.setItem("calcArrayKey", JSON.stringify(calculationArr));
    });
};
//add code below for loading data from local storage
const loadFromLocalStorage = () => {
    const loadButton = document.querySelector(".load-btn");
    const table = document.querySelector("table");
    loadButton === null || loadButton === void 0 ? void 0 : loadButton.addEventListener("click", () => {
        const storedData = localStorage.getItem("calcArrayKey");
        if (storedData !== null) {
            const parsedData = JSON.parse(storedData);
            calculationArr = [...parsedData];
            console.log(calculationArr);
            const secondRow = table === null || table === void 0 ? void 0 : table.rows[1];
            if (secondRow && secondRow.cells[0].innerText === "...") {
                const firstRow = document.querySelector(".starting-row");
                if (firstRow)
                    firstRow.innerText = "";
            }
            for (let i = 0; i < calculationArr.length; i++) {
                const newRow = document.createElement("tr");
                const newCell = document.createElement("td");
                newCell.innerText = calculationArr[i];
                newRow.appendChild(newCell);
                table === null || table === void 0 ? void 0 : table.appendChild(newRow);
            }
            currentArrIndex = calculationArr.length - 1;
        }
        else {
            console.log("No data found in localStorage.");
        }
    });
};
//add code for clearing data from local storage and table below
const clearLocalStorage = () => {
    const clearButton = document.querySelector(".clear-btn");
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener("click", () => {
        localStorage.clear();
        if (table) {
            const rows = table.querySelectorAll("tr");
            rows.forEach((row, index) => {
                if (index > 0) {
                    row.remove();
                }
            });
        }
        newCell.innerText = "...";
        newRow.appendChild(newCell);
        table === null || table === void 0 ? void 0 : table.appendChild(newRow);
    });
};
// Function for initializing the calculator
const initialize = () => {
    displayCurrentValue();
    selectOperation();
    convertToPercentage();
    calculateNumbers();
    saveCalculation();
    clearScreen();
    handleKeyboardInput();
    saveToLocalStorage();
    loadFromLocalStorage();
    clearLocalStorage();
};
document.addEventListener("DOMContentLoaded", initialize);
