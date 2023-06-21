/*EJERCICIO 25 - PROYECTO 10
25.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR”)
Z en rombo

_ 12345678911234567892
1         Z
2        ZZZ
3       ZZZZZ
4      ZZZZZZZ
5       ZZZZZ
6        ZZZ
7         Z       

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
Descripción: Este programa imprime las letras Z como un rombo.
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
function Imprimir(Fila, Contador, Final, FinalZ) {
	if (Fila <= 3) {
		ImprimirEsp(Contador, Final);
		ImprimirZ(Contador, FinalZ);
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 1, FinalZ + 2);
	} else if (Fila <= 7) {
		ImprimirEsp(Contador, Final);
		ImprimirZ(Contador, FinalZ);
		print('\n');
		Imprimir(Fila + 1, Contador, Final + 1, FinalZ - 2);
	}
}

Imprimir(1, 1, 9, 1);
