let operand1;
let operator;
let operand2; 

function add(operand1,operand2){
    return Math.round((operand1+operand2) * 100) / 100;
}
function subtract(operand1,operand2){
    return Math.round((operand1-operand2) * 100 ) / 100;
}
function multiply(operand1,operand2){
    return Math.round((operand1 * operand2) *100) /100;
}
function divide(operand1, operand2){

    if(operand2 === 0){
        return "ERROR can't /0";
    }
    return Math.round((operand1 / operand2) * 100) / 100;
}

function modulo(operand1,operand2){
    return Math.round((operand1 % operand2) * 100) /100;
}

function getoperand2 (){
    let dv = document.getElementById('display').innerText;
    //console.log(dv);
    let operatorPos = _operatorAt(dv);
    if(operatorPos === -1){
       return operand2 = null; // operator2 was not found 
    }
    return operand2 = parseInt(dv.substring(operatorPos+1));

}

function updateDisplay(newDisplay){
    //console.log(newDisplay);
    document.getElementById('display').innerText = newDisplay;
    //console.log(currentDisplay);
    //console.log(currentDisplay);
    operand1 = newDisplay;
    operand2 = null;
    operator = null;
}

function equallsTo(){
  // console.log(operator);
   //console.log(operand1);
   //console.log(operand2);
   operand2 = getoperand2();
    if(operator === null || operand1 == null || operand2 ===null ||operator === undefined || operand1 === undefined || operand2 === undefined){
       return;
    }


 let solution =  operate(operator,operand1,getoperand2());
 //console.log(solution);
 updateDisplay(solution);
 //
}

function operate (operator, operand1, operand2){

   // console.log(operator);
   // console.log(operand1);
   // console.log(operand2);

      if((isNaN(operand1))|| (isNaN(operand2)) || (!isNaN(operator))){
         inputc();
         return 'Invalid Format'
      }




    if(operator === '+'){
        return add(operand1,operand2);
    }
    else if(operator === '-'){
        return subtract(operand1,operand2);
    }
    else if(operator === '*'){
       return multiply(operand1,operand2);
    }
    else if(operator === '/'){
       return divide(operand1,operand2);
    }
    else if(operator === '%'){
       return modulo(operand1,operand2);
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
    operand2 = getoperand2();
    if(!(isNaN(operand2))&& operand1 != null && operand2 != null){  // if operand2 
       equallsTo();
    }

    let plus  = '+';
    const display = document.getElementById('display');  //get the first operand 
    operand1 = parseInt(display.innerHTML);
    operator = plus;
    display.innerHTML = display.innerHTML + plus;
 }
 function inputmin(){
   operand2 = getoperand2();
   if(!(isNaN(operand2)) && operand1 != null){
      equallsTo();
   }
    let min  = '-';
    const display = document.getElementById('display');
    operand1 = parseInt(display.innerHTML);
    operator = min;
    display.innerHTML = display.innerHTML + min;
   
 }
 function inputx(){
   operand2 = getoperand2();
   if(!(isNaN(operand2))&& operand1 != null){
      equallsTo();
   }
    let x  = '*';
    const display = document.getElementById('display');
    operand1 = parseInt(display.innerHTML);
    operator = x;
    display.innerHTML = display.innerHTML + x;
 }
 function inputdiv(){
   operand2 = getoperand2();
   if(!(isNaN(operand2))&& operand1 != null){
      equallsTo();
   }
    let div  = '/';
    const display = document.getElementById('display');
    operand1 = parseInt(display.innerHTML);
    operator = div;
    display.innerHTML = display.innerHTML + div;
 }
 function inputmod(){
   operand2 = getoperand2();
   if(!(isNaN(operand2))&& operand1 != null){
      equallsTo();
   }
    let mod  = '%';
    const display = document.getElementById('display');
    operand1 = parseInt(display.innerHTML);
    operator = mod;
    display.innerHTML = display.innerHTML + mod;
 }

 function inputc(){
     operand1 = null;
     operand2 = null;
     operator = null;
     document.getElementById('display').innerText = '';
 }
 

 function _operatorAt(dv){
     let found = -1;
     for(let i = 0 ;i<dv.length;i++){
        if(dv.charAt(i) === '+' || dv.charAt(i) === '-' ||dv.charAt(i) === '*' ||dv.charAt(i) === '/' ||dv.charAt(i) === '%'){
            found = i
            break;
        }
     }

     return found;
 }
 
//evaluate each time there is a pair on the run 



