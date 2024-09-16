const csvTools = require('../cenario/index');

function prtcsv(csvText, columns) {

    const lines = csvTools.separarTexto(csvText, "\n");
    const rows = csvTools.linesToColumns(lines);
    const header = csvTools.extrairCabecalho(rows);
    const content = csvTools.extractContent(rows);
    const json = csvTools.rowToJSON(header, content);



    console.table(json, columns);
}

module.exports = { prtcsv };