index = 0
irrational = ""
until irrational.length > 1000000
    if irrational.length%1000 == 0
        puts irrational.length
    end
    irrational += index.to_s
    index += 1
end

irrational = irrational.split("")
product = 1
product *= irrational[1].to_i
product *= irrational[10].to_i
product *= irrational[100].to_i
product *= irrational[1000].to_i
product *= irrational[10000].to_i
product *= irrational[100000].to_i
product *= irrational[1000000].to_i


puts irrational[1].to_i
puts irrational[10].to_i
puts irrational[100].to_i
puts irrational[1000].to_i
puts irrational[10000].to_i
puts irrational[100000].to_i
puts irrational[1000000].to_i

puts product #210

#Brute force approach is rather slow
#A better way to do it would be to keep track of the indexes
#MUCH less memory intensive
