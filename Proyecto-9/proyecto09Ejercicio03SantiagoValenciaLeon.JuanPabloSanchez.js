// 3. Que pida un número del 1 al 7 e imprima el día de la semana correspondiente.

// let numero = prompt("Ingrese numero: ");

let numero = 7;

function diaSemana (numero) {
    if (numero == 1) console.log("El dia es lunes");
    if (numero == 2) console.log("El dia es martes");
    if (numero == 3) console.log("El dia es miercoles");
    if (numero == 4) console.log("El dia es jueves");
    if (numero == 5) console.log("El dia es viernes");
    if (numero == 6) console.log("El dia es sabado");
    if (numero == 7) console.log("El dia es domingo");
}

diaSemana(numero);
