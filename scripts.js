const display = document.querySelector("#display");
let displayValues = [];

const equals = document.querySelector("#btnEquals");
equals.addEventListener("click", operate);

const inputs = Array.from(document.querySelectorAll(".inputDisplay"));
inputs.forEach(input => input.addEventListener("click", displayInput));



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

function displayInput(e) {
    displayValues.push(e.target.textContent);
    display.textContent += " " + e.target.textContent;
}