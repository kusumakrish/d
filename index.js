console.log("working...");

//Functions - In order to execute a perticular lines of code repetively , we can allocate them into a function , which can then be called again and again as required . This prevent us writing a piece of code multiple times.
// Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

//function definition from lines 6-8
//we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// //Arrow Function

// const addition = (parameter1,parameter2) => {
//     console.log("i am inside addition function");
// }
// addition(arg1,arg2);

// //Function Expression

// const subtraction = function(parameter1,parameter2){
// console.log("i am inside subtraction function");

// }

// subtraction(arg1,arg2);

function sayhi(){
  console.log("Hi!!!")  ;
  let a = 3;
  let b = 6;
  let result = a+b;
  console.log(result);
}

sayhi();

function addition(num1,num2){
let result=num1+num2;
console.log(result);
}

addition(3,5);

function multiply(num1,num2){
    result=num1*num2;
    return result;
}

let multipying=multiply(2,3);
console.log(multipying);

console.log(multiply(6,8));

//Lexical Environment and Scope Chain

let i=5;
function one(){
    console.log(i);
    two();


    function two(){
        console.log(i);
    }
}

one();
console.log(i);


// Block Scope and Shadowing


let f=2;
const g=2;
var h=3;
{
    let f=3;
    const g=3;
    var h=3;
    console.log(f);
    console.log(g);
    console.log(h);
}
console.log(f);
console.log(g);
console.log(h);

























