function calcularMedia(array) {

	if (array.length === 0) {
		return 0;
	}
	let soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

	let media = soma / array.length;

	return media;

}

console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(calcularMedia([10, 20, 30, 40, 50]));
console.log(calcularMedia([5, 5, 5, 5, 5]));