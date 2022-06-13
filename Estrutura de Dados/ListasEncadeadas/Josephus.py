class Node:
    def __int__ (self):
        self.value = None()
        self.next = None()

class Josephus:
    def __int__(self):
        self.tail = None
        
    def is_empty(self):#verifica se a lista está vazia
        return not hasattr(self, 'tail')
        
    def insert (self, x): #insere as pessoas na lista
        novo = Node()
        novo.value = x
        if self.is_empty():
            self.tail = novo
            self.tail.next = self.tail
        else:
            novo.next = self.tail.next
            self.tail.next = novo
            self.tail = novo
    
    def size (self): #tamanho da lista
        if self.is_empty():
            return 0 
        else:
            q = self.tail
            tam = 1
            while q.next != self.tail:
                q = q.next
                tam += 1
            return tam
    
    def search (self, x): #procura a posição da pessoa       
        num = self.tail
        pos = 0
        while num.value != x:
            num = num.next
            pos += 1
        return pos

    def jump(self,b,m): #pula as casa
        return ((b + m)%self.size())
        
    def remove (self,x):#remove 0 valor na posição x
        q = self.tail
        if x == 0: # se o valor for o tail
            for i in range(self.size()-1):
                q = q.next
            q.next = self.tail.next
            self.tail = q
            return self.tail.next.value
        else:
            for i in range (x-1):
                q = q.next
            q.next = q.next.next
            return (q.next.value)
        
    def imprimir(self):#mostra o jogo
        q =  self.tail
        for i in range (self.size()):
            q = q.next
            return q.value
        
def construct_game(x,m): #controi o jogo
    L = Josephus()
    for i in range(1,x+1): #insere as pessoas
        L.insert(i)
    begin = 1 
    while L.size() > 1: #até restar uma pessoa
        y = L.jump(begin,m) #pula m pessoas       
        begin = L.search(L.remove(y)) #remove a pessoaa do local y
    
    return (L.imprimir())

for i in range(int(input())):
    n = int(input()) #numero de pessoas
    m = int(input()) #pular m pessoas
    resposta = construct_game(n,m)
    print(f'Usando n={n}, m={m}, resultado={resposta}')
