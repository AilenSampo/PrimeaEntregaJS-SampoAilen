function bienvenida() {
    return prompt("Ingrese su nombre para comenzar el sorteo! 😊😍");
}

    let nombre = bienvenida();
    alert("Bienvenida " + nombre);

const premiosSorteo = [
    "Excelente ganaste 1 shampoo 🧴",
    "Buena suerte la próxima vez 😎",
    "Iajuuu te esperamos para que busques tu pote de nutrición!🧴"
];

let sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");

    while (sorteo !== null && sorteo.toUpperCase() !== "ESC") {
        const premio = parseInt(sorteo) - 1;
        if (premio >= 0 && premio < premiosSorteo.length) {
            console.log(nombre + " " + premiosSorteo[premio]);
            alert(nombre + " " + premiosSorteo[premio]);
        } else {
            console.log("Cargá la opción correcta y probá tu suerte 😜");
            alert(nombre + " Cargá la opción correcta y probá tu suerte 😜");
        }

        sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");
    }

    console.log("ESC");
    
    if (sorteo !== null && sorteo.toUpperCase() === "ESC") {
        console.log("Te esperamos en otra oportunidad.");
        alert("Te esperamos en otra oportunidad.");
    }
