#include<iostream>
#include<math.h>
#define line cout<<endl;// for endl
using namespace std;
float deter(int a, int b, int c){
	float deter;
	deter = (b*b) - 4*a*c;
	return deter;
}
float roots(int a, int b, int c, float d){
	float r1, r2;
	if(d>0){r1 = (-b + sqrt(d)) / (2*a) ; r2 = (-b - sqrt(d)) / (2*a); cout<<"The Roots are real"; line cout<<"Root 1 = "<<r1; line cout<<"Root 2 = "<<r2; }
	else if (d==0){r1 = r2 = -b/(2*a); cout<<"Roots r1=r2= "<<r1; line}
	else if(d<0){r1=-b/(2*a); r2=sqrt(-d)/(2*a); cout<<"The Roots are Imaginary ";line cout<<"Real Root is : "<<r1;line cout<<"Imaginary Root is : "<<r2; }
}
main()
{
   int myarr[3]; float d, r;
   cout<<"Enter a, b, c ax2+bx+c To Find Roots : ";line line
   cout<<"Value of a = "; cin>>myarr[0]; if(myarr[0]==0) {cout<<"Wrong Entry"; line exit(1);}
   cout<<"Value of b = "; cin>>myarr[1]; if(myarr[1]==0) {cout<<"Wrong Entry"; line exit(1);}
   cout<<"Value of c = "; cin>>myarr[2]; if(myarr[2]==0) {cout<<"Wrong Entry"; line exit(1);}
   d=deter(myarr[0],myarr[1],myarr[2]);
   r=roots(myarr[0],myarr[1],myarr[2],d);
}
