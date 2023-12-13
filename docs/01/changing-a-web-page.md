# Changing a Web Page

JavaScript provides powerful tools for dynamically changing a web page's content and behavior. This allows for interactive and engaging user experiences. Here are some ways to change a web page with JavaScript, along with examples:

### 1. Modifying HTML Content

- **Changing Text Content:** Use the `innerHTML` property to directly change the content of an HTML element.

```html
<p id="message">This is the original message.</p>
```

```javascript
// Get the element by ID
const messageElement = document.getElementById("message");

// Change the content
messageElement.innerHTML = "This is the new message.";
```

- **Adding and Removing Elements:** Use methods like `appendChild`, `removeChild`, and `createElement` to manipulate the DOM tree.

```html
<div id="container"></div>
```

```javascript
// Get the container element
const container = document.getElementById("container");

// Create a new element
const newElement = document.createElement("p");

// Set the element content
newElement.textContent = "This is a new paragraph.";

// Add the new element to the container
container.appendChild(newElement);

// Remove an element
container.removeChild(document.getElementById("childElement"));
```

### 2. Modifying CSS Styles

- **Setting inline styles:** Use the `style` property to set styles directly on an element.

```html
<h1 id="heading">Heading</h1>
```

```javascript
const headingElement = document.getElementById("heading");
headingElement.style.color = "red";
headingElement.style.fontSize = "20px";
```

- **Adding and removing CSS classes:** Use the `classList` property to add and remove CSS classes from an element.

```html
<button id="button">Click Me</button>
```

```javascript
const buttonElement = document.getElementById("button");

// Add a class
buttonElement.classList.add("active");

// Remove a class
buttonElement.classList.remove("disabled");
```

### 3. Reacting to Events

- **Handle user actions:** Use event listeners to react to user interactions like clicks, key presses, and mouse movements.

```html
<button id="button">Click Me</button>
```

```javascript
const buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", function () {
  alert("Button clicked!");
});
```

### Examples:

- **Changing a button text on click:**

```html
<button id="button">Change Text</button>
```

```javascript
const buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", function () {
  buttonElement.textContent = "Text changed!";
});
```

- **Hiding an element on scroll:**

```html
<div id="element">This element will be hidden.</div>
```

```javascript
window.addEventListener("scroll", function () {
  const element = document.getElementById("element");
  if (window.scrollY > 100) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});
```

These are just a few basic examples of how to change a web page with JavaScript. With a bit of practice, you can create complex and dynamic web pages that respond to user interaction and update in real time.

Here are some resources for further learning:

- **W3Schools JavaScript Tutorial:** [https://www.w3schools.com/js/](https://www.w3schools.com/js/)
- **JavaScript DOM Reference:** [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- **Eloquent JavaScript:** [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

Remember, the possibilities are endless when it comes to changing a web page with JavaScript. Be creative and have fun!
