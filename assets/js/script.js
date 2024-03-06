// 1.Solicitar al usuario las veces que desea que se repita el juego contra la computadora
let cantidadDeJugadas = parseInt(prompt("¿Cuántas veces deseas jugar al CACHIPÚN?"));


for (let i = 0; i < cantidadDeJugadas ; i++) {

   // 2.Solicitar al usuario que indique su jugada y si la respuesta no es válida, seguirá pidiendo una respuesta
   let jugadaUsuario;
   let jugadaValida = false;
   
   while (jugadaValida === false) {
      jugadaUsuario = prompt("Elige: piedra, papel o tijera");
      if (jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijera") {
         jugadaValida = true;
      } else {
         alert("Respuesta INCORRECTA, elija una opción válida: piedra, papel o tijera");
      }
   }
   
   // 3.Obtener la jugada de la máquina segun función generada
   let jugadaMaquina = jugarContraLaMaquina();
   
   // 4.Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina
   // 5.Indicar el resultado de la partida dependiendo del caso
   let resultado;
   if (
      (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
      (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
      (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
   ) {
      resultado = "<h4>¡Felicidades GANASTE!</h4>";
   } else if (jugadaUsuario === jugadaMaquina) {
      resultado = "<h5>EMPATE, que aburrido!</h5>";
   } else {
      resultado = "<h4>¡PERDISTE contra la máquina!</h4>";
   }


   document.write(`Resultado ${i + 1}: Tú elegiste "${jugadaUsuario}", la computadora eligió "${jugadaMaquina}". ${resultado}<br>`);
}


// 3.Función para generar una jugada automática para la máquina usando la función Math.random()
function jugarContraLaMaquina() {
   let jugadaAutomatica = Math.floor(Math.random() * 3);
   switch (jugadaAutomatica) {
      case 0:
         return "piedra";
      case 1:
         return "papel";
      case 2:
         return "tijera";
   }
}




