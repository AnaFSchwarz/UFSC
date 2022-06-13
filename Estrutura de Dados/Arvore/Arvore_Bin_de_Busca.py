class Node:
    def __init__(self):
        self.value = None
        self.right = None
        self.left = None
    
class Tree:
    def __init__ (self):
        self.root = None
        
    def insert (self, r, x):
        novo = Node()
        novo.value = x
        if self.is_empty():
            self.root = novo
        elif x < r.value:
            if not self.has_left(r):
                r.left = novo
            else:
                self.insert (r.left, x)
        elif x > r.value: 
            if not self.has_right(r):
                r.right = novo
            else:
                self.insert (r.right, x)
    
    def is_empty (self):
        return self.root == None
    
    def has_right (self, r):
        return not r.right == None
    
    def has_left (self, r):
         return not r.left == None

    def pre_ordem (self,r):
        print (r.value, end=" ")
        if self.has_left(r):
            self.pre_ordem (r.left)
        if self.has_right(r):
            self.pre_ordem (r.right)
    
    def pos_ordem (self, r):
        if self.has_left(r):
            self.pos_ordem (r.left)
        if self.has_right(r):
            self.pos_ordem (r.right)
        print (r.value, end=" ")
    
    def em_ordem (self, r):
        if self.has_left(r):
            self.em_ordem (r.left)
        print (r.value, end=" ")
        if self.has_right(r):
            self.em_ordem (r.right)

Arvore = Tree()
for i in range (int(input())):
    n = int(input())
    Arvore.insert(Arvore.root, n)
Arvore.pre_ordem(Arvore.root)
print( )
Arvore.em_ordem(Arvore.root)
print( )
Arvore.pos_ordem(Arvore.root)
print( )
