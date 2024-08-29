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

module.exports = { separarTexto, compararArrays, separarEmLetras, separarEmFrases };