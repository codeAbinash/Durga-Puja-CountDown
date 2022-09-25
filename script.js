// var fromToTxt = "is wishing you";
// if(perm.length>0){
//     perm = perm.split("&");
//     fromToTxt = `Hello ${perm[1]}!!!<br> ${perm[0]} is wishing you`;
//     localStorage.durgaPujaYou = perm[1];
// }
// else
//     alert("<0");

window.addEventListener("load", () => {
    localStorage.durgaPujaYou = "";
    document.getElementById("dhak").volume = 0.2;
    var perm = window.location.search.substr(1);
    var fromToTxt = "... is wishing you";
    if (perm.length > 0) {
        perm = perm.split("-");
        // Remove Extra space from the names
        perm = [perm[0].trim(), perm[1].trim()];
        fromToTxt = `Hello ${perm[0]} !!!<br> ${perm[1]} is wishing you`;
        localStorage.durgaPujaYou = perm[0];
    } else {
        //alert("nothing");
    }
    window.title = "Happy Durga puja in Advance from " + perm[1];

    document.getElementById("fromTo").innerHTML = fromToTxt;
    document.getElementById("yourName").value = localStorage.durgaPujaYou;

    //Make the Countdown

});
var you = localStorage.durgaPujaYou;
var friend = "";
var link = "";
function setName(n) {
    you = n;
    makeLink();
}
function setFriendName(n) {
    friend = n;
    makeLink();
}
function makeLink() {
    var host = window.location.href.substr(0, window.location.href.indexOf("?"));
    if (host.length == 0)
        host = window.location.href;
    link = host + "?" + friend.trim() + "-" + you.trim();
    document.getElementById("share").innerHTML = `Share Link to ${friend} <br><br>Click to Copy Link`;
    document.getElementById("hiddenText").value = link;
    if (friend.length > 0 && you.length > 0) {
        document.getElementById("shareWhatsapp").href = "whatsapp://send?text=" + link;
    }
}
function copyLink() {
    if (friend.length > 0 && you.length > 0) {
        var copyText = document.getElementById("hiddenText");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Link Copied, now paste it to " + friend);
    } else {
        alert("Enter Your Friend's name & your name")
    }

}


var now = new Date();
var dt = new Date("2 October 2022");
var gap = dt.getTime() - now.getTime();
var day = Math.round(gap / (1000 * 60 * 60 * 24)) + 1;
var numList = "০১২৩৪৫৬৭৮৯";
day = day.toString();
var numStr = "";
for (var i = 0; i < day.length; i++)
    numStr += numList[Number(day[i])];
document.getElementById("left").innerHTML = "আর " + numStr + " দিন"
