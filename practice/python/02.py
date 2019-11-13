i = int(input("利润："))
arr = [1000000, 600000, 400000, 200000, 100000, 0]
rate = [0.01, 0.015, 0.03, 0.05, 0.075, 0.1]
total = 0
for index in range(0, 6):
    if i > arr[index]:
        temp = (i - arr[index]) * rate[index]
        total += temp
        print(temp)
        i = arr[index]
print(total)