var fs = require('fs');

var maxPrime = 1000000;
var primeList = function () {
    var memo = [2];
    for(var x = 3; x < 1000000; x+=1) {
        console.log(x);
        if(memo.every(function(prime) {return x%prime != 0})) {
           memo.push(x);
        };
    };

    return memo;
}();

fs.writeFile('primes.js', JSON.stringify(primeList), function (err) {
    if (err) throw err;
    console.log('an error has occurred');
});
console.log('Hi');
