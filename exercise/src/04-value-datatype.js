// ==========================================
//   Variables & Values & Data Types        |
// ==========================================
// 
// --------------------------------------------
// 1. what are variables
// Variables are containers for storing data (values).
// --------------------------------------------
// 2. how to declare variables
// Declaring a variable in JavaScript is similar to declaring a variable in most programming languages.
// For example, to declare a variable called age, you use the let keyword as follows:
let age;
// The let keyword tells the JavaScript engine that you want to declare a variable.
// The age is the name of the variable.
// The variable name must be a valid JavaScript identifier.
// The semicolon (;) is used to separate statements in JavaScript.

// --------------------------------------------
// 3. how to assign values to variables
// To assign a value to a variable, you use the assignment operator (=).
// For example, the following statement assigns the value 20 to the variable age:
age = 20;
// In this statement, we assigned the value 20 to the variable age.
// The JavaScript engine will automatically determine the data type of the value and assign it to the variable.
// In this case, the value 20 is a number, so the JavaScript engine will assign the number data type to the variable age.
// (You can also declare and assign a value to a variable in a single statement as follows:
// let age = 20;)
// --------------------------------------------
// 4. how to re-assign values to variables
// You can re-assign a value to a variable as follows:
age = 30;
// In this statement, we re-assigned the value 30 to the variable age.
// The JavaScript engine will automatically determine the data type of the value and assign it to the variable.
// In this case, the value 30 is a number, so the JavaScript engine will assign the number data type to the variable age.

// --------------------------------------------
// 5. how to declare multiple variables in one line
// You can declare multiple variables in a single statement as follows:
// let age, name;
// In this statement, we declared two variables age and name.
// The JavaScript engine will assign the undefined data type to the variables age and name.
// You can also declare and assign values to multiple variables in a single statement as follows:
// let age = 20, name = 'Ajay';
// In this statement, we declared and assigned the values to the variables age and name.

// --------------------------------------------
// 6. how to declare variables with let and const keywords
// In JavaScript, you can declare variables with let and const keywords.
// The let keyword is used to declare variables that can be re-assigned.
// The const keyword is used to declare variables that cannot be re-assigned.
// For example, the following statement declares a variable called age with the let keyword:
// let age;
// In this statement, the age variable can be re-assigned.
// The following statement declares a variable called name with the const keyword:
// const name;
// In this statement, the name variable cannot be re-assigned.
// If you try to re-assign a value to the name variable, you’ll get an error:
// const name;
// name = 'Ajay'; // error because the name variable cannot be re-assigned

// ----------------------------------------------------------
// 7. how to declare variables with var keyword
// In JavaScript, you can also declare variables with the var keyword.
// The var keyword is used to declare variables that can be re-assigned.
// For example, the following statement declares a variable called age with the var keyword:
// var age;
// In this statement, the age variable can be re-assigned.
// The var keyword is the legacy way of declaring variables in JavaScript.
// The let and const keywords were introduced in ES6.
// The let and const keywords are the preferred way of declaring variables in modern JavaScript applications.

// ----------------------------------------------------------
// 8. how to declare variables with let keyword
// In JavaScript, you can declare variables with let keyword.
// The let keyword is used to declare variables that can be re-assigned.
// For example, the following statement declares a variable called age with the let keyword:
// let age;
// In this statement, the age variable can be re-assigned.
// The let keyword is the preferred way of declaring variables in modern JavaScript applications.
// The var keyword is the legacy way of declaring variables in JavaScript.
// The let and const keywords were introduced in ES6.
// The let and const keywords are the preferred way of declaring variables in modern JavaScript applications.

// ----------------------------------------------------------
// 9. how to declare variables with const keyword
// In JavaScript, you can declare variables with const keyword.
// The const keyword is used to declare variables that cannot be re-assigned.
// For example, the following statement declares a variable called name with the const keyword:
// const name;
// In this statement, the name variable cannot be re-assigned.
// If you try to re-assign a value to the name variable, you’ll get an error:
// const name;
// name = 'Ajay'; // error because the name variable cannot be re-assigned
// The const keyword is the preferred way of declaring variables in modern JavaScript applications.
// The var keyword is the legacy way of declaring variables in JavaScript.
// The let and const keywords were introduced in ES6.
// The let and const keywords are the preferred way of declaring variables in modern JavaScript applications.

