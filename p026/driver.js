var Cycle = require('./cycle');
var length_cache = new Array(1001);

for(var i = 1; i < 100; i += 1) {
  length_cache[i] = Cycle.cycle_length(i);
};
