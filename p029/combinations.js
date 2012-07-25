var lower   = 2;
var higher  = 100;
var numbers = {};

//This code has complexity O(n^3)
//
//There are numerous ways to get the code down to O(n^2) perhaps even approaching O(nlogn)
//
//This would include memoization and calcuating only primes for the first pass
//
//However 100^3 = 1000000
//
//While 100^2 = 10000
//
//n is not large enough yet for the benefit to be visible
//
//Unfortunately the issue in this code results from JS
//inability to handle integer overflow
//
//Therefore we switch to Ruby
for(var a = lower; a <= higher; a += 1) {
  for(var b = lower; b <= higher; b += 1) {
    var number = Math.pow(a, b);
    if(!numbers[number]) {
      numbers[number] = 1;
    };
  };
};

var count = 0;
for(number in numbers) {
  count += 1;
};

console.log(numbers);
console.log(count);
