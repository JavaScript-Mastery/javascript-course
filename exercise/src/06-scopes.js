// ==============================
//        Scopes                |
// ==============================

// -----------------------------------------------
// 1. scope 
// -----------------------------------------------
// Scope is the context that code is executed in. 
// There are 5 types of scope in JavaScript:
// 1.1 global scope
// 1.2 function scope
// 1.3 block scope
// 1.4 lexical scope
// 1.5 dynamic scope

// -----------------------------------------------
// 1.1 global scope
// -----------------------------------------------
// Global scope is the outermost scope in JavaScript.
// It is the context that code is executed in when it is not inside any function or block.
// Global scope is accessible from everywhere in your code.

// -----------------------------------------------
// 1.2 function scope
// -----------------------------------------------
// Function scope is the scope that is created when a function is defined.
// It is accessible from everywhere in the function.

// -----------------------------------------------
// 1.3 block scope
// -----------------------------------------------
// Block scope is the scope that is created when a block is defined.
// It is accessible from everywhere in the block.

// -----------------------------------------------
// 1.4 lexical scope
// -----------------------------------------------
// Lexical scope is the scope that is created when a function is defined.
// It is accessible from everywhere in the function.

// -----------------------------------------------
// 1.5 dynamic scope
// -----------------------------------------------
// Dynamic scope is the scope that is created when a function is called.
// It is accessible from everywhere in the function.

// -----------------------------------------------
// 2. scope for var / let / const 
// -----------------------------------------------
// 2.1 var
// -----------------------------------------------
// var is function scoped.
// var is accessible from everywhere in the function.

// -----------------------------------------------
// 2.2 let
// -----------------------------------------------
// let is block scoped.
// let is accessible from everywhere in the block.

// -----------------------------------------------
// 2.3 const
// -----------------------------------------------
// const is block scoped.
// const is accessible from everywhere in the block.

// -----------------------------------------------
// 3. var vs let vs const
// -----------------------------------------------
//  Difference between var, let and const is the scope.
// 
// +----------------+----------------+----------------+----------------+
// |                | function scope | block scope    | block scope    |
// |                |                |                |                |
// |                | var            | let            | const          |
// +----------------+----------------+----------------+----------------+
// | reassign       | yes            | yes            | no             |
// +----------------+----------------+----------------+----------------+
// | redeclare      | yes            | no             | no             |
// +----------------+----------------+----------------+----------------+
// | hoisting       | yes            | no             | no             |
// +----------------+----------------+----------------+----------------+
// | temporal dead  | no             | yes            | yes            |
// | zone           |                |                |                |
// +----------------+----------------+----------------+----------------+
// | scope          | function       | block          | block          |
// +----------------+----------------+----------------+----------------+
// | accessible     | everywhere     | everywhere     | everywhere     |
// | from           | in the         | in the         | in the         |
// |                | function       | block          | block          |
// +----------------+----------------+----------------+----------------+

// -----------------------------------------------