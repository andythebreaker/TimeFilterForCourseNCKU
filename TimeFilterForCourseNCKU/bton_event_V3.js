function SHF1sw() {
    var satus = document.getElementById('show_SHV_1_stat').innerHTML;
    if (satus === "ON") {
        document.getElementById('show_SHV_1_stat').innerHTML="OFF"
    } else {
        document.getElementById('show_SHV_1_stat').innerHTML="ON"
    }
}
document.getElementById('show_SHV_1').addEventListener('click', SHF1sw);