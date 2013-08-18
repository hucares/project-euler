class Series
    def initialize(index)
      @index = index
    end

    def index
      return @index
    end

    def incr
      @index += 1
    end
end

class Triangle < Series
    def crunch
      n = @index
      return (n* (n+ 1)) / 2
    end
end

class Pentagonal < Series
    def crunch
      n = @index
      return (n* (3* n- 1)) / 2
    end
end

class Hexagonal < Series
    def crunch
      n = @index
      return (n* (2* n- 1))
    end
end

tri  = Triangle.new(285)
pent = Pentagonal.new(165)
hex  = Hexagonal.new(143)

highest = 80000

s1 = []
s2 = []
s3 = []

while tri.index < highest
  tri.incr
  s1.push(tri.crunch)
end

while pent.index < highest
  pent.incr
  s2.push(pent.crunch)
end

while hex.index < highest
  hex.incr
  s3.push(hex.crunch)
end

puts s1 & s2 & s3
