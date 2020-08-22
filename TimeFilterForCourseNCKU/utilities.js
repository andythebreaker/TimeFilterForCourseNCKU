var myEle = document.getElementById("ExtensionData");
if (myEle) {
    //var myEleValue= myEle.value;
} else {
    var cpRigtBkup = document.getElementsByClassName("copyright-text")[0].innerHTML;
    var adData1 = "<div id=\"ExtensionData\"> \
    <h5>TimeFilterForCourseNCKU Extension kicked in!</h5> \
    <div id=\"ExtensionTimeString\" style=\"display:none\"></div> \
    <div id=\"ExtensionSetting\" style=\"display:none\"></div> \
    </div>";
    var adData2 = "<div id=\"cpRigtBkup\">";
    var adData3 = "</div>";
    var adData0 = adData1 + adData2 + cpRigtBkup + adData3;
    document.getElementsByClassName("copyright-text")[0].innerHTML = adData0;

}