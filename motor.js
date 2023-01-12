var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
var blenderSound = document.getElementById("blender_sound");
var blenderBtn = document.getElementById("btn_sound");
function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        Brr();
        licuadora.classList.add("active");
        console.log("Me prendiste");
    } else {
        estadoLicuadora = "apagada";
        Brr();
        licuadora.classList.remove("active");
        console.log("Me apagaste");
    }   
}
function Brr(){
    if(blenderSound.paused){
        blenderBtn.play();
        blenderSound.play();
    } else {
        blenderBtn.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}
