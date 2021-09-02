let operand1;
let operator;
let operand2; 

function add(operand1,operand2){
    return operand1+operand2;
}
function subtract(operand1,operand2){
    return operand1-operand2;
}
function multiply(operand1,operand2){
    return operand1 * operand2;
}
function divide(operand1, operand2){
    return operand1 / operand2;
}

function modulo(operand1,operand2){
    return operand1 % operand2;
}

function operate (operator, operand1, operand2){

    if(operator === '+'){
        add(operand1,operand2);
    }
    else if(operator === '-'){
        subtract(operand1,operand2);
    }
    else if(operator === '*'){
        multiply(operand1,operand2);
    }
    else if(operator === '/'){
        divide(operand1,operand2);
    }
    else if(operator === '%'){
        modulo(operand1,operand2);
    }

    else{
        console.log('error khe berga ')
    }
}


///store number when user presses an operator
// also save which operation has been chosen and then operate
//use operate when the user presses = 

function input0(){
   let zero  = 0;
   const display = document.getElementById('display');
   display.innerHTML = display.innerHTML + zero;
}
function input1(){
    let one  = 1;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + one;
 }
 function input2(){
    let two  = 2;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + two;
 }
 function input3(){
    let three  = 3;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + three;
 }
 function input4(){
    let four  = 4;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + four;
 }
 function input5(){
    let five  = 5;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + five;
 }
 function input6(){
    let six  = 6;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + six;
 }
 function input7(){
    let seven  = 7;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + seven;
 }
 function input8(){
    let eight  = 8;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + eight;
 }
 function input9(){
    let nine  = 9;
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + nine;
 }
 function inputplus(){
    //updateDisplay();
    let plus  = '+';
    const display = document.getElementById('display');
    currentValue = display.innerHTML;
    operator = plus;
    display.innerHTML = display.innerHTML + plus;
 }
 function inputmin(){
    let min  = '-';
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + min;
 }
 function inputx(){
    let x  = '*';
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + x;
 }
 function inputdiv(){
    let div  = '/';
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + div;
 }
 function inputmod(){
    let mod  = '%';
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML + mod;
 }

 function inputc(){
     operand1 = null;
     operand2 = null;
     operator = null;

     dv = '';
 }
 

 function _operatorAt(dv){
     let found = -1;
     for(let i = 0 ;i<dv.length;i++){
        if(dv.innerText.charAt(i) === '+' || dv.innerText.charAt(i) === '-' ||dv.innerText.charAt(i) === '*' ||dv.innerText.charAt(i) === '/' ||dv.innerText.charAt(i) === '%'){
            found = i
            break;
        }
     }

     return found;
 }



 function getoperand2(){
    if(_operatorAt(dv)){
        const display = document.getElementById('display');
        display.innerText = operate(operator,currentValue,operand2);
    }
 }

