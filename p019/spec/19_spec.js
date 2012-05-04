var date = require('../date');

describe('Date', function() {
  it('should start on Janunary 1, 1900', function() {
    expect(Date.day).toEqual(1);
    expect(Date.month).toEqual(1);
    expect(Date.year).toEqual(1900);
  });
  
  it('should start on a Monday', function() {
    expect((Date.days%1)).toEqual(0);
  });

  it('should not have passed any Sundays', function() {
    expect((Date.days%1));
  });

  describe('#Date.increment', function() {
    describe('increment by 0 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(0);
      });

      it('should remain on January 1, 1900', function() {
        expect(Date.day).toEqual(1);
        expect(Date.month).toEqual(1);
        expect(Date.year).toEqual(1900);
      });
      
      it('should remain on a Monday', function() {
        expect((Date.days%7)).toEqual(1);
      });

      it('should not have passed any Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(0);
      });
    });

    describe('increment by 1 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(1);
      });

      it('should move to January 2, 1900', function() {
        expect(Date.day).toEqual(2);
        expect(Date.month).toEqual(1);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Tuesday', function() {
        expect((Date.days%7)).toEqual(2);
      });

      it('should not have passed any Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(0);
      });

    });

    describe('increment by 7 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(7);
      });

      it('should move to January 8, 1900', function() {
        expect(Date.day).toEqual(8);
        expect(Date.month).toEqual(1);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Monday', function() {
        expect((Date.days%7)).toEqual(1);
      });

      it('should have passed 4 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(1);
      });
    });


    describe('increment by 31 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(31);
      });

      it('should move to February 1, 1900', function() {
        expect(Date.day).toEqual(1);
        expect(Date.month).toEqual(2);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Thursday', function() {
        expect((Date.days%7)).toEqual(4);
      });

      it('should have passed 4 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(4);
      });
    });
    
    describe('increment by 31+28 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(31);
        Date.incrementDays(28);
      });

      it('should move to March 1, 1900', function() {
        expect(Date.day).toEqual(1);
        expect(Date.month).toEqual(3);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Thursday', function() {
        expect((Date.days%7)).toEqual(4);
      });

      it('should have passed 8 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(8);
      });
    });

    describe('increment by 31+28+31+1 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(31+28+31+1);
      });

      it('should move to April 2, 1900', function() {
        expect(Date.day).toEqual(2);
        expect(Date.month).toEqual(4);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Monday', function() {
        expect((Date.days%7)).toEqual(1);
      });

      it('should have passed 1 First of Month Sunday', function() {
        expect(Date.sundayFirst).toEqual(1);
      });
    });

    describe('increment by 364 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(364);
      });

      it('should move to December 31, 1900', function() {
        expect(Date.day).toEqual(31);
        expect(Date.month).toEqual(12);
        expect(Date.year).toEqual(1900);
      });
      
      it('should move to Monday', function() {
        expect((Date.days%7)).toEqual(1);
      });

      it('should have passed 52 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(52);
      });
    });

    describe('increment by 365 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(365);
      });

      it('should move to Janurary 1, 1901', function() {
        expect(Date.day).toEqual(1);
        expect(Date.month).toEqual(1);
        expect(Date.year).toEqual(1901);
      });
      
      it('should move to Tuesday', function() {
        expect((Date.days%7)).toEqual(2);
      });

      it('should have passed 52 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(52);
      });
    });

    describe('increment by 365*5 days', function() {
      beforeEach(function() {
        Date.reset();
        Date.incrementDays(365*5);
      });

      it('should move to December 31, 1904', function() {
        expect(Date.day).toEqual(31);
        expect(Date.month).toEqual(12);
        expect(Date.year).toEqual(1904);
      });
      
      it('should move to Saturday', function() {
        expect((Date.days%7)).toEqual(6);
      });

      it('should have passed 260 Sundays', function() {
        expect(Math.floor(Date.days/7)).toEqual(260);
      });
    });
  });
});
