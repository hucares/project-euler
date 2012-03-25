for(var den = 10; den < 100; den += 1) {
  for(var num = 10; num < den; num += 1) {
    var numArray = num.toString().split('');
    var denArray = den.toString().split('');
    if(numArray[1] === denArray[0] && numArray[0]/denArray[1] == num/den) {
      console.log(num + " / " + den);
    }
  }
}

//Results are 16/64, 26/65, 19/95, 49/98
//Plugging results into Wolfram Alpha yields 1/100
//Answer is 100
