var motherTime = document.getElementById("ExtensionTimeString").innerText.replace(/\s+/g, '').replace(/\r?\n|\r/g, '');
console.log("magic~~~~~");
var tbl = document.getElementsByTagName("table");
var goodTbl = 0;
console.log(tbl[0].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].className);//high risk?
//tbl[0].getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].className[0] === "tr-title"
var totalTR = tbl[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
var toy = tbl[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
console.log("totalTR:" + totalTR);
for (let index = 0; index < totalTR; index++) {
    var txTimeN = toy[index].getElementsByTagName("td")[8].innerText;
    console.log(txTimeN);
    var txTimeA = txTimeN.split("\n");//not scur?
    for (let gothrough = 0; gothrough < txTimeA.length; gothrough++) {
        var txTime = txTimeA[gothrough];

        if ((txTime.search("]") != -1) && (txTime.search("~") != -1)) {//NORM
            var weekInt = txTime.substring((txTime.search("]") - 1), (txTime.search("]")));
            var tmSt = txTime.substring((txTime.search("]") + 1), (txTime.search("]") + 2));
            var tmEd = txTime.substring((txTime.search("~") + 1), (txTime.search("~") + 2));
            console.log(weekInt + ":" + tmSt + "~" + tmEd);
            var headALFB = (tmSt.search(/[0-9]/g) === -1) ? 1 : 0;
            var endALFB = (tmEd.search(/[0-9]/g) === -1) ? 1 : 0;
            if ((headALFB !== 1) && (endALFB !== 1)) {//all int.
                //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2");
                var lengthOfClass = parseInt(tmEd, 10) - parseInt(tmSt, 10) + 1;
                for (let goTHRlengthCLS = 0; goTHRlengthCLS < lengthOfClass; goTHRlengthCLS++) {
                    var currentJS=parseInt(tmSt, 10)+goTHRlengthCLS;
                    //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+currentJS.toString());
                    var mainDAT = document.getElementById('ExtensionTimeString').innerText.substring(document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 3, document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 4);
                    if (mainDAT === "x") {
                        toy[index].style.display = "none";
                    } else {
                        toy[index].style.display = "table-row";
                    }
                }
            } else if ((headALFB === 1) && (endALFB !== 1)) {//headALPH
                if(tmSt==="N"){//start from 5
                    var lengthOfClass = parseInt(tmEd, 10) - 5 + 1;
                    for (let goTHRlengthCLS = 0; goTHRlengthCLS < lengthOfClass; goTHRlengthCLS++) {
                        var currentJS=parseInt(tmSt, 10)+goTHRlengthCLS;
                        var mainDAT = document.getElementById('ExtensionTimeString').innerText.substring(document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 3, document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 4);
                        if (mainDAT === "x") {
                            toy[index].style.display = "none";
                        } else {
                            toy[index].style.display = "table-row";
                        }
                    }
                }else{
                    if (tmSt.search(/[0-9]/g) === -1) {//mid(RE)...no ckeck case 9958
                        var midset = document.getElementById('ExtensionSetting').innerText.substring(document.getElementById('ExtensionSetting').innerText.search("md") + 3, document.getElementById('ExtensionSetting').innerText.search("md") + 4);
                        if (midset === "0") {
                            toy[index].style.display = "none";
                        } else {
                            toy[index].style.display = "table-row";
                        }
                    } else {
                        var mainDAT = document.getElementById('ExtensionTimeString').innerText.substring(document.getElementById('ExtensionTimeString').innerText.search(weekInt + tmSt) + 3, document.getElementById('ExtensionTimeString').innerText.search(weekInt + tmSt) + 4);
                        if (mainDAT === "x") {
                            toy[index].style.display = "none";
                        } else {
                            toy[index].style.display = "table-row";
                        }
                    }
                }
            } else if ((headALFB !== 1) && (endALFB === 1)) {//endALPH
                var lengthOfClass = 8 - parseInt(tmSt, 10) + 1;
                for (let goTHRlengthCLS = 0; goTHRlengthCLS < lengthOfClass; goTHRlengthCLS++) {//end at 8
                    var currentJS=parseInt(tmSt, 10)+goTHRlengthCLS;
                    var mainDAT = document.getElementById('ExtensionTimeString').innerText.substring(document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 3, document.getElementById('ExtensionTimeString').innerText.search(weekInt + currentJS.toString()) + 4);
                    if (mainDAT === "x") {
                        toy[index].style.display = "none";
                    } else {
                        toy[index].style.display = "table-row";
                    }
                }

            } else {//do not do anything

                console.log("too strange!");
            }
        } else if (txTime.search("]") != -1) {//ONLY1
            var weekInt = txTime.substring((txTime.search("]") - 1), (txTime.search("]")));
            var tmSt = txTime.substring((txTime.search("]") + 1), (txTime.search("]") + 2));
            console.log(weekInt + ":" + tmSt);
            if (tmSt.search(/[0-9]/g) === -1) {//mid
                var midset = document.getElementById('ExtensionSetting').innerText.substring(document.getElementById('ExtensionSetting').innerText.search("md") + 3, document.getElementById('ExtensionSetting').innerText.search("md") + 4);
                if (midset === "0") {
                    toy[index].style.display = "none";
                } else {
                    toy[index].style.display = "table-row";
                }
            } else {
                var mainDAT = document.getElementById('ExtensionTimeString').innerText.substring(document.getElementById('ExtensionTimeString').innerText.search(weekInt + tmSt) + 3, document.getElementById('ExtensionTimeString').innerText.search(weekInt + tmSt) + 4);
                if (mainDAT === "x") {
                    toy[index].style.display = "none";
                } else {
                    toy[index].style.display = "table-row";
                }
            }
        } else {//un-def!
            console.log("udf");
            var udfset = document.getElementById('ExtensionSetting').innerText.substring(document.getElementById('ExtensionSetting').innerText.search("ud") + 3, document.getElementById('ExtensionSetting').innerText.search("ud") + 4);

            console.log(udfset);
            if (document.getElementById('ExtensionSetting').innerText.substring(document.getElementById('ExtensionSetting').innerText.search("ud") + 3, document.getElementById('ExtensionSetting').innerText.search("ud") + 4) === "0") {
                toy[index].style.display = "none";
            } else {
                toy[index].style.display = "table-row";
            }
        }
    }

}

