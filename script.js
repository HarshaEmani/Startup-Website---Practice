var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//var randomColor = document.getElementsByClassName(".random");

function random() {
    return Math.floor(Math.random() * 256);
}

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function firstLoad(){
    css.textContent = "linear-gradient(to right, red , yellow);"; 
}

function randomColorGenerator(){
    body.style.background = 
    "linear-gradient(to right, rgb(" + random() + "," + random() + "," + random()+ "), rgb(" + random() + "," + random() + "," + random() + "))";
    css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);