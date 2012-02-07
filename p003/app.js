var max = 600851475143;
var maxPrime = function () {
    var memo = [];
    for (var x = 2; x < max+1; x+=1) {
        if(memo.every(function(prime) {return x%prime != 0})) {
           memo.push(x);
           while(max%x === 0) {
              max = max / x;
              console.log(max);
              if(max === 1) {
                   return x;
              };
           };
        };
    };

    return -1;
}();

console.log(maxPrime); //6857
