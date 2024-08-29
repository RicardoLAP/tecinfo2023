const { separarTexto, compararArrays } = require("../cenario/index");


const entrada9 = "Nome -- Sobrenome -- Idade -- País";
const separador9 = " -- ";
const resultado9 = separarTexto(entrada9, separador9);
const esperado9 = ["Nome", "Sobrenome", "Idade", "País"];
console.log("Cenário 9:");
console.log("Resultado Obtido:", resultado9);
console.log("Esperado:", esperado9);
console.log(compararArrays(resultado9, esperado9));
console.log("");


const entrada10 = "Item 1 -- Item 2 -- Item 3 -- Item 4";
const separador10 = " -- ";
const resultado10 = separarTexto(entrada10, separador10);
const esperado10 = ["Item 1", "Item 2", "Item 3", "Item 4"];
console.log("Cenário 10:");
console.log("Resultado Obtido:", resultado10);
console.log("Esperado:", esperado10);
console.log(compararArrays(resultado10, esperado10));
console.log("");


const entrada11 = "Rua A -- Bairro B -- Cidade C -- Estado D";
const separador11 = " -- ";
const resultado11 = separarTexto(entrada11, separador11);
const esperado11 = ["Rua A", "Bairro B", "Cidade C", "Estado D"];
console.log("Cenário 11:");
console.log("Resultado Obtido:", resultado11);
console.log("Esperado:", esperado11);
console.log(compararArrays(resultado11, esperado11));
console.log("");
