var number = 34;
var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };

    fib(number);
    return memo;
}();

var fibs = fibonacci;
fibs.shift();
fibs.shift();
fibs.pop();
fibs = fibs.filter(function(x) {return x%2 == 0});
var x = fibs.reduce(function(x, y) {return x+y;}, 0);
console.log(x); //4613732
