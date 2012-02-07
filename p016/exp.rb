twoThou = 2**1000;
sumArray = twoThou.to_s.split("");
sumArray.collect! {|x| x.to_i}; 
sum = sumArray.inject(:+);
puts sum #1366
