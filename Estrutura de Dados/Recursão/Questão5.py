def soma (x,n):
    if n <= x:
        return (n + soma(x,n+1))
    else:
        return 0
    
    
x = int(input())
print(soma(x,1))