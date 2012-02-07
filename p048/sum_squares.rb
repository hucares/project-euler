x = (1..1000).collect{|x|x**x}
sum = x.inject(:+)
sumArray = sum.to_s.split("")
puts sumArray.slice(-10..-1).join("")#19110846700
