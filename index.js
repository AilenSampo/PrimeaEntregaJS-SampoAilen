let sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");

while (sorteo !== null && sorteo.toUpperCase() !== "ESC") {
    switch (sorteo) {
        case "1":
            console.log("Excelente ganaste 1 shampoo 🧴");
            alert("Excelente ganaste 1 shampoo 🧴");
            break;
        case "2":
            console.log("Buena suerte la próxima vez 😎");
            alert("Buena suerte la próxima vez 😎");
            break;
        case "3":
            console.log("Iajuuu te esperamos para que busques tu pote de nutrición!🧴");
            alert("Iajuuu te esperamos para que busques tu pote de nutrición!🧴");
            break;
        default:
            console.log("Cargá la opción correcta y probá tu suerte 😜");
            alert("Cargá la opción correcta y probá tu suerte 😜");
    }

    sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");
}

if (sorteo !== null && sorteo.toUpperCase() === "ESC") {
    console.log("Te esperamos en otra oportunidad.");
    alert("Te esperamos en otra oportunidad.");
}
