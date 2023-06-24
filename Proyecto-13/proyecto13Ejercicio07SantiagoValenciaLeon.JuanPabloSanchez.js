/*EJERCICIO 07 - PROYECTO 13
Ejercicio 07. Resonancia magnética
La resonancia magnética es una técnica de diagnóstico por imagen en la que se obtiene información de las
características de diferentes puntos del cuerpo a partir de su respuesta a un campo magnético variable. Supongamos
que tenemos una matriz tridimensional de puntos que representa una imagen adquirida por este método, en el que
cada punto tiene un valor entre 0 y 255, correspondiente a un distinto nivel de gris.
La imagen será́ como la de un cuaderno de 100 hojas, donde cada hoja tendrá una cuadricula de 100 x 100 puntos,
esto es que genera un arreglo de 100 planos (fotografías) en Z(0,1,2,3,4...99)
Se quiere escribir un programa que permita detectar aspectos en la imagen que pueden ser indicadores de una
enfermedad. Como no tenemos los datos que generaría la máquina de “Resonancia magnética”, genere usted el
arreglo con datos aleatorios entre [0 y 255] para probar sus funciones. Para ello se pide:

1. Escribir una función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z) ,
detecte si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano
superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.
Debe imprimirse las siguientes imágenes para este punto;
En este caso, para este ejemplo. Este punto NO ES SOSPECHOSO

2. Se pide escribir una función que, para un determinado plano de la imagen, busque líneas sospechosas. Se
considera una línea sospechosa toda línea HORIZONTAL (paralelas al eje X) en la que haya al menos tres(3) puntos
sospechosos consecutivos, para esto se pide que imprima el plano(fotografía, en modo gráfico); ejemplo:
Ejemplo: Fotografía en el plano Z=37

3. Escribir un programa que emplee las funciones anteriormente descritas para identificar en una imagen si hay alguna línea sospechosa y genere el siguiente informe

Plano en Z(Fotografía) Líneas sospechosas x plano(foto) Puntos sospechosos por plano(foto)
1 0 7
2 3 25
3 0 16
........ .... .....
97 0 4
98 1 5
Los valores de todos los elementos de la matriz se supondrán ya cargados en memoria (no es necesario leerlos). En
caso de que existan líneas sospechosas en la imagen, el programa mostrará en qué plano hay más líneas sospechosas
(servirá para saber en qué lugar es mejor hacer una biopsia).

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
Descripción: Este programa permite detectar aspectos en la imagen que pueden ser indicadores de una enfermedad.
*/
let prompt = require('prompt-sync')(); //Se importa la librería prompt-sync
let resonancia = []; //Se crea un arreglo vacío, para ir agregando por cola

const generarNumeroAleatorio = () => {
  var probabilidad = Math.random();
  var numero;

  if (probabilidad <= 0.05) {
    // Generar número entre 0 y 20
    numero = Math.floor(Math.random() * 21);
  } else if (probabilidad > 0.15 && probabilidad <= 0.95) {
    // Generar número entre 20 y 40
    numero = Math.floor(Math.random() * 21) + 20;
  } else {
    // Generar número entre 40 y 250
    numero = Math.floor(Math.random() * 211) + 40;
  }

  return numero;
};


