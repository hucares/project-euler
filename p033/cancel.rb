def badCancel(num, dom)
    if    num % 10                  == (dom/10).floor   && 
          dom%10                    != 0                &&
          (num/10).floor/(dom%10)   == num/dom
            puts 'hi'
            return true
    elsif (num/10).floor            == dom % 10         &&
          (dom/10).floor            != 0                &&
          (num%10)/(dom/10).floor   == num/dom
            return true            
#    elsif (num/10).floor            == (dom/10).floor   &&
#          (dom%10)                  != 0                &&
#          (num%10)/(dom%10)         == num/dom
#            return true
#    elsif (num%10)                  == (dom%10)         &&
#          (dom/10).floor            != 0                &&
#          (num/10).floor/(dom/10).floor == num/dom
#            return true
    end
    return false
end

11.upto(12) { |x|
    11.upto(x) { |y|
        if badCancel(y, x)
            puts sprintf("%d / %d", y, x)
        end
    }
}

badCancel(49, 98)
