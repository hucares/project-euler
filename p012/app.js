var triangleNumber = function() {
    var index       = 1;
    var triangle    = 1;
    return {
        increment: function() {
            index       += 1;
            triangle    += index;
            return triangle;
        },
        getTriangle: function() {
            return triangle;
        }
    };
}();

var divisorCount = function(x) {
    var count = 0;
    for(var i = 0; i < x/2; i+=1) {
        if(x%i == 0) {
            count += 1;
        };
    };
    return count;
};

var fiveHundredDivisor = function() {
    while(divisorCount(triangleNumber.getTriangle()) < 500) {
        console.log(divisorCount(triangleNumber.getTriangle()))
        triangleNumber.increment();
    };
    return triangleNumber.getTriangle();
}();

console.log(fiveHundredDivisor); //
