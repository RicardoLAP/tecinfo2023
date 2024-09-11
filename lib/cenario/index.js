

function separarTexto(texto, separador) {
    return texto.split(separador);
}

function compararArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function separarEmLetras(texto) {
    return texto.split("");
}

function separarEmFrases(texto, separador) {
    const partes = texto.split(separador);
    return partes.map(parte => parte.trim()).filter(parte => parte.length > 0);
}

function linesToColumns(lines) {
    return lines.map(line => line.split(';'));
}

function rowToJSON(header, content) {
    const obg = {};

    for (let i = 0; i < header.length; i++) {
        let key = header[i];
        let value = content[i];

        obg[key] = value;
    }
    return obg;
}

function contentToJSON(header, content) {
    const list = [];

    for (let k = 0; k < content.length; k++) {
        let row = content[k];
        let obj = rowToJSON(header, row);

        list.push(obj);
    }
    return list;

}


function extrairCabecalho(dadosCSV) {
    if (dadosCSV.length > 0) {
        return dadosCSV[0];
    }
    return [];
}

function extractContent(dadosCSV) {
    if (dadosCSV.length > 1) {
        return dadosCSV.slice(1);
    }
    return [];
}






module.exports = { contentToJSON, separarTexto, compararArrays, separarEmLetras, separarEmFrases, linesToColumns, rowToJSON, extrairCabecalho, extractContent };
