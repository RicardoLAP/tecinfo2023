const { separarTexto, compararArrays } = require("../cenario/index");


const entrada1 = "/usr/local/bin";
const separador1 = "/";
const resultado1 = separarTexto(entrada1, separador1);
const esperado1 = ["", "usr", "local", "bin"];
console.log("Cenário 1:");
console.log("Entrada:", entrada1);
console.log("Separador:", separador1);
console.log("Resultado Obtido:", resultado1);
console.log("Esperado:", esperado1);
console.log(compararArrays(resultado1, esperado1));
console.log("");


const entrada2 = "/home/user/documents";
const separador2 = "/";
const resultado2 = separarTexto(entrada2, separador2);
const esperado2 = ["", "home", "user", "documents"];
console.log("Cenário 2:");
console.log("Entrada:", entrada2);
console.log("Separador:", separador2);
console.log("Resultado Obtido:", resultado2);
console.log("Esperado:", esperado2);
console.log(compararArrays(resultado2, esperado2));
console.log("");


const entrada3 = "/var/www/html";
const separador3 = "/";
const resultado3 = separarTexto(entrada3, separador3);
const esperado3 = ["", "var", "www", "html"];
console.log("Cenário 3:");
console.log("Entrada:", entrada3);
console.log("Separador:", separador3);
console.log("Resultado Obtido:", resultado3);
console.log("Esperado:", esperado3);
console.log(compararArrays(resultado3, esperado3));
console.log("");
