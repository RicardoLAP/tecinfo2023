

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

    for (let i = 0; i < header.lenght; i++) {
        let key = header[i];
        let value = content[i];

        obj[key] = value;
        console.log(obj)
    }
    return obg;
}

module.exports = { separarTexto, compararArrays, separarEmLetras, separarEmFrases, linesToColumns, rowToJSON };
