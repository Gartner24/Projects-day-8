/*EJERCICIO 24 - PROYECTO 10 
------------------------------------------------------
24.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:19 a.m.
Version: 1.0
Autores: Ing(c) Santiago Valencia - Ing(c) Juan Pablo Sánchez
------------------------------------------------------
Lenguaje: JavaScript
Version del lenguaje: 6.0
------------------------------------------------------
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computacion
------------------------------------------------------
Descripción: Este programa genera una impresion por pantalla de dos triangulos de As
*/

const print = (message) => {
	process.stdout.write(message);
};

const ImprimirA = (Inicio, Final) => {
	if (Inicio <= Final) {
		print('A');
		ImprimirA(Inicio + 1, Final);
	} else {
		return;
	}
};

const ImprimirEsp = (Inicio, Final) => {
	if (Inicio <= Final) {
		print(' ');
		ImprimirEsp(Inicio + 1, Final);
	} else {
		return;
	}
};

const Imprimir = (Fila, Contador, Final, FinalA) => {
	if (Fila <= 3) {
		ImprimirEsp(1, 27);
		ImprimirA(Contador, Final);
		ImprimirEsp(Contador, FinalA);
		ImprimirA(Contador, Final);
		print('\n');
		Imprimir(Fila + 1, Contador, Final + 1, FinalA - 2);
	} else if (Fila <= 4) {
		ImprimirEsp(1, 27);
		print('AAAAAAA');
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 1, FinalA + 2);
	} else if (Fila <= 7) {
		ImprimirEsp(1, 27);
		ImprimirA(Contador, Final);
		ImprimirEsp(Contador, FinalA);
		ImprimirA(Contador, Final);
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 1, FinalA + 2);
	} else {
		return;
	}
};

Imprimir(1, 1, 1, 5);
