//Execution time ~8:23

var max = 2000000;
var primeList = function () {
    var memo = [2];
    for(var x = 3; x < max; x+=2) {
        if (x%729  === 0) {console.log(x)};
        if(memo.every(function(prime) {return x%prime != 0})) {
           memo.push(x);
        };
    };

    return memo;
}();

var sum = primeList.reduce(function(x, y) {return x+y}, 0);

console.log(sum);//142913828922
