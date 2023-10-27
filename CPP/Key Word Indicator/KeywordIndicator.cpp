#include<iostream>
// #include< >
#define line cout<<endl;// for endl
using namespace std;
main()
{
   char arr[1000]; int  alpha=0, num=0, space=0, special=0;
   cout<<"Enter String ";line line
   gets(arr);  // Important it places characters of string in indexes of array.
   for(int i=0; arr[i]!='\0'; i++){
   	if((arr[i]>='A' && arr[i]<='Z') || (arr[i]>='a' && arr[i]<='z')) alpha++;
   else if(arr[i]>='0' && arr[i]<='9') num++;
   else if(arr[i]==' ') space++;
   else special ++;
 }
 cout<<"Number of Alphabets = "<<alpha;line
 cout<<"Number of Numerals = "<<num;line
 cout<<"Number of Spaces = "<<space;line
 cout<<"Number of Special Characters = "<<special;
}
