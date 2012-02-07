var quarter = 1 / 4;
var sum = 1;

for(i = 3; i <= 1001; i += 2) {
    var firstIndex = (i - 2) * (i - 2);
    var square = i * i;
    sum += 1 * quarter * (square - firstIndex) + firstIndex; 
    sum += 2 * quarter * (square - firstIndex) + firstIndex;
    sum += 3 * quarter * (square - firstIndex) + firstIndex;
    sum += square;
};

console.log(sum)
