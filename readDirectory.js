var fs = require('fs');
var path = require('path');
var extension  = '.' + process.argv[3] ;
fs.readdir(process.argv[2],function (err,dirContents){
				
		if (!err)
			for (var i = 0; i < dirContents.length; i++) {
				if( extension == path.extname(dirContents[i]))
				console.log(dirContents[i]);
			}
			
		else
			throw err;
	
});

/* var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/