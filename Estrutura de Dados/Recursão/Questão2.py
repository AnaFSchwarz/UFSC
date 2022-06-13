def reverse(n):
    if n == "":
        return ""
    else:
        return (n[-1] + "\n" + reverse(n[:-1]))

n = str(input())
print(reverse(n))