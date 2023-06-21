/*EJERCICIO 21 - PROYECTO 10
21.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
(Usando solo recursividad)

Col
fila
1 2 3 4 5 6 7 8 9 10 11 12 13

1  P P P P P P P P P P P P P
2    N N N N N N N N N N N
3      L L L L L L L L L
4        J J J J J J J
5          H H H H H
6            F F F
7              D

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
Descripción: Este programa imprime las letras como se muestra en la descripción.
*/

// Función que imprime en pantalla
function print(message) {
	process.stdout.write(message);
}

// Función que imprime letras
function ImprimirLetras(Inicio, Final, Dato) {
	if (Inicio <= Final) {
		print(String.fromCharCode(82 - Dato));
		ImprimirLetras(Inicio + 1, Final, Dato);
	}
}

// Función que imprime espacios
function ImprimirEsp(Inicio, Final) {
	if (Inicio <= Final) {
		print(' ');
		ImprimirEsp(Inicio, Final - 1);
	}
}

// Función que imprime la matriz
function Imprimir(Fila, Contador, Final, FinalL, Dato) {
	if (Fila <= 7) {
		ImprimirEsp(Contador, Final);
		ImprimirLetras(Contador, FinalL, Dato);
		print('\n');
		Imprimir(Fila + 1, Contador, Final + 1, FinalL - 2, Dato + 2);
	}
}

Imprimir(1, 1, 0, 13, 2);
