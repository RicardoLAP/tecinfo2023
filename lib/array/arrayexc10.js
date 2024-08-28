function somaPares(array) {
	
	let pares = array.filter(num => % 2 === 0);

	let soma = pares.reduce((acumulador, valorAtual => acumulador + valorAtual, 0));

	return soma;


}

console.log(somaPares([1, 2, 3, 4, 5));
console.log(somaPares([2, 4, 6, 8]));
console.log(somaPares([1, 3, 5, 7]));