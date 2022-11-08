#include <iostream>
#define line cout << endl; // for endl
using namespace std;

class BankAccount
{
    long int balance,deposit_Amount,Withdraw_Amount;

public:
    BankAccount()
    {
        balance = 1000;
    }

    // makes a deposit
    void deposit()
    {
        cout << "Enter The amount you want to deposit = ";
        cin >> deposit_Amount;
        balance+= deposit_Amount;
    }

    // withdrawal
    void Withdraw()
    {
        // if balance is below Rs. 500 then display message showing insufficient balance
        if (balance <= 500)
        {
            cout << "Insufficient Balance"; 
            line
        }
        else
        {
            cout << "Enter The amount you want to withdraw = ";
            cin >> Withdraw_Amount;
            balance-= Withdraw_Amount;
        }
    }

    // displays the balance
    void displayBalance()
    {
                cout
            << "Current Balance: " << balance;
    }
    
};

int main()
{
    BankAccount AC1;
    cout<<"Welcome To The Bank";line
    cout<<"You Account is being Opened with a Balance of 1000"; line
    int choice=0;
    while (choice>=0)
    {
        line
    cout<<"(1) Deposit Amount";line
    cout<<"(2) Withdraw Amount";line
    cout<<"(3) View Balance";line
    cout<<"(-1) To Exit";line
    cin>>choice;
    
    
        switch (choice)
    {
    case 1:
    AC1.deposit();
        break;

        case 2:
    AC1.Withdraw();
        break;

        case 3:
    AC1.displayBalance();
        break;

    default:
        break;
    }
    }
    return 0;
}