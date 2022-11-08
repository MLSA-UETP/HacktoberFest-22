#include <iostream>
using namespace std;
int main()
{
	int Pakistani_Cuisine = 0, Indian_Cuisine = 0, Chinese_Cuisine = 0, Italian_Cuisine = 0, i = 0, people = 1;
	while (people != 0)
	{
		cout << endl;
		cout << "1.	Pakistani Cuisine		2. Indian Cuisine 		3. Chinese Cuisine		4. Italian Cuisine	" << endl;
		cout << "Plz input the favourite Cuisine of person # " << people << " : Choose 1,2,3,4 from above menu or-1 to exit the program ";
		cin >> i;
		if (i == 1)
		{
			Pakistani_Cuisine++;
		}
		else if (i == 2)
		{
			Indian_Cuisine++;
		}
		else if (i == 3)
		{
			Chinese_Cuisine++;
		}
		else if (i == 4)
		{
			Italian_Cuisine++;
		}
		else if (i = -1)
		{
			cout << "The Total number of people surveyed is " << Pakistani_Cuisine + Indian_Cuisine + Chinese_Cuisine + Italian_Cuisine << ". The results are as follows : \n \n";
			cout << "\t Beverage \t Number of Votes \n"
				 << "\t***********************************"
				 << "\n";
			cout << "\t Pakistani Cuisine \t \t" << Pakistani_Cuisine << "\n"
				 << "\t Indian Cuisine \t \t " << Indian_Cuisine << "\n"
				 << "\t Chinese Cuisine \t \t " << Chinese_Cuisine << "\n"
				 << "\t Italian Cuisine \t \t" << Italian_Cuisine;
			people = -1;
		}
		people++;
	}
	return 0;
}