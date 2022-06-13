def prim_par(v,n):
    if (v[n] % 2) == 0:
        return n
    elif n >= len(v)-1:
        return 'não tem número par'
    else:
        return prim_par(v,n+1)


v = [int(x) for x in input().split()]
print(prim_par(v,0))