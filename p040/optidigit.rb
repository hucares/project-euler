length = 0
number = 1
magnitude = 0
numbersArray = []

until length > 1000000
    length += number.to_s.length
    if length >= 10**magnitude
        numberArray = number.to_s.split("")
        chop = length-10**magnitude
        chop.times{numberArray.pop()}
        numbersArray.push(numberArray.pop().to_i)
        magnitude += 1
    end
    number += 1
end

puts numbersArray.reduce(:*)
