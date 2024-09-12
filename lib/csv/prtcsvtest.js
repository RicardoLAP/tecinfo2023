const { readFileSync } = require('fs');
const { prtcsv } = require('../csv/prtcsv');

const csvText = readFileSync('../tabela/oscar_best_pictures.csv', 'utf-8');
const columns = ["filme", "Diretor", "Ano"];

prtcsv(csvText, columns);