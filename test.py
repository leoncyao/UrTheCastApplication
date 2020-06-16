import sys
memo = {}
def nth_fib(x):
    if x in memo:
        return x
    else:
        if x == 0 or x == 1:
            y = 1
        else:
            y = nth_fib(x-1) + nth_fib(x-2)
        memo[x] = y
        return y

if  __name__ == "__main__":
    print(nth_fib(int(sys.argv[1])))