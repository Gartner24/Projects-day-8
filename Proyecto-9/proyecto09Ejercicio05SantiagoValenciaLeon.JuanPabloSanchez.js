// 5. Que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:

// let antiguedad = prompt("Ingrese la antiguedad en años: ");
// a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
// b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
// c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.

// d. Si lleva menos de 3 años se le aplica un aumento del 3%.

let antiguedad = 10;
let sueldo = 40000;

function sueldoMensual(tiempo, sueldo) {
    if (tiempo > 10) sueldo *= 1.1;
    if (tiempo <= 10 && tiempo > 5) sueldo *= 1.07;
    if (tiempo <= 5 && tiempo > 3) sueldo *= 1.05;
    if (tiempo <= 3) sueldo *= 1.03;
    console.log("El sueldo mensual es de " + sueldo + " euros");
}

sueldoMensual(antiguedad, sueldo);