const button = document.querySelector("#boton-color")
const color = document.getElementById("color")

button.addEventListener('click', applyRandomColor)



// Functions

function generateColorHex(){
    let digits = '0123456789ABCDEF'; // <-- Code Hex Digits
    let colorHex = '#';

    for (let i=0; i < 6; i++){

        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digits[indiceAleatorio];
    }

    return colorHex;

}

function applyRandomColor () {

    let randomColor = generateColorHex();

    // Actualizamos el Texto
    color.textContent = randomColor;

    // Actualizamos el color de fondo
    document.body.style.backgroundColor = randomColor;

}