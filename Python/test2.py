print("```````````````````BODY MASS INDEX CALCULATOR```````````````````")
weight = float(input("Enter your weight in kilograms: "))
height = float(input("Enter your height in meters: "))
bmi = round(weight / height ** 2, 2)
print(f"Your BMI is {bmi}")


if bmi < 18.5:
    print("You are underweight")
elif 18.5 <= bmi <= 24.9:
    print("You are normal")
elif bmi >= 25 and bmi <= 29.9:
    print("You are overweight")
elif bmi > 30 and bmi <= 34.9:
    print("You are obese")
elif bmi > 35:
    print("You are clinlically obese")
