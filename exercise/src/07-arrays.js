// ==============================
//        Arrays                |
// ==============================

// -------------------------------------
//                  Arrays 
// -------------------------------------
// Array is a collection of elements.
// Array is a collection of values.
// Array is a collection of anything.
// Array is a collection of objects.
// Array is a collection of arrays.
// Array is a collection of functions.
// Array is a collection of mixed types.
// Array is a collection of anything you can think of.
// Array is a collection of anything you can imagine.
// Array is a collection of anything you can dream of.
// Array is a collection of anything you can dream up.

// Defination of array: 
// Array is a collection of elements. Elements can be anything.
// for example: 
// collection of numbers.
// collection of strings.
// collection of booleans.
// collection of objects.
// collection of arrays.
// collection of functions.
// collection of mixed types.

// Define an array:
// 1. using array literal
// 2. using array constructor
// 3. using Array.from()
// 4. using Array.of()

// -------------------------------------
// 1. using array literal
// -------------------------------------
// Array literal is a way to create an array.
// for example:
// const arr = [1, 2, 3];
// const arr = ['a', 'b', 'c'];
// const arr = [true, false, true];
// const arr = [{}, {}, {}];
// const arr = [[], [], []];
// const arr = [() => {}, () => {}, () => {}];
// const arr = [1, 'a', true, {}, [], () => {}];
// const arr = [1, [2, 3], [4, 5]];

// -------------------------------------
// 2. using array constructor
// -------------------------------------
// Array constructor is a way to create an array.
// for example:
// const arr = new Array(1, 2, 3);
// const arr = new Array('a', 'b', 'c');
// const arr = new Array(true, false, true);
// const arr = new Array({}, {}, {});
// const arr = new Array([], [], []);
// const arr = new Array(() => {}, () => {}, () => {});
// const arr = new Array(1, 'a', true, {}, [], () => {});
// const arr = new Array(1, [2, 3], [4, 5]);

// -------------------------------------
// 3. using Array.from()
// -------------------------------------
// Array.from() is a way to create an array.
// for example:
// const arr = Array.from([1, 2, 3]);
// const arr = Array.from(['a', 'b', 'c']);
// const arr = Array.from([true, false, true]);
// const arr = Array.from([{}, {}, {}]);
// const arr = Array.from([[], [], []]);
// const arr = Array.from([() => {}, () => {}, () => {}]);
// const arr = Array.from([1, 'a', true, {}, [], () => {}]);
// const arr = Array.from([1, [2, 3], [4, 5]]);
// const arr = Array.from('abc');

// -------------------------------------
// 4. using Array.of()
// -------------------------------------
// Array.of() is a way to create an array.
// for example:
// const arr = Array.of(1, 2, 3);
// const arr = Array.of('a', 'b', 'c');
// const arr = Array.of(true, false, true);
// const arr = Array.of({}, {}, {});
// const arr = Array.of([], [], []);
// const arr = Array.of(() => {}, () => {}, () => {});
// const arr = Array.of(1, 'a', true, {}, [], () => {});
// const arr = Array.of(1, [2, 3], [4, 5]);
// const arr = Array.of('abc');

// -------------------------------------
// 5. accessing elements
// -------------------------------------
// Elements in array are accessible by index.
// Index starts from 0.
// for example:
// const arr = [1, 2, 3];
// const arr2 = ['a', 'b', 'c'];

// console.log(arr[0]); // 1
// console.log(arr[1]); // 2
// console.log(arr[2]); // 3
// console.log(arr[3]); // undefined

