function somaDosDigitos(numero) {
	
	let digito = String(numero).split('');

	let soma = digito.map(digito => parseInt(digito, 10)).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

	return soma;

}

console.log(somaDosDigitos([123]));
console.log(somaDosDigitos([456]));
console.log(somaDosDigitos([789]));