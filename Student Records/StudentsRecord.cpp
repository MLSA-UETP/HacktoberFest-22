#include<iostream>
// #include< >
#define line cout<<endl;// for endl
using namespace std;
struct Students_Info{
	string Name, Reg_No, Sem_No, Batch;
};
int main()
{
   int n,select;
   string reg, name, batch, sem;
   cout<<"Welcome To The Students Info System :";line line
   cout<<"Enter Number Of Students : "; cin>>n;line
   Students_Info num[n];line
   for(int i=0; i<n; i++){
      line
   	cout<<"Enter Details of Student ";line
   	cout<<"Name : "; getline(cin.ignore(),num[i].Name);
   	cout<<"Reg No : "; cin>>num[i].Reg_No;
   	cout<<"Semester : "; cin>>num[i].Sem_No;
      cout<<"Batch : "; cin>>num[i].Batch;
   }line
   cout<<"Data of "<<n<<" Students is been Saved ! ";line line

   cout<<"You want to show Data By :";line
   cout<<"(1) Name"; line
   cout<<"(2) Registration Number";line
   cout<<"(3) Semester"; line
   cout<<"(4) By Batch ";line
   cin>>select;
   switch (select)
   {
   case 1:
   cout<<"Enter Name : ";line
   cin>>name;
   for(int i=0; i<n; i++){
      line
   	if(name==num[i].Name){
   		cout<<"Name : "<<num[i].Name;line
   		cout<<"Reg No : "<<num[i].Reg_No;line
   		cout<<"Semester No : "<<num[i].Sem_No;line
         cout<<"Batch No : "<<num[i].Batch;line
	   }
   }
      break;
   case 2:
   cout<<"Enter Registration Number : ";line
   cin>>reg;
   for(int i=0; i<n; i++){
      line
   	if(reg==num[i].Reg_No){
   		cout<<"Name : "<<num[i].Name;line
   		cout<<"Reg No : "<<num[i].Reg_No;line
   		cout<<"Semester No : "<<num[i].Sem_No;line
         cout<<"Batch No : "<<num[i].Batch;line
	   }
   }
   break;
   case 3:
   cout<<"Enter Semester : ";
   cin>>sem;
   for(int i=0; i<n; i++){
      line
   	if(sem == num[i].Sem_No){
   		cout<<"Name : "<<num[i].Name;line
   		cout<<"Reg No : "<<num[i].Reg_No;line
   		cout<<"Semester No : "<<num[i].Sem_No;line
         cout<<"Batch No : "<<num[i].Batch;line
	   }
   }
   break;

   case 4:
   cout<<"Enter Batch : ";
   cin>>batch;
   for(int i=0; i<n; i++){
      line
   	if(batch == num[i].Batch){
   		cout<<"Name : "<<num[i].Name;line
   		cout<<"Reg No : "<<num[i].Reg_No;line
   		cout<<"Semester No : "<<num[i].Sem_No;line
         cout<<"Batch No : "<<num[i].Batch;line
	   }
   }
   break;
   default:
   cout<<"Wrong Entry";line
      break;
   }
   return 0;
}