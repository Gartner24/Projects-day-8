/*EJERCICIO 09 - PROYECTO 13
Ejercicio 09. Se pide hacer un programa tal que, permita jugar “Ahorcado”, y que funcione así: El juego consiste en
que el jugador, debe adivinar una palabra oculta, que ira construyendo letra a letra, de tal forma que si la letra entrada
no esta dentro de la palabra a adivinar, el jugador ira siendo “ahorcado” mostrando su cuerpo parte por parte. Para
salvarlo es necesario adivinar una palabra, de la cual sólo se conoce su longitud. El jugador debe ir eligiendo letra
por letra, de modo de ir completando la palabra. Si el jugador se equivoca en una letra, es decir, la letra seleccionada
no pertenece a la palabra a adivinar, el personaje pierde alguna parte de su cuerpo (un brazo, una pierna, el tronco,
etc). Se puede jugar hasta que el personaje pierda todo su cuerpo, el último resto de su trágica vida.
Requisitos:
- Se pide crear hasta diez(10) palabras, tal que el programa escoja aleatoriamente una de ellas, para que el jugador la
adivine construyéndola letra por letra.
- Lea cada letra de la palabra, desde el teclado.
- El jugador debe adivinar las letras que pertenecen a la palabra y el programa debe terminar cuando todas las letras
se hayan adivinado o bien se haya cometido un número establecido de desaciertos, es decir, el jugador ha muerto
“ahorcado”.
- El código a nivel de comentario debe contener: El enunciado del problema, el autor, la fecha, un descriptivo de
cada “identificador”(variable) a utilizar(utilice nombres nemotécnicos, que representan para que se utilizan).
- Solo puede utilizar string’s. No puede utilizar arreglos, listas u otro temas no desarrollados en clase hasta el día
de hoy.
- Nótese que las letras son entradas sin utilizar doble comilla.
Ejemplo: Supongamos que: a. Se tomen las siguientes palabras: 1- “ola”. 2-”pollito”.3-“murcielago”. 4-
“universidad”. 5-“pereira”.
b. Que el número aleatorio generado sea el dos(2), esto es que la palabra elegida para este juego sería “pollito”
JUEGO AHORCADO

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
Descripción: Este programa imprime un rectángulo de x caracteres para el ancho, y de y caracteres para la longitud.
*/

const prompt = require('prompt-sync')();

var numeroAleatorio = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//https://chat.openai.com/share/b5c77255-01cd-41d6-a82c-c6662c3d2aa7 Corto
//https://chat.openai.com/share/a74ed019-1af2-417f-a93c-b5cc7d2c8bc3 Largo

var vidas = 7;

let palabraOculta = [];
let letrasIntentadas = [];

const mayuscula = (str) => {
	return str.toUpperCase();
};

const palabras = [
	'PEREIRA',
	'UNIVERSIDAD',
	'PROGRAMACION',
	'SISTEMAS',
	'INGENIERIA',
	'INTELIGENCIA',
	'ARTIFICIAL',
	'TABLERO',
	'COMPUTADOR',
	'EVALUAR',
];

const palabraAleatoria = palabras[numeroAleatorio(0, 10)];

const hacerEspacios = (final) => {
	let espacios = '';
	for (let i = 0; i < final; i++) {
		espacios += ' ';
	}
	return espacios;
};
/*Dibuja muñeco*/

const munequito = (error) => {
	if (error === 7) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '\t' + palabraOculta.join(' '));
		console.log('|');
		console.log('|' + hacerEspacios(4));
		console.log('|');
		console.log('-----');
	} else if (error === 6) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|');
		console.log('|' + hacerEspacios(4));
		console.log('|');
		console.log('-----');
	} else if (error === 5) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(4) + '|');
		console.log('|' + hacerEspacios(4));
		console.log('|');
		console.log('-----');
	} else if (error === 4) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(3) + '/|');
		console.log('|' + hacerEspacios(4));
		console.log('|');
		console.log('-----');
	} else if (error === 3) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(3) + '/|\\' + hacerEspacios(1, 1));
		console.log('|' + hacerEspacios(4));
		console.log('|');
		console.log('-----');
	} else if (error === 2) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(3) + '/|\\' + hacerEspacios(1, 1));
		console.log('|' + hacerEspacios(4) + '|');
		console.log('|');
		console.log('-----');
	} else if (error === 1) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(3) + '/|\\' + hacerEspacios(1, 1));
		console.log('|' + hacerEspacios(4) + '|');
		console.log('|' + hacerEspacios(3) + '/');
		console.log('-----');
	} else if (error === 0) {
		console.log(' JUEGO AHORCADO');
		console.log('+----+');
		console.log('|' + hacerEspacios(4) + '0\t' + palabraOculta.join(' '));
		console.log('|' + hacerEspacios(3) + '/|\\' + hacerEspacios(1, 1));
		console.log('|' + hacerEspacios(4) + '|');
		console.log('|' + hacerEspacios(3) + '/ ' + '\\');
		console.log('-----');
		console.log('FIN DEL JUEGO');
	}
};

const ocultarPalabra = () => {
	for (let i = 0; i < palabraAleatoria.length; i++) {
		palabraOculta[i] = '_';
	}
	return palabraOculta.join(' ');
};

const validarLetraYaIngresada = (letra) => {
	letra = mayuscula(letra);
	let letraYaIngresada = false;

	for (let i = 0; i < letrasIntentadas.length; i++) {
		if (letra == letrasIntentadas[i]) {
			letraYaIngresada = true;
			break;
		}
	}

	if (letraYaIngresada) {
		console.log('Letra ya ingresada');
	} else {
		letrasIntentadas.push(letra);
	}
};

const validarLetra = (letra) => {
	let menosVidas = false;
	for (let i = 0; i < palabraAleatoria.length; i++) {
		if (letra === palabraAleatoria[i]) {
			palabraOculta[i] = letra;
			menosVidas = true;
		}
	}
	if (!menosVidas) {
		vidas--;
	}
	return palabraOculta;
};

const prueba = () => {
	ocultarPalabra();
	while (vidas >= 0) {
		if (palabraOculta.join('') === palabraAleatoria) {
			console.clear();
			console.log('¡Adivinaste la palabra correctamente!');
			break;
		} else {
			console.clear();
			console.log(
				'Las letras ingresadas hasta ahora son: ' + letrasIntentadas
			);
			console.log('vidas = ' + vidas);
			munequito(vidas);
			if (vidas > 0) {
				var letra = prompt('Ingrese una letra: ');
			} else if (vidas == 0) {
				break;
			}
			letra = mayuscula(letra);
			validarLetra(letra);
			validarLetraYaIngresada(letra);
			prompt('Presione enter para continuar');
		}
	}
	if (vidas == 0) {
		console.log('Acabaste todas tus vidas, intentalo otra vez');
		console.log('La palabra a encontrar era: ' + palabraAleatoria);
	}
};

prueba();
