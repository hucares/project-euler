var module = exports;

module.traverse_function = function (d) {
  return function(x) {
    return [Math.floor((x[1]*10)/d), (x[1]*10)%d];
  };
};

module.first_element = function(d) {
  var value     = Math.floor(10/d);
  var remainder = 10 - value*d;
  return [value, remainder];
};

module.floyd = function(f, x0) {
  var turtle  = f(x0);
  var hare    = f(f(x0));
  
  while (turtle[0] != hare[0] || turtle[1] != hare[1]) {
    turtle  = f(turtle);
    hare    = f(f(hare));
  };

  var mu  = 0;
  turtle  = x0;
  while(turtle[0] != hare[0] || turtle[1] != hare[1]) {
    turtle = f(turtle);
    hare = f(hare);
    mu += 1;
  };

  var lam   = 1;
  hare  = f(turtle);
  while(turtle[0] != hare[0] || turtle[1] != hare[1]) {
    hare = f(hare);
    lam += 1;
  };

  return lam;
};
