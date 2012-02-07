def fib_up_to(maxSize)
   i1, i2 = 1, 1
   index = 1
   while i1.to_s.size < maxSize
       i1, i2 = i2, i1 +i2
       index += 1
   end
   return index
end

puts fib_up_to(1000) #4782
