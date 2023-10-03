let fNum; //first number of equation
let sNum; // second number of the equation
let operator; //operator of the equation


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(fNum, sNum, operator) {     //function that choses correct function based on operator
    if(operator == '+') {
        return add(fNum, sNum);
    }
    if(operator == '-') {
        return subtract(fNum, sNum);
    }
    if(operator == '*') {
        return multiply(fNum, sNum);
    }
    if(operator == '/') {
        return divide(fNum, sNum);
    }
}