var numberOfPrimes = 10001;
var primeList = function () {
    var memo = [2];
    for(var x = 3; memo.length < numberOfPrimes; x+=1) {
        if(memo.every(function(prime) {return x%prime != 0})) {
           memo.push(x);
        };
    };

    return memo;
}();

var nthPrime = primeList.pop();
console.log(nthPrime); //104743