// ----------------------------------------------------------
// 10. what are data types
// In JavaScript, there are two categories of data types:
// - Primitive data types
// - Non-primitive (reference) data types
// Primitive data types include:
// - Number
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol (added in ES6) 
// Non-primitive data types include:
// - Object
// - Array
// - Function
// - Date
// - RegExp
// - Error

// ----------------------------------------------------------
// 11. what are primitive data types
// In JavaScript, there are six primitive data types:
// - Number represents integer and floating-point numbers. For example, 123, 3.14, etc.
// - String represents a sequence of characters. For example, 'hello', "hello world!" etc.
// - Boolean represents a logical entity and can have two values: true, and false.
// - Null represents an intentional absence of any object value. For example, null.
// - Undefined represents an unintentional absence of any object value. For example, undefined.
// - Symbol (added in ES6) represents a unique identifier. For example, Symbol('foo').
// The following example shows how to use primitive data types in JavaScript:
// let age = 20; // number
// let name = 'Ajay'; // string
// let isMarried = false; // boolean
// let car = null; // null
// let house; // undefined
// let symbol = Symbol('foo'); // symbol

// ----------------------------------------------------------
// 12. what are non-primitive data types
// In JavaScript, there are six non-primitive data types:
// - Object represents a collection of properties. For example, {name: 'Ajay', age: 20}.
// - Array represents a list of elements. For example, ['Ajay', 20].
// - Function represents a function. For example, function() {}.
// - Date represents a date and time. For example, new Date().
// - RegExp represents a regular expression. For example, new RegExp().
// - Error represents an error. For example, new Error().
// The following example shows how to use non-primitive data types in JavaScript:
// let user = {
//     name: 'Ajay',
//     age: 20
// }; // object
// let colors = ['red', 'green', 'blue']; // array
// function greet() {} // function
// let today = new Date(); // date
// let re = new RegExp(); // regexp
// let error = new Error('something wrong'); // error

