let currentInput = '0';
let operator = null;
let previousInput = '0';

function clearDisplay() {
    currentInput = '0';
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (isNaN(num1) || isNaN(num2)) {
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}
