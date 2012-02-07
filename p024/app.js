var nextPermutation = function(number) {
    var permutationArray = number.split("");
    var firstIndex  = -1;
    for(var i = 0; i < permutationArray.length - 1; i+= 1){
        if(permutationArray[i]  < permutationArray[i+1] && 
           i > firstIndex){
            firstIndex = i;
        };
    };
    var secondIndex = -1;
    for(var i = 0; i < permutationArray.length; i+= 1){
        if(permutationArray[firstIndex] < permutationArray[i] && 
           i > secondIndex){
            secondIndex = i;
        };
    };
    var temp                        = permutationArray[firstIndex];
    permutationArray[firstIndex]    = permutationArray[secondIndex];
    permutationArray[secondIndex]   = temp;


    if(firstIndex + 1 < permutationArray.length - 1) {
        reverse             = permutationArray.splice(firstIndex + 1,
                                         permutationArray.length);
        reverse             = reverse.reverse();
        permutationArray    = permutationArray.concat(reverse);
    };
    return permutationArray.join("");
};

var millionthPermutation = function(){
    var number = '0123456789'
    for(var i = 0; i < 1000000 - 1; i+=1) {
        number = nextPermutation(number);
    }
    return number;
}();

console.log(millionthPermutation);//2783915460

