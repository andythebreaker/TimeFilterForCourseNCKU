#include <iostream>
#include <math.h>
#include <string>
#include <fstream>
using namespace std;
int main()
{ //s::square;x::X!

    /*
function l11F() {
    var satus = document.getElementById('l11').style.backgroundColor;
    if (satus !== "slateblue") {
        document.getElementById('l11').style.backgroundColor = "slateblue";
        document.getElementById('l11').innerHTML = "ㄨ";
        document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search("12")+3,"x");

    } else {
        document.getElementById('l11').style.backgroundColor = "lightgray";
        document.getElementById('l11').innerHTML = "口";
        document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search("12")+3,"s");
    }
}

*/
    string oput = "";
    for (int i = 1; i < 5 + 1; i++)
    {
        for (int j = 0; j < 8 + 1; j++)
        {
            if (j < 4)
            {
                oput += "function l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "F() { var satus = document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor; if (satus !== \"slateblue\") {";

                oput += " document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor = \"slateblue\"; document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').innerHTML = \"ㄨ\"; document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search(\"";
                oput += to_string(i);
                oput += to_string(j + 1);
                oput += "\")+3,\"x\");";

                oput += " } else { ";

                oput += " document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor = \"lightgray\"; document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').innerHTML = \"口\"; document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search(\"";
                oput += to_string(i);
                oput += to_string(j + 1);
                oput += "\")+3,\"s\");";

                oput += " } } ";

                /*oput += "document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').addEventListener(' click', l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "F); ";*/
            }
            else if (j > 4)
            {
                oput += "function l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "F() { var satus = document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor; if (satus !== \"slateblue\") {";

                oput += " document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor = \"slateblue\"; document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').innerHTML = \"ㄨ\"; document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search(\"";
                oput += to_string(i);
                oput += to_string(j);
                oput += "\")+3,\"x\");";

                oput += " } else { ";

                oput += " document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').style.backgroundColor = \"lightgray\"; document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').innerHTML = \"口\"; document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search(\"";
                oput += to_string(i);
                oput += to_string(j);
                oput += "\")+3,\"s\");";

                oput += " } } ";

                /*oput += "document.getElementById('l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "').addEventListener(' click', l";
                oput += to_string(i);
                oput += to_string(j);
                oput += "F); ";*/
            }
            else
            {
                cout << ".";
            }
        }
    }

    ofstream out("click_f_data.txt");
    out << oput;
    out.close();
}