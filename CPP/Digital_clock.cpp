#include <iostream>
#include <windows.h>
#include <dos.h> //For delay function.
using namespace std;

//Global variables:
int hour, mint, sec=55, format;

//Functions:
void form_12 (void);
void form_24 (void);

int main(){
	// implementing a digital clock:
	cout<<"Set time: \n";
	cout<<"Enter hour: ";
	cin>>hour;
	cout<<"Enter minutes: ";
	cin >> mint;
	//cout<<"Enter sec: ";cin>>sec;
	
	//for automatic detection of 24 hour format.
	if (hour > 12 && hour < 24)
		form_24();
	
	//For manually setting up 24 or 12 hour format.
	cout<<"To show 24-hour format. Enter 24,\nTo show 12-hour format. Enter 12.\n";
	cin >> format;
	
	if (format == 12)
		form_12();
	else if (format == 24)
		form_24();
	else
		cout << "Invalid Format!";
	return 0;
}
void form_24 (){
	while(true){
		system("cls");
			cout<<"\tHours\t:\tMinutes\t:\tSeconds\n";
		cout<<"\t"<<hour<<"\t\t"<<mint<<"\t\t"<<sec;
		sec++;
		if (sec > 59){
			sec = 0;
			mint++;
		}
		if (mint > 59){
			mint=0;
			hour++;
		}
		if (hour > 24){
			hour = 1;
		}
		sleep(1);
	}
}
void form_12 (){
	int apm;
	string merides = "am";
	cout<< "For \'am\' enter 1. For \'pm\' enter 2: ";
	cin>>apm;
	if (apm == 1)
		merides = "am";
	else if (apm == 2)
		merides = "pm";
	else
		cout<<"Invalid Entry!";
	
	while(true){
		system("cls");
		cout<<"\tHours\t:\tMinutes\t:\tSeconds\t|\tMeride\n";
		cout<<"\t"<<hour<<"\t\t"<<mint<<"\t\t"<<sec<<"\t|\t"<<merides;
		sec++;
		if (sec > 59){
			sec = 0;
			mint++;
		}
		if (mint > 59){
			mint=0;
			hour++;
		}
		if (hour > 12){
			hour = 1;
			if (merides == "am")
				merides="pm";
			else
				merides="am";
		}
		sleep(1);
	}
}
