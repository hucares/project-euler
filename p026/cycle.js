var module = exports;

module.stream = function (d) {
  this.reset = function(){
    this.index    = 0;
    this.dividend = 10;
    this.divisor  = d;
    this.quotient = undefined;
    this.next();
    return true;
  };

  this.next     = function() {
    this.index   += 1;
    this.quotient  = Math.floor(this.dividend/this.divisor);
    this.dividend  = (this.dividend % this.divisor) * 10;
    return this.quotient;
  };

  this.reset();
};

module.cycle_length = function(d) {
  var hare    = new module.stream(d);
  var turtle  = new module.stream(d);

  hare.next();
  hare.next();
  turtle.next();

  //search for i*x = 2*i*x
  while(hare.quotient !== turtle.quotient) {
    hare.next();
    hare.next();
    turtle.next();
  };

  //search micro
  var mu = 0;
  turtle.reset();


  while(hare.quotient !== turtle.quotient) {
    hare.next();
    turtle.next();
    mu += 1;
  };

  //search for lambda
  hare.reset();
  for(var i = 0; i < mu + 1; i += 1) {
    hare.next();
  };

  //return turtle.index;
  var lam = 1;
  while(hare.quotient !== turtle.quotient) {
    hare.next();
    lam += 1;
 };

  return lam;
};

console.log(module.cycle_length(50));
