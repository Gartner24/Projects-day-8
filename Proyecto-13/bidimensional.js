// Crear un arrayeglo bidimensional de 8x8
let array = new Array(8);
for (let i = 0; i < array.length; i++) {
	array[i] = new Array(8);
}

// Rellenar el arrayeglo con números aleatorios del 1 al 19
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array[i].length; j++) {
		array[i][j] = (Math.random() * 15).toFixed(1);
		// process.stdout.write(`${array[i][j]} \t`);
	}
	// console.log(' \n');
}

// Guardar las modas
let modas = [];
let modalRepeatTimes = 0;

let repeatCounter = 0;

const modaExecute = () => {
	// Recorrer el arrayeglo bidimensional
	for (let row = 0; row < array.length; row++) {
		for (let column = 0; column < array.length; column++) {
			let modaReview = array[row][column];
			countModas(modaReview);
			compareModas(modaReview, repeatCounter);
		}
    console.log(repeatCounter)
    repeatCounter = 0;
	}
  console.log(`La(s) moda(s) es(son): ${modas}`);
  console.log(`Se repite(n) ${modalRepeatTimes} veces`);
};

const countModas = (modaReview) => {
	for (let row = 0; row < array.length; row++) {
		for (let column = 0; column < array.length; column++) {
			if (modaReview == array[row][column]) {
				repeatCounter++;
			}
		}
	}
};

const compareModas = (modaReview, repeatCounter) => {
	if (repeatCounter > modalRepeatTimes) {
		removeModa();
		addModa(modaReview);
	} else if (repeatCounter == modalRepeatTimes) {
		addModa(modaReview);
	} else {
    return;
  }
};

const addModa = (modaReview) => {
	modas.push(modaReview);
};

const removeModa = () => {
	modas.splice(0, modas.length);
};


modaExecute();