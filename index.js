const usuarios = [];

function obtenerDatosUsuario() {
    const nombreCompleto = prompt("Ingrese su nombre completo para participar en el sorteo:");
    const email = prompt("Ingrese su correo electrónico:");

    console.log("Nombre completo ingresado: " + nombreCompleto);
    console.log("El mail ingresado es: " + email);
    
    return { nombreCompleto, email };
}

function realizarSorteo() {
    const usuario = obtenerDatosUsuario();
    const premiosSorteo = [
        "Excelente ganaste 1 shampoo 🧴",
        "Buena suerte la próxima vez 😎",
        "Iajuuu te esperamos para que busques tu pote de nutrición!🧴"
    ];

    let sorteo = prompt("Ingrese un número del 1 al 3 o ESC para terminar");

    while (sorteo !== null && sorteo.toUpperCase() !== "ESC") {
        const premio = parseInt(sorteo) - 1;
        if (premio >= 0 && premio < premiosSorteo.length) {
            alert(usuario.nombreCompleto + " " + premiosSorteo[premio]);
            console.log(usuario.nombreCompleto + " " + premiosSorteo[premio]);
        } else {
            alert(usuario.nombreCompleto + " Cargá la opción correcta y probá tu suerte 😜");
            console.log("Cargá la opción correcta y probá tu suerte 😜");
        }

        sorteo = prompt("Ingrese un número del 1 al 3 o ESC para terminar");
    }

    console.log("ESC");
    if (sorteo !== null && sorteo.toUpperCase() === "ESC") {
        alert("Te esperamos en otra oportunidad, " + usuario.nombreCompleto + "!");
        console.log("Te esperamos en otra oportunidad, " + usuario.nombreCompleto + "!");
    }

    usuarios.push(usuario);
}

realizarSorteo();
