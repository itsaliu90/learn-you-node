var fs = require('fs');
bufferString = (fs.readFileSync(process.argv[2])).toString();
bufferArray = bufferString.split("\n");
console.log(bufferArray.length - 1);