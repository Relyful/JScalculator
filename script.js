let fNum = ''; //first number of equation
let sNum = ''; // second number of the equation
let operator; //operator of the equation
let result = '';
const numberButton = document.querySelectorAll('.numberButton'); //all number button divs
const operatorButton = document.querySelectorAll('.operatorButton'); //all operator buttons
const clrButton = document.querySelector('.CLR');
const equalButton = document.querySelector('.equal');
let activeDisplayNum = ""; //current number displayed on display
let display = document.querySelector('.display') //actual main display div
let fNumDiv = document.querySelector('.fNum')
let operatorDiv = document.querySelector('.operator')

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

function equalize(e) {
    sNum = +activeDisplayNum;
    result = operate(fNum, sNum, operator);    
    display.innerHTML = result;
    fNum = result;
    fNumDiv.innerHTML = fNum;
    activeDisplayNum = result;
    return;
}

numberButton.forEach(item => {
    item.addEventListener('click', e => {
        const number = e.target.innerText;        
        if(activeDisplayNum === result) {
            activeDisplayNum = '';
        }        
        activeDisplayNum += number;
        display.innerText = activeDisplayNum;        
    })    
});

operatorButton.forEach(item => {
    item.addEventListener('click', e => {        
        if(fNum !== '') {
            // sNum = +activeDisplayNum;
            // result = operate(fNum, sNum, operator);
            operator = e.target.innerText;
            operatorDiv.innerHTML = operator;
            // display.innerHTML = result;
            // activeDisplayNum = result;
            // fNum = result;
            // fNumDiv.innerHTML = fNum;            
            return;
        }
        operator = e.target.innerText;
        operatorDiv.innerHTML = operator;
        fNum = +activeDisplayNum;
        fNumDiv.innerHTML = fNum;
        activeDisplayNum = '';
        display.innerHTML = activeDisplayNum;
    })    
});

clrButton.addEventListener('click', e => {
    fNum = '';
    fNumDiv.innerHTML = fNum;
    sNum = ''
    display.innerHTML = '';
    operator = '';
    operatorDiv.innerHTML = operator;
    result = '';
    activeDisplayNum = '';
})

equalButton.addEventListener('click', e => {
    if(fNum !== '') {
        equalize(fNum, sNum, operator);
    }
    else {
        return;
    }
})