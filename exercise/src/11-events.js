
// ==============================
//           Events             |
// ==============================

// ------------------------------
// What is an event?
// An event is an action that happens as a result of something the user did.
// For example, when the user clicks a button, that's an event.
// When the user presses a key on the keyboard, that's an event.
// When the user moves the mouse, that's an event.
// When the user submits a form, that's an event.
// When the page finishes loading, that's an event.
// And so on...

// ------------------------------
// How do we handle events?
// We handle events using event handlers.
// An event handler is a function that is executed when an event occurs.
// For example, when the user clicks a button, an event handler is executed.
// When the user presses a key on the keyboard, an event handler is executed.
// When the user moves the mouse, an event handler is executed.
// When the user submits a form, an event handler is executed.
// When the page finishes loading, an event handler is executed.
// And so on...

// ------------------------------
// How do we create event handlers?
// We create event handlers by assigning functions to event handler properties.
// For example, we can assign a function to the onclick property of a button.
// When the user clicks the button, the function will be executed.
// For example:
//
// // create a function that is executed when the user clicks the button
// function handleClick() {
//     console.log('The button was clicked!');
// }
//
// // create a button
// let button = document.createElement('button');
// button.innerHTML = 'Click me';
// 
// // assign the handleClick function to the onclick property of the button
// button.onclick = handleClick;
// 
// // add the button to the page
// document.body.appendChild(button);

// ------------------------------
// What is the event object?
// The event object is an object that contains information about the event.
// For example, the event object contains information about the mouse click.
// For example:
//
// // create a function that is executed when the user clicks the button
// function handleClick(event) {
//     console.log(event);
// }
//
// // create a button
// let button = document.createElement('button');
// button.innerHTML = 'Click me';
//
// // assign the handleClick function to the onclick property of the button
// button.onclick = handleClick;
//

// ------------------------------
//  event-listeners
// ------------------------------
// event-listeners are functions that are executed when an event occurs.
// for example:
//  // create a function that is executed when the user clicks the button
// function handleClick(event) {
//     console.log(event);
// }
//
// // create a button
// let button = document.createElement('button');
// button.innerHTML = 'Click me';
//
// // add an event-listener to the button
// button.addEventListener('click', handleClick);
//
// // add the button to the page
// document.body.appendChild(button);

// ------------------------------


// event-object 
// ------------------------------
// the event object is an object that contains information about the event.
// for example:
// // create a function that is executed when the user clicks the button
// function handleClick(event) {
//     console.log(event);
// }
//
// // create a button
// let button = document.createElement('button');
// button.innerHTML = 'Click me';
//
// // add an event-listener to the button
// button.addEventListener('click', handleClick);
//
// // add the button to the page
// document.body.appendChild(button);

// ------------------------------
// event-target
// ------------------------------
// the event-target is the element that the event occurred on.
// for example:
// // create a function that is executed when the user clicks the button
// function handleClick(event) {
//     console.log(event.target);
// }
//
// // create a button
// let button = document.createElement('button');
// button.innerHTML = 'Click me';
//
// // add an event-listener to the button
// button.addEventListener('click', handleClick);
//
// // add the button to the page
// document.body.appendChild(button);

// ------------------------------
// event-type
// ------------------------------
// the event-type is the type of event that occurred.
// for example:
// // create a function that is executed when the user clicks the button
// function handleClick(event) {
//     console.log(event.type);
// }
//

// events-exercise 

// 1. Create a button in HTML with the text "Click me"
// 2. Add an event-listener to the button that listens for the click event
// 3. When the user clicks the button, display an alert box with the text "Hello there!"
// 4. Add the button to the page


