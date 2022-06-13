class No:
    def __int__ (self):
        self.value = None()
        self.next_ = None()

class Lista_Encadeada:
    def __int__(self):
        self.head = None
    
    def insert (self,x):
        novo = No
        novo.value = x
        q = self.head

        if is_empty:
            self.head = x
        else:
            while q.next_ != None:
                q.next_ = q
            novo = q.next_


    def is_empty (self):
        if self.head == None and self.next == None:
            return True
        else:
            return  False
