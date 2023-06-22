/*EJERCICIO 20 - PROYECTO 09
20-Una compañía dedicada al alquiler de automóviles cobra un monto fijo de $400000 para los primeros 300 km de recorrido. Para más de
300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un
monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas,
IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluido del impuesto.
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
Descripción: Este programa permite determinar el pago de alquiler de un vehiculo y el monto incluido del impuesto
*/

//const prompt=require("prompt-sync")({sigint:true});
//let kilometrosRecorridos = prompt("Ingrese los kilometros recorridos: ");
let kilometrosRecorridos = 1004;

//Función que determina el pago de alquiler de un vehiculo y el monto incluido del impuesto
const compañiaDeAlquiler = (kilometrosRecorridos) => {
	let montoFijo = 400000;
	let iva = 0;
	if (kilometrosRecorridos <= 300) {
		montoFijo = montoFijo;
	} else if (kilometrosRecorridos > 300 && kilometrosRecorridos <= 1000) {
		montoFijo += 15000 * (kilometrosRecorridos - 300);
	} else if (kilometrosRecorridos > 1000) {
		montoFijo +=
			15000 *
				(kilometrosRecorridos - 300 - (kilometrosRecorridos - 1000)) +
			10000 * (kilometrosRecorridos - 1000);
	}
	iva = montoFijo * 0.2;

	console.log(
		`Monto a pagar por el alquiler: ${montoFijo}\nMonto Incluido del IVA: ${iva}`
	);
};

compañiaDeAlquiler(kilometrosRecorridos);
