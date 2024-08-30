const { separarTexto, compararArrays } = require('../cenario');


const entrada21 = "15/08/2024";
const separador21 = "/";
const resultado21 = separarTexto(entrada21, separador21);
const esperado21 = ["15", "08", "2024"];

console.log("Cenário 21:");
console.log("Entrada:", entrada21);
console.log("Separador:", separador21);
console.log("Resultado Obtido:", resultado21);
console.log("Esperado:", esperado21);
console.log("Comparação:", compararArrays(resultado21, esperado21));
console.log("");


const entrada22 = "01/01/2020";
const separador22 = "/";
const resultado22 = separarTexto(entrada22, separador22);
const esperado22 = ["01", "01", "2020"];

console.log("Cenário 22:");
console.log("Entrada:", entrada22);
console.log("Separador:", separador22);
console.log("Resultado Obtido:", resultado22);
console.log("Esperado:", esperado22);
console.log("Comparação:", compararArrays(resultado22, esperado22));
console.log("");


const entrada23 = "31/12/1999";
const separador23 = "/";
const resultado23 = separarTexto(entrada23, separador23);
const esperado23 = ["31", "12", "1999"];

console.log("Cenário 23:");
console.log("Entrada:", entrada23);
console.log("Separador:", separador23);
console.log("Resultado Obtido:", resultado23);
console.log("Esperado:", esperado23);
console.log("Comparação:", compararArrays(resultado23, esperado23));
console.log("");