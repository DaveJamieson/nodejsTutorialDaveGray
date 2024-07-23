// Node runs on a server - not in a browser
// The console is the terminal window
// global object instead of window object
// has common core modules
// CommonJS modules instead of ES6 modules
// Missing some JS API's like fetch

// console.log("Hello World");
// console.log(global);
const path = require('path');
const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(global);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

// const math = require('./math')
// console.log(math.add(2, 3));

const {add, subtract, multiply, divide} = require('./math')
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));