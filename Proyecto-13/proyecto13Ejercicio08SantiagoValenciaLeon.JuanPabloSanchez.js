/*EJERCICIO 08 - PROYECTO 13
Ejercicio 08. Se pide construir un algoritmo, tal que permita jugar a un(1) jugador, el juego de memoria llamado
concéntrese (memorama) El juego consiste en “recordar” sobre la pantalla, donde están las parejas de letras, ocultas
bajo el número del recuadro sobre el que este. Para nuestro ejercicio, serían cuatro(4) parejas.

- Se debe utilizar cadenas de caracteres (string) y las funciones que permiten su manejo.
- Defina una cadena inicial, luego aplique un algoritmo que altere el orden aleatoriamente de la posición de los
caracteres y juegue con estos. Ejemplo:

Cadena inicial      Cadena modificada aleatoriamente
& & + + @ @ * *      & * + & @ + * @
Supongamos que en memoria, tenemos, una cadena de caracteres(string) de ocho(8) posiciones, donde están las
parejas, que el usuario debe “destapar”. Ejemplo:
& * + & @ + * @
1 2 3 4 5 6 7 8

Es decir:
Pareja 01: es el recuadro 1 y el recuadro 4
Pareja 02: es el recuadro 2 y el recuadro 7
Pareja 03: es el recuadro 3 y el recuadro 6
Pareja 04: es el recuadro 5 y el recuadro 8
Si tuviéramos estos datos en la memoria del ordenador, juguemos con un ejemplo:
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
1 2 3 4 5 6 7 8
Entre primera opción: 1
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
& 2 3 4 5 6 7 8
Entre segunda opción: 6

JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
& 2 3 4 5 + 7 8
Desea continuar(s/n) : s
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
1 2 3 4 5 6 7 8
Entre primera opción:

Se destapa la casilla uno(1), mostrando la letra oculta.

Se destapa la casilla seis(6), mostrando la letra oculta.

Como las letras de las casillas destapadas no coinciden, no se completa la pareja y se ocultan nuevamente las letras a
memorizar o recordar.

JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
1 2 3 4 5 6 7 8
Entre primera opción: 3
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
1 2 + 4 5 6 7 8
Entre segunda opción: 3
Casilla ya jugada
Entre segunda opción: 6
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 0
1 2 + 4 5 + 7 8
Desea continuar(s/n) : s
JUEGO CONCENTRESE (MEMORAMA) Número de parejas = 1
1 2 + 4 5 + 7 8
Entre primera opción:

Se destapa la casilla tres(1), mostrando la letra oculta.
Aquí al teclear como segunda opción la casilla tres(3) que ya
fue jugada, debe advertirlo y permitirle entrar nuevamente la segunda opción.

Se destapa la casilla seis(6), mostrando la letra oculta.

Al haber coincidido que la letra oculta de la casilla tres(3) es
igual al de la casilla seis(6), se incrementa el número de
parejas, se dejan destapadas estas casilla y se sigue jugando.

El juego acaba cuando se completen las cuatro(4) parejas ó cuando a el jugador se le pregunte ” Desea
continuar(s/n):” y él teclee n

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
Descripción: Este programa permite jugar a un(1) jugador, el juego de memoria llamado concéntrese (memorama)
*/

var prompt = require('prompt-sync')();

let parejasOriginal = '&&++@@**';

let ocultaParejas = '12345678';

let parejasAleatorias = '        ';

const MezclarParejas = (contador, final) => {
	let random = Math.floor(Math.random() * 8);
	if (contador < final) {
		if (parejasAleatorias[random] === ' ') {
			parejasAleatorias =
				parejasAleatorias.slice(0, random) +
				parejasOriginal[contador] +
				parejasAleatorias.slice(random + 1);
			MezclarParejas(contador + 1, final);
		} else {
			MezclarParejas(contador, final);
		}
	}
};

MezclarParejas(0, 8);

