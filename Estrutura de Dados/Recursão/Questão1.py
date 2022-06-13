def contagem(n):
    if n == "":
        return 0
    else:
        return (contagem(n[:-1]) + 1)

n = str(input())
print(contagem(n))