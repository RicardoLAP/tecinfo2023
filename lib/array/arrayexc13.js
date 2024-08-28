function numeroMaior(array) {
	
	if (array.length === 0) {
		throw new Error("O array está vazio.");
	}

	return Math.max(...array);
}

console.log(numeroMaior([1, 2, 3, 4, 5]));
console.log(numeroMaior([-1, -2, -3, -4, -5]));
console.log(numeroMaior([10, 20, 30, 40, 50]));
