//read a file and print the number of newlines (\n) it contains to the console (stdout)
var filePath = process.argv[2];
var fs = require('fs') //importing file library
var buffer = fs.readFileSync(filePath);
var str = buffer.toString();
var numNewLines = str.split('\n').length-1;
console.log(numNewLines);