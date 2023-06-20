// 7. Que tome dos números y diga si ambos son pares o ambos son impares.

// let num1 = prompt("Ingrese el primer numero: ");
// let num2 = prompt("Ingrese el segundo numero: ");

let num1 = 3;
let num2 = 5;

function parImpar(num1, num2) {
    if (num1 % 2 == 0 && num2 % 2 == 0) console.log("Ambos numeros son pares");
    if (num1 % 2 != 0 && num2 % 2 != 0) console.log("Ambos numeros son impares");
}

parImpar(num1, num2);