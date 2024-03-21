
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(min, max) {
    //Sin incluir max en los valores posibles.
    return Math.floor(Math.random() * (max - min) + min); //retorna un numero = ó menor a su valor proximo a un entero
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);