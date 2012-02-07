var palindromicSums = function() {
    var sum = 0;
    for(var i = 0; i < 1000000; i +=1) {
        var baseTenPalindrome = i.toString().split("").reverse().join("");
            baseTenPalindrome = parseInt(baseTenPalindrome);
        var baseTwoPalindrome = i.toString(2).split("").reverse().join("");
        if(i === baseTenPalindrome && i.toString(2) === baseTwoPalindrome) {
            sum += i;
        };
    };
    return sum;
}();

console.log(palindromicSums);
