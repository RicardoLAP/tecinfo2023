
const { compararArrays, separarTexto } = require('../cenario/index');

const entrada = "nome;idade\nJoão;28\nMaria;32";
const esperado = ["nome;idade", "João;28", "Maria;32"];
const resultado = separarTexto(entrada, '\n');
console.log('Teste 1');
console.log('Resultado:', resultado);
console.log('Esperado:', esperado);
console.log('Passou:', compararArrays(resultado, esperado));

const entrada1 = "produto;preço\nArroz;5.00\nFeijão;7.50";
const esperado1 = ["produto;preço", "Arroz;5.00", "Feijão;7.50"];
const resultado1 = separarTexto(entrada1, '\n');
console.log('Teste 2');
console.log('Resultado:', resultado1);
console.log('Esperado:', esperado1);
console.log('Passou:', compararArrays(resultado1, esperado1));

const entrada2 = `Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta
Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M
Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M`;
const esperado2 = [
    "Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta",
    "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M",
    "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"
];
const resultado2 = separarTexto(entrada2, '\n');
console.log('Teste 3');
console.log('Resulntado:', resultado2);
console.log('Esperado:', esperado2);
console.log('Passou:', compararArrays(resultado2, esperado2));
