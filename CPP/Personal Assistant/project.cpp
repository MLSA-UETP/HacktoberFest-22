#include<iostream>
#include<ctime>
#include<windows.h>
#include<MMSystem.h>
//#include<cstdlib> 
#include<fstream>

using namespace std;
static int totrec=0;
void text(string x);
void help();
void options();
void text(string x){
	for(int j=0; j< x. size( ) ; j ++)
	{
		for(int i=0; i<=19999999; i++) ;
		cout<<x[j];
	}
}
void apps(){
	system("CLS");
	string a="Which application do you want to use?\n";
	text(a);
	string b="1.Notepad   2.Paint   3.Calculator";
	text(b);
	int x;
	cout<<"\n\nEnter your option: ";
	cin>>x;
			string x_="1.Notepad\n";
			string y_="2.Paint\n";
			string w_="3.Calculator";
			string z="Wrong option chosen!\n";
	switch(x){
		case 1:
			{
			system("CLS");
			text(x_);
			Sleep(1000);
			ShellExecute(NULL, "open", "Notepad.exe", NULL, NULL, SW_SHOWNORMAL);
			break;
		}	
		case 2:
		{
			system("CLS");
			text(y_);
			Sleep(1000);
			ShellExecute(NULL, "open", "mspaint.exe", NULL, NULL, SW_SHOWNORMAL);
			break;
		}	
		case 3:
		{
			system("CLS");
			text(w_);
			Sleep(1000);
			ShellExecute(NULL, "open", "calc.exe", NULL, NULL, SW_SHOWNORMAL);
			break;
		}	
			default:
			system("CLS");
			text(z);
	}
}
class TTable{
	private:
		string a,b,c,d,e,f,g,h;
		int t;                    // Time = t
		
		public:
			
			void get_data()
			{
				cout << "Set Your Time Table According To Time" << endl;
				cout << "Time is in 24 Hour Format" << endl;
				
				cout << "\nFrom 1 a.m to 3 a.m" << endl;
				cin.ignore();
				getline(cin,a);
				cout << "\nFrom 3 a.m to 6 a.m" << endl;
				getline(cin,b);
				cout << "\nFrom 6 a.m to 9 a.m" << endl;
				getline(cin,c);
				cout << "\nFrom 9 a.m to 12 p.m" << endl;
				getline(cin,d);
				cout << "\nFrom 12 p.m to 15 p.m" << endl;
				getline(cin,e);
				cout << "\nFrom 15 p.m to 18 p.m" << endl;
				getline(cin,f);
				cout << "\nFrom 18 p.m to 21 p.m" << endl;
				getline(cin,g);
				cout << "\nFrom 21 p.m to 24 p.m" << endl;
				getline(cin,h);
				
				cout << "You Have Successfully Entered Your Time Table\n" << endl;
			}
			
			void show_data()
			{
				cout << "\nFrom 1 a.m to 3 a.m : " << a;
				cout << "\nFrom 3 a.m to 6 a.m : " << b;
				cout << "\nFrom 6 a.m to 9 a.m : " << c;
				cout << "\nFrom 9 a.m to 12 p.m : " << d;
				cout << "\nFrom 12 p.m to 15 p.m : " << e;
				cout << "\nFrom 15 p.m to 18 p.m : " << f;
				cout << "\nFrom 18 p.m to 21 p.m : " << g;
				cout << "\nFrom 21 p.m to 24 p.m : " << h;
			}
			
