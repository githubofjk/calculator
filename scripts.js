let displayValues = [];

const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", clear);

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", operate);

const btnInputs = Array.from(document.querySelectorAll(".inputDisplay"));
btnInputs.forEach(input => input.addEventListener("click", displayInput));

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
    if (b === 0) {
        return "Can not divide by zero";
    }
    return a / b;
}

/**
function operate(operator, a, b) {
    if (operator === add) {
        return add(a, b);
    } else if (operator === subtract) {
        return subtract(a, b);
    } else if (operator === multiply) {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}
*/

function clear(e) {
    displayValues.splice(0, displayValues.length);
    display.textContent = "";
}

function displayInput(e) {
    displayValues.push(e.target.textContent);
    display.textContent += " " + e.target.textContent;
}

function operate(e) {
    let operator;
    let result = displayValues.reduce((total, input, index) => {
        if (index === 0) {
            return parseInt(input);
        }

        if (!parseInt(input)) {
            operator = input;
            return total;
        }

        if (operator === "+") {
            return add(total, parseInt(input));
        }
    }, 0);

    display.textContent = result;
}