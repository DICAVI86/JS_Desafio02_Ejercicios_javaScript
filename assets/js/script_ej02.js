/* Funcion para sumar la cantidad de Stickers y dar un mensaje al validar la cantidad */

function cantidadStickers() {

const sunCant = parseInt(document.getElementById("sunCant").value);
const cloudCant = parseInt(document.getElementById("cloudCant").value);
const iceCant = parseInt(document.getElementById("iceCant").value);

const sumaStickers = sunCant + cloudCant + iceCant;

if (sumaStickers > 10) {
    document.getElementById("mensaje").innerHTML = "Lo siento, no puedes llevar tantos Stickers"; 
} else if (sumaStickers < 1) {
    document.getElementById("mensaje").innerHTML = "Debes llevar por lo menos un sticker";
} else {
    document.getElementById("mensaje").innerHTML = "Estas llevando " + sumaStickers + " stickers";
}

}









