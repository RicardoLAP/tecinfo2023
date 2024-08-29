const { separarTexto, compararArrays } = require('../cenario/index');


const texto4 = "João,Maria,José";
const separador4 = ",";
const resultado4 = separarTexto(texto4, separador4);
console.log("Resultado 4:", resultado4);

const texto5 = "Ana Maria,Paulo Coelho,Carla";
const separador5 = ",";
const resultado5 = separarTexto(texto5, separador5);
console.log("Resultado 5:", resultado5);


const resultadoEsperado4 = ["João", "Maria", "José"];
const resultadoEsperado5 = ["Ana Maria", "Paulo Coelho", "Carla"];

console.log("Comparar resultado4 com resultadoEsperado4:", compararArrays(resultado4, resultadoEsperado4));
console.log("Comparar resultado5 com resultadoEsperado5:", compararArrays(resultado5, resultadoEsperado5));
