class Triangle
  def initialize
    @number     = 1
    @increment  = 2
  end

  def value_incr
    lambda {
      @number       += @increment
      @increment    += 1
    }
  end

  def print
    lambda { puts "value: #{@number}" }
  end

  def value
    lambda { return @number}
  end

  def div_count
    lambda {
      count = 0
      sqrt  = Math.sqrt(@number)
      index = 1

      while index < sqrt do
        if @number % index == 0
          count += 2
        end
        index += 1
      end

      if sqrt.floor**2 == @number
        count += 1
      end
      return count
    }
  end
end

tri     = Triangle.new
incr    = tri.value_incr
print   = tri.print
value   = tri.value
count   = tri.div_count

while count.call < 500 do
  #print.call
  #puts "count: #{ count.call }"
  incr.call
end
print.call
puts "count: #{ count.call }"
