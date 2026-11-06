// Variables
let cache = [];
let firstNumber = 5;
let operator = '+';
let secondNumber = 8;

// Functions
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
    }
}

// Execution
operate(firstNumber, operator, secondNumber);