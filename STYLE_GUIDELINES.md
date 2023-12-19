# JavaScript Mastery Style Guidelines

Welcome to JavaScript Mastery! We appreciate your contributions to the project. To maintain a consistent and readable codebase, please follow these style guidelines when submitting changes.

## JavaScript Style

- Use camelCase for variable and function names (e.g., `myVariable`, `myFunction`).
- Use 2 spaces for indentation.
- Prefer single quotes for string literals.
- Always use `const` or `let` to declare variables. Avoid using `var`.
- Use `===` for equality checks unless `==` is explicitly needed.

```javascript
// Good
const myVariable = 42;

// Bad - using var
var anotherVariable = 'hello';

// Bad - using == instead of ===
if (someValue == 'example') {
  // code
}
```

## HTML and CSS Style

- Use 2 spaces for indentation in HTML and CSS.
- Use lowercase for HTML tags and attributes.
- Use meaningful names for classes and IDs in HTML and CSS.
- Prefer Flexbox or Grid layout for positioning elements in CSS.

```html
<!-- Good -->
<div class="container">
  <p id="main-paragraph">This is a paragraph.</p>
</div>

<!-- Bad - using uppercase in tags -->
<DIV class="Container">
  <P ID="mainParagraph">This is a paragraph.</P>
</DIV>
```

## Git Commit Messages

- Write clear and concise commit messages.
- Use present tense (e.g., "Add feature" instead of "Added feature").
- Keep each commit focused on a single change.

```plaintext
# Good
git commit -m "Add validation for user input"

# Bad - unclear or too broad
git commit -m "Update code"
```

## Pull Requests

- Include a brief description of your changes in the pull request.
- Reference any relevant issues in your pull request.

Thank you for following these guidelines. Your contributions are valuable to the JavaScript Mastery project!
