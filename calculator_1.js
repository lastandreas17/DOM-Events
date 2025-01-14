let currentNumber = '';
let previousNumber = '';
let operator = null;
let displayContent = '';

function addToDisplay(number) {
    currentNumber += number;
    displayContent += number;
    updateDisplay(displayContent);
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    displayContent += ` ${op} `;
    updateDisplay(displayContent);
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === null) return;
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    displayContent = result.toString();
    updateDisplay(displayContent);
    currentNumber = result.toString();
    previousNumber = '';
    operator = null;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    displayContent = '';
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
