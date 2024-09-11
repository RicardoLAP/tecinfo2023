const { rowToJSON, compararArrays } = require('../cenario/index.js');


const header1 = ["nome", "idade"];
const content1 = ["João", "28"];
const resultado1 = rowToJSON(header1, content1);
const esperado1 = { nome: "João", idade: "28" };
console.log(resultado1);
console.log('Passou:', compararArrays(resultado1, esperado1));

const header2 = ["produto", "preço"];
const content2 = ["Arroz", "5.00"];
const resultado2 = rowToJSON(header2, content2);
const esperado2 = { produto: "Arroz", preço: "5.00" };
console.log(resultado2);
console.log('Passou:', compararArrays(resultado2, esperado2));

const header3 = ["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"];
const content3 = ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"];
const resultado3 = rowToJSON(header3, content3);
const esperado3 = { Filme: "Parasita", Diretor: "Bong Joon-ho", Ano: "2019", Duração: "132", Gênero: "Drama", "País de Origem": "Coréia do Sul", "Receita Bruta": "258.8M" };
console.log(resultado3);
console.log('Passou:', compararArrays(resultado3, esperado3));