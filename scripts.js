let displayValues = [];
let inputNumber = "";

const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", clear);

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", operate);

const btnInputs = Array.from(document.querySelectorAll(".inputDisplay"));
btnInputs.forEach(input => input.addEventListener("click", displayInput));

const btnOperators = Array.from(document.querySelectorAll(".operator"));
btnOperators.forEach(operator => operator.addEventListener("click", displayOperator));

const display = document.querySelector("#display");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear(e) {
    displayValues = [];
    display.textContent = "";
}

function displayInput(e) {
    display.textContent += e.target.textContent;
    inputNumber += e.target.textContent;
}

function displayOperator(e) {
    displayValues.push(inputNumber);
    inputNumber = "";

    displayValues.push(e.target.textContent);
    display.textContent += " " + e.target.textContent + " ";
}

function operate(e) {
    displayValues.push(inputNumber);
    inputNumber = "";

    let operator;

    let result = displayValues.reduce((total, input, index) => {
        // assume first value in array is number, return to total
        if (index === 0) {
            return parseInt(input);
        }

        // check if curent array value is an operator
        if (isNaN(parseInt(input))) {
            operator = input;
            return total;
        }

        if (operator === "+") {
            return add(total, parseInt(input));
        } else if (operator === "-") {
            return subtract(total, parseInt(input));
        } else if (operator === "*") {
            return multiply(total, parseInt(input));
        } else {
            // error message if divide by zero
            if (parseInt(input) === 0) {
                return "Infinity";
            }
            return divide(total, parseInt(input));
        }
    }, 0);

    display.textContent = result;
}