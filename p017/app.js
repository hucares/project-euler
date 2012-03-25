//Definitions
var one         = 'one'.length;
var two         = 'two'.length;
var three       = 'three'.length;
var four        = 'four'.length;
var five        = 'five'.length;
var six         = 'six'.length;
var seven       = 'seven'.length;
var eight       = 'eight'.length;
var nine        = 'nine'.length;
var ten         = 'ten'.length;
var eleven      = 'eleven'.length;
var twelve      = 'twelve'.length;
var thirteen    = 'thirteen'.length;
var fourteen    = 'fourteen'.length;
var fifteen     = 'fifteen'.length;
var sixteen     = 'sixteen'.length;
var seventeen   = 'seventeen'.length;
var eighteen    = 'eighteen'.length;
var nineteen    = 'nineteen'.length;
var twenty      = 'twenty'.length;
var thirty      = 'thirty'.length;
var forty       = 'forty'.length;
var fifty       = 'fifty'.length;
var sixty       = 'sixty'.length;
var seventy     = 'seventy'.length;
var eighty      = 'eighty'.length;
var ninety      = 'ninety'.length;
var hundred     = 'hundred'.length;
var thousand    = 'thousand'.length;

var and         = 'and'.length;

//Sum of letters for number's word form
//works 1-999,999
var numberOfLetters = function(x) {
    //0-9
    var firstMagnitude = function(x) {
        switch(x) {
            case 1:
                return one;
            case 2:
                return two;
            case 3:
                return three;
            case 4:
                return four;
            case 5:
                return five;
            case 6:
                return six;
            case 7:
                return seven;
            case 8:
                return eight;
            case 9:
                return nine;
            default:
                return 0;
        };
    };
    //11=19
    var nTeenHelper = function(x) {
        switch(x) {
            case 10:
                return ten;
            case 11:
                return eleven;
            case 12:
                return twelve;
            case 13:
                return thirteen;
            case 14:
                return fourteen;
            case 15:
                return fifteen;
            case 16:
                return sixteen;
            case 17:
                return seventeen;
            case 18:
                return eighteen;
            case 19:
                return nineteen;
            default:
                return 0;
        };
    };
    //0-99
    var secondMagnitude = function(x) {
        var switchSignal = Math.floor(x/10);
        switch(switchSignal) {
            case 0:
                return firstMagnitude(x%10);
            case 1:
                return nTeenHelper(x);
            case 2:
                return twenty   + firstMagnitude(x%10);
            case 3:
                return thirty   + firstMagnitude(x%10);
            case 4:
                return forty    + firstMagnitude(x%10);
            case 5:
                return fifty    + firstMagnitude(x%10);
            case 6:
                return sixty    + firstMagnitude(x%10);
            case 7:
                return seventy  + firstMagnitude(x%10);
            case 8:
                return eighty   + firstMagnitude(x%10);
            case 9:
                return ninety   + firstMagnitude(x%10);
            default:
                return 0;
        };
    };
    //0-999
    var thirdMagnitude = function(x) {
        var switchSignal = Math.floor(x/100);
        switch(switchSignal) {
            case 0:
                return secondMagnitude(x%100);
            default:
                if(x%100 == 0) {
                    return firstMagnitude(Math.floor(x/100)) + hundred
                };
                return  firstMagnitude(Math.floor(x/100)) + hundred + and
                        + secondMagnitude(x%100);
        };
    };

    return thirdMagnitude(x);
};


//testing
console.log(numberOfLetters(1));//3
console.log(numberOfLetters(16));//7
console.log(numberOfLetters(100));//10
console.log(numberOfLetters(106));//16
console.log(numberOfLetters(110));//16
console.log(numberOfLetters(115));//20
console.log(numberOfLetters(121));//22
console.log(numberOfLetters(342));//23
console.log(numberOfLetters(999));//24

var sumOneToThou = function() {
    sum = 0;
    for(var i = 1; i < 1000; i+=1) {
        sum += numberOfLetters(i);
    };
    return sum + one + thousand;
}();

console.log(sumOneToThou);//21121
