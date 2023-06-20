// 13. Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuantas calorías consume su cuerpo durante todo el tiempo que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto. Datos de entrada: actividad(string), tiempo de la actividad.

// let actividad = prompt("Ingrese la actividad a realizar: ");
// let tiempo = prompt("Ingrese el tiempo de la actividad: ");

let actividad = 'REPOSO';
let tiempo = 60;
const peso = 70;

function calcularCalorias (actividad, tiempo) {
    let calorias;
    actividad = actividad.toLowerCase();
    if(actividad == "dormir") calorias = tiempo * 1.08;
    if(actividad == "reposo") calorias = tiempo * 1.66;
    console.log(calorias);
}

calcularCalorias(actividad, tiempo)
