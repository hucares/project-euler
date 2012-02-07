sumArray = (1..100).inject(:*).to_s.split("")
sumArray.collect! {|x| x.to_i}
sum = sumArray.inject(:+)
puts sum #648
