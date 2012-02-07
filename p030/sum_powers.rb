exponent = 5
$memo = []

def sumDigit(number, exp)
    sumArray    = number.to_s.split("")
    sumArray    = sumArray.collect{|x| (x.to_i)**exp}
    sum         = sumArray.inject(:+)
    if number == sum
        puts sum
        $memo.push(sum)
        return sum
    end
end

for index in 2..10**(exponent + 1)
    sumDigit(index, exponent)
    index += 1
end

puts $memo.inject(:+) #443839
