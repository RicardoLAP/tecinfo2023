const { separarEmFrases, compararArrays } = require('../cenario/index');



const entrada18 = "O sol está brilhando. O céu está azul. É um ótimo dia!";
const separador18 = ". ";
const resultado18 = separarEmFrases(entrada18, separador18);
const esperado18 = ["O sol está brilhando", "O céu está azul", "É um ótimo dia!"];
console.log("Cenário 18:");
console.log("Entrada:", entrada18);
console.log("Separador:", separador18);
console.log("Resultado Obtido:", resultado18);
console.log("Esperado:", esperado18);
console.log("Comparação:", compararArrays(resultado18, esperado18));
console.log("");


const entrada19 = "Programar é divertido. Pratique todos os dias.";
const separador19 = ". ";
const resultado19 = separarEmFrases(entrada19, separador19);
const esperado19 = ["Programar é divertido", "Pratique todos os dias."];
console.log("Cenário 19:");
console.log("Entrada:", entrada19);
console.log("Separador:", separador19);
console.log("Resultado Obtido:", resultado19);
console.log("Esperado:", esperado19);
console.log("Comparação:", compararArrays(resultado19, esperado19));
console.log("");


const entrada20 = "Olá. Como vai você?";
const separador20 = ". ";
const resultado20 = separarEmFrases(entrada20, separador20);
const esperado20 = ["Olá", "Como vai você?"];
console.log("Cenário 20:");
console.log("Entrada:", entrada20);
console.log("Separador:", separador20);
console.log("Resultado Obtido:", resultado20);
console.log("Esperado:", esperado20);
console.log("Comparação:", compararArrays(resultado20, esperado20));
console.log("");