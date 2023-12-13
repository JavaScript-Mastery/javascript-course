# where to write javascript ?

There are three main places where you can write JavaScript:

1. **In the `<head>` section of your HTML document:** This is the most common place to put JavaScript that needs to run before the page is loaded, such as scripts that set up the page layout or define global variables.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      // This script will run before the page is loaded
      function myFunction() {
        alert("Hello, world!");
      }
    </script>
  </head>
  <body></body>
</html>
```

2. **In the `<body>` section of your HTML document:** This is where you put JavaScript that interacts with the page content, such as scripts that add event listeners or manipulate the DOM.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script>
      // This script will run after the page is loaded
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hello, world!";
      }
    </script>
    <p id="demo">Click the button to change the text.</p>
    <button onclick="myFunction()">Click me!</button>
  </body>
</html>
```

3. **In a separate JavaScript file:** This is a good option for large or complex scripts, as it makes your HTML code cleaner and easier to maintain.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body></body>
</html>
```

```javascript
// script.js
function myFunction() {
  alert("Hello, world!");
}
```

**Example:**

Here is an example of how to write a script that adds a click event listener to a button and changes the text of a paragraph when the button is clicked:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script>
      // Add a click event listener to the button
      document
        .getElementById("myButton")
        .addEventListener("click", function () {
          // Change the text of the paragraph
          document.getElementById("myParagraph").innerHTML = "Hello, world!";
        });
    </script>
    <p id="myParagraph">This is a paragraph.</p>
    <button id="myButton">Click me!</button>
  </body>
</html>
```

In this example, the script is written in the `<body>` section of the HTML document. The script first gets a reference to the button and the paragraph using their ID attributes. Then, it adds a click event listener to the button. When the button is clicked, the event listener function changes the text of the paragraph to "Hello, world!".
