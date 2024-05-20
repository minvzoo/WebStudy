let inputString = '';
let displayValue = '';
let resultValue = '';
let operator = '';

function input(value){
    inputString += value;
    document.querySelector('.display').value = inputString;

    if(!parseInt(value)){
        operator += value;
    }
}

function calculate(){
    let calculation = inputString.split(operator);
    let value1 = parseInt(calculation[0]);
    let value2 = parseInt(calculation[1]);
    switch(operator){
        case '+':
            resultValue = value1 + value2;
            break;
        case '-':
            resultValue = value1 - value2;
            break;
        case '*':
            resultValue = value1 * value2;
            break;
        case '/':
            resultValue = value1 / value2;
            break;
        default:
            resultValue = '';
    }
    inputString = resultValue.toString();
    document.querySelector('.display').value = resultValue;
    displayValue = '';
}

function clearDisplay(){
    inputString = '';
    displayValue = '';
    resultValue = '';
    operator = '';
    document.querySelector('.display').value = '';
}