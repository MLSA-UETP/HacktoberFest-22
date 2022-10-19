heights = input("Enter the heights of the people: ").split()

for n in range(0, len(heights)):    # Convert the string to int
    heights[n] = int(heights[n])
print(heights)

total_sum = 0
for i in heights:   # Calculate the sum of the heights
    total_sum += i

number_of_people = 0
for j in heights:  # Calculate the number of people
    number_of_people += 1

average_height = total_sum / number_of_people
print("The average height is: ", average_height)
