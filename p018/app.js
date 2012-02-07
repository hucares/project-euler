var triangle = ["75", "95 64", "17 47 82", "18 35 87 10", "20 04 82 47 65", "19 01 23 75 03 34", "88 02 77 73 07 63 67", "99 65 04 28 06 16 70 92", "41 41 26 56 83 40 80 70 33", "41 48 72 33 47 32 37 16 94 29", "53 71 44 65 25 43 91 52 97 51 14", "70 11 33 28 77 73 17 78 39 68 17 57", "91 71 52 38 17 14 91 43 58 50 27 29 48", "63 66 04 68 89 53 67 30 73 16 69 87 40 31", "04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"];

triangle = triangle.map(function(x){return x.split(" ")})
triangle = triangle.map(function(x){
                            return x.map(function(x) {
                                return parseInt(x)})});

//At each point we are allowed to choose either left or right
//Thus, we can represent this choice as left:0 right:1
//There are 16 rows so 2^15 possible choice
//Thus 0        = 000000000000000 represents taking just moving left
//And 2^15 - 1  = 111111111111111 represents just moving right
//Because of the limited scope of this problem, brute force is used

var traverseTriangle = function(inputPath, depth) {
    var path = inputPath;
    while(path.length < depth) {
        path.unshift(0);
    };
    var sum         = 0;
    var pathChoice  = 0;
    var index       = 0;
    while(path.length > 0) {
        sum += triangle[index][pathChoice];
        pathChoice += path.pop();
        index += 1;
    };
    return sum;
};

var maxPathValue = function() {
    var max = 0;
    var maxPath = 0;
    var totalPaths = Math.pow(2, 15); 
    for(i = 0; i < totalPaths; i+=1) {
        var path = i.toString(2).split("");
            path = path.map(function(x){return parseInt(x)});
        var pathSum = traverseTriangle(path, 15);
        if(pathSum > max) {
            max = pathSum;
            maxPath = i;
        };
    };
    maxPath = maxPath.toString(2).split("");
    while(maxPath.length < triangle.length) {
        maxPath.unshift('0');   
    };
    console.log(maxPath);//must be read backwards
    return max;
}();
console.log(maxPathValue);//1074
