let fNum = ''; //first number of equation
let sNum = ''; // second number of the equation
let operator; //operator of the equation
let result = ''; //define result string
const numberButton = document.querySelectorAll('.numberButton'); //all number button divs
const operatorButton = document.querySelectorAll('.operatorButton'); //all operator buttons
const clrButton = document.querySelector('.CLR'); //div of clr button
const equalButton = document.querySelector('.equal');
const dotButton = document.querySelector('.dot'); //div of dot button
const bckButton = document.querySelector('.BCK'); //div of bck button
let activeDisplayNum = ""; //current number displayed on display
let display = document.querySelector('.display') //actual main display div
let fNumDiv = document.querySelector('.fNum') //div on top left of display that shows first number entered
let operatorDiv = document.querySelector('.operator') //second top part of the display that shows chosen operator

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
        if(sNum == 0) {
            alert('┌∩┐(ಠ_ಠ)┌∩┐');
            return 0;
        }
        return divide(fNum, sNum);
    }
}

function equalize(e) {
    sNum = +activeDisplayNum;
    result = operate(fNum, sNum, operator);
    if(result % 10 !== 0) {
        result = +result.toFixed(10);
    }    
    display.innerHTML = result;
    fNum = result;
    fNumDiv.innerHTML = fNum;
    activeDisplayNum = result.toString();    
    return;
}

numberButton.forEach(item => {
    item.addEventListener('click', e => {
        const number = e.target.innerText;        
        if(activeDisplayNum == result) {
            activeDisplayNum = '';
        }        
        activeDisplayNum += number;
        display.innerText = activeDisplayNum;        
    })    
});

document.addEventListener('keydown', e => {                     //Entire keyboard functionality
            if(e.key=='1' || e.key=='2' || e.key=='3' || e.key=='4' || 
            e.key=='5' || e.key=='6' || e.key=='7' || e.key=='8' || 
            e.key=='9' || e.key=='0') {
                const number = e.key;        
                if(activeDisplayNum == result) {
                    activeDisplayNum = '';
                }        
                activeDisplayNum += number;
                display.innerText = activeDisplayNum; 
            }
            else if(e.key=='/' || e.key=='*' || e.key=='-' || e.key=='+') {
                if(fNum !== '') {            
                    operator = e.key;
                    operatorDiv.innerHTML = operator;                      
                    return;
                }
                operator = e.key;
                operatorDiv.innerHTML = operator;
                fNum = +activeDisplayNum;
                fNumDiv.innerHTML = fNum;
                activeDisplayNum = '';
                display.innerHTML = activeDisplayNum;
            }
            else if(e.key=='.') {
                if(activeDisplayNum.includes('.')) {
                    return;
                }
                activeDisplayNum += '.';
                display.innerText = activeDisplayNum;
            }
            else if(e.key == 'Enter') {
                if(fNum !== '') {
                    equalize(fNum, sNum, operator);
                }
                else {
                    return;
                }                
            }
            else if(e.code == 'Backspace') {
                e.preventDefault;
                activeDisplayNum = activeDisplayNum.slice(0, -1);
                display.innerText = activeDisplayNum;
            }
        })

operatorButton.forEach(item => {        
    item.addEventListener('click', e => {        
        if(fNum !== '') {            
            operator = e.target.innerText;
            operatorDiv.innerHTML = operator;                      
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

dotButton.addEventListener('click', e => {
    if(activeDisplayNum.includes('.')) {
        return;
    }
    activeDisplayNum += '.';
    display.innerText = activeDisplayNum; 
})

bckButton.addEventListener('click', e => {
    activeDisplayNum = activeDisplayNum.slice(0, -1);
    display.innerText = activeDisplayNum;
})