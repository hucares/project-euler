triangleArray = []
IO.foreach("triangle.txt") {|x| 
                                triangleRow = x.split(" ")
                                triangleRow.map!{|y| y.to_i}
                                triangleArray.push(triangleRow)}

secondRowIndex = triangleArray.length - 2

secondRowIndex.downto(0) { |i|
    0.upto(i) { |j|
       add = triangleArray[i+1][j] > triangleArray[i+1][j+1] ? 
             triangleArray[i+1][j] : triangleArray[i+1][j+1]
       triangleArray[i][j] += add
    } 
}

puts triangleArray[0][0] #7273
