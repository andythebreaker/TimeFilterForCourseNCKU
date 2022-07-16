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
    if (document.getElementById('pink').style.backgroundColor === "red") {//sat = all X sel.
        document.getElementById('pink').style.backgroundColor = "#ffc0cb";//mk all sel
        var tmp_all_bton = document.querySelectorAll('button');
        for (let index = 0; index < tmp_all_bton.length; index++) {
            const element = tmp_all_bton[index];
            if (element.innerText === "ㄨ") {
                element.click();
            }
        }
    } else {
        document.getElementById('pink').style.backgroundColor = "red";//mk all X sel
        var tmp_all_bton = document.querySelectorAll('button');
        for (let index = 0; index < tmp_all_bton.length; index++) {
            const element = tmp_all_bton[index];
            if (element.innerText === "口") {
                element.click();
            }
        }
    }
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
//<>節次批次</>
var allBT = document.querySelectorAll('button');
for (let index = 0; index < allBT.length; index++) {
    const element = allBT[index];
    if (plug0.includes(element.innerText)) {
        element.addEventListener('click', (e) => {
            var allBTz = document.querySelectorAll('button');
            var preSELbton = [];
            for (let indexz = 0; indexz < allBTz.length; indexz++) {
                const elementz = allBTz[indexz];
                //-------------------------//
                const regex = /[a-zA-Z]([0-9])([0-9])/gm;

                // Alternative syntax using RegExp constructor
                // const regex = new RegExp('[a-zA-Z]([0-9])([0-9])', 'gm')

                const str = elementz.id;//`l12`;
                let m;

                while ((m = regex.exec(str)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    // The result can be accessed through the `m`-variable.
                    m.forEach((match, groupIndex) => {
                        console.log(`Found match, group ${groupIndex}: ${match}`);
                        if (groupIndex === 2) {//節次
                            if (Number(match) >= 0 && Number(match) < plug0.length) {//安全
                                if (plug0[Number(match)] === e.target.innerText) {//篩選
                                    preSELbton.push(elementz.id);
                                }
                            }
                        }
                    });
                }
                //-------------------------//
            }
            //document.getElementById('ZZZZZZZ').innerText = JSON.stringify(preSELbton);
            var kou = 0; var kuu = 0;
            preSELbton.forEach((itm) => {//統計
                kou += document.getElementById(itm).innerText === "口" ? 1 : 0;
                kuu += document.getElementById(itm).innerText === "ㄨ" ? 1 : 0;
            });
            //document.getElementById('ZZZZZZZ').innerText = JSON.stringify({ kuo: kou, kuu: kuu });
            if (kou > kuu) {
                preSELbton.forEach((itm) => {
                    if (document.getElementById(itm).innerText === "ㄨ")
                        document.getElementById(itm).click();
                });
            } else if (kou < kuu) {
                preSELbton.forEach((itm) => {
                    if (document.getElementById(itm).innerText === "口")
                        document.getElementById(itm).click();
                });
            } else {
                preSELbton.forEach((itm) => {
                    if (document.getElementById(itm).innerText === "ㄨ")
                        document.getElementById(itm).click();
                });
            }
            if (kou === 5) {//all O
                preSELbton.forEach((itm) => {
                    if (document.getElementById(itm).innerText === "口")
                        document.getElementById(itm).click();
                });
            }
            if (kuu === 5) {//all x
                preSELbton.forEach((itm) => {
                    if (document.getElementById(itm).innerText === "ㄨ")
                        document.getElementById(itm).click();
                });
            }
        });
    }
}
//<>周次批次</>
var all_W_BT = document.getElementsByClassName('cloumnBash');
for (let index = 0; index < all_W_BT.length; index++) {
    const element = all_W_BT[index];
    element.addEventListener('click', (e) => {
        var allBTz = document.querySelectorAll('button');
        var preSELbton = [];
        for (let indexz = 0; indexz < allBTz.length; indexz++) {
            const elementz = allBTz[indexz];
            //-------------------------//
            const regex = /[a-zA-Z]([0-9])([0-9])/gm;

            // Alternative syntax using RegExp constructor
            // const regex = new RegExp('[a-zA-Z]([0-9])([0-9])', 'gm')

            const str = elementz.id;//`l12`;
            let m;

            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                // The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    console.log(`Found match, group ${groupIndex}: ${match}`);
                    if (groupIndex === 1) {//周次
                        var wnthis = -1;
                        switch (e.target.innerText) {
                            case '一':
                                wnthis = 1;
                                break;
                            case '二':
                                wnthis = 2;
                                break;
                            case '三':
                                wnthis = 3;
                                break;
                            case '四':
                                wnthis = 4;
                                break;
                            case '五':
                                wnthis = 5;
                                break;

                            default:
                                wnthis = 0;
                                break;
                        }

                        if (Number(match) === wnthis)
                            preSELbton.push(elementz.id);


                    }
                });
            }
            //-------------------------//
        }
        //document.getElementById('ZZZZZZZ').innerText = JSON.stringify(preSELbton);
        var kou = 0; var kuu = 0;
        preSELbton.forEach((itm) => {//統計
            kou += document.getElementById(itm).innerText === "口" ? 1 : 0;
            kuu += document.getElementById(itm).innerText === "ㄨ" ? 1 : 0;
        });
        //document.getElementById('ZZZZZZZ').innerText = JSON.stringify({ kuo: kou, kuu: kuu });
        if (kou > kuu) {
            preSELbton.forEach((itm) => {
                if (document.getElementById(itm).innerText === "ㄨ")
                    document.getElementById(itm).click();
            });
        } else if (kou < kuu) {
            preSELbton.forEach((itm) => {
                if (document.getElementById(itm).innerText === "口")
                    document.getElementById(itm).click();
            });
        } else {
            preSELbton.forEach((itm) => {
                if (document.getElementById(itm).innerText === "ㄨ")
                    document.getElementById(itm).click();
            });
        }
        if (kou > 7) {//all O
            preSELbton.forEach((itm) => {
                if (document.getElementById(itm).innerText === "口")
                    document.getElementById(itm).click();
            });
        }
        if (kuu > 7) {//all x
            preSELbton.forEach((itm) => {
                if (document.getElementById(itm).innerText === "ㄨ")
                    document.getElementById(itm).click();
            });
        }
    });
}

injectTheScript();

//==========
//add.fcn
//==========
function SHOWudfF() {
    if (document.getElementById('SATudf').innerText === "ON") {
        document.getElementById('SATudf').innerText = "OFF";
        document.getElementById('sendSetLogic').innerText = document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("ud") + 3, "0");
    } else {
        document.getElementById('SATudf').innerText = "ON";
        document.getElementById('sendSetLogic').innerText = document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("ud") + 3, "1");

    }
}
function SHOWmidF() {
    if (document.getElementById('SATmid').innerText === "ON") {
        document.getElementById('SATmid').innerText = "OFF";
        document.getElementById('sendSetLogic').innerText = document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("md") + 3, "0");
    } else {
        document.getElementById('SATmid').innerText = "ON";
        document.getElementById('sendSetLogic').innerText = document.getElementById('sendSetLogic').innerText.replaceAt(document.getElementById('sendSetLogic').innerText.search("md") + 3, "1");

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