const crearResonancia = (contador) => {
	if (contador < 1000) {
		resonancia.push(generarNumeroAleatorio()); //(AQUÍ SE MODIFICA PROBABILIDAD)Se recomienda modificar el rango de aleatoriedad para ver el programa en acción, a 60
		crearResonancia(contador + 1); //Se llama a la función recursivamente, aumentando el contador
	} else {
		console.log(resonancia); //Se imprime el arreglo
	} //Función que rellena el arreglo "resonancia", en este caso al ser un arreglo,
}; //no es necesario convertir los números a carácteres ASCCI, ya que se guarda el número entero.
crearResonancia(0); //Se llena el arreglo de valores
/*  PUNTOS SOSPECHOSOS:
PARTE 1 DEL EJERCICIO.
Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.
*/
const puntoSospechoso = (x, y, z) => {
	let posicion = z * 100 + y * 10 + x; //Se calcula la posición del punto en el arreglo
	if (
		x === 0 || //si está en la periferia, no lo toma en cuenta
		x === 9 ||
		y === 0 ||
		y === 9 ||
		z === 0 || //ó , or
		z === 9
	) {
		return false; //Aqui se descarta la periferia
	} else if (

		resonancia[posicion - 111] >= 20 && //la misma posición/----Plano z - 1
		resonancia[posicion - 111] <= 40 && //x-1, y-1, z-1
		resonancia[posicion - 110] >= 20 && //x==, y-1, z-1
		resonancia[posicion - 110] <= 40 && //x==, y-1, z-1
		resonancia[posicion - 110] >= 20 && //x==, y-1, z-1
		resonancia[posicion - 110] <= 40 && //x==, y-1, z-1
		resonancia[posicion - 109] >= 20 && //x+1, y-1, z-1
		resonancia[posicion - 109] <= 40 && //x+1, y-1, z-1
		resonancia[posicion - 101] >= 20 && //x-1, y==, z-1
		resonancia[posicion - 101] <= 40 && //x-1, y==, z-1
		resonancia[posicion - 100] >= 20 && //x==, y==, z-1
		resonancia[posicion - 100] <= 40 && //x==, y==, z-1
		resonancia[posicion - 99] >= 20 && //x+1, y==, z-1
		resonancia[posicion - 99] <= 40 && //x+1, y==, z-1
		resonancia[posicion - 91] >= 20 && //x-1, y+1, z-1
		resonancia[posicion - 91] <= 40 && //x-1, y+1, z-1
		resonancia[posicion - 90] >= 20 && //x==, y+1, z-1
		resonancia[posicion - 90] <= 40 && //x==, y+1, z-1
		resonancia[posicion - 89] >= 20 && //x+1, y+1, z-1
		resonancia[posicion - 89] <= 40 && //x+1, y+1, z-1
		resonancia[posicion - 11] >= 20 && //x-1, y-1, z==/----Igual plano z
		resonancia[posicion - 11] <= 40 && //x-1, y-1, z==
		resonancia[posicion - 10] >= 20 && //x==, y-1, z==
		resonancia[posicion - 10] <= 40 && //x==, y-1, z==//EL MISMO PUNTO SE EXCLUYE; POR ESO NO SE INCLUYE
		resonancia[posicion - 9] >= 20 && //x+1, y-1, z==
		resonancia[posicion - 9] <= 40 && //x+1, y-1, z==
		resonancia[posicion - 1] >= 20 && //x-1, y==, z==
		resonancia[posicion - 1] <= 40 && //x-1, y==, z==
		resonancia[posicion + 1] >= 20 && //x+1, y==, z==
		resonancia[posicion + 1] <= 40 && //x+1, y==, z==
		resonancia[posicion + 9] >= 20 && //x-1, y+1, z==
		resonancia[posicion + 9] <= 40 && //x-1, y+1, z==
		resonancia[posicion + 10] >= 20 && //x==, y+1, z==
		resonancia[posicion + 10] <= 40 && //x==, y+1, z==
		resonancia[posicion + 11] >= 20 && //x+1, y+1, z==
		resonancia[posicion + 11] <= 40 && //x+1, y+1, z==/----Igual plano z
		resonancia[posicion + 89] >= 20 && //x-1, y-1, z+1/PLANO Z + 1
		resonancia[posicion + 89] <= 40 && //x-1, y-1, z+1
		resonancia[posicion + 90] >= 20 && //x==, y-1, z+1
		resonancia[posicion + 90] <= 40 && //x==, y-1, z+1
		resonancia[posicion + 91] >= 20 && //x+1, y-1, z+1
		resonancia[posicion + 91] <= 40 && //x+1, y-1, z+1
		resonancia[posicion + 99] >= 20 && //x-1, y==, z+1
		resonancia[posicion + 99] <= 40 && //x-1, y==, z+1
		resonancia[posicion + 100] >= 20 && //x==, y==, z+1
		resonancia[posicion + 100] <= 40 && //x==, y==1, z+1
		resonancia[posicion + 101] >= 20 && //x+1, y==, z+1
		resonancia[posicion + 101] <= 40 && //x+1, y==, z+1
		resonancia[posicion + 109] >= 20 && //x-1, y+1, z+1
		resonancia[posicion + 109] <= 40 && //x-1, y+1, z+1
		resonancia[posicion + 110] >= 20 && //x==, y+1, z+1
		resonancia[posicion + 110] <= 40 && //x==, y+1, z+1
		resonancia[posicion + 111] >= 20 && //x+1, y+1, z+1
		resonancia[posicion + 111] <= 40 //x+1, y+1, z+1/FIN PLANO Z + 1
	) {
		return true; //Aqui detecta si un punto evaluead es sospechoso, para ello evalua todas las posiciones adyacentes a ver si estan lo valores establecidos
	} else {
		return false; //De otra forma lo descarta
	}
};
/* Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.*/
const contarPuntosSospechosos = (z) => {
	//Funcion para contar de puntos sospechosos
	/**
	 * @param {*} arreglo Resonancia
	 * @param {*} contador Posicin a evaluar
	 * @param {*} final Posicion de parada
	 * @param {*} puntos Contador de putnos sospechosos
	 * @returns
	 */
	const contar = (arreglo, contador, final, puntos) => {
		if (contador > final) {
			//Se verifica que no este en la ultima posicion
			return puntos; //Se retorna el resultado
		} else {
			if (
				puntoSospechoso(
					contador % 10, // punto x
					Math.trunc(contador / 10) % 10, // punto y
					Math.trunc(contador / 100) + 1 // punto z
				)
			) {
				return contar(arreglo, contador + 1, final, puntos + 1); //Se llama a la funcion contar
			} else {
				return contar(arreglo, contador + 1, final, puntos); //Se llama a la funcion contar
			}
		}
	};
	let resultado = contar(resonancia, 100 * (z - 1), 100 * z, 0); //Se llama a la funcion contar
	return resultado; //Se retorna el resultado
};
console.log(puntoSospechoso(1, 1, 1));
contarPuntosSospechosos(1);
//  LÍNEAS SOSPECHOSAS:
// /* Función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z),
// detecta si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
// tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano superior).
// Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.*/

