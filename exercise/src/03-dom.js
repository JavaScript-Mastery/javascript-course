// =============================
//           DOM               |
// =============================

// ================================================================================

// 1. document-object-model (DOM):

// DOM is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects.
// That way, programming languages can connect to the page.
// A Web page is a document. This document can be either displayed in the browser window or as the HTML source.
// For example: JavaScript can be used to manipulate DOM elements.

// For Example: write basic code to print "Hello World!" in console using DOM.
// And with the help of html and js file. and run it in browser. and change the text in html file and see the output in browser.

// <!DOCTYPE html>
// <html>
// <head>
// <title>Page Title</title>
// </head>
// <body>
// <h1 id="demo">A Heading</h1>
// <script>
// document.getElementById("demo").innerHTML = "Hello World!";
// </script>
// </body>
// </html>

// Explaination: document.getElementById() is a function that is used to find element by id.
// document.getElementById("demo") is used to find element by id "demo".
// document.getElementById("demo").innerHTML is used to change the content of element by id "demo".
// document.getElementById("demo").innerHTML = "Hello World!" is used to change the content of element by id "demo" to "Hello World!".

// ================================================================================

// 2. finding elements in a web page

// open the index.html file in browser and open the console and write the following code and see the output.
// document.getElementById("demo").innerHTML = "Hello World!"

// ================================================================================

// 3. length and textcontent
// open the index.html file in browser and open the console and write the following code and see the output.
// ------------------------------------------------------------
// for length:
// document.getElementsByTagName("p").length 
// (it will give the length of all p tags in html file.)
// ------------------------------------------------------------
// for textcontent:
// document.getElementsByTagName("p")[0].textContent 
// (it will give the text content of first p tag in html file.)

// ================================================================================

// 4. finding elements exercise
// 5. changing a web page 
// open the index.html file in browser and open the console and write code and see the output.

// 6. changing a web age exercise 

// 7. dom exercise
// open the index.html file in browser and open the console and write code and see the output.