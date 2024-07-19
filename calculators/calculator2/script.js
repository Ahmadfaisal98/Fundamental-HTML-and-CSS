const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
let currentInput = ''
let operator = ''
let firstValue = ''

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent

    if (value === 'C') {
      currentInput = ''
      firstValue = ''
      operator = ''
      display.value = ''
    } else if (value === '=') {
      if (operator && firstValue !== '') {
        currentInput = eval(`${firstValue} ${operator} ${currentInput}`)
        display.value = currentInput
        firstValue = ''
        operator = ''
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value
      firstValue = currentInput
      currentInput = ''
    } else {
      currentInput += value
      display.value = currentInput
    }
  })
})