// -------------------------------------
// 2. useful-array-methods 
// -------------------------------------
// 
// Important array methods:
// If you have an array, you can do the following:
// like:
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
// then:
// ----------------------------
// 1. arr.length - get the length of array 
// example:
console.log(arr1.length); // 3
// ---------------------------------
// 2. arr.push() - add an element at the end of array
// example:
arr1.push(4); // [1, 2, 3, 4]
// ---------------------------------
// 3. arr.pop() - remove an element from the end of array
// example:
arr1.pop(); // [1, 2, 3]
// ---------------------------------
// 4. arr.unshift() - add an element at the beginning of array
// example:
arr1.unshift(0); // [0, 1, 2, 3]
// ---------------------------------
// 5. arr.shift() - remove an element from the beginning of array
// example:
arr1.shift(); // [1, 2, 3]
// ---------------------------------
// 6. arr.indexOf() - get the index of an element
// example:
arr1.indexOf(2); // 1
// ---------------------------------
// 7. arr.includes() - check if an element exists in array
// example:
arr1.includes(2); // true
// ---------------------------------
// 8. arr.slice() - get a part of array
// example:
arr1.slice(1); // [2, 3]
// ---------------------------------
// 9. arr.splice() - remove an element from array
// example:
arr1.splice(1, 1); // [1, 3]
// ---------------------------------
// 10. arr.reverse() - reverse an array
// example:
arr1.reverse(); // [3, 2, 1]
// ---------------------------------
// 11. arr.join() - convert an array to string
// example:
arr1.join(); // '1,2,3'
// ---------------------------------
// 12. arr.concat() - merge two arrays
// example:
arr1.concat(arr2); // [1, 2, 3, 'a', 'b', 'c']
// ---------------------------------
// 13. arr.sort() - sort an array
// example:
arr1.sort(); // [1, 2, 3]
// ---------------------------------
// 14. arr.forEach() - iterate over an array
// example:
arr1.forEach((item) => {
  console.log(item);
});
// ---------------------------------
// 15. arr.map() - iterate over an array and return a new array
// example:
arr1.map((item) => {
  return item * 2;
});
// ---------------------------------
// 16. arr.filter() - iterate over an array and return a new array
// example:
arr1.filter((item) => {
  return item > 2;
});
// ---------------------------------
// 17. arr.reduce() - iterate over an array and return a new value
// example:
arr1.reduce((acc, item) => {
  return acc + item;
}, 0);
// ---------------------------------
// 18. arr.find() - iterate over an array and return a value
// example:
arr1.find((item) => {
  return item === 2;
});
// ---------------------------------
// 19. arr.findIndex() - iterate over an array and return an index
// example:
arr1.findIndex((item) => {
  return item === 2;
});
// ---------------------------------
// 20. arr.every() - iterate over an array and return a boolean
// example:
arr1.every((item) => {
  return item > 2;
});
// ---------------------------------
// 21. arr.some() - iterate over an array and return a boolean
// example:
arr1.some((item) => {
  return item > 2;
});
// ---------------------------------
// 22. arr.flat() - iterate over an array and return a new array
// example:
arr1.flat();
// ---------------------------------
// 23. arr.flatMap() - iterate over an array and return a new array
// example:
arr1.flatMap();
// ---------------------------------
// 24. arr.fill() - iterate over an array and return a new array
// example:
arr1.fill(); // [1, 2, 3]
// ---------------------------------
// 25. arr.copyWithin() - iterate over an array and return a new array
// example:
arr1.copyWithin(); // [1, 2, 3]
// ---------------------------------
// 26. arr.toString() - iterate over an array and return a new array
// example:
arr1.toString(); // '1,2,3'
// ---------------------------------
// 27. arr.toLocaleString() - iterate over an array and return a new array
// example:
arr1.toLocaleString(); // '1,2,3'
// ---------------------------------
// 28. arr.entries() - iterate over an array and return a new array
// example:
arr1.entries(); // [1, 2, 3]
// ---------------------------------
// 29. arr.keys() - iterate over an array and return a new array
// example:
arr1.keys(); // [1, 2, 3]
// ---------------------------------
// 30. arr.values() - iterate over an array and return a new array
// example:
arr1.values(); // [1, 2, 3]
// ---------------------------------
// 31. arr.includes() - iterate over an array and return a new array
// example:
arr1.includes(); // [1, 2, 3]
// ---------------------------------
// 32. arr.flat() - iterate over an array and return a new array
// example:
arr1.flat(); // [1, 2, 3]
// ---------------------------------
// 33. arr.flatMap() - iterate over an array and return a new array
// example:
arr1.flatMap(); // [1, 2, 3]
// ---------------------------------
// 34. arr.from() - iterate over an array and return a new array
// example:
arr1.from(); // [1, 2, 3]
// ---------------------------------
// 35. arr.of() - iterate over an array and return a new array
// example:
arr1.of(); // [1, 2, 3]
// ---------------------------------
// 36. arr.toString() - iterate over an array and return a new array
// example:
arr1.toString(); // [1, 2, 3]
// ---------------------------------
// 37. arr.toLocaleString() - iterate over an array and return a new array
// example:
arr1.toLocaleString(); // [1, 2, 3]
// ---------------------------------
// 38. arr.entries() - iterate over an array and return a new array
// example:
arr1.entries(); // [1, 2, 3]
// ---------------------------------
// 39. arr.keys() - iterate over an array and return a new array
// example:
arr1.keys(); // [1, 2, 3]
// ---------------------------------
// 40. arr.values() - iterate over an array and return a new array
// example:
arr1.values(); // [1, 2, 3]
// ---------------------------------
// 41. arr.includes() - iterate over an array and return a new array
// example:
arr1.includes(); // [1, 2, 3]
// ---------------------------------
// 42. arr.flat() - iterate over an array and return a new array
// example:
arr1.flat(); // [1, 2, 3]
// ---------------------------------
// 43. arr.flatMap() - iterate over an array and return a new array
// example:
arr1.flatMap(); // [1, 2, 3]
// ---------------------------------
// 44. arr.from() - iterate over an array and return a new array
// example:
arr1.from(); // [1, 2, 3]
// ---------------------------------
// 45. arr.of() - iterate over an array and return a new array
// example:
arr1.of(); // [1, 2, 3]
// ---------------------------------

