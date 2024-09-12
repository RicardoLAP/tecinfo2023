const csvTools = require('../cenario/index');

function prtcsv(csvText, columns) {

    const lines = csvTools.linesToColumns(csvText);
    const rows = csvTools.linesToColumns(lines);
    const header = csvTools.extractHeader(dadosCSV);
    const content = csvTools.extractContent(rows);
    const json = csvTools.contentToJSON(header, content);

    console.table(json, columns);
}

module.exports = { prtcsv };