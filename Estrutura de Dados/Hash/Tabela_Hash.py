def soma(x, vetor, m):
    pos = len(x) % m
    cont = 0
    while (not(vetor[pos] == -1 or vetor[pos] == -2)) or cont >= m:
        pos = (pos + 1) % m
        cont += 1
    vetor[pos] = x


def sub(x, vetor, m):
    pos = len(x) % m
    while vetor[pos] != x:
        pos = (pos + 1) % m
    vetor[pos] = -2


size = int(input())
vetor = [-1] * size

SorS = int(input())
while SorS != -1:
    if SorS == 0:
        soma(str(input()), vetor, size)
    elif SorS == 1:
        sub(str(input()), vetor, size)
    SorS = int(input())

for i in range(size):
    print(vetor[i])
    