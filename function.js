function next() {
    document.getElementById("Personal").style.display = "none";
    document.getElementById("Location").style.display = "flex";
}
function nextt() {
    document.getElementById("Personal").style.display = "none";
    document.getElementById("Location").style.display= "none";
    document.getElementById("Education").style.display = "flex";
}
function back() {
    document.getElementById("Location").style.display = "none";
    document.getElementById("Personal").style.display = "flex";
}
function backk() {
    document.getElementById("Personal").style.display = "none";
    document.getElementById("Location").style.display= "flex";
    document.getElementById("Education").style.display = "none";
}
function check(){
    if(Personal.innerHTML.valueOf("focus" == "")) {
        alert("Please Input Your Details")
         
    }
    else{
        Personal.style.display = "none";
        education.style.display = "flex";   
    }
}

function checkval(){
    if(education.innerHTML.valueOf("focus" == "")) {
        alert("Please Input Your Details")
    }
}