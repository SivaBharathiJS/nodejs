var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!This is my text', function (err) {
  if (err) throw err;
  console.log('Saved!');
});