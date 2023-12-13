# Length Textcontent

JavaScript offers various ways to retrieve and manipulate the text content of an element. Two commonly used properties are:

- `textContent`: This property retrieves all textual content of an element, including child elements, excluding comments and processing instructions.
- `innerText`: This property retrieves only visible textual content, excluding elements hidden by CSS.

### To get the length of the text content using `textContent`:

1. **Get the element:** Use methods like `getElementById` or `querySelector` to access the desired element.
2. **Access the `textContent` property:** Use the dot notation or bracket notation to access the property.
3. **Use the `length` property:** Use the `length` property on the retrieved `textContent` string to get its length.

Here's an example:

```html
<p id="myParagraph">This is some text content.</p>
```

```javascript
const paragraph = document.getElementById("myParagraph");
const textContent = paragraph.textContent;
const textLength = textContent.length;

console.log("Text Length:", textLength); // Output: 26
```

This code snippet retrieves the element with the ID "myParagraph," then extracts its text content and stores it in the `textContent` variable. Finally, it uses the `length` property on the `textContent` string to get its length and logs it to the console.

### To get the length of the visible text content using `innerText`:

```javascript
const paragraph = document.getElementById("myParagraph");
const visibleTextLength = paragraph.innerText.length;

console.log("Visible Text Length:", visibleTextLength); // Output: 23
```

This code snippet uses `innerText` instead of `textContent` to retrieve only the visible text content. This results in a shorter length because it excludes the space character after the closing period.

Remember:

- `textContent` is generally preferred for performance and security reasons.
- `innerText` can be useful when you only need the visible text content.

### Length of Text Content with Child Elements:

If the element has child elements with text content, the `textContent` includes them all. For example:

```html
<p id="myParagraph">This is <b>bold</b> text.</p>
```

```javascript
const paragraph = document.getElementById("myParagraph");
const textLength = paragraph.textContent.length;

console.log("Text Length:", textLength); // Output: 24
```

In this case, the length includes the text "This is ", the bold text "bold", and the closing period.

### Changing Text Content Length:

You can also set the `textContent` property to modify the element's text content and change its length. For example:

```javascript
paragraph.textContent = "New text";
console.log("Text Length:", paragraph.textContent.length); // Output: 8
```

This code snippet changes the text content to "New text," resulting in a new text length.

By understanding the differences between `textContent` and `innerText` and how to use the `length` property, you can effectively manipulate and analyze text content in your JavaScript code.
