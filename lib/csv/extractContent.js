const { extractContent, compararArrays } = require('../cenario/index.js');


const teste1 = [["nome", "idade"], ["João", "28"], ["Maria", "32"]];
const teste2 = [["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]];
const teste3 = [["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"],
["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"],
["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]];


const esperado1 = [["João", "28"], ["Maria", "32"]];
const esperado2 = [["Arroz", "5.00"], ["Feijão", "7.50"]];
const esperado3 = [["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"],
["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]];


console.log(extractContent(teste1));
console.log('Passou:', compararArrays(extractContent(teste1), esperado1));

console.log(extractContent(teste2));
console.log('Passou:', compararArrays(extractContent(teste2), esperado2));

console.log(extractContent(teste3));
console.log('Passou:', compararArrays(extractContent(teste3), esperado3)); 