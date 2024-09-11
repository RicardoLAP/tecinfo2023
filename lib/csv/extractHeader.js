const { extrairCabecalho, compararArrays } = require('../cenario/index.js');


const teste1 = [["nome", "idade"], ["João", "28"], ["Maria", "32"]];
const teste2 = [["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]];
const teste3 = [["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"],
["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"],
["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]];


const esperado1 = ["nome", "idade"];
const esperado2 = ["produto", "preço"];
const esperado3 = ["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"];


console.log(extrairCabecalho(teste1));
console.log('Passou:', compararArrays(extrairCabecalho(teste1), esperado1));

console.log(extrairCabecalho(teste2));
console.log('Passou:', compararArrays(extrairCabecalho(teste2), esperado2));

console.log(extrairCabecalho(teste3));
console.log('Passou:', compararArrays(extrairCabecalho(teste3), esperado3)); 