// ;PARTE 2 DEL EJERCICIO.
// ;Función que, para un determinado plano de la imagen, busque líneas sospechosas.
// ;Se considera una línea sospechosa toda línea HORIZONTAL (paralelas al eje X) en la que haya al menos tres(3) puntos
// ;sospechosos consecutivos, para esto se pide que imprima el plano (fotografía, en modo gráfico) y que marque con un
/**
 * @param {*} z Plano
 * @param {*} contador Posicion
 * @param {*} lineas  Contador de lineas
 * @param {*} puntosSospechososSeguidos //Contador de púntos sospechosos
 * @returns
 */
const contarLineasSospechosas = (
	z,
	contador = 0,
	lineas = 0,
	puntosSospechososSeguidos = 0
) => {
	const x = contador % 10; //Se obtienen las coordenadas del punto
	const y = Math.floor(contador / 10) % 10; //Se obtienen las coordenadas del punto
	const puntoSospechosoActual = puntoSospechoso(
		x,
		y,
		Math.floor(contador / 100) + 1
	); //Se evalua si el punto es sospechoso
	if (contador >= 100 * z - 1) {
		return lineas; //Se retorna el numero de lineas sospechosas
	} else if (puntoSospechosoActual) {
		puntosSospechososSeguidos++; //Se aumenta el contador de puntos sospechosos
		if (puntosSospechososSeguidos >= 3) {
			if (puntosSospechososSeguidos > 3) {
				return contarLineasSospechosas(
					z,
					contador + 1,
					lineas,
					puntosSospechososSeguidos
				); //Se llama a la funcion contar lineas sospechosas
			} else {
				return contarLineasSospechosas(
					z,
					contador + 1,
					lineas + 1,
					puntosSospechososSeguidos
				); //Se llama a la funcion contar lineas sospechosas
			}
		} else {
			return contarLineasSospechosas(
				z,
				contador + 1,
				lineas,
				puntosSospechososSeguidos
			); //Se llama a la funcion contar lineas sospechosas
		}
	} else {
		puntosSospechososSeguidos = 0;
		return contarLineasSospechosas(
			z,
			contador + 1,
			lineas,
			puntosSospechososSeguidos
		); //Se llama a la funcion contar lineas sospechosas
	}
};

