const { separarTexto, compararArrays } = require('../cenario');



const entrada27 = "Primeira linha\nSegunda linha\nTerceira linha";
const separador27 = "\n";
const resultado27 = separarTexto(entrada27, separador27);
const esperado27 = ["Primeira linha", "Segunda linha", "Terceira linha"];

console.log("Cenário 27:");
console.log("Entrada:", entrada27);
console.log("Separador:", separador27);
console.log("Resultado Obtido:", resultado27);
console.log("Esperado:", esperado27);
console.log("Comparação:", compararArrays(resultado27, esperado27));
console.log("");


const entrada28 = "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.";
const separador28 = "\n";
const resultado28 = separarTexto(entrada28, separador28);
const esperado28 = ["Lorem ipsum dolor sit amet,", "consectetur adipiscing elit,", "sed do eiusmod tempor incididunt ut labore."];

console.log("Cenário 28:");
console.log("Entrada:", entrada28);
console.log("Separador:", separador28);
console.log("Resultado Obtido:", resultado28);
console.log("Esperado:", esperado28);
console.log("Comparação:", compararArrays(resultado28, esperado28));
console.log("");


const entrada29 = "Linha única sem quebras";
const separador29 = "\n";
const resultado29 = separarTexto(entrada29, separador29);
const esperado29 = ["Linha única sem quebras"];

console.log("Cenário 29:");
console.log("Entrada:", entrada29);
console.log("Separador:", separador29);
console.log("Resultado Obtido:", resultado29);
console.log("Esperado:", esperado29);
console.log("Comparação:", compararArrays(resultado29, esperado29));
console.log("");


const entrada30 = `Primeira linha de um texto.
Segunda linha usando template strings.
Terceira linha com mais detalhes.`;
const separador30 = "\n";
const resultado30 = separarTexto(entrada30, separador30);
const esperado30 = ["Primeira linha de um texto.", "Segunda linha usando template strings.", "Terceira linha com mais detalhes."];

console.log("Cenário 30:");
console.log("Entrada:", entrada30);
console.log("Separador:", separador30);
console.log("Resultado Obtido:", resultado30);
console.log("Esperado:", esperado30);
console.log("Comparação:", compararArrays(resultado30, esperado30));
console.log("");

const entrada31 = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Ut enim ad minim veniam.`;
const separador31 = "\n";
const resultado31 = separarTexto(entrada31, separador31);
const esperado31 = ["", "Lorem ipsum dolor sit amet,", "consectetur adipiscing elit.", "Ut enim ad minim veniam."];

console.log("Cenário 31:");
console.log("Entrada:", entrada31);
console.log("Separador:", separador31);
console.log("Resultado Obtido:", resultado31);
console.log("Esperado:", esperado31);
console.log("Comparação:", compararArrays(resultado31, esperado31));
console.log("");


const entrada32 = `
Texto com linhas múltiplas e
uso de templates strings
para separação.
`;
const separador32 = "\n";
const resultado32 = separarTexto(entrada32, separador32);
const esperado32 = ["", "Texto com linhas múltiplas e", "uso de templates strings", "para separação.", ""];

console.log("Cenário 32:");
console.log("Entrada:", entrada32);
console.log("Separador:", separador32);
console.log("Resultado Obtido:", resultado32);
console.log("Esperado:", esperado32);
console.log("Comparação:", compararArrays(resultado32, esperado32));
console.log("");