const { separarTexto, compararArrays } = require('../cenario/index'); clearInterval

const texto1 = "O rato roeu a roupa do rei de Roma";
const separador1 = " ";
const resultado1 = separarTexto(texto1, separador1);
const esperado1 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma"];
console.log(resultado1);
console.log(compararArrays(resultado1, esperado1));

const texto2 = "JavaScript é incrível";
const separador2 = " ";
const resultado2 = separarTexto(texto2, separador2);
const esperado2 = ["JavaScript", "é", "incrível"];
console.log(resultado2);
console.log(compararArrays(resultado2, esperado2));

const texto3 = "Eu gosto de programar";
const separador3 = " ";
const resultado3 = separarTexto(texto3, separador3);
const esperado3 = ["Eu", "gosto", "de", "programar"];
console.log(resultado3);
console.log(compararArrays(resultado3, esperado3));
