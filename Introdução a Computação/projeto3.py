def soma(x,n):
    if x > n:
        return 0
    else:
        return (x**x+soma(x+1,n))
    
    
n = int(input())
print(soma(1,n))