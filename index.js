function bienvenida() {
    return prompt("Ingrese su nombre para comenzar el sorteo! 😊😍");
}

let nombre = bienvenida();
alert("Bienvenida " + nombre);

let sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");

while (sorteo !== null && sorteo.toUpperCase() !== "ESC") {
    switch (sorteo) {
        case "1":
            console.log(nombre + " Excelente ganaste 1 shampoo 🧴");
            alert(nombre + " Excelente ganaste 1 shampoo 🧴");
            break;
        case "2":
            console.log(nombre + " Buena suerte la próxima vez 😎");
            alert(nombre + " Buena suerte la próxima vez 😎");
            break;
        case "3":
            console.log(nombre + " Iajuuu te esperamos para que busques tu pote de nutrición!🧴");
            alert(nombre + " Iajuuu te esperamos para que busques tu pote de nutrición!🧴");
            break;
        default:
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
