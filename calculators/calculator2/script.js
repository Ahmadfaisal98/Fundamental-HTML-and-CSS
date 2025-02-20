const display = document.querySelector('.display')
let currentInput = ''
let operator = ''
let firstValue = ''

function addNumber(value) {
  currentInput += value
  display.value = currentInput
}

function clearDisplay() {
  currentInput = ''
  firstValue = ''
  operator = ''
  display.value = ''
}

function calculate() {
  if (operator && firstValue !== '') {
    currentInput = eval(`${firstValue} ${operator} ${currentInput}`)
    display.value = currentInput
    firstValue = ''
    operator = ''
  }
}
