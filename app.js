let numeroSecreto = 0;
let intentos = 0;
let lsitaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento () {
    
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    console.log (intentos);
    if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento ('p', `acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez': 'veces'}`); 
       document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','el numero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'el numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja ();
    }

}

function limpiarCaja () {
    let valorCaja = document.querySelector ('#valorUsuario');
    valorCaja.value = '';
}
    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (lsitaNumerosSorteados);
    //si ya sorteamos todos los nuneros 
    if (lsitaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'ya te sortearon todos los numeros posibles');
    } else {
    //si el numero generado esta incluido en la lista

      if (lsitaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
      } else {
        lsitaNumerosSorteados.push(numeroGenerado);
      }
      return numeroGenerado;
    }
}

function condicionesIniciales () {
    asignarTextoElemento ('h1', 'Juego del numero secreto');
    asignarTextoElemento ('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego () {
    // limpiar la caja
    limpiarCaja ();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales ();
    //generar el numero aleatorio
    //inicializar el numero de intentos
    //desabilitar el boton de nuevo juego

    document.querySelector ('#reiniciar').setAttribute ('disabled', 'true');

}

condicionesIniciales ();
