// 9. Escribir un programa que encuentre el valor del ángulo faltante de un triángulo si toma el valor de los otros dos ángulos como datos de entrada.

// let angulo1 = prompt("Ingrese el angulo 1: ");
// let angulo2 = prompt("Ingrese el angulo 2: ");

let angulo1 = 50;
let angulo2 = 70
let angulo3 = 0;

function encontrarAngulo(angulo1, angulo2) {
    angulo3 = 180 - (angulo1 + angulo2);
    return angulo3; 
}

console.log(encontrarAngulo(angulo1, angulo2));

