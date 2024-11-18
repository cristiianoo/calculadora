let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value.length > 0 && !isNaN(display.value.slice(-1))) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
