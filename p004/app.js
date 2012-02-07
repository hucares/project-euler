var findLargestPalindrome = function() {
    
    var product = 0;
    var largest = 0;
    var forward;
    var backward;
    for(var outer = 100; outer < 1000; outer++){
        for(var inner = 100; inner < 1000; inner++){
            product = inner * outer;
            forward = product.toString();
            backward = product.toString().split("").reverse().join("");
            if(forward === backward){
                if(product > largest){
                    largest = product;
                };
            };
        };
    };
    return largest; //906609
};

//Can represent number as abccba
//reduces to 11(9091a + 910b +100c)
//Or can factor by hand starting from
//(100a + 10b + c)(100d + 10e + f)

console.log(findLargestPalindrome());
