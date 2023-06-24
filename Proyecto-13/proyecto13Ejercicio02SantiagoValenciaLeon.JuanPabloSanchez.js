/*EJERCICIO 02 - PROYECTO 13
Ejercicio 02. Laberinto. Utilizando solo string’s, realizar un programa que permita simular un laberinto con una
matriz de dimensiones 30*30 , donde los pasos libres estarán representados por el carácter ASCII=32 (espacio en
blanco = sp = space) y los muros por el carácter ASCII = █ = 219. Se generará aleatoriamente el laberinto y en todo
caso la periferia estará siempre con el carácter ASCII = 219 = █. (0,2 hasta 0,29); (0,29 hasta 29,29) (29,29 hasta
29,0); (29,0 hasta 2,0), las coordenadas de entrada será la fila 0 y columna 0, y la salida se generará en forma aleatoria
sobre la columna más a la derecha del arreglo (columna 29), sin tocar el muro de la periferia. Se pide:
1. Construir e imprimir el arreglo en forma clara y ordenada.
2. Construir una función que encuentre una(1) salida. Si no es posible, debe indicar que no tiene salida. La salida o
camino de salida desde la posición fila 0 y columna 0, será indicado sobre la misma matriz con el carácter ASCII =
169 = ©. Si hay salida debe imprimir el laberinto con esa salida.

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
Descripción: Este programa imprime un laberinto de 30*30 con una salida aleatoria.
*/

// Función para generar un laberinto aleatorio
const generarLaberinto = (laberinto) => {
	for (let fila = 29; fila >= 0; fila--) {
		for (let columna = 29; columna >= 0; columna--) {
			// Llena los bordes del arreglo con muros
			if (fila === 0 || fila === 29 || columna === 0 || columna === 29)
				laberinto[fila][columna] = 0;
			// Llena aleatoriamente el interior con muros o espacios en blanco (probabilidad de espacio en blanco: 75%)
			else {
				if (Math.floor(Math.random() * 4) === 0)
					laberinto[fila][columna] = 0; // Muro
				else laberinto[fila][columna] = 1; // Espacio en blanco
			}
		}
	}
	// Establece espacios en blanco en la entrada
	laberinto[0][0] = 1;
	laberinto[0][1] = 1;
	laberinto[1][0] = 1;
	laberinto[1][1] = 1;
	// Establece la salida en una posición aleatoria
	laberinto[Math.floor(Math.random() * 28) + 1][29] = 2;
};

// Función para imprimir el laberinto sin resolver
const imprimirLaberinto = (laberinto) => {
	console.log('                       1         2         ');
	console.log('             012345678901234567890123456789');
	for (let fila = 0; fila <= 29; fila++) {
		if (fila === 0) process.stdout.write('Entrada-> 0  ');
		else if (fila < 10 && fila >= 1)
			process.stdout.write('          ' + fila + '  ');
		else process.stdout.write('          ' + fila + ' ');
		for (let columna = 0; columna <= 29; columna++) {
			switch (laberinto[fila][columna]) {
				case 0:
					process.stdout.write('█'); // Representa un muro
					break;
				case 2:
					process.stdout.write(' -> Salida'); // Representa la salida
					break;
				default:
					process.stdout.write(' '); // Representa un espacio en blanco
			}
		}
		console.log();
	}
};

// Función para imprimir el laberinto con la solución (si se encuentra)
const imprimir = (laberinto, solucionEncontrada) => {
	console.log('                       1         2         ');
	console.log('             012345678901234567890123456789');
	for (let fila = 0; fila <= 29; fila++) {
		if (fila === 0) process.stdout.write('Entrada-> 0  ');
		else if (fila < 10 && fila >= 1)
			process.stdout.write('          ' + fila + '  ');
		else process.stdout.write('          ' + fila + ' ');
		for (let columna = 0; columna <= 29; columna++) {
			switch (laberinto[fila][columna]) {
				case 0:
					process.stdout.write('█'); // Representa un muro
					break;
				case 3:
					process.stdout.write('©'); // Representa el camino de la solución
					break;
				case 2:
					process.stdout.write(' -> Salida'); // Representa la salida
					break;
				default:
					process.stdout.write(' '); // Representa un espacio en blanco
			}
		}
		console.log();
	}
	if (solucionEncontrada) console.log('La solución fue encontrada.');
	else console.log('La solución no fue encontrada.');
};

// Función recursiva para buscar la solución del laberinto utilizando backtracking
const buscarSolucion = (laberinto, fila, columna) => {
	// Se delimita los limites del laberinto.
	if (fila < 0 || fila >= 30 || columna < 0 || columna >= 30) return false;

	switch (laberinto[fila][columna]) {
		case 1:
			laberinto[fila][columna] = 3; // Marca la posición actual como parte del camino de la solución
			if (
				buscarSolucion(laberinto, fila, columna + 1) || //Derecha
				buscarSolucion(laberinto, fila + 1, columna) || //Abajo
				buscarSolucion(laberinto, fila - 1, columna) || //Arriba
				buscarSolucion(laberinto, fila, columna - 1) //Izquierda
			)
				return true; // Se encontró la solución
			else laberinto[fila][columna] = 4; // Marca la posición actual como visitada pero sin solución (cuando debe devolverse)
			break;
		case 2:
			laberinto[fila][columna] = 2; // Marca la posición de la salida
			return true; // Se encontró la solución
	}
	return false; // No se encontró la solución
};

// Función principal que ejecuta el programa
const main = () => {
	const laberinto = Array.from({ length: 30 }, () => Array(30).fill(0)); // Crea una matriz de 30x30 inicializada con ceros
	generarLaberinto(laberinto); // Genera el laberinto
	imprimirLaberinto(laberinto); // Imprime el laberinto sin resolver
	imprimir(laberinto, buscarSolucion(laberinto, 0, 0)); // Busca y muestra la solución del laberinto
};

main();
