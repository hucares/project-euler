$memo = {}

def collatz(n)
    distance = $memo[n]
    if distance == nil
        if n == 1
            distance = 0
        elsif n%2 == 0
            distance = collatz(n/2) + 1
        else
            distance = collatz(3*n+1) + 1
        end
        $memo[n] = distance
    end
    return distance
end

1.upto(999999) {|n|
                if n%10000 == 0
                    puts n
                end
                if $memo[n] == nil
                    collatz(n)
                 end}
max = 0
1.upto(999999) {|n|
                if n%10000 == 0
                    puts n
                end
                if $memo[n] > max
                    max = $memo[n]
                end}
puts $memo.key(max) #837799
