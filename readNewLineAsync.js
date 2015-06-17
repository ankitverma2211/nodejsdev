var fs = require('fs');
var count ;

function readFile(callback){
	
	fs.readFile(process.argv[2],function reading(err,fileContents){
				
		fileContents = 	fileContents.toString();
		var arr = fileContents.split('\n');
		len = arr.length - 1;
		callback();
	
	});
}

function logNewLines(){
        console.log(len);
}


readFile(logNewLines);
