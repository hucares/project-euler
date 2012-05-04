Date.days   = 1;
Date.day    = 1;
Date.month  = 1;
Date.year   = 1900;
Date.sundayFirst = 0;

Date.sundaysPassed = function() {
  return Math.floor(Date.days / 7);
};

Date.addForFirstOFMonthSunday = function() {
  if(Date.day == 1 && Date.days%7 == 0) {
    Date.sundayFirst += 1;
  };
};

Date.increment30 = function () {
  if(Date.day > 30) {
    Date.day    = 1
    Date.month += 1
  };
};

Date.increment31 = function () {
  if(Date.day > 31) {
    Date.day    = 1
    Date.month += 1
  };
};

Date.incrementFeb = function () {
  if((Date.year % 400) == 0 && Date.day > 29) {
    Date.day    = 1;
    Date.month += 1;
  } else if((Date.year % 100) == 0 && Date.day > 28) {
    Date.day    = 1;
    Date.month += 1;
  } else if((Date.year % 4) == 0 && Date.day > 29) {
    Date.day    = 1;
    Date.month += 1;
  } else if((Date.year % 4) != 0 && Date.day > 28) {
    Date.day    = 1;
    Date.month += 1;
  };
};

Date.incrementYear = function() {
  if(Date.day > 31) {
    Date.day   = 1;
    Date.month = 1;
    Date.year += 1
  };
};

Date.incrementDays = function(days) {
  var count = days;
  while(count > 0) {
    count     -= 1;
    Date.day  += 1;
    Date.days +=1;

    switch(Date.month) {
      case 1:
        Date.increment31();
        break;
      case 2:
        Date.incrementFeb();
        break;
      case 3:
        Date.increment31();
        break;
      case 4:
        Date.increment30();
        break;
      case 5:
        Date.increment31();
        break;
      case 6:
        Date.increment30();
        break;
      case 7:
        Date.increment31();
        break;
      case 8:
        Date.increment30();
        break;
      case 9:
        Date.increment31();
        break;
      case 10:
        Date.increment31();
        break;
      case 11:
        Date.increment30();
        break;
      case 12:
        Date.incrementYear();
        break;
      default:
        return false;
    };
    Date.addForFirstOFMonthSunday();
  };
};


Date.reset = function() {
  Date.days   = 1;
  Date.day    = 1;
  Date.month  = 1;
  Date.year   = 1900;
  Date.sundayFirst = 0;
};
