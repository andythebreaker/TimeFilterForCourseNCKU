#include <iostream>
#include <math.h>
#include <string>
#include <fstream>
using namespace std;
int main()
{
    string oput = "";
    for (int i = 1; i < 5 + 1; i++)
    {
        for (int j = 0; j < 8 + 1; j++)
        {
            if (j == 4)
            {
                cout << ".";
            }
            else
            {
                oput += "document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').addEventListener('click', l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "F); ";
            }
        }
    }

    ofstream out("add_f_data.txt");
    out << oput;
    out.close();
}