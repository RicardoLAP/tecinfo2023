function removerEspacos(str) {

	return str.replace(/\s+/g, '');
}

console.log(removerEspacos("Hello World"));
console.log(removerEspacos(" a b c"));
console.log(removerEspacos(" "));