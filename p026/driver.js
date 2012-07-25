var Cycle = require('./cycle');
var length_cache = new Array(1001);

for(var i = 2; i < 1001; i += 1) {
  console.log(i);
  var f   = Cycle.traverse_function(i);
  var x0  = Cycle.first_element(i);
  length_cache[i] = Cycle.floyd(f, x0);
  //console.log('mena');
};
