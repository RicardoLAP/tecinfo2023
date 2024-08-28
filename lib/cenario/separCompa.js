
function separarTexto(texto, separador) {
    return texto.split(separador);
}


function compararArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}


module.exports = { separarTexto, compararArrays };

