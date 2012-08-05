import numpy;

def change(amount, coinset):
    cache = numpy.zeros(shape = (len(coinset), amount + 1), dtype = int)
    #cache [coin] [amount]

    #loop over money total
    for asum in range(1, amount + 1):
        #loop over denomination sets
        cset = 0
        for coin in coinset:
            if    asum == coin:
                cache[cset][asum] = 1 + cache[cset - 1][asum]
            #elif  (asum - coin) < 0
            else:
                cache[cset][asum] = cache[cset][asum - coin] + cache[cset - 1][asum]
            cset += 1

    print cache
    return cache[len(coinset) - 1][amount]
print change(200, [1, 2, 5, 10, 20, 50, 100, 200])