// ----------------------------------------------------------
// 13. what are the differences between primitive and non-primitive data types
// The following table illustrates the differences between primitive and non-primitive data types:
// +---------------------+-----------------------+-----------------------+
// |                     | Primitive             | Non-primitive         |
// +---------------------+-----------------------+-----------------------+
// | Stored in           | Stored in a variable  | Stored as a reference |
// |                     | directly              |                       |
// +---------------------+-----------------------+-----------------------+
// | Immutable           | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Copy by value       | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Examples            | Number, String,       | Object, Array,        |
// |                     | Boolean, Null,        | Function, Date,       |
// |                     | Undefined, Symbol     | RegExp, Error         |
// +---------------------+-----------------------+-----------------------+
// | Type of typeof      | Primitive             | Non-primitive         |
// +---------------------+-----------------------+-----------------------+
// | Type of instanceof  | Primitive             | Non-primitive         |
// +---------------------+-----------------------+-----------------------+
// | Type of constructor | Primitive             | Non-primitive         |
// +---------------------+-----------------------+-----------------------+
// | Type of isPrimitive | Yes                   | No                    |  
// +---------------------+-----------------------+-----------------------+
// | Type of isArray     | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isFunction  | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isDate      | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isRegExp    | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isError     | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isObject    | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isSymbol    | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Type of isUndefined | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 14. what are the differences between let and const and var keywords
// The following table illustrates the differences between let and const and var keywords:
// +---------------------+-----------------------+-----------------------+-----------------------+
// |                     | let                   | const                 | var                   |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Scope               | Block                 | Block                 | Function              |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Re-assignable       | Yes                   | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Redeclarable        | No                    | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Hoisting            | No                    | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | TDZ                 | Yes                   | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Temporal Dead Zone  | Yes                   | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+-----------------------+
// | Examples            | let age = 20;         | const age = 20;       | var age = 20;         |
// |                     | age = 30;             | age = 30;             | age = 30;             |
// +---------------------+-----------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 15. what are the differences between let and var keywords
// The following table illustrates the differences between let and var keywords:
// +---------------------+-----------------------+-----------------------+
// |                     | let                   | var                   |
// +---------------------+-----------------------+-----------------------+
// | Scope               | Block                 | Function              |
// +---------------------+-----------------------+-----------------------+
// | Re-assignable       | Yes                   | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Redeclarable        | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Hoisting            | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | TDZ                 | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Temporal Dead Zone  | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Examples            | let age = 20;         | var age = 20;         |
// |                     | age = 30;             | age = 30;             |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 16. what are the differences between const and var keywords
// The following table illustrates the differences between const and var keywords:
// +---------------------+-----------------------+-----------------------+
// |                     | const                 | var                   |
// +---------------------+-----------------------+-----------------------+
// | Scope               | Block                 | Function              |
// +---------------------+-----------------------+-----------------------+
// | Re-assignable       | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Redeclarable        | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Hoisting            | No                    | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | TDZ                 | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Temporal Dead Zone  | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Examples            | const age = 20;       | var age = 20;         |  
// |                     | age = 30;             | age = 30;             |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 17. what are the differences between let and const keywords
// The following table illustrates the differences between let and const keywords:
// +---------------------+-----------------------+-----------------------+
// |                     | let                   | const                 |
// +---------------------+-----------------------+-----------------------+
// | Scope               | Block                 | Block                 |
// +---------------------+-----------------------+-----------------------+
// | Re-assignable       | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Redeclarable        | No                    | No                    |
// +---------------------+-----------------------+-----------------------+
// | Hoisting            | No                    | No                    |
// +---------------------+-----------------------+-----------------------+
// | TDZ                 | Yes                   | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Temporal Dead Zone  | Yes                   | Yes                   |
// +---------------------+-----------------------+-----------------------+
// | Examples            | let age = 20;         | const age = 20;       |
// |                     | age = 30;             | age = 30;             |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 18. what are the differences between let and const and var keywords

// ----------------------------------------------------------
// 19. what is Expressions in JavaScript
// An expression is a piece of code that produces a value.
// For example, the following statements are expressions:
// 1 + 2; // 3
// 3 * 4; // 12
// 'hello' + 'world'; // 'hello world'

// ----------------------------------------------------------
// 20. what is Statements in JavaScript
// A statement is a piece of code that performs a specific task.
// For example, the following statements are statements:
// let age = 20;
// age = 30;
// age = 40;
// The first statement declares a variable called age and assigns the value 20 to it.
// The second statement re-assigns the value 30 to the age variable.
// The third statement re-assigns the value 40 to the age variable.
// The following statements are also statements:
// if (age > 20) {
//     console.log('You are old enough.');
// }
// The first statement checks if the age variable is greater than 20.
// The second statement prints out a message to the console if the age variable is greater than 20.
// The following statement is also a statement:
// function greet() {
//     console.log('Hello world!');
// }
// The statement defines a function called greet.
// The following statement is also a statement:
// greet();
// The statement calls the greet function.

