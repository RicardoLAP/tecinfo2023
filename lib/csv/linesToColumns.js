const { linesToColumns, compararArrays } = require('../cenario/index');


const entrada1 = ["nome;idade", "João;28", "Maria;32"];
const esperado1 = [["nome", "idade"], ["João", "28"], ["Maria", "32"]];
const resultado1 = linesToColumns(entrada1);
console.log('Teste 1');
console.log('Resultado:', resultado1);
console.log('Esperado:', esperado1);
console.log('Passou:', compararArrays(resultado1, esperado1));

const entrada2 = ["produto;preço", "Arroz;5.00", "Feijão;7.50"];
const esperado2 = [["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]];
const resultado2 = linesToColumns(entrada2);
console.log('Teste 2');
console.log('Resultado:', resultado2);
console.log('Esperado:', esperado2);
console.log('Passou:', compararArrays(resultado2, esperado2));

const entrada3 = [
    "Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta",
    "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M",
    "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"
];
const esperado3 = [
    ["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"],
    ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"],
    ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]
];
const resultado3 = linesToColumns(entrada3);
console.log('Teste 3');
console.log('Resultado:', resultado3);
console.log('Esperado:', esperado3);
console.log('Passou:', compararArrays(resultado3, esperado3));