const { separarTexto, compararArrays } = require('../cenario');



const entrada24 = "14:35:20";
const separador24 = ":";
const resultado24 = separarTexto(entrada24, separador24);
const esperado24 = ["14", "35", "20"];

console.log("Cenário 24:");
console.log("Entrada:", entrada24);
console.log("Separador:", separador24);
console.log("Resultado Obtido:", resultado24);
console.log("Esperado:", esperado24);
console.log("Comparação:", compararArrays(resultado24, esperado24));
console.log("");


const entrada25 = "09:05:15";
const separador25 = ":";
const resultado25 = separarTexto(entrada25, separador25);
const esperado25 = ["09", "05", "15"];

console.log("Cenário 25:");
console.log("Entrada:", entrada25);
console.log("Separador:", separador25);
console.log("Resultado Obtido:", resultado25);
console.log("Esperado:", esperado25);
console.log("Comparação:", compararArrays(resultado25, esperado25));
console.log("");


const entrada26 = "23:59:59";
const separador26 = ":";
const resultado26 = separarTexto(entrada26, separador26);
const esperado26 = ["23", "59", "59"];

console.log("Cenário 26:");
console.log("Entrada:", entrada26);
console.log("Separador:", separador26);
console.log("Resultado Obtido:", resultado26);
console.log("Esperado:", esperado26);
console.log("Comparação:", compararArrays(resultado26, esperado26));
console.log("");