a = int(input())
i =0
while i<a:
    j=0
    while j<=i:
     print(chr(ord("E")-i+j),end="")
     j=j+1
    i =i+1
    print()