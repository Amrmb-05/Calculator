function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a,b) {
    if (a/b === Infinity) {
        return 'can neva eva be'
    }
    return a/b
}

function operate(a, b, oper) {
    switch (oper) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
let display = document.getElementById('display-text');
numButtons = document.querySelectorAll('.numBtns');
console.log(numButtons)

let displayValue = []
numButtons.forEach( button => {button.addEventListener('click',() => {
    if (displayValue.length ===1 || displayValue.length === 0) {
        display.textContent += button.textContent
        displayValue[0] = parseInt(display.textContent)
        
    }
    else if (displayValue.length != 1 && displayValue.length != 0) {//|| displayValue.length === 3) {
        if (!isNaN(displayValue[2])){
        display.textContent += button.textContent
        displayValue[2] = parseInt(display.textContent)
        }
        else {
            display.textContent = button.textContent
            displayValue[2] = parseInt(display.textContent)
        }
    }
    console.log(displayValue)
})})

operatorBtns = document.querySelectorAll('.operators');
operatorBtns.forEach( button => {button.addEventListener('click',() =>{
    display.textContent = ''
    if(displayValue.length == 3) {
        display.textContent = operate(displayValue[0],displayValue[2],displayValue[1])
        displayValue.splice(0,3)
        displayValue[0] = parseInt(display.textContent)
        console.log('amr')
    }
    displayValue[1] = button.textContent
    
    
})
})

equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    if(displayValue.length < 3) {
        display.textContent = ''
        displayValue.splice(0,3)
    }
    display.textContent = operate(displayValue[0],displayValue[2],displayValue[1])
    displayValue.splice(0,3)
    displayValue[0] = parseInt(display.textContent)
})

clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    display.textContent = ''
    displayValue.splice(0,3)
})