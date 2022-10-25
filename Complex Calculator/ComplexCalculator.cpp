#include<iostream>

#define line cout<<endl;// for endl
using namespace std;

class Complex{
    private:
    double re,im;

    public:
    Complex();
    Complex(double r, double i);
    void input();
    void showComplex();
    void addComplex(Complex c1, Complex c2);
    void subCom(Complex c1, Complex c2);
    void mulCom(Complex c1, Complex c2);
    void divCom(Complex c1, Complex c2);
};

Complex::Complex(){
    re = 0.0;
    im = 0.0;
}

Complex::Complex(double r, double i){
    re = r;
    im = i;
}

void Complex::input(){
    line
    cout<<"Enter Real Part Of Complex Number = ";
    cin>>re;
    cout<<"Enter Imaginary Part Of Complex Number = ";
    cin>>im;
}

void Complex::showComplex(){
    if(im>=0){
        cout<<re<<"+"<<"i"<<im;
        line
    }
    else{
        cout<<re<<"-i"<<-im; line
    }
}

void Complex::addComplex(Complex c1, Complex c2){
    re = c1.re + c2.re;
    im = c1.im + c2.im;
}

void Complex::subCom(Complex c1, Complex c2){
    re = c1.re - c2.re;
    im = c1.im - c2.im;
}
void Complex::mulCom(Complex c1, Complex c2){
    re = (c1.re)*(c2.re) - (c1.im)*(c2.im);
    im = (c1.re)*(c2.im) + (c1.im)*(c2.re);
}
void Complex::divCom(Complex c1, Complex c2){
    re = (((c1.re)*(c2.re))+((c1.im)*(c2.im))) / (((c2.re)*(c2.re)) + ((c2.im)*(c2.im)));
    im = (((c2.re)*(c1.im))-((c1.re)*(c2.im))) / (((c2.re)*(c2.re)) + ((c2.im)*(c2.im)));
}

int main(){
    string oper;
    cout<<"Welcome To The Complex Numbers Calculator "; line
    Complex c1;
    c1.input(); line
    cout<<"What would you like to Perform"; line
    cout<<"Addition(+), Subtraction(-), Multiplication(*), Division(/)"<<endl;
    getline(cin.ignore(),oper);

    Complex c2;
    c2.input();

    Complex c;
    if(oper == "+"){
        c.subCom(c1,c2);
        cout<<"Sum = ";c.showComplex();
    }
    else if(oper == "-"){
        c.subCom(c1,c2);
        cout<<"Difference = ";c.showComplex();
    }
    else if(oper == "*"){
        c.mulCom(c1,c2);
        cout<<"Product = ";c.showComplex();
    }
    else if(oper == "/"){
        c.divCom(c1,c2);
        cout<<"Division = ";c.showComplex();
    }
    else{
        cout<<"Wrong Entry";
    }
    return 0;
}