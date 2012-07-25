var fs        = require('fs');
var letters   = require('./letters');

var triangleNumbers = function () {
  var numbers = {};
  var done = false;
  var i = 1;
  while(done == false) {
    numbers[(1/2) * i * (i + 1)] = i;
    if(numbers[i] > 364) {
      break;
    };
    i += 1;
  };
  return numbers;
}();
// We'll cheat a little here.  We generate the triangle numbers up to 364
// The longest word is 14 long
// Checks on whether or not the number is a simple dictionary lookup

var words = fs.readFileSync('./words.txt', 'utf8', function(err, data) {
  if (err) throw err;
});

words   = words.replace(/"/g, '');
var wordArray = words.split(',');

var wordValues = wordArray.map(function(word) {
  var letterArray       = word.split('');
  var letterValueArray  = letterArray.map(function(l) {
    return letters.Value(l);
  });
  return letterValueArray.reduce(function(a, b) {
    return a+b;
  }, 0);
});

var triangleWords = wordValues.map(function(value) {
  if(triangleNumbers[value]) {
    return 1;
  };
  return 0;
});

var triangleTotal = triangleWords.reduce(function(a, b) {
  return a+b;
}, 0);

console.log(triangleTotal);
