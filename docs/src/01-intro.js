const styles = {
    main : [
        'background-color: #f5f5f5',
        'border: 1px solid #ddd',
        'border-radius: 4px',
        'padding: 20px',
        'margin: 20px',
        'font-family: sans-serif', 
    ],
    h1: [
        'color: blue',
        'font-size: 2rem',
        'text-align: center',
    ],
    h3: [
        'color: green',
        'font-size: 1.5rem',
        'margin: 0 40px',
    ],
    p: [        
        'text-align: justify',
        'margin: 0 40px',       
        'line-height: 2'
    ],    
    ul: [        
        'text-align: justify',
        'margin: 0 50px',
    ],
    li: [
        'text-align: justify',
        'color: #262626',        
        'line-height: 1.5'
    ],
    code : [
        'background-color: #f5f5f5',
        'border: 1px solid #000',
        'border-radius: 4px',
        'padding: 2px',
        'border-radius: 4px',
        'font-family: monospace', 
    ],
}

const introJs = () => {
  return (
            `<div style="${styles.main.join(';')}">
                <h1 style="${styles.h1.join(';')}">Introduction of JavaScript</h1>
                <p style="${styles.p.join(';')}">JavaScript is a programming language that adds interactivity to your website.
                This happens in games, in the behavior of responses when buttons are pressed or
                with data entry on forms; with dynamic styling; with animation, etc.
                This course deals with version ES6 of JavaScript.</p> 
                <br />
                <h3 style="${styles.h3.join(';')}">What is JavaScript?</h3>   <br />
                <ul style="${styles.ul.join(';')}">
                <li style="${styles.li.join(';')}">JavaScript is a scripting, high-level, interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a programming language that adds interactivity to your website.</li>
                <li style="${styles.li.join(';')}">JavaScript is a lightweight, interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is client-side and server-side programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is an Object-based Scripting Language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a prototype-based scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a dynamic scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a weakly typed scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a case-sensitive scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is not a compiled language, but it is a translated language.</li>
                <li style="${styles.li.join(';')}">JavaScript is an open and cross-platform scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a popular client-side scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is an interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a text-based programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript's syntax is loosely based on Java's.</li>
                <li style="${styles.li.join(';')}">.js is the extension of JavaScript files.</li>
                <li style="${styles.li.join(';')}">JavaScript is widely used for client-side validation.</li>
                <li style="${styles.li.join(';')}">Js is most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</li>
                <li style="${styles.li.join(';')}">In the world of programming, JavaScript is the most popular language.</li>
                </ul>    
                <br />
                <h3 style="${styles.h3.join(';')}">What is the full form of JavaScript?</h3>   <br />   
                <p style="${styles.p.join(';')}">JavaScript is not an acronym. Many think that since Java has been a dominant language in the past, JavaScript was derived from Java. But that is not true. JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme, and Self. Initially, it was named Mocha, later LiveScript, and finally, it was named JavaScript.</p>
                <br />
                <h3 style="${styles.h3.join(';')}">What is the history of JavaScript?</h3>   <br />
                <p style="${styles.p.join(';')}">JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. It was inspired by Java, Scheme, and Self. Initially, it was named Mocha, later LiveScript, and finally, it was named JavaScript.</p>
                <br />
                <h3 style="${styles.h3.join(';')}">What are the features of JavaScript?</h3>   <br />
                <ul style="${styles.ul.join(';')}">
                <li style="${styles.li.join(';')}">JavaScript is a lightweight, interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is designed for creating network-centric applications.</li>
                <li style="${styles.li.join(';')}">JavaScript is complementary to and integrated with Java.</li>
                <li style="${styles.li.join(';')}">JavaScript is an open and cross-platform scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a client-side scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is an interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a text-based programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript's syntax is loosely based on Java's.</li>
                <li style="${styles.li.join(';')}">JavaScript is a weakly typed language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a prototype-based scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a dynamic language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a case-sensitive language.</li>
                <li style="${styles.li.join(';')}">JavaScript is not a compiled language, but it is a translated language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a popular client-side scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is widely used for client-side validation.</li>
                <li style="${styles.li.join(';')}">JavaScript is most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.</li>
                <li style="${styles.li.join(';')}">JavaScript is a popular scripting language of the Web.</li>
                <li style="${styles.li.join(';')}">JavaScript is a lightweight, interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is designed for creating network-centric applications.</li>
                <li style="${styles.li.join(';')}">JavaScript is complementary to and integrated with Java.</li>
                <li style="${styles.li.join(';')}">JavaScript is an open and cross-platform scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a client-side scripting language.</li>
                <li style="${styles.li.join(';')}">JavaScript is an interpreted programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a text-based programming language.</li>
                <li style="${styles.li.join(';')}">JavaScript's syntax is loosely based on Java's.</li>
                <li style="${styles.li.join(';')}">JavaScript is a weakly typed language.</li>
                <li style="${styles.li.join(';')}">JavaScript is a prototype-based scripting language.</li>
                
                </ul>
                <br />
                <h3 style="${styles.h3.join(';')}">What are the advantages of JavaScript?</h3>   <br />
                <ul style="${styles.ul.join(';')}">
                <li style="${styles.li.join(';')}">Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.</li>
                <li style="${styles.li.join(';')}">Immediate feedback to the visitors − They don't have to wait for a page reload to see if they have forgotten to enter something.</li>
                <li style="${styles.li.join(';')}">Increased interactivity − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.</li>
                <li style="${styles.li.join(';')}">Richer interfaces − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.</li>
                <li style="${styles.li.join(';')}">JavaScript is a complementary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.</li>
                <li style="${styles.li.join(';')}">JavaScript is a client-side scripting language. It is a lightweight, interpreted programming language. It is designed for creating network-centric applications.</li>
                <li style="${styles.li.join(';')}">JavaScript is complementary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.</li>
                <li style="${styles.li.join(';')}">JavaScript is a client-side scripting language. It is a lightweight, interpreted programming language. It is designed for creating network-centric applications.</li>

                </ul>
                <br />
                <h3 style="${styles.h3.join(';')}">What are the disadvantages of JavaScript?</h3>   <br />
                <ul style="${styles.ul.join(';')}">
                <li style="${styles.li.join(';')}">Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reason.</li>
                <li style="${styles.li.join(';')}">JavaScript cannot be used for networking applications because there is no such support available.</li>
                <li style="${styles.li.join(';')}">JavaScript doesn't have any multi-threading or multiprocessor capabilities.</li>
                <li style="${styles.li.join(';')}">Once again for security reasons, we cannot access the client's computer resources using JavaScript.</li>
                <li style="${styles.li.join(';')}">JavaScript doesn't have any multi-threading or multiprocessor capabilities.</li>
                
                </ul>
                <br />
                <h3 style="${styles.h3.join(';')}">Where to write javascript code?</h3>   <br />

                <p style="${styles.p.join(';')}">We can write Js code in 3 ways:</p>
                <ul style="${styles.ul.join(';')}">
                <li style="${styles.li.join(';')}">(i) Inside HTML file (inline) like this: <code style="${styles.code.join(';')}">&lt;button onclick="alert('Clicked on button!')">Click Me&lt;/button></code>: - <button onclick="alert('Clicked on button!')">Click Me!</button></li>
                <li style="${styles.li.join(';')}">(ii) Inside HTML file (internal) like this: <code style="${styles.code.join(';')}">&lt;script src="js file">&lt;/script></code></li>
                <li style="${styles.li.join(';')}">(iii) External Js code (inside external file)</li>
                </ul>
                <br />
                
            </div>
        `)
};

module.exports = introJs;
