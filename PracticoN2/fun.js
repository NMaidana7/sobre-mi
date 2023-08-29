
// Variables principales

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";


// Función para obtener jugada al azar de la computadora

function obtenerJugadaComputadora() {
  let opciones = [PIEDRA, PAPEL, TIJERAS];
  let indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

// Función para determinar ganador

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  let resultado;
  if (jugadaComputadora === jugadaUsuario) {
    resultado = "Empate";
  } else if (
    (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) ||
    (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
    (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)
  ) {
    resultado = "Gana la computadora";
  } else {
    resultado = "Gana el usuario";
  }
  return resultado;
}

// Selección y asignación para variables desde HTML

let piedraBtn = document.getElementById("piedra");
let papelBtn = document.getElementById("papel");
let tijerasBtn = document.getElementById("tijeras");
let reiniciarBtn = document.getElementById("reiniciar");
let iniciarBtn = document.getElementById("iniciar");
let nombreUsuarioInput = document.getElementById("numUNO");
let jugadaUsuarioElem = document.getElementById("jugada-usuario");
let jugadaComputadoraElem = document.getElementById("jugada-computadora");
let resultadoElem = document.getElementById("resultado");

// Habilitar botones
piedraBtn.disabled = true;
papelBtn.disabled = true;
tijerasBtn.disabled = true;


// Asignación de funciones al realizar click en los botones
piedraBtn.addEventListener("click", function() {
  jugar(PIEDRA);
});
papelBtn.addEventListener("click", function() {
  jugar(PAPEL);
});
tijerasBtn.addEventListener("click", function() {
  jugar(TIJERAS);
});
reiniciarBtn.addEventListener("click", reiniciar);
iniciarBtn.addEventListener("click", function() {
  // Obtener el valor del campo de entrada donde el usuario ingresa su nombre
  let nombreUsuario = nombreUsuarioInput.value;
  
  // Verificar si el campo de entrada está vacío
  if (nombreUsuario.trim() === "") {
    // Mostrar un mensaje de error al usuario
    alert("Por favor ingresa tu nombre antes de iniciar el juego");
  } else {
    // Iniciar el juego
    nombreUsuarioInput.disabled = true;
    piedraBtn.disabled = false;
    papelBtn.disabled = false;
    tijerasBtn.disabled = false;
  }
});


// Variables para el contador 
let victoriasComputadora = 0;
let victoriasUsuario = 0;
let rondasJugadas = 0;

function jugar(jugadaUsuario) {
  let jugadaComputadora = obtenerJugadaComputadora();
  
  // Obtener el valor del campo de entrada donde el usuario ingresa su nombre
  let nombreUsuario = nombreUsuarioInput.value;
  
  // Actualizar el texto en la página con el nombre del usuario
  let jugadaUsuarioElemParentNodeTextContentArray= jugadaUsuarioElem.parentNode.textContent.split(":")
  
  jugadaUsuarioElem.parentNode.firstChild.textContent= jugadaUsuarioElemParentNodeTextContentArray[0].replace('Jugada del usuario', 'Jugada de ' + nombreUsuario) + ": ";
  
  jugadaUsuarioElem.textContent = jugadaUsuario;
  jugadaComputadoraElem.textContent = jugadaComputadora;
  
  let resultadoJuego = determinarGanador(jugadaComputadora, jugadaUsuario);
  
  if (resultadoJuego === "Gana la computadora") {
    victoriasComputadora++;
  } else if (resultadoJuego === "Gana el usuario") {
    victoriasUsuario++;
  }

  document.getElementById("marcador").textContent = nombreUsuario + ": " + victoriasUsuario + " - Computadora: " + victoriasComputadora;
  
  rondasJugadas++;
  
  // Funcion para las 5 rondas o las 3 victorias en rondas
  if (victoriasComputadora === 3 || victoriasUsuario === 3 || rondasJugadas === 5) {
    if (victoriasComputadora > victoriasUsuario) {
      resultadoElem.textContent = "La computadora gana el juego";
    } else if (victoriasUsuario > victoriasComputadora) {
      resultadoElem.textContent = nombreUsuario + " gana el juego";
    } else {
      resultadoElem.textContent = "El juego termina en empate";
    }
    
  
    piedraBtn.disabled = true;
    papelBtn.disabled = true;
    tijerasBtn.disabled = true;
    
    reiniciarBtn.disabled = false;
    
    return;
  }
  
  resultadoElem.textContent = resultadoJuego;
}

// Función que reinicia el juego

function reiniciar() {
  victoriasComputadora = 0;
  victoriasUsuario = 0;
  rondasJugadas = 0;
  
  piedraBtn.disabled = false;
  papelBtn.disabled = false;
  tijerasBtn.disabled = false;
  
  reiniciarBtn.disabled = true;

}