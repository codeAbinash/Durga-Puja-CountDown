// var fromToTxt = "Dark Rose Software is wishing you";
// if(perm.length>0){
    //     perm = perm.split("&");
    //     fromToTxt = `Hello ${perm[1]}!!!<br> ${perm[0]} is wishing you`;
    //     localStorage.durgaPujaYou = perm[1];
    // }
    // else
    //     alert("<0");

window.addEventListener("load",()=>{
    localStorage.durgaPujaYou = "";
    document.getElementById("dhak").volume=0.3;
    var perm = window.location.search.substr(1);
    var fromToTxt = "Dark Rose Software is wishing you";
    if(perm.length>0){
        perm = perm.split("-");
        fromToTxt = `Hello ${perm[1]} !!!<br> ${perm[0]} is wishing you`;
        localStorage.durgaPujaYou = perm[1];
    }else{
        alert("nothing");
    }

    document.getElementById("fromTo").innerHTML = fromToTxt;
    document.getElementById("yourName").value = localStorage.durgaPujaYou + " (You)";


});
var you = localStorage.durgaPujaYou;
var friend = "";
var link = "";
function setName(n){
    you = n;
    makeLink();
}
function setFriendName(n){
    friend = n;
    makeLink();
}
function makeLink(){
    link ="https://"+ window.location.hostname + "/?"+friend+"-"+you;
    document.getElementById("share").innerHTML = `Share Link to ${friend} <br><br>Click to Copy Link`;
    document.getElementById("hiddenText").value = link;
    document.getElementById("shareWhatsapp").href ="whatsapp://send?text=" + link;
}
function copyLink(){
    var copyText = document.getElementById("hiddenText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}