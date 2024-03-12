const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function obtenerDatosUsuario() {
    const nombreCompleto = document.getElementById("txtNombre").value;
    const email = document.getElementById("email").value;

    console.log("Nombre completo ingresado: " + nombreCompleto);
    console.log("El mail ingresado es: " + email);

    return { nombreCompleto, email };
}

function realizarSorteo() {
    const usuario = obtenerDatosUsuario();
    const textosPremios = [
        "Excelente ganaste 1 shampoo 🧴 ",
        "Buena suerte la próxima vez 🥲",
        "Iajuuu te esperamos para que busques tu pote de nutrición! 😎"
    ];

    const indiceGanador = Math.floor(Math.random() * textosPremios.length);

    mostrarMensaje(usuario, textosPremios[indiceGanador]);

    let sorteo;
    do {
        sorteo = prompt("Ingrese un número del 1 al 3 o ESC para terminar"); 
    } while (sorteo === null || !sorteo.match(/^[1-3]$|^ESC$/i));

    console.log("ESC");
    if (sorteo !== null && sorteo.toUpperCase() === "ESC") {
        mostrarMensaje(usuario, "Te esperamos en otra oportunidad!");
    }

    usuarios.push(usuario);

    const listaUsuarios = document.getElementById("lista-usuarios");
    const nuevoUsuario = document.createElement("li");
    nuevoUsuario.textContent = `${usuario.nombreCompleto} - ${usuario.email}`;
    listaUsuarios.appendChild(nuevoUsuario);

    const btnParticipar = document.getElementById("btn-participar"); 
    btnParticipar.addEventListener("click", realizarSorteo); 

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function mostrarMensaje(usuario, mensaje) {
    const divMensaje = document.createElement("div");
    divMensaje.textContent = `${usuario.nombreCompleto} ${mensaje}`;
    divMensaje.classList.add("mensaje");
    document.body.appendChild(divMensaje);

    setTimeout(() => {
        divMensaje.remove();
    }, 3000);

    if (mensaje.includes("ganaste")) {
        const premio = mensaje.split("ganaste ")[1];
        const divPremio = document.createElement("div");
        divPremio.textContent = `¡Felicidades! Has ganado: ${premio}`;
        divPremio.classList.add("premio");
        document.body.appendChild(divPremio);

        setTimeout(() => {
            divPremio.remove();
        }, 3000);
    }
}

const btnParticipar = document.getElementById("btn-participar"); 
btnParticipar.addEventListener("click", realizarSorteo); 
