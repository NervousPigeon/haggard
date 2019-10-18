var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background+ ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

var snitch = 69;
console.log(0, snitch);

function takeshi() {
    snitch = 63;
    console.log(1,snitch);
    var snitch = 57;
    console.log(2,snitch);
}
takeshi();
console.log(3,snitch);