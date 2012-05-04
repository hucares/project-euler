exports.primesUpTo = function (max) {
    var memo = [];
    for (var x = 2; max > x; x+=1) {
        if(memo.every(function(prime) {return x%prime != 0})) {
           memo.push(x);
        };
    };

    return memo;
};

//exports.prime? = function () {
  //return 
