// 21-Diseñe un algoritmo y operacionalícelo, tal que lea un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determine si el número es capicúo (es igual al revés del número original). Ejemplo: N=323, 101.

// let numero = prompt("Ingrese un número de tres cifras: ");

let numero = 323;

function esCapicua(numero) {
    let numeroString = numero.toString();
    let numeroReverso = numeroString.split("").reverse().join("");
    if (numeroString == numeroReverso) console.log("El número es capicúa");
    else console.log("El número no es capicúa");
}

esCapicua(numero);