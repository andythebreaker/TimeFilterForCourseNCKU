#include <iostream>
#include <math.h>
#include <string>
#include <fstream>
using namespace std;
int main()
{ //s::square;x::X!
    string oput = "";
    for (int i = 1; i < 5 + 1; i++)
    {
        for (int j = 1; j < 8 + 1; j++)
        {
            oput += to_string(i);
            oput += to_string(j);
            oput += ":s;";
        }
    }

    ofstream out("ptime_data.txt");
    out << oput;
    out.close();
}