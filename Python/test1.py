import os


def clear():
    """Clears the screen"""
    os.system('cls' if os.name == 'nt' else 'clear')


def add(x, y):  # Addition
    return x + y


def subtract(x, y):   # Subtraction
    return x - y


def multiply(x, y):    # Multiplication
    return x * y


def divide(x, y):   # Division
    x/y


def modulus(x, y):  # Modulus
    return x % y


def power(x, y):    # Power
    return x ** y


logo = """
             _____________________
            |  _________________  |
            | | Pythonista   0. | |  
            | |_________________| | 
            |  ___ ___ ___   ___  |
            | | 7 | 8 | 9 | | + | |
            | |___|___|___| |___| |
            | | 4 | 5 | 6 | | - | |
            | |___|___|___| |___| |
            | | 1 | 2 | 3 | | x | |
            | |___|___|___| |___| |
            | | . | 0 | = | | / | |
            | |___|___|___| |___| | 
            |_____________________|

"""


operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
    "%": modulus,
    "^": power,
}


def calculator():
    print(logo)
    num1 = float(input("Enter first number: "))
    for op in operations:
        print(op)

    continue_calculation = True
    while continue_calculation:
        operation = input("Select an operation from above: ")
        num2 = float(input("Enter next number: "))
        # Passing the operation and the two numbers to the operations dictionary
        answer1 = operations[operation](num1, num2)

        print(f"{num1} {operation} {num2} = {answer1}")
        continuation = input(
            f"Type 'y' to continue calculating with {answer1} or 'n' to exit:\n")
        if continuation == "y":  # if the user types y, then the program will continue to the next line
            num1 = answer1
        elif continuation == "n":   # if the user types n, then the program will exit
            continue_calculation = False
            clear()
            exitting = input(
                "Type 'y' to play again or 'n' to exit the calculator: ")
            if not exitting:
                calculator()    # Recursive function
            elif exitting:
                print("Thank you for using this calculator app!")
                exit()


calculator()    # Calling the calculator function to start the program
