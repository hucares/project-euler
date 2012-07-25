var assert  = require("assert");
var Cycle   = require('../cycle');

describe('Cycle', function(){
  describe('stream', function(){
    it('should return the proper values for divisor of 2', function(){
      var d2 = new Cycle.stream(2);
      assert.equal(d2.quotient, 5);
      assert.equal(d2.next(), 0);
      assert.equal(d2.next(), 0);
      assert.equal(d2.next(), 0);
      d2.reset();
      assert.equal(d2.quotient, 5);
    });
    
    it('should return the proper values for divisor of 7', function(){
      var d7 = new Cycle.stream(7);
      assert.equal(d7.quotient, 1);
      assert.equal(d7.next(), 4);
      assert.equal(d7.next(), 2);
      assert.equal(d7.next(), 8);
      d7.reset();
      assert.equal(d7.quotient, 1);
    });
    
    it('should return the proper values for divisor of 50', function(){
      var d50 = new Cycle.stream(50);
      assert.equal(d50.quotient, 0);
      assert.equal(d50.next(), 2);
      assert.equal(d50.next(), 0);
      assert.equal(d50.next(), 0);
      d50.reset();
      assert.equal(d50.quotient, 0);
    });

  });

  describe('#cycle_length', function(){
    it('should return the proper cycle length for a divisor of 2', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(2), 1);
    });
    it('should return the proper cycle length for a divisor of 7', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(7), 6);
    });
    it('should return the proper cycle length for a divisor of 11', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(11), 2);
    });
    it('should return the proper cycle length for a divisor of 12', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(12), 1);
    });
    it('should return the proper cycle length for a divisor of 25', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(25), 1);
    });
    it('should return the proper cycle length for a divisor of 50', function(){
      var cycle_length = Cycle.cycle_length;
      assert.equal(cycle_length(50), 1);
    });

  });
});
