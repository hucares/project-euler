//a^2 + b^2 = c^2
//find abc
//such that a+b+c = 1000
//a+b+sqrt(a^2+b^2) = 1000
//search space will result in n^2 alg with n=1000

var pythagorean = function() {
    for(var a = 1; a < 1000; a++) {
        for(var b = a + 1; b < 1000; b++) {
            var c = Math.sqrt(a*a + b*b);
            if(a + b + c === 1000 &&
               a < b < c) {
                return [a, b, c];
            };
        };
    };
}();//[200, 375, 425]

var product = pythagorean.reduce(function(x, y) {return x*y}, 1);
console.log(product);//31875000