//Ayudame a arreglar la función de imprimir lineas, no está tomando todos los puntos sospechos
const imprimirLineas = (Z) => {
	const imprimir = (arreglo, contador, final, cont2) => {
		//Funcion para imprimir lineas
		if (contador < final) {
			if (
				//Se evalua si el punto es sospechoso
				contador > 2 &&
				contador % 10 === 0 && //se modifica por 10, debido a que el tamaño de los planos cambia
				((puntoSospechoso(
					(contador + 2) % 10,
					Math.floor((contador + 2) / 10) % 10,
					Math.floor((contador - 2) / 100) + 1
				) && //Se evalua si el punto es sospechoso
					puntoSospechoso(
						(contador + 1) % 10,
						Math.floor((contador + 1) / 10) % 10,
						Math.floor((contador - 1) / 100) + 1
					) && //Se evalua si el punto es sospechoso
					puntoSospechoso(
						contador % 10,
						Math.floor(contador / 10) % 10,
						Math.floor(contador / 100) + 1
					)) || //Se evalua si el punto es sospechoso
					(puntoSospechoso(
						(contador - 1) % 10,
						Math.floor((contador - 1) / 10) % 10,
						Math.floor((contador - 1) / 100) + 1
					) &&
						puntoSospechoso(
							contador % 100,
							Math.floor(contador / 10) % 10,
							Math.floor(contador / 100) + 1
						) &&
						puntoSospechoso(
							(contador + 1) % 10,
							Math.floor((contador + 1) / 10) % 10,
							Math.floor((contador + 1) / 100) + 1
						)) ||
					(puntoSospechoso(
						(contador - 2) % 10,
						Math.floor((contador - 2) / 10) % 10,
						Math.floor((contador - 2) / 100) + 1
					) &&
						puntoSospechoso(
							(contador - 1) % 10,
							Math.floor((contador - 1) / 10) % 10,
							Math.floor((contador - 1) / 100) + 1
						) &&
						puntoSospechoso(
							contador % 10,
							Math.floor(contador / 10) % 10,
							Math.floor(contador / 100) + 1
						))) //Se evalua si el punto es sospechoso
			) {
				process.stdout.write(
					`${cont2}${' '.repeat(3 - cont2.toString().length)}█`
				); //Se imprime el punto
				imprimir(arreglo, contador + 1, final, cont2 + 1);
			} else if (contador % 10 === 0) {
				process.stdout.write(
					`${cont2}${' '.repeat(3 - cont2.toString().length)}░`
				);
				imprimir(arreglo, contador + 1, final, cont2 + 1);
			} else if (
				(contador + 1) % 10 === 0 &&
				puntoSospechoso(
					(contador - 2) % 10,
					Math.floor((contador - 2) / 10) % 10,
					Math.floor((contador - 2) / 100) + 1
				) &&
				puntoSospechoso(
					(contador - 1) % 10,
					Math.floor((contador - 1) / 10) % 10,
					Math.floor((contador - 1) / 100) + 1
				) &&
				puntoSospechoso(
					contador % 10,
					Math.floor(contador / 10) % 10,
					Math.floor(contador / 100) + 1
				)
			) {
				process.stdout.write('█\n');
				imprimir(arreglo, contador + 1, final, cont2);
			} else if ((contador + 1) % 10 == 0) {
				process.stdout.write('░\n');
				imprimir(arreglo, contador + 1, final, cont2);
			} else if (
				//
				contador >= 2 &&
				((puntoSospechoso(
					contador % 10,
					Math.floor(contador / 10) % 10,
					Math.floor(contador / 100) + 1
				) &&
					puntoSospechoso(
						(contador + 1) % 10,
						Math.floor((contador + 1) / 10) % 10,
						Math.floor((contador + 1) / 100) + 1
					) &&
					puntoSospechoso(
						(contador + 2) % 10,
						Math.floor((contador + 2) / 10) % 10,
						Math.floor((contador + 2) / 100) + 1
					)) ||
					(puntoSospechoso(
						(contador - 1) % 10,
						Math.floor((contador - 1) / 10) % 10,
						Math.floor((contador - 1) / 100) + 1
					) &&
						puntoSospechoso(
							contador % 10,
							Math.floor(contador / 10) % 10,
							Math.floor(contador / 100) + 1
						) &&
						puntoSospechoso(
							(contador + 1) % 10,
							Math.floor((contador + 1) / 10) % 10,
							Math.floor((contador + 1) / 100) + 1
						)) ||
					(puntoSospechoso(
						(contador - 2) % 10,
						Math.floor((contador - 2) / 10) % 10,
						Math.floor((contador - 2) / 100) + 1
					) &&
						puntoSospechoso(
							(contador - 1) % 10,
							Math.floor((contador - 1) / 10) % 10,
							Math.floor((contador - 1) / 100) + 1
						) &&
						puntoSospechoso(
							contador % 10,
							Math.floor(contador / 10) % 10,
							Math.floor(contador / 100) + 1
						)))
			) {
				process.stdout.write('█');
				imprimir(arreglo, contador + 1, final, cont2);
			} else {
				process.stdout.write('░');
				imprimir(arreglo, contador + 1, final, cont2);
			}
		}
	};
	if (Z < 1 || Z > 8) {
		console.log('\nPlano no válido.\n');
	} else {
		console.log('   0123456789');
		imprimir(resonancia, 100 * (Z - 1), 100 * Z, 0);
	}
};
//  INFORME:
// PARTE 3 DEL EJERCICIO
// Función que emplea las funciones anteriormente descritas para identificar en una imagen si hay alguna línea sospechosa
// y genera un informe con todas las fotografías en en plano Z, y la cantidad de líneas y puntos sospechosos en cada una.
const imprimirInforme = () => {
	//Función que imprime el informe
	const imprimir = (contador, masLineas) => {
		if (contador > 8) {
			if (
				contarLineasSospechosas(masLineas, 100 * (masLineas - 1)) === 0
			) {
				console.log(
					'\n\nNo se encontró ningún plano con líneas sospechosas.\n'
				); //Se evalua si hay lineas sospechosas
			} else {
				console.log(
					`\n\nEl plano (Z) con más líneas sospechosas es el número ${masLineas}.\n`
				); //Se imprime el plano con más lineas sospechosas
			}
		} else {
			process.stdout.write(
				`${contador}${' '.repeat(
					31 - contador.toString().length
				)}${contarLineasSospechosas(
					contador,
					100 * (contador - 1)
				)}${' '.repeat(
					//Se imprime el plano
					41 -
						contarLineasSospechosas(
							contador,
							100 * (contador - 1)
						).toString().length //Se imprime el plano
				)}${contarPuntosSospechosos(contador)}\n` //Se imprime el plano
			);
			if (
				contarLineasSospechosas(contador, 100 * (contador - 1)) >=
				contarLineasSospechosas(masLineas, 100 * (masLineas - 1))
			) {
				imprimir(contador + 1, contador);
			} else {
				imprimir(contador + 1, masLineas);
			}
		}
	};
	console.log(
		'Plano en Z(Fotografía)         Líneas sospechosas x plano(foto)         Puntos sospechosos por plano(foto)\n'
	);
	imprimir(1, 0);
};
// PARTE 4 DEL EJERCICIO
imprimirInforme(); // Genera el informe
let planoPorUsuario = prompt('Ingrese el plano que quiere ver: ');
imprimirLineas(planoPorUsuario);
let puntos = prompt('Ingrese el plano que quiere saber puntos: ');
let puntosPorUsuario = contarPuntosSospechosos(puntos);
console.log(
	`El número de puntos en el plano seleccionado es: ${puntosPorUsuario}`
);