			void tell_data()
			{	
				
				cout << "\nEnter Time For Which You Want To Check.\n" << endl;
				cout << "Enter Time From 1 To 24 hour." << endl;
				cin >> t;
			
				if(t >= 1 && t <3)
				{
					cout << "You should be doing: " << a << endl;
				}
				
				else if(t >= 3 && t <6)
				{
					cout << "You should be doing: " << b << endl;
				}
				
				else if(t >= 6 && t <9)
				{
					cout << "You should be doing: " << c << endl;
				}
				
				else if(t >= 9 && t <12)
				{
					cout << "You should be doing: " << d << endl;
				}
				
				else if(t >= 12 && t <15)
				{
					cout << "You should be doing: " << e << endl;
				}
				
				else if(t >= 15 && t <18)
				{
					cout << "You should be doing: " << f << endl;
				}
				
				else if(t >= 18 && t <21)
				{
					cout << "You should be doing: " << g << endl;
				}
				
				else if(t >= 21 && t <=24)
				{
					cout << "You should be doing: " << h << endl;
				}
				
				else if(t < 1 || t > 24)
				{
					cout << "You have entered wrong time" << endl;
				}
		}
};
void table(){
	TTable x;
	x.get_data();
	
	cout << "Do You Want To See Your Whole Time Table or Want To Check For Specific Time." << endl;
	cout << "1.Whole Time Table." << endl;
	cout << "2.Specific Time Check." << endl;
	cout << "3.Return to main menu." << endl;
	cout << "4.Exit" << endl;
	
	int choice;
    cin >> choice;
    
    switch (choice)
	{
		case 1:
	{
		x.show_data();
		cout<<endl;
		cout<<endl;
		string a_="What do you want to do next?";
		text(a_);
		cout<<endl;
		string b_="1.Main menu  2.Exit";
		text(b_);
		cout<<endl;
		string c_="Enter your option";
		text(c_);
		cout<<endl;
		int a;
		cin>>a;
		switch(a){
			case 1:
				system("CLS");
				help();
				options();
				break;
				
			case 2:
				exit(0);
				
			default:
			string zyx="Wrong option chosen.... Shutdown imminennnnttttttt......";
			text(zyx);
				exit(0);
		}
		break;
	}
		case 2:
	{
		x.tell_data();
		cout<<endl;
		cout<<endl;
		string d_="What do you want to do next?";
		text(d_);
		cout<<endl;
		cout<<endl;
		string e_="1.Main menu  2.Exit";
		text(e_);
		cout<<endl;
		string f_="Enter your option";
		text(f_);
		cout<<endl;
		int b;
		cin>>b;
		switch(b){
			case 1:
				system("CLS");
				help();
				options();
				break;
				
			case 2:
				exit(0);
				
			default:
				string xyz="Wrong option chosen.... Shutdown imminennnnttttttt......";
				text(xyz);
				exit(0);
		}
		break;
    }
    	case 3:
    {
    	system("CLS");
    	help();
    	options();
	}	
		default:
	{
		string aaa="Wrong option chosen.... Shutdown imminennnnttttttt......";
			text(aaa);
				exit(0);
		break;
	}
    };
}
void account(){
	system("CLS");
	int choice;
    while(1)
    {
        cout<<"\nChoose your choice :: \n";
        cout<<"1) New account list\n";
        cout<<"2) Update account\n";
        cout<<"3) Display accounts\n";
        cout<<"4) Return to main menu\n";
        cout<<"5) Exit\n";
        cout<<"\nCHoose your option: ";
        cin>>choice;

        switch (choice)
        {
          case 1 :
                {
                     ofstream outfile;
                     outfile.open("Accounts.txt",ios::out);
                     cout<<"\nPlease Enter Details:";
                     cout<<"\nUsername: ";
                     char name[50];
                     cin>>name;
                     outfile<<name<<endl;
                     cout<<"Mail: ";
                     char mail[50];
                     cin>>mail;
                     outfile<<mail<<endl;
                     cout<<"Password: ";
                     char pass[50];
                     cin>>pass;
                     outfile<<pass<<endl;
                     totrec= totrec + 1;
                     outfile.close();
                }
                 break;

          case 2 :
                {
                     ofstream outfile;
                     outfile.open("Accounts.txt",ios::app);
                     cout<<"\nPlease Enter Details:";
                     cout<<"\nUsername :: ";
                     char name[50];
                     cin>>name;
                     outfile<<name<<endl;
                     cout<<"Mail: ";
                     char mail[50];
                     cin>>mail;
                     outfile<<mail<<endl;
                     cout<<"Password: ";
                     char pass[50];
                     cin>>pass;
                     outfile<<pass<<endl;
                     totrec= totrec + 1;
                     outfile.close();
                 }
                 break;


          case 3 :
                {
                     ifstream infile;
                     infile.open("Accounts.txt",ios::in);
                     const int size=80;
                     char line[size];
                     int counter=totrec;
                     while(counter > 0)
                     {
                     infile.getline(line,size);
                     cout<<"\nUsername: "<<line<<endl;
                     infile.getline(line,size);
                     cout<<"Mail: "<<line<<endl;
                     infile.getline(line,size);
                     cout<<"Password: "<<line<<endl;
                     counter--;
                     }
                     infile.close();
                }
                    break;
		 case 4 :
		 	    {
		 	       system("CLS");
				   help();
				   options();	
				 }
				 
         case 5  :
                exit(0);

          default :
                string abc="\nInvalid option selected";
                text(abc);
                Sleep(1000);
                system("CLS");
                help();
                options();
          }
    }
}
void intro(){
	
	cout<<endl;
	cout<<endl;
	
	cout<<"          ";
	cout<<"          ";
	string a="************************************\n";
	text(a);
	cout<<"          ";
	cout<<"          ";
    string b="*WELCOME TO YOUR PERSONAL ASSISTANT*\n";
	text(b);
	cout<<"          ";
	cout<<"          ";
	string d="************************************\n";
	text(d);
}	
void time(){
	
	time_t now = time(0);
    cout<<"                    ";
    cout << "The time is: " << ctime(&now) << endl;
    
}	
void help(){
	
    string a="How may i help you today?\n";
	text(a);
	
    string b="\n1.Schedule   ";
	text(b);
	
	string c="2.Account management   ";
	text(c);
	
	string d="3.Applications   ";
	text(d);
	
	string e="4.Music   ";
	text(e);	
	
	string f="5.Exit";
	text(f);
	
	cout<<endl<<endl;   
}
void sound(){
	
	system("CLS");
	
	string a="Which song do you want to play?\n";
	text(a);
	
	Sleep(1000);
	
	string b="1.Minefields   2.Secrets\n";
	text(b);
	
	int x;
	cout<<endl;
	
	string c="Enter your option:\n";
	text(c);
	
	cin>>x;
	
		string d="Playing Minefields!\n";
		
		string e="Playing Secrets!\n";
		
	switch(x){
		
		case 1:
		system("CLS");
		text(d);
		PlaySound("1.wav",NULL,SND_SYNC); 
		system("pause");	
		break;
		break;
		
		case 2:
		system("CLS");
		text(e);
		PlaySound("2.wav", NULL,SND_SYNC); 
		system("pause");
		break;
		break;
	}
}
void options(){
	
	int x;
	
	cout<<"Enter your option: "<<endl;
	cin>>x;
	
	Sleep(1000);
	
			string a="You have chosen your schedule.\n";
			
			string b="You have chosen account management.\n";
			
			string c="You have chosen applications.\n";
			
			string d="You have chosen music.\n";
			
			string e="You have chosen wrong option.\n";
			
	switch(x){
		
		case 1:
			system("CLS");
			text(a);
			Sleep(1000);
			table();
			break;
			
		case 2:
			system("CLS");
			text(b);
			Sleep(1000);
			account();
			break;
			
		case 3:
			system("CLS");
			text(c);
			Sleep(1000);
			apps();
			break;
			
		case 4:
			system("CLS");
			text(d);
			Sleep(1000);
			sound();
			break;
			
		case 5:
			exit(0);
			
		default:
			system("CLS");
			text(e);
			Sleep(1000);
			system("CLS");
			help();
			options();
			break;
	}
}
int main(){
		
	intro();
	cout<<endl;
    time();
    Sleep(2000);
    help();
    options();
    Sleep(2000);
    return 0;
    
}
