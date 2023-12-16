// ==============================
//           Operators          |
// ==============================
// 
// ----------------------------------------------
// 1. Operators 
// ----------------------------------------------
// Operators are used to perform operations on variables and values.
// We have already used some of them like the assignment operator (=) or the addition operator (+).
// In this lesson we will learn about some of the other operators that we can use in JavaScript.

// ----------------------------------------------
// 2. Types Of Operators
// ----------------------------------------------
// (i) Assignment Operators 
// (ii) Arithmetic Operators
// (iii) Comparison Equality Operators
// (iV) Logical Operators
// (V) Ternary Operators
// (Vi) Bitwise Operators
// (Vii) String Operators
// (Viii) Comma Operator
// (Ix) Unary Operators
// (X) Relational Operators
// (Xi) Conditional (ternary) Operator
// (Xii) Grouping Operator
// (Xiii) Destructuring Assignment
// (Xiv) Spread Operator
// (Xv) Optional Chaining Operator
// (Xvi) Nullish Coalescing Operator
// (Xvii) Logical nullish assignment operator
// (Xviii) Exponentiation operator

// ----------------------------------------------

// 1. Assignment Operators
// Assignment operators are used to assign values to JavaScript variables.
// type of assignment operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | =              | Assignment        | x = y             |
// | +=             | Addition          | x += y            |
// | -=             | Subtraction       | x -= y            |
// | *=             | Multiplication    | x *= y            |
// | /=             | Division          | x /= y            |
// | %=             | Remainder         | x %= y            |
// | **=            | Exponentiation    | x **= y           |
// | <<=            | Left shift        | x <<= y           |
// | >>=            | Right shift       | x >>= y           |
// | >>>=           | Unsigned right    | x >>>= y          |
// |                | shift             |                   |
// | &=             | Bitwise AND       | x &= y            |
// | ^=             | Bitwise XOR       | x ^= y            |
// | |=             | Bitwise OR        | x |= y            |
// | &&=            | Logical AND       | x &&= y           |
// | ||=            | Logical OR        | x ||= y           |
// | ??=            | Logical nullish   | x ??= y           |
// |                | coalescing        |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------

// 2. Arithmetic Operators
// Arithmetic operators are used to perform arithmetic between variables and/or values.
// type of arithmetic operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | +              | Addition          | x + y             |
// | -              | Subtraction       | x - y             |
// | *              | Multiplication    | x * y             |
// | **             | Exponentiation    | x ** y            |
// | /              | Division          | x / y             |
// | %              | Modulus           | x % y             |
// | ++             | Increment         | ++x               |
// | --             | Decrement         | --x               |
// +----------------+-------------------+-------------------+

// ----------------------------------------------

// 3. Comparison Equality Operators
// Comparison operators are used in logical statements to determine equality or difference between variables or values.
// type of comparison operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ==             | Equal             | x == y            |
// | ===            | Strict equal      | x === y           |
// | !=             | Not equal         | x != y            |
// | !==            | Strict not equal  | x !== y           |
// | >              | Greater than      | x > y             |
// | >=             | Greater than or   | x >= y            |
// |                | equal             |                   |
// | <              | Less than         | x < y             |
// | <=             | Less than or      | x <= y            |
// |                | equal             |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------

// 4. Logical Operators
// Logical operators are used to determine the logic between variables or values.
// type of logical operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | &&             | Logical AND       | x && y            |
// | ||             | Logical OR        | x || y            |
// | !              | Logical NOT       | !x                |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 5. Ternary Operators
// Ternary operators are used to determine the logic between variables or values.
// type of ternary operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ? :            | Ternary           | (x > y) ? x : y   |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 6. Bitwise Operators
// Bitwise operators are used to perform bitwise operations between variables or values.
// type of bitwise operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | &              | AND               | x & y             |
// | |              | OR                | x | y             |
// | ~              | NOT               | ~x                |
// | ^              | XOR               | x ^ y             |
// | <<             | Left shift        | x << y            |
// | >>             | Right shift       | x >> y            |
// | >>>            | Zero fill right   | x >>> y           |
// |                | shift             |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 7. String Operators
// String operators are used to perform string operations between variables or values.
// type of string operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | +              | Concatenation     | x + y             |
// | +=             | Concatenation     | x += y            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 8. Comma Operator
// Comma operator is used to separate multiple expressions.
// type of comma operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ,              | Comma             | x = 5, y = 6      |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 9. Unary Operators
// Unary operators are used to perform unary operations on a single operand.
// type of unary operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | delete         | Delete            | delete x          |
// | typeof         | Typeof            | typeof x          |
// | void           | Void              | void (x)          |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 10. Relational Operators
// Relational operators are used to determine the relationship between variables or values.
// type of relational operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | in             | In                | x in y            |
// | instanceof     | Instanceof        | x instanceof y    |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 11. Conditional (ternary) Operator
// Conditional (ternary) operator is the only JavaScript operator that takes three operands.
// type of conditional (ternary) operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ? :            | Conditional       | (x > y) ? x : y   |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 12. Grouping Operator
// Grouping operator is used to control the precedence of evaluation in an expression.
// type of grouping operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ( )            | Grouping          | (3 + 4) * 5       |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 13. Destructuring Assignment
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.
// type of destructuring assignment
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ...            | Spread operator   | ...arr            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 14. Spread Operator
// Spread operator is used to expand an array into its elements.
// type of spread operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ...            | Spread operator   | ...arr            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 15. Optional Chaining Operator
// Optional chaining operator is used to check if an object exists before accessing its properties.
// type of optional chaining operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ?.             | Optional chaining | obj.val?.prop     |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 16. Nullish Coalescing Operator
// Nullish coalescing operator is used to check if a value is null or undefined.
// type of nullish coalescing operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ??             | Nullish coalescing| x ?? y            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 17. Logical nullish assignment operator
// Logical nullish assignment operator is used to assign a value to a variable if it is null or undefined.
// type of logical nullish assignment operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ??=            | Logical nullish   | x ??= y           |
// |                | assignment        |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 18. Exponentiation operator
// Exponentiation operator is used to raise the first operand to the power of the second operand.
// type of exponentiation operator
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | **             | Exponentiation    | x ** y            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 19. Operator Precedence
// Operator precedence determines the order in which operators are evaluated.
// type of operator precedence
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ...            | Spread operator   | ...arr            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 20. Operator Associativity
// Operator associativity determines the order in which operators of the same precedence are evaluated.
// type of operator associativity
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ...            | Spread operator   | ...arr            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 21. Operator Overloading
// Operator overloading is a feature of JavaScript that allows us to use operators on objects.
// type of operator overloading
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ...            | Spread operator   | ...arr            |
// |                |                   |                   |
// +----------------+-------------------+-------------------+

// ----------------------------------------------
// 3. Comparison Equality Operators 
// ----------------------------------------------
// Comparison operators are used in logical statements to determine equality or difference between variables or values.
// type of comparison operators
// +----------------+-------------------+-------------------+
// |    Operator    |       Name        |      Example      |
// +----------------+-------------------+-------------------+
// | ==             | Equal             | x == y            |
// | ===            | Strict equal      | x === y           |
// | !=             | Not equal         | x != y            |
// | !==            | Strict not equal  | x !== y           |
// | >              | Greater than      | x > y             |
// | >=             | Greater than or   | x >= y            |
// |                | equal             |                   |
// | <              | Less than         | x < y             |
// | <=             | Less than or      | x <= y            |
// |                | equal             |                   |
// +----------------+-------------------+-------------------+

