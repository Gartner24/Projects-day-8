/*EJERCICIO 27 - PROYECTO 10
27. Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )

1          Z
2         Z Z
3        Z   Z
4       Z     Z
5      Z       Z
6     Z         Z
7    Z           Z
8   Z             Z
9  Z               Z
10Z                 Z


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
Descripción: Este programa imprime las letras Z como una pirámide vacia.
*/

// Función que imprime en pantalla
function print(message) {
	process.stdout.write(message);
}

// Función que imprime Z cantidad de veces
function ImprimirZ(Inicio, Final) {
	if (Inicio <= Final) {
		print('Z');
		ImprimirZ(Inicio + 1, Final);
	}
}

// Función que imprime espacios
function ImprimirEsp(Inicio, Final) {
	if (Inicio <= Final) {
		print(' ');
		ImprimirEsp(Inicio + 1, Final);
	}
}

// Función que imprime la matriz
function Imprimir(Fila, Contador, Final, ContadorZ, FinalZ) {
	if (Fila <= 10) {
		ImprimirEsp(Contador, Final);
		ImprimirZ(1, 1);
		ImprimirEsp(ContadorZ, FinalZ);
		if (Fila !== 1) {
			ImprimirZ(1, 1);
		}
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 1, ContadorZ, FinalZ + 2);
	}
}

Imprimir(1, 1, 9, 2, 0);
