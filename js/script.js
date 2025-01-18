const whiteLamp = document.getElementById("white_lamp");

const yellowLamp = document.getElementById("yellow_lamp");

const button = document.getElementById("btn");

button.addEventListener("click", function changeImage() {

    yellowLamp.className = "show";

    whiteLamp.className = "hide";

});