const VerificarNumero = (numero) => {
	let ocultaParejasAux = '12345678';
	if (typeof numero === 'number') {
		if (numero <= 8) {
			if (ocultaParejas[numero - 1] === ocultaParejasAux[numero - 1]) {
				return numero;
			} else {
				console.log(
					'\nEl número ya fue elegido, por favor digita otro número: '
				);
				return VerificarNumero(Number(prompt()));
			}
		} else {
			console.log(
				'\nEl número ingresado debe estar entre 1 y 8, por favor digita otro número: '
			);
			return VerificarNumero(Number(prompt()));
		}
	} else {
		console.log(
			'\nEl valor ingresado debe ser un número entre 1 y 8, por favor digita otro número: '
		);
		return VerificarNumero(Number(prompt()));
	}
};

const ImprimirCaracteres = (contador, final) => {
	if (contador <= final) {
		process.stdout.write(` ${ocultaParejas[contador]} │`);
		ImprimirCaracteres(contador + 1, final);
	}
};

const ImprimirOcuParejas = (contador, final, finalref) => {
	if (contador <= final) {
		process.stdout.write('\n┌───┬───┬───┬───┬───┬───┬───┬───┐\n│');
		ImprimirCaracteres(contador, finalref);
		console.log('\n└───┴───┴───┴───┴───┴───┴───┴───┘');
	}
};

const SeguirJugando = (parejas) => {
	console.log('\n\nDeseas continuar (s/n): ');
	let opcion = prompt();
	if (opcion === 's') {
		if (parejas === 4) {
			console.log(
				'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' + parejas
			);
			ImprimirOcuParejas(0, 7, 7);
			console.log(
				'\nHas logrado adivinar el total de parejas, gracias por jugar'
			);
		} else {
			EmpezarJuego(parejas);
		}
	} else if (opcion === 'n') {
		console.log(
			'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' + parejas
		);
		ImprimirOcuParejas(0, 7, 7);
		console.log('\nGracias por jugar');
	} else {
		SeguirJugando(parejas);
	}
};

const MostrarPareja = (numero1, numero2, numParejas) => {
	let ocultaParejasAux = '12345678';
	if (ocultaParejas[numero1] === ocultaParejas[numero2]) {
		SeguirJugando(numParejas + 1);
	} else {
		ocultaParejas =
			ocultaParejas.slice(0, numero1) +
			ocultaParejasAux[numero1] +
			ocultaParejas.slice(numero1 + 1);
		ocultaParejas =
			ocultaParejas.slice(0, numero2) +
			ocultaParejasAux[numero2] +
			ocultaParejas.slice(numero2 + 1);
		SeguirJugando(numParejas);
	}
};

const EmpezarJuego = (numeroParejas) => {
	console.log(
		'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' + numeroParejas
	);
	ImprimirOcuParejas(0, 7, 7);
	console.log('\nEntre la primera opción: ');
	let primeranumero = VerificarNumero(Number(prompt())) - 1;
	ocultaParejas =
		ocultaParejas.slice(0, primeranumero) +
		parejasAleatorias[primeranumero] +
		ocultaParejas.slice(primeranumero + 1);
	console.log(
		'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' + numeroParejas
	);
	ImprimirOcuParejas(0, 7, 7);
	console.log('\nEntre la segunda opción: ');
	let segundanumero = VerificarNumero(Number(prompt())) - 1;
	ocultaParejas =
		ocultaParejas.slice(0, segundanumero) +
		parejasAleatorias[segundanumero] +
		ocultaParejas.slice(segundanumero + 1);
	console.log(
		'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' + numeroParejas
	);
	ImprimirOcuParejas(0, 7, 7);
	if (numeroParejas === 3) {
		console.log(
			'\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: ' +
				(numeroParejas + 1)
		);
		ImprimirOcuParejas(0, 7, 7);
		console.log(
			'\nHas logrado adivinar el total de parejas, gracias por jugar'
		);
	} else {
		MostrarPareja(primeranumero, segundanumero, numeroParejas);
	}
};

EmpezarJuego(0);
