// ==============================
//        Objects                |
// ==============================

// ---------------------------------
// What is an object?
// ---------------------------------
// Objects are collections of properties. 
// Properties are a key-value pair.
// Objects are created using the {} syntax.
// Objects are mutable.
// Objects are accessed using the dot notation or the bracket notation.
// Objects are passed by reference.
// Objects are compared by reference.
// Objects are iterated using the for...in loop.

// ---------------------------------
// How to create an object? and how to access its properties?
// ---------------------------------
// Objects are created using the {} syntax.
// const obj = {};
// const obj = { key: value };
// const obj = { key: value, key: value };
// for example:
// const obj = { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } };
// console.log(obj); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } }
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23
// console.log(obj.address); // { city: 'Mandsaur', state: 'MP' }
// console.log(obj.address.city); // Mandsaur
// console.log(obj.address.state); // MP

// ---------------------------------
// How to add a property to an object?
// ---------------------------------
// Objects are mutable.
// Objects are accessed using the dot notation or the bracket notation.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj); // { name: 'Ajay', age: 23 }
// obj.address = { city: 'Mandsaur', state: 'MP' };
// console.log(obj); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } }
// obj['country'] = 'India';
// console.log(obj); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' }, country: 'India' }
// obj['address']['pincode'] = 458001;
// console.log(obj); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP', pincode: 458001 }, country: 'India' }

// ---------------------------------
// How to remove a property from an object?
// ---------------------------------
// Objects are mutable.
// Objects are accessed using the dot notation or the bracket notation.
// for example:
// const obj = { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } };
// console.log(obj); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } }
// delete obj.address;
// console.log(obj); // { name: 'Ajay', age: 23 }
// delete obj['age'];
// console.log(obj); // { name: 'Ajay' }

// ---------------------------------
// How to iterate over an object?
// ---------------------------------
// Objects are iterated using the for...in loop.
// for example:
// const obj = { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' } };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }
// // name Ajay
// // age 23
// // address { city: 'Mandsaur', state: 'MP' }

// ---------------------------------
// How to compare two objects?
// ---------------------------------
// Objects are compared by reference.
// for example:
// const obj1 = { name: 'Ajay', age: 23 };
// const obj2 = { name: 'Ajay', age: 23 };
// console.log(obj1 === obj2); // false
// const obj3 = obj1;
// console.log(obj1 === obj3); // true

// ---------------------------------
// How to pass an object to a function?
// ---------------------------------
// Objects are passed by reference.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// function print(obj) {
//   console.log(obj);
// }
// print(obj); // { name: 'Ajay', age: 23 }

// ---------------------------------
// How to return an object from a function?
// ---------------------------------
// Objects are passed by reference.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// function get() {
//   return obj;
// }
// console.log(get()); // { name: 'Ajay', age: 23 }

// ---------------------------------
// How to copy an object?
// ---------------------------------
// Objects are passed by reference.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// const copy = obj;
// console.log(copy); // { name: 'Ajay', age: 23 }
// console.log(copy === obj); // true

// ---------------------------------
// How to merge two objects?
// ---------------------------------
// Objects are passed by reference.
// for example:
// const obj1 = { name: 'Ajay', age: 23 };
// const obj2 = { address: { city: 'Mandsaur', state: 'MP' } };
// const obj3 = { country: 'India' };
// const obj4 = Object.assign(obj1, obj2, obj3);
// console.log(obj4); // { name: 'Ajay', age: 23, address: { city: 'Mandsaur', state: 'MP' }, country: 'India' }
// console.log(obj4 === obj1); // true

// ---------------------------------
// How to clone an object?
// ---------------------------------
// Objects are passed by reference.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// const clone = Object.assign({}, obj);
// console.log(clone); // { name: 'Ajay', age: 23 }
// console.log(clone === obj); // false

// ---------------------------------
// How to compare two objects?
// ---------------------------------
// Objects are compared by reference.
// for example:
// const obj1 = { name: 'Ajay', age: 23 };
// const obj2 = { name: 'Ajay', age: 23 };
// console.log(obj1 === obj2); // false
// const obj3 = obj1;
// console.log(obj1 === obj3); // true

// ---------------------------------
// How to check if a property exists in an object?
// ---------------------------------
// Objects are accessed using the dot notation or the bracket notation.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23
// console.log(obj.address); // undefined
// console.log(obj['address']); // undefined
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('address')); // false

// ---------------------------------
// How to check if a property is enumerable?
// ---------------------------------
// Objects are iterated using the for...in loop.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// for (const key in obj) {
//   console.log(key, obj[key]);
// }
// // name Ajay
// // age 23
// // address { city: 'Mandsaur', state: 'MP' }
// console.log(obj.propertyIsEnumerable('name')); // true
// console.log(obj.propertyIsEnumerable('address')); // false

// ---------------------------------
// How to check if a property is writable?
// ---------------------------------
// Objects are accessed using the dot notation or the bracket notation.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23
// console.log(obj.address); // undefined
// console.log(obj['address']); // undefined
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('address')); // false
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// // {
// //   value: 'Ajay',
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }
// console.log(Object.getOwnPropertyDescriptor(obj, 'address'));
// // undefined

// ---------------------------------
// How to check if a property is configurable?
// ---------------------------------
// Objects are accessed using the dot notation or the bracket notation.
// for example:
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23
// console.log(obj.address); // undefined
// console.log(obj['address']); // undefined
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('address')); // false
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// // {
// //   value: 'Ajay',
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }
// console.log(Object.getOwnPropertyDescriptor(obj, 'address'));
// // undefined

// ---------------------------------
// visualizing-object-access 
// ---------------------------------
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23
// console.log(obj.address); // undefined

// ---------------------------------
// objects-exercise 
// ---------------------------------
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.name); // Ajay
// console.log(obj.age); // 23

// ---------------------------------
// object-methods or object-methods-exercise
// ---------------------------------
// const obj = { name: 'Ajay', age: 23 };
// console.log(obj.hasOwnProperty('name')); // true
// console.log(obj.hasOwnProperty('address')); // false
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// // { 
// //   value: 'Ajay',
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }
// console.log(Object.getOwnPropertyDescriptor(obj, 'address'));
// // undefined

// ---------------------------------
// built-in-objects 
// ---------------------------------
// const str = 'Ajay';
// console.log(str.length); // 4
// console.log(str.toUpperCase()); // AJAY
// console.log(str.toLowerCase()); // ajay
// console.log(str.charAt(0)); // A
// console.log(str.charAt(1)); // j
// console.log(str.charAt(2)); // a
// console.log(str.charAt(3)); // y

// ---------------------------------