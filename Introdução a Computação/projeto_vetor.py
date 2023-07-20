N, M, C = [int(x) for x in input().split()]
sala = [[int(x) for x in input().split()]for _ in range(N)]

resposta = 'S'
for i in range(1,N):
    if 1 in sala[i] and 1 in sala[i-1]:
        resposta = 'N'
    elif 2 in sala[i] and 2 in sala[i-1]:
        resposta = 'N'
    for n in range[M-C]:
        for y in range(C):
            if sala[N][n] == sala[N][n+C] and sala[N][n] != 0:
                rsporta = 'N'
print(resposta)