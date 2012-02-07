//Difference between sum of squares and square of sums
//First hundred natural numbers

var sumOfSquares = 0;
var squareOfSums = 0;

for(var i = 0; i < 100 + 1; i+=1) {
    sumOfSquares += i*i;
    squareOfSums += i;
};

squareOfSums *= squareOfSums;

var difference = squareOfSums - sumOfSquares;
console.log(difference);
