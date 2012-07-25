numbers = {}

#See JS file for notes

for a in 2..100
  for b in 2..100
    number = a**b
    numbers[number] = 1
  end
end

puts numbers.length
