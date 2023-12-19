// ==============================
//        functions             |
// ==============================

// --------------------------------------------
// what is a function? and why do we need it?
// --------------------------------------------
// function is a reusable code block that can be called anywhere in the program 
// to perform a specific task. 
// we need functions to avoid repeating the same code over and over again.
// --------------------------------------------

// --------------------------------------------
// function declaration
// --------------------------------------------
// function declaration
function greet() {
    console.log('Hello there!');
}

// function call
greet();

// --------------------------------------------
// function parameters and arguments 
// --------------------------------------------
// function parameters are the names listed in the function definition.
// function arguments are the real values passed to the function.
// for example:
// function declaration with parameters 
function greeting(name) {
    console.log('Hello ' + name);
}

// function call with arguments
greeting('Ajay'); // Hello Ajay
greeting('John'); // Hello John
greeting('Jane'); // Hello Jane

// --------------------------------------------
// function return values 
// --------------------------------------------
// functions can return values using the return keyword.
// for example:
function sum(a, b) {
    return a + b;
}

// function call
let result = sum(2, 3);
console.log(result); // 5

// -----------------------------------------
// setting-statement-element in functions
// -----------------------------------------
// function declaration with parameters 
function greeting(name) {
    console.log('Hello ' + name);
}

// function call with arguments
greeting('Ajay'); // Hello Ajay
greeting('John'); // Hello John
greeting('Jane'); // Hello Jane

// --------------------------------------------

// --------------------------------------------
// creating functions exercise
// --------------------------------------------
// create a function that takes two numbers and returns the sum of them.
// create a function that takes two numbers and returns the multiplication of them.
// create a function that takes two numbers and returns the division of them.
// create a function that takes two numbers and returns the subtraction of them.    
// --------------------------------------------
// your code goes here
// --------------------------------------------
function sum(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function subtraction(a, b) {
    return a - b;
}

// --------------------------------------------
// arrow functions
// --------------------------------------------
// arrow functions are a shorter way of writing functions.
// for example:
// function declaration
function greet() {
    console.log('Hello there!');
}

// arrow function
const greet = () => {
    console.log('Hello there!');
}

// --------------------------------------------
// arrow functions exercise
// --------------------------------------------
// convert the following functions to arrow functions
// --------------------------------------------
// function declaration
function greet() {
    console.log('Hello there!');
}

// arrow function
const greet = () => {
    console.log('Hello there!');
}

//greet(); // Hello there!

// --------------------------------------------