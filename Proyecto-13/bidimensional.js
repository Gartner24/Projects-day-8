// Crear un arreglo bidimensional de 8x8
const createArray = () => {

	// Crear un arreglo bidimensional de 8x8
	let array = new Array(8);
	for (let i = 0; i < array.length; i++) {
		array[i] = new Array(8);
	}

	// Rellenar el arreglo con números aleatorios del 1 al 15
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			array[i][j] = (Math.random() * 15).toFixed(1);
			process.stdout.write(`${array[i][j]} \t`);
		}
		console.log(' \n');
	}
	return array;
};

const array = createArray();
// Guardar el(los) moda(s) en un arreglo
let modasArray = [];
// Guardar cuantas veces se repite(n) la(s) moda(s)
let modasRepeatTimes = 0;
// Contador de repeticiones de el valor que se está revisando
let repeatModalCounter = 0;

const modaExecute = (array) => {
	array.forEach((row) => {
		row.forEach((value) => {
			// Variable que guarda el valor que se está revisando
			let modaReview = value;

			// Si el valor no existe en el arreglo de modas, se cuenta cuantas veces se repite
			if (!modaExists(modaReview)) {
				// Se reinicia el contador de repeticiones
				repeatModalCounter = 0;

				// Se cuentan las repeticiones
				countRepeatingOfModal(modaReview);
				compareModas(modaReview, repeatModalCounter);
			}
		});
	});

	console.log(`La(s) moda(s) es(son): ${modasArray}`);
	console.log(`Se repite(n) ${modasRepeatTimes} veces`);
};

// Funciones auxiliares

// Cuenta cuantas veces se repite el valor que se está revisando
const countRepeatingOfModal = (modaReview) => {
	array.forEach((row) => {
		row.forEach((value) => {
			// Si el valor que se está revisando es igual al valor que se está revisando, se aumenta el contador
			if (modaReview == value) {
				repeatModalCounter++;
			}
		});
	});
};

// Compara las repeticiones del valor que se está revisando con las repeticiones de la(s) moda(s)
const compareModas = (modaReview, repeatModalCounter) => {
	if (repeatModalCounter > modasRepeatTimes) {
		// Si el valor que se está revisando se repite más veces que la(s) moda(s), se reinicia el arreglo de modas, se guarda el valor que se está revisando y se guarda cuantas veces se repite
		restartModa();
		modasRepeatTimes = repeatModalCounter;
		addModa(modaReview);
	} else if (repeatModalCounter == modasRepeatTimes) {
		// Si el valor que se está revisando se repite la misma cantidad de veces que la(s) moda(s), se guarda el valor que se está revisando
		addModa(modaReview);
	}
};

// Verifica si el valor que se está revisando ya existe en el arreglo de modas
const modaExists = (modaReview) => {
	return modasArray.includes(modaReview);
};

// Agrega el valor que se está revisando al arreglo de modas
const addModa = (modaReview) => {
	modasArray.push(modaReview);
};

// Reinicia el arreglo de modas
const restartModa = () => {
	modasArray.splice(0, modasArray.length);
};

modaExecute(array);
