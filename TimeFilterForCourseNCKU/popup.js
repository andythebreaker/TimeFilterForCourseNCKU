String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}/*var hello = "Hello World";
alert(hello.replaceAt(2, "!!")); // Should display He!!o World*/
function injectTheScript() {//init.!

    // Gets all tabs that have the specified properties, or all tabs if no properties are specified (in our case we choose current active tab)
    chrome.tabs.query({ active: true }, function (tabs) {
        // Injects JavaScript code into a page
        chrome.tabs.executeScript(tabs[0].id, { file: "utilities.js" }, function (returned_time) {
            //document.getElementById("ptime").innerHTML = returned_time;
        });
    });

}
function pinkF() {//on click rst
    document.getElementById('pink').style.backgroundColor = "red";

}
/*function l11F() {
    var satus = document.getElementById('l11').style.backgroundColor;
    if (satus !== "slateblue") {//星期幾的第幾節
        document.getElementById('l11').style.backgroundColor = "slateblue";
        document.getElementById('l11').innerHTML = "ㄨ";
        document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search("12")+3,"x");//not 1 !!!;need +1
        //console.log(document.getElementById('ptime')..search("12"));

    } else {
        document.getElementById('l11').style.backgroundColor = "lightgray";
        document.getElementById('l11').innerHTML = "口";
        document.getElementById('ptime').innerHTML=document.getElementById('ptime').innerHTML.replaceAt(document.getElementById('ptime').innerHTML.search("12")+3,"s");//not 1 !!!;need +1
    }
}*/
//-------------------------
//bton.fcn
//-------------------------

// adding listener to your button in popup window
//口
//ㄨ
var DEBUG = 1;
var plug0 = ["１", "２", "３", "４", "午", "５", "６", "７", "８"];
var plug1 = "<tr class=\"lesson inChart\" id=\"l0";
var plug2 = "\"><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l_";
var plug3 = "\">";
var plug4 = "</button></td><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l1";
var plug5 = "\">口</button></td><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l2";
var plug6 = "\">口</button></td><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l3";
var plug7 = "\">口</button></td><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l4";
var plug8 = "\">口</button></td><td class=\"weekDay\"><button class=\"mon cellAll\" id=\"l5";
var plug9 = "\">口</button></td></tr>";
var m_pl = "";
for (let index = 0; index < 9; index++) {
    var tmp_str = plug1 + index.toString() + plug2 + index.toString() + plug3 + plug0[index] + plug4 + index.toString() + plug5 + index.toString() + plug6 + index.toString() + plug7 + index.toString() + plug8 + index.toString() + plug9;
    if (DEBUG == 1) {
        console.log(tmp_str);

    }
    m_pl = m_pl + tmp_str;
}
document.getElementById('tableBlank').innerHTML = m_pl;
document.getElementById('pink').addEventListener('click', pinkF);
//document.getElementById('l11').addEventListener('click', l11F);

injectTheScript();

//==========
//add.fcn
//==========
function SHOWudfF() { 
    if (document.getElementById('SATudf').innerText === "ON") { 
        document.getElementById('SATudf').innerText = "OFF";
        document.getElementById('sendSetLogic').innerText=document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("ud")+3,"0");
    }else{
        document.getElementById('SATudf').innerText = "ON";
        document.getElementById('sendSetLogic').innerText=document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("ud")+3,"1");

    }
}
function SHOWmidF() { 
    if (document.getElementById('SATmid').innerText === "ON") { 
        document.getElementById('SATmid').innerText = "OFF";
        document.getElementById('sendSetLogic').innerText=document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("md")+3,"0");
    }else{
        document.getElementById('SATmid').innerText = "ON";
        document.getElementById('sendSetLogic').innerText=document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("md")+3,"1");

    }
}

document.getElementById('SHOWudf').addEventListener('click', SHOWudfF);
document.getElementById('SHOWmid').addEventListener('click', SHOWmidF);

function punchMagicBton() {//init.!
    var timeStrToGo = document.getElementById('ptime').innerHTML.replace(/\s+/g, '').replace(/\r?\n|\r/g, '');
    /*\s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).*/
    var magicCode = "document.getElementById('ExtensionTimeString').innerHTML=\"" + timeStrToGo + "\";";
    var magicSetting = "document.getElementById('ExtensionSetting').innerHTML=\"" + document.getElementById('sendSetLogic').innerHTML + "\";";
    chrome.tabs.query({ active: true }, function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { code: magicCode }, function () {
        });
        chrome.tabs.executeScript(tabs[0].id, { code: magicSetting }, function () {
        });
        chrome.tabs.executeScript(tabs[0].id, { file: "magicBton.js" }, function () {
        });
    });
}
document.getElementById('press').addEventListener('click', punchMagicBton);
