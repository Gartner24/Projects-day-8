/*EJERCICIO 26 - PROYECTO 10 
------------------------------------------------------
26.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
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
Descripción: Este programa genera una impresion por pantalla de dos diagonales de Zs
*/

const print = (message) => {
	process.stdout.write(message);
};

const ImprimirZ = (Inicio, Final) => {
	if (Inicio <= Final) {
		print('Z');
		ImprimirZ(Inicio + 1, Final);
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

const Imprimir = (Fila, Contador, Final, FinalZ) => {
	if (Fila <= 10) {
		ImprimirEsp(Contador, FinalZ);
		ImprimirZ(1, 1);
		ImprimirEsp(Contador, Final);
		if (Fila === 10) {
			return;
		} else {
			ImprimirZ(1, 1);
		}
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 2, FinalZ + 1);
	} else {
		return;
	}
};

Imprimir(1, 1, 17, 0);
