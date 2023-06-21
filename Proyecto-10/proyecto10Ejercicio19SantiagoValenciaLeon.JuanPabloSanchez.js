/*EJERCICIO 19 - PROYECTO 10
19.Se pide hacer un programa de computadora, de tal forma que imprima lo siguiente en la pantalla.

        
Pantalla 1
columnas    1 2 3 4 5 6 7 8  
0

A             A
->            <-
-------------------------------------
Pantalla 2
A         A 
->       <- 
-------------------------------------
Pantalla 3
                A     A 
                ->    <- 

-------------------------------------
columna           4 4
                  0 1
                  A A

El efecto es que se vea las letras A moviéndose hacia el centro de la pantalla.
(Usando solo recursividad)

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime las letras A moviéndose hacia el centro de la pantalla.
*/

// Función que imprime en pantalla
function print(message) {
	process.stdout.write(message);
}

// Función que salta de línea
function ImprimirLineas(cantidad, contador) {
	if (cantidad > contador) {
		print('\n');
		ImprimirLineas(cantidad - 1, contador);
	}
}

// Función que imprime A cantidad de veces
function ImprimirA(cantidad, contador) {
	if (cantidad > contador) {
		print('A');
		ImprimirA(cantidad - 1, contador);
	}
}

// Función que imprime espacios en blanco
function ImprimirEsp(cantidad, contador) {
	if (cantidad > contador) {
		print(' ');
		ImprimirEsp(cantidad - 1, contador);
	}
}

// Función que imprime todo
function ImprimirTodo(fila, espacios, maximoColumnas) {
	if (fila < maximoColumnas) {
		ImprimirEsp(-1 * (espacios - 80), 0);
		ImprimirA(1, 0);
		ImprimirEsp(espacios - (fila + 1), 0);
		ImprimirA(1, 0);
		ImprimirLineas(8, 1);
		// Simulación de sleep en JavaScript
		const sleep = (milliseconds) => {
			const start = new Date().getTime();
			while (new Date().getTime() - start < milliseconds) {}
		};
		sleep(500);
		ImprimirTodo(fila + 1, espacios - 1, maximoColumnas);
	}
}

ImprimirTodo(0, 80, 41);