// -------------------------------------
// 3. array-methods-exercise
// -------------------------------------
//
// Exercise or Task:
// 1. Create an array of numbers.
// 2. Create an array of strings.
// 3. Create an array of booleans.
// 4. Create an array of objects.
// 5. Create an array of arrays.
// 6. Create an array of functions.
// 7. Create an array of mixed types.
// 8. Create an array of anything you want.
// 9. Create an array of anything you can imagine.
// 10. Create an array of anything you can dream up.


// -------------------------------------
// 3. mutability 
// -------------------------------------
// Mutable means changeable.
// Defination of mutable:
// Mutable means can be changed.
// Mutable means can be modified.
// Use let to create mutable variables.
// for example:
// let name = 'John';
// name = 'Jane';
// console.log(name); // Jane

// -------------------------------------
// mutable-immutable-data-exercise
// -------------------------------------
// exapmle for mutable data:
// const person = {
//   name: 'John',
//   age: 32,
// };
// person.name = 'Jane';
// console.log(person); // { name: 'Jane', age: 32 }

// -------------------------------------
// immutable 
// -------------------------------------
// Immutable means unchangeable.
// Defination of immutable:
// Immutable means cannot be changed.
// Immutable means cannot be modified.
// Use const to create immutable variables.
// for example:
// const name = 'John';
// name = 'Jane';
// console.log(name); // Error

// -------------------------------------
// immutable-data-exercise
// -------------------------------------
// exapmle for immutable data:
// const person = {
//   name: 'John',
//   age: 32,
// };
// person.name = 'Jane';
// console.log(person); // { name: 'Jane', age: 32 }

// -------------------------------------
// 5. immutable-variables-values 
// -------------------------------------
// Immutable variables and values:
// Immutable variables cannot be changed.
// Immutable values cannot be changed.
// for example:
// const name = 'John';
// name = 'Jane';
// console.log(name); // Error

// -------------------------------------
// 6. variables-arrays 
// -------------------------------------
// Variables and arrays:
// Variables can hold arrays.
// Arrays can hold variables.
// for example:
// const arr = [1, 2, 3];
// const name = 'John';
// const person = {
//   name: 'John',
//   age: 32,
// };
// const arr2 = [1, 'a', true, {}, [], () => {}];

// -------------------------------------
// 7. arrays-objects
// -------------------------------------
// Arrays and objects:
// Arrays can hold objects.
// Objects can hold arrays.
// for example:
// const arr = [{}, {}, {}];
// const person = {
//   name: 'John',
//   age: 32,
//   hobbies: ['a', 'b', 'c'],
// };
// console.log(person.hobbies[0]); // a

// -------------------------------------
// 7. map-filter 
// -------------------------------------
// Map and filter:
// Map and filter are array methods.
// Map and filter are used to iterate over an array.
// Map and filter are used to return a new array.

// -------------------------------------
// 8. filter
// -------------------------------------
// Filter is an array method.
// Filter is used to iterate over an array.
// Filter is used to return a new array.
// Filter is used to filter out elements from an array.
// Filter is used to filter out elements from an array based on a condition.
// Filter is used to filter out elements from an array based on a function.
// Filter is used to filter out elements from an array based on a callback function.
// Filter is used to filter out elements from an array based on a boolean.

// -------------------------------------

// 9. spread 
// -------------------------------------
// Spread is an operator.
// Spread is used to spread an array.
// Spread is used to spread an array into individual elements, arguments, parameters of a function.

// for example:
// const arr = [1, 2, 3];
// const arr2 = [...arr];
// console.log(arr2); // [1, 2, 3]