// ----------------------------------------------------------
// 21. what are the differences between Expressions and Statements in JavaScript
// The following table illustrates the differences between expressions and statements:
// +---------------------+-----------------------+-----------------------+
// |                     | Expression            | Statement             |
// +---------------------+-----------------------+-----------------------+
// | Produces a value    | Yes                   | No                    |
// +---------------------+-----------------------+-----------------------+
// | Ends with a         | Yes                   | Yes                   |
// | semicolon           |                       |                       |
// +---------------------+-----------------------+-----------------------+
// | Can be used as a    | Yes                   | Yes                   |
// | part of another     |                       |                       |
// | expression          |                       |                       |
// +---------------------+-----------------------+-----------------------+
// | Examples            | 1 + 2;                | let age = 20;         |
// |                     | 3 * 4;                | age = 30;             |
// |                     | 'hello' + 'world';     | age = 40;             |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 22. Evaluating Code in JavaScript
// The JavaScript engine evaluates code in two phases:
// - Parsing: the JavaScript engine parses the code and generates an Abstract Syntax Tree (AST).
// - Execution: the JavaScript engine executes the code by following the AST.   
// For example, the following code:
// let age = 20;
// age = 30;
// age = 40;
// is parsed into the following AST:
// {
//     type: 'Program',
//     body: [
//         {
//             type: 'VariableDeclaration',
//             declarations: [
//                 {
//                     type: 'VariableDeclarator',
//                     id: {
//                         type: 'Identifier',
//                         name: 'age'
//                     },
//                     init: {
//                         type: 'Literal',
//                         value: 20
//                     }
//                 }
//             ],
//             kind: 'let'
//         },
//         {
//             type: 'ExpressionStatement',
//             expression: {
//                 type: 'AssignmentExpression',
//                 operator: '=',
//                 left: {
//                     type: 'Identifier',
//                     name: 'age'
//                 },
//                 right: {
//                     type: 'Literal',
//                     value: 30
//                 }
//             }
//         },
//         {
//             type: 'ExpressionStatement',
//             expression: {
//                 type: 'AssignmentExpression',
//                 operator: '=',
//                 left: {
//                     type: 'Identifier',
//                     name: 'age'
//                 },
//                 right: {
//                     type: 'Literal',
//                     value: 40
//                 }
//             }
//         }
//     ],
//     sourceType: 'script'
// }
// The JavaScript engine executes the code by following the AST.
// The following diagram illustrates the execution process:
// +---------------------+-----------------------+-----------------------+
// |                     | Parsing               | Execution             |
// +---------------------+-----------------------+-----------------------+
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// |                     |                       |                       |
// +---------------------+-----------------------+-----------------------+

// ----------------------------------------------------------
// 23. what is Hoisting in JavaScript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// For example, the following code is valid:
// age = 20;
// console.log(age);
// var age;
// In this code, we declared the age variable after it was used.
// The JavaScript engine will automatically move the variable declaration to the top of its scope.
// The code above is equivalent to the following:
// var age; // declaration
// age = 20; // assignment
// console.log(age); // 20
// In this code, we declared the age variable before it was used.
// The JavaScript engine will not move the variable declaration to the top of its scope.
// The following code is also valid:
// console.log(age); // undefined
// var age = 20;
// In this code, we used the age variable before it was declared.
// The JavaScript engine will automatically move the variable declaration to the top of its scope.
// The code above is equivalent to the following:
// var age; // declaration
// console.log(age); // undefined
// age = 20; // assignment
// The following code is also valid:
// console.log(age); // undefined
// age = 20;
// var age;
// In this code, we used the age variable before it was declared.
// The JavaScript engine will automatically move the variable declaration to the top of its scope.
// The code above is equivalent to the following:
// var age; // declaration
// console.log(age); // undefined
// age = 20; // assignment
// The following code is also valid:


// ----------------------------------------------------------
// 24. what is TDZ (Temporal Dead Zone) in JavaScript
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// For example, the following code is valid:
// age = 20;
// console.log(age);
// let age;
// In this code, we declared the age variable after it was used.
// The JavaScript engine will automatically move the variable declaration to the top of its scope.
// The code above is equivalent to the following:
// let age; // declaration
// age = 20; // assignment
// console.log(age); // 20
// In this code, we declared the age variable before it was used.
// The JavaScript engine will not move the variable declaration to the top of its scope.
// The following code is also valid:
// console.log(age); // undefined
// let age = 20;
// In this code, we used the age variable before it was declared.
// The JavaScript engine will not move the variable declaration to the top of its scope.
// The following code is also valid:
// console.log(age); // undefined
// age = 20;
// let age;
// In this code, we used the age variable before it was declared.
// The JavaScript engine will not move the variable declaration to the top of its scope.
// The following code is also valid:
// let age;
// console.log(age); // undefined
// age = 20;

// ----------------------------------------------------------