const { contentToJSON, compararArrays } = require('../cenario/index.js');

const header1 = ["nome", "idade"];
const content1 = [["João", "28"], ["Maria", "32"]];
const expected1 = [
    { "nome": "João", "idade": "28" },
    { "nome": "Maria", "idade": "32" }
];
const result1 = contentToJSON(header1, content1);
console.log(result1);
console.log("Comparação 1:", compararArrays(result1, expected1));

const header2 = ["produto", "preço"];
const content2 = [["Arroz", "5.00"], ["Feijão", "7.50"]];
const expected2 = [
    { "produto": "Arroz", "preço": "5.00" },
    { "produto": "Feijão", "preço": "7.50" }
];
const result2 = contentToJSON(header2, content2);
console.log(result2);
console.log("Comparação 2:", compararArrays(result2, expected2));

const header3 = ["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"];
const content3 = [
    ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"],
    ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]
];
const expected3 = [
    {
        "Filme": "Parasita",
        "Diretor": "Bong Joon-ho",
        "Ano": "2019",
        "Duração": "132",
        "Gênero": "Drama",
        "País de Origem": "Coréia do Sul",
        "Receita Bruta": "258.8M"
    },
    {
        "Filme": "Green Book",
        "Diretor": "Peter Farrelly",
        "Ano": "2018",
        "Duração": "130",
        "Gênero": "Drama",
        "País de Origem": "EUA",
        "Receita Bruta": "321.8M"
    }
];
const result3 = contentToJSON(header3, content3);
console.log(result3);
console.log("Comparação 3:", compararArrays(result3, expected3));