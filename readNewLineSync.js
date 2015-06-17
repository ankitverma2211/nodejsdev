var fs = require('fs');
var fileContents = fs.readFileSync('/home/nuk/Documents/test.txt');
fileContents = fileContents.toString();
var arr = fileContents.split("\n");
var len = arr.length - 1;
console.log = function(len) {
  process.stdout.write(len);
};
