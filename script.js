let memory = 0;

function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(op) {
    document.getElementById('display').value += op;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function squareRoot() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(eval(display));
}

function percentage() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = eval(display) / 100;
}

function calculate() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = eval(display);
}

// Memory Functions
function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value || 0);
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value || 0);
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryClear() {
    memory = 0;
}