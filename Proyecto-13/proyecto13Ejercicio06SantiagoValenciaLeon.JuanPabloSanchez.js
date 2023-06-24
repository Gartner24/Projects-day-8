/*EJERCICIO 06 - PROYECTO 13
Ejercicio 06.
Tomado y adaptado de: https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea
Fecha: 2021.04.07
“...El tres en línea, también conocido como ceros y cruces, tres en raya (España, Ecuador y Bolivia), cerito cruz
(en Cuba), michi (en Perú), triqui (en Colombia), cuadritos, juego del gato, gato (en Chile, Costa Rica y México),
tatetí (en Argentina, Paraguay y Uruguay), totito (en Guatemala), triqui traka, equis cero, tic-tac-toe (en Estados
Unidos), o la vieja (en Venezuela), es un juego de lápiz y papel entre dos jugadores: O y X, que marcan los
espacios de un tablero de 3×3 alternadamente.
Ejemplo: Una partida ganada por el primer jugador que tiene las X:

X | O | X
O | X | O
X | O | X

Una partida que termina en empate:

X | O | X
X | O | O
O | X | X

Se pide hacer un programa tal que, permita jugar TRIQUI, tal que funcione así: Al jugador uno(1) se le asignara una “X” y al jugador
dos(2) una “O”.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 06:00 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa permite jugar TRIQUI. jiji
*/
const prompt = require('prompt-sync')();

let triqui = "123456789";
let jugadorActual = 'X';

const imprimirTablero = () => {
  for (let i = 0; i < 3; i++) {
    console.log(triqui.slice(i * 3, (i + 1) * 3).split('').join(' | '));
    if (i < 2) {
      console.log("---------");
    }
  }
};

const realizarJugada = (posicion, jugador) => {
  if (triqui[posicion] !== 'X' && triqui[posicion] !== 'O') {
    triqui = triqui.slice(0, posicion) + jugador + triqui.slice(posicion + 1);
    imprimirTablero();
    if (verificarGanador(jugador)) {
      console.log(`¡Felicidades, jugador ${jugador} ganaste!`);
    } else if (triquiCompleto()) {
      console.log("Empate.");
    } else {
      cambiarJugador();
      solicitarJugada();
    }
  } else {
    console.log("La posición seleccionada está ocupada. Selecciona otra posición.");
    solicitarJugada();
  }
};

const verificarGanador = (jugador) => {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],                                         
    [0, 3, 6], [1, 4, 7], [2, 5, 8],                                         
    [0, 4, 8], [2, 4, 6]                                                      
  ];

  for (const combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (triqui[a] === jugador && triqui[b] === jugador && triqui[c] === jugador) {
      return true;
    }
  }

  return false;
};

const triquiCompleto = () => {
  return !triqui.includes('1') && !triqui.includes('2') && !triqui.includes('3') &&
         !triqui.includes('4') && !triqui.includes('5') && !triqui.includes('6') && 
         !triqui.includes('7') && !triqui.includes('8') && !triqui.includes('9');
};

const cambiarJugador = () => {
  jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';
};

const solicitarJugada = () => {
  const posicion = prompt(`Turno del jugador ${jugadorActual}. Ingrese una posición (1-9): `);
  const numeroPosicion = parseInt(posicion);
  if (numeroPosicion >= 1 && numeroPosicion <= 9) {
    realizarJugada(numeroPosicion - 1, jugadorActual);
  } else {
    console.log("Posición inválida. Elige una posición del 1 al 9.");
    solicitarJugada();
  }
};

console.log("Comienza el juego. El jugador X va primero.");
imprimirTablero();
solicitarJugada();