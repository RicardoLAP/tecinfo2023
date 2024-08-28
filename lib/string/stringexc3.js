const { separarTexto, compararArrays } = require("../cenario/separCompa");


const entrada6 = "fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com";
const separador6 = ";";
const resultado6 = separarTexto(entrada6, separador6);
const esperado6 = ["fulano@gmail.com", "ciclano@yahoo.com", "beltrano@outlook.com"];
console.log("Cenário 6:");
console.log("Resultado Obtido:", resultado6);
console.log("Esperado:", esperado6);
console.log(compararArrays(resultado6, esperado6));
console.log("");


const entrada7 = "contato@empresa.com;suporte@site.com";
const separador7 = ";";
const resultado7 = separarTexto(entrada7, separador7);
const esperado7 = ["contato@empresa.com", "suporte@site.com"];
console.log("Cenário 7:");
console.log("Resultado Obtido:", resultado7);
console.log("Esperado:", esperado7);
console.log(compararArrays(resultado7, esperado7));
console.log("");


const entrada8 = "admin@fundacao.org;info@site.org";
const separador8 = ";";
const resultado8 = separarTexto(entrada8, separador8);
const esperado8 = ["admin@fundacao.org", "info@site.org"];
console.log("Cenário 8:");
console.log("Resultado Obtido:", resultado8);
console.log("Esperado:", esperado8);
console.log(compararArrays(resultado8, esperado8));
console.log("");

