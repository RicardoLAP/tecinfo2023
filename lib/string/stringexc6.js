const { separarEmLetras, compararArrays } = require("../cenario/separCompa");

const entrada15 = "JavaScript";
const resultado15 = separarEmLetras(entrada15);
const esperado15 = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
console.log("Cenário 15:");
console.log("Entrada:", entrada15);
console.log("Resultado Obtido:", resultado15);
console.log("Esperado:", esperado15);
console.log(compararArrays(resultado15, esperado15));
console.log("");


const entrada16 = "Eu gosto de programar";
const resultado16 = separarEmLetras(entrada16);
const esperado16 = ["E", "u", " ", "g", "o", "s", "t", "o", " ", "d", "e", " ", "p", "r", "o", "g", "r", "a", "m", "a", "r"];
console.log("Cenário 16:");
console.log("Entrada:", entrada16);
console.log("Resultado Obtido:", resultado16);
console.log("Esperado:", esperado16);
console.log(compararArrays(resultado16, esperado16));
console.log("");


const entrada17 = "Olá Mundo";
const resultado17 = separarEmLetras(entrada17);
const esperado17 = ["O", "l", "á", " ", "M", "u", "n", "d", "o"];
console.log("Cenário 17:");
console.log("Entrada:", entrada17);
console.log("Resultado Obtido:", resultado17);
console.log("Esperado:", esperado17);
console.log(compararArrays(resultado17, esperado17));
console.log("");