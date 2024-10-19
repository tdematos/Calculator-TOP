//variables and operator for storing numbers
let currentValue: number | string = "";
let previousValue: number | string = "";
let selectedOperator: string | null = null;
let result: number | string | null = null;
let decimalAdded: boolean = false;
let calculationArr: string[] = [];
let currentArrIndex: number = 0;

//calculation operation functions
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

const multiply = (a: number, b: number) => {
  return a * b;
};

const divide = (a: number, b: number) => {
  return a / b;
};

//function to display current value on screen
const displayCurrentValue = () => {
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");
  const numberButtons: NodeList = document.querySelectorAll(".num-btn");
  const numBtns: HTMLElement[] = Array.from(numberButtons) as HTMLElement[];

  numBtns.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (numDisplay!.textContent!.length <= 10) {
        const target = e.target as HTMLElement;
        if (target.textContent === "." && decimalAdded) {
          return;
        }

        if (target.textContent === ".") {
          decimalAdded = true;
        }

        numDisplay!.textContent += target?.textContent ?? "";
        currentValue = numDisplay!.innerText;
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
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");

  funcBtns.forEach((Btn) => {
    Btn.addEventListener("click", (e) => {
      if (currentValue !== "") {
        currentValue = numDisplay!.innerText;
        previousValue = currentValue;
        currentValue = "";
        decimalAdded = false;
        const target = e.target as HTMLElement;
        selectedOperator = target.textContent;
        document.querySelector(".calc-numbers")!.textContent = "";
      }
    });
  });
};

// function to calculate numbers
const calculateNumbers = () => {
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");
  const equalsButton = document.querySelector(".func-equals") as HTMLElement;

  equalsButton.addEventListener("click", (e) => {
    currentValue = numDisplay!.innerText;
    const num1 = parseFloat(String(previousValue));
    const num2 = parseFloat(String(currentValue));

    if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
      numDisplay!.textContent = "Abort!";
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
          numDisplay!.textContent = "Error: Division by zero";
          return;
        }
        result = divide(num1, num2);
        break;
      default:
        return;
    }

    numDisplay!.textContent = parseFloat(result.toFixed(8)).toString();
    currentValue = "";
    currentValue = parseFloat(result.toFixed(8));
    previousValue = "";
    selectedOperator = null;
    decimalAdded = false;
  });
};

// function for clearing the screen
const clearScreen = () => {
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");
  const clearButton = document.querySelector(".clear") as HTMLElement;

  clearButton.addEventListener("click", () => {
    numDisplay!.textContent = "";
    currentValue = "";
    previousValue = "";
    selectedOperator = null;
    result = "";
  });
};

//adding function for converting numbers into percentages
const convertToPercentage = () => {
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");
  const percentBtn = document.querySelector(".Percent") as HTMLElement;

  percentBtn.addEventListener("click", () => {
    let targetNumber = parseFloat(numDisplay!.innerText);
    let percentValue = targetNumber / 100;
    numDisplay!.textContent = percentValue.toString();
  });
};

// Function to handle keyboard input
const handleKeyboardInput = () => {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    const numDisplay = document.querySelector(".calc-numbers");

    if (!isNaN(parseFloat(key)) || key === ".") {
      if (numDisplay!.textContent!.length <= 10) {
        if (key === "." && decimalAdded) {
          return;
        }

        if (key === ".") {
          decimalAdded = true;
        }

        numDisplay!.textContent += key;
        currentValue = numDisplay?.textContent ?? "";
        console.log(currentValue);
      }
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      if (currentValue !== "") {
        previousValue = currentValue;
        currentValue = "";
        decimalAdded = false;
        selectedOperator = key;
        console.log(selectedOperator);
        numDisplay!.textContent = "";
      }
    } else if (key === "Enter" || key === "=") {
      event.preventDefault();

      const num1 = parseFloat(String(previousValue));
      const num2 = parseFloat(String(currentValue));

      if (isNaN(num1) || isNaN(num2) || selectedOperator === null) {
        numDisplay!.textContent = "Abort!";
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
            numDisplay!.textContent = "Error: Division by zero";
            return;
          }
          result = divide(num1, num2);
          break;
        default:
          return;
      }

      numDisplay!.textContent = String(result);
      currentValue = "";
      currentValue = result;
      previousValue = "";
      selectedOperator = null;
      decimalAdded = false;
    } else if (key === "C" || key === "Delete") {
      numDisplay!.textContent = "";
      currentValue = "";
      previousValue = "";
      selectedOperator = null;
      result = "";
    }
  });
};

//Code for adding calculation to table
const saveCalculation = () => {
  const allButtons: NodeList | null = document.querySelectorAll(".button");
  const table: HTMLTableElement | null = document.querySelector("table");
  const numDisplay: HTMLElement | null =
    document.querySelector(".calc-numbers");

  allButtons.forEach((button) => {
    button?.addEventListener("click", (event) => {
      const targetElement = event.target as HTMLElement;
      const secondRow = table?.rows[1];

      if (secondRow && secondRow.cells[0].innerText === "...") {
        const firstRow: HTMLTableElement | null =
          document.querySelector(".starting-row");
        if (firstRow) firstRow.innerText = "";
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
        calculationArr[currentArrIndex] += numDisplay?.textContent || "";

        const lastRow = table?.rows[table.rows.length - 1];
        if (lastRow) {
          const lastCell = lastRow.cells[0];
          lastCell.innerText += calculationArr[currentArrIndex] || "";
        }

        currentArrIndex++;

        calculationArr[currentArrIndex] = numDisplay?.textContent || "";

        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newCell: HTMLTableCellElement = document.createElement("td");
        newRow.appendChild(newCell);
        table?.appendChild(newRow);
      }

      console.log(currentValue, previousValue);
      console.log(calculationArr);
    });
  });
};

//add code for the save button to local storage below
const saveToLocalStorage = () => {
  const saveButton: HTMLTableElement | null =
    document.querySelector(".save-btn");

  saveButton?.addEventListener("click", () => {
    localStorage.setItem("calcArrayKey", JSON.stringify(calculationArr));
  });
};

//add code below for loading data from local storage
const loadFromLocalStorage = () => {
  const loadButton: HTMLButtonElement | null =
    document.querySelector(".load-btn");
  const table: HTMLTableElement | null = document.querySelector("table");

  loadButton?.addEventListener("click", () => {
    const storedData = localStorage.getItem("calcArrayKey");

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData) as string[];
      calculationArr = [...parsedData];

      console.log(calculationArr);

      const secondRow = table?.rows[1];

      if (secondRow && secondRow.cells[0].innerText === "...") {
        const firstRow: HTMLTableElement | null =
          document.querySelector(".starting-row");
        if (firstRow) firstRow.innerText = "";
      }

      for (let i = 0; i < calculationArr.length; i++) {
        const newRow: HTMLTableRowElement = document.createElement("tr");
        const newCell: HTMLTableCellElement = document.createElement("td");

        newCell.innerText = calculationArr[i];
        newRow.appendChild(newCell);
        table?.appendChild(newRow);
      }

      currentArrIndex = calculationArr.length - 1;
    } else {
      console.log("No data found in localStorage.");
    }
  });
};

//add code for clearing data from local storage and table below
const clearLocalStorage = () => {
  const clearButton: HTMLTableElement | null =
    document.querySelector(".clear-btn");
  const table: HTMLElement | null = document.querySelector("table");
  const newRow: HTMLTableRowElement = document.createElement("tr");
  const newCell: HTMLTableCellElement = document.createElement("td");

  clearButton?.addEventListener("click", () => {
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
    table?.appendChild(newRow);
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
