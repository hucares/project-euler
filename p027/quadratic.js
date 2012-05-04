var euler = require('../lib/euler.js');

var primesMemo  = euler.primesUpTo(1000);
var combination = primesMemo.concat(primesMemo.map(function(x) {return -1*x}));
var a = -79;
var b = 1601;
var n = 79;
var quadratic = function (a, b, n) {
  return n*n+a*n+b;
};

for(x = 0; x < combination.length; x += 1) {
  for(y = 0; y < combination.length; y += 1) {
    quadratic(combination[x], combination[y], n)
  }
};

console.log(a*b);
