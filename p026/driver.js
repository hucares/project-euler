var Cycle = require('./cycle');
var length_cache = new Array(1001);

//further optimization is possible by examining only prime i
for(var i = 2; i < 1001; i += 1) {
  var f   = Cycle.traverse_function(i);
  var x0  = Cycle.first_element(i);
  length_cache[i] = [i, Cycle.floyd(f, x0)];
};

console.log('cycle distribution');

console.log('index, maximum cycle');
var max = length_cache.reduce(function (a,b) {
  return (a[1] > b[1]) ? a : b;
}, [1, 1]);
console.log(max);
