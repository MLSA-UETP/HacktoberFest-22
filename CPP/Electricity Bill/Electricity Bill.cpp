//Write a program to calculate and print the Electricity bill of a given customer. The customer id and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer.
#include<iostream>
using namespace std;
main(){
	int id, units;
	float charges, surcharge, net;

	cout<<"Enter customer ID: ";
	cin>>id;
	cout<<"Enter Consumed Unit by the Customer: ";
	cin>>units;
	cout<<"------------------------------------"<<endl<<endl;
	cout<<"CUSTOMER ID.NUMBER: "<<id<<endl;
	cout<<"UNITS CONSUMED: "<<units<<endl<<endl;

	if(units<=199){
	charges = units*1.20;
	cout<<"Amount Charged @Rs. 1.20 per unit: "<<charges<<endl;
}

	else if (units>=200,units<400){
	charges = units*1.50;
	cout<<"Amount Charged @Rs. 1.50 per unit: "<<charges<<endl;
}

	else if(units>=400,units<600){
	charges = units*1.80;
	cout<<"Amount Charged @Rs. 1.80 per unit: "<<charges<<endl;
}

	else if(units>=600){
	charges = units*2.00;
	cout<<"Amount Charged @Rs. 2.00 per unit: "<<charges<<endl;
}

    charges > 400;
	surcharge = charges * 0.15;
	cout<<"Surcharge Amount: "<<surcharge<<endl;
	net = surcharge + charges;
	cout<<"Net Amount Paid by the Customer: "<<net<<endl;
}
