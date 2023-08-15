

// función principal que toma los valores ingresados por el usuario y devuelve el resultado esperado //
function calcular() {
    var numUNO = document.getElementById("numUNO").value;
    var numDos = document.getElementById("numDos").value;
    var opciones = document.getElementById("opciones").value;

  // función que elimina los campos vacios y en caso de encontrar espacio vacio alerta al usuario, //
  //tambien tomará los carácteres especiales como "vacios" realizando la verificación              // 
  if (numUNO.trim() == "" || numDos.trim() == "") {
      alert("Los campos no pueden estar vacíos o contener carácteres especiales");
      return;
  }


// función para que el usuario pueda elegir la operación //
var resultado;
switch (opciones) {
  case '+':
    resultado = parseFloat(numUNO) + parseFloat(numDos);
    break;
  case '-':
    resultado = parseFloat(numUNO) - parseFloat(numDos);
    break;
  case '*':
    resultado = parseFloat(numUNO) * parseFloat(numDos);
    break;
  case '/':
    // verificación de que el usuario no divída por cero //
    if (numDos == 0 || numUNO == 0) {
      alert("Error: No se puede dividir por cero");
      return;
  }
    resultado = parseFloat(numUNO) / parseFloat(numDos);
    break;
}

        document.getElementById('resultado').value = resultado;
}

// función para resetear los valores ingresados y el resultado obtenido //
function limpiar() {
  document.getElementById("numUNO").value = "";
  document.getElementById("numDos").value = "";
  document.getElementById("opciones").value = "+";
  document.getElementById("resultado").value = "";
}
