#include <iostream>
#define line cout<<endl;
using namespace std;
main(){
	int myt, i, n=1;
	cout<<"Table of: ";cin>>myt;
	cout<<"Table till: ";cin>>n;
	cout<<"Table is: ";
	line;
	for(i=0;i<=n;i++){
		cout<<"\t"<<myt<<" * "<<i<<" = "<<myt*i;
		line;}
}
