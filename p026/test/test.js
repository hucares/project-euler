var assert  = require("assert");
var Cycle   = require('../cycle');

describe('Cycle', function(){
  describe('first_element', function() {
    it('should return the proper values for 2', function() {
      var x0 = Cycle.first_element(2);
      assert.equal(x0[0], 5);
      assert.equal(x0[1], 0);
    });

    it('should return the proper values for 29', function() {
      var x0 = Cycle.first_element(29);
      assert.equal(x0[0], 0);
      assert.equal(x0[1], 10);
    });

    it('should return the proper values for 29', function() {
      var x0 = Cycle.first_element(29);
      assert.equal(x0[0], 0);
      assert.equal(x0[1], 10);
    });
  });

  describe('traverse_function', function(){
    it('should return the proper values for divisor of 2', function(){
      var d2 = Cycle.traverse_function(2);
      var x0 = Cycle.first_element(2);
      assert.equal(d2(x0)[0], 0);
      assert.equal(d2(x0)[1], 0);

      assert.equal(d2(x0)[0], 0);
      assert.equal(d2(x0)[0], 0);
    });
    
    it('should return the proper values for divisor of 7', function(){
      var d7 = Cycle.traverse_function(7);
      var x0 = Cycle.first_element(7);
      assert.equal(d7(x0)[0], 4);
      assert.equal(d7(x0)[1], 2);

      assert.equal(d7(d7(x0))[0], 2);
      assert.equal(d7(d7(x0))[1], 6);
    });
    it('should return the proper values for divisor of 29', function(){
      var d29 = Cycle.traverse_function(29);
      var x0 = Cycle.first_element(29);
      assert.equal(d29(x0)[0], 3);
      assert.equal(d29(x0)[1], 13);


      //assert.equal(d7(d7(x0))[0], 2);
      //assert.equal(d7(d7(x0))[1], 6);
    });
 
  });

  describe('floyd', function(){
    it('should return the proper cycle length for a divisor of 2', function(){
      var f   = Cycle.traverse_function(2);
      var x0  = Cycle.first_element(2);
      assert.equal(Cycle.floyd(f, x0), 1);
    });
    it('should return the proper cycle length for a divisor of 7', function(){
      var f   = Cycle.traverse_function(7);
      var x0  = Cycle.first_element(7);
      assert.equal(Cycle.floyd(f, x0), 6);
    });
    it('should return the proper cycle length for a divisor of 11', function(){
      var f   = Cycle.traverse_function(11);
      var x0  = Cycle.first_element(11);
      assert.equal(Cycle.floyd(f, x0), 2);
    });
    //it('should return the proper cycle length for a divisor of 29', function(){
      //var f   = Cycle.traverse_function(29);
      //var x0  = Cycle.first_element(29);
      //assert.equal(Cycle.floyd(f, x0), 1);
    //});
    it('should return the proper cycle length for a divisor of 50', function(){
      var f   = Cycle.traverse_function(50);
      var x0  = Cycle.first_element(50);
      console.log(f);
      console.log(x0);
      assert.equal(Cycle.floyd(f, x0), 1);
    });
  });
});
