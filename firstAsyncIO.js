//read a file and print the number of newlines (\n) it contains to the console (stdout)
var filePath = process.argv[2];
var fs = require('fs') //importing file library
fs.readFile(filePath, 'utf8', function(err, data){
	var numNewLines = data.split('\n').length-1;
	console.log(numNewLines);
});

