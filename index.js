// Getting Started with Node.js and JavaScript for Beginners
// Web Dev Simplified

const http = require('http');
const fs = require('fs');
const introJs = require('./docs/src/01-intro');
// const stringsJs = require('./docs/src/02-strings');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }
    if (req.url === '/intro') {
        res.write(`${introJs()}`);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});