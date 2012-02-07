//returns amicable pair
//if no amicable pair exists, returns 0
//d(n) is the sum of proper divisors
//d(x) == factorSumA, d(factorSumA) == x, x != factorSumA
//d(d(x)) == x
var amicablePair = function(x) {
    var factorSumA = 0;
    for(var i = 0; i < x; i+= 1) {
        if(x%i == 0) {
            factorSumA += i;
        };
    };
    var factorSumB = 0;
    for(var i = 0; i < factorSumA; i+= 1) {
        if(factorSumA%i == 0) {
            factorSumB += i;
        };
    };
    if(factorSumB == x && factorSumA != x) {
        return factorSumA;
    };
    return NaN;
};

var amicableSums = function() {
    var sum = 0;
    for(var i = 1; i < 10000; i+= 1) {
        if(amicablePair(i)) {
            sum += i;
        };
    };
    return sum;
}();

console.log(amicableSums);
