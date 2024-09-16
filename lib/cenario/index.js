
/**
 * Separa um texto em partes com base em um separador especificado.
 *
 * @param {string} texto - O texto a ser separado.
 * @param {string|RegExp} separador - O caractere ou expressão regular usada para separar o texto.
 * @returns {string[]} Um array contendo as partes separadas do texto.
 */
function separarTexto(texto, separador) {

    return texto.trim().split(separador);
}

/**
 * Compara dois arrays para verificar se são iguais em termos de conteúdo e ordem.
 *
 * @param {Array} arr1 - O primeiro array a ser comparado.
 * @param {Array} arr2 - O segundo array a ser comparado.
 * @returns {boolean} Retorna `true` se os arrays forem iguais, `false` caso contrário.
 */

function compararArrays(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

/**
 * Separa uma string em um array de letras.
 *
 * @param {string} texto - O texto a ser separado em letras.
 * @returns {string[]} Um array contendo cada letra da string como um elemento.
 */

function separarEmLetras(texto) {
    return texto.split("");
}

/**
 * Separa um texto em frases com base em um separador e remove espaços extras de cada frase.
 *
 * @param {string} texto - O texto a ser separado em frases.
 * @param {string|RegExp} separador - O caractere ou expressão regular usada para separar o texto em frases.
 * @returns {string[]} Um array contendo as frases separadas e sem espaços em branco extras.
 */

function separarEmFrases(texto, separador) {
    const partes = texto.split(separador);
    return partes.map(parte => parte.trim()).filter(parte => parte.length > 0);
}

/**
 * Converte um array de linhas de texto em um array de colunas, separando cada linha em partes com base no caractere `;`.
 *
 * @param {string[]} lines - Um array de linhas de texto, onde cada linha é uma string contendo partes separadas por `;`.
 * @returns {string[][]} Um array de arrays de strings, onde cada subarray representa uma linha separada em colunas.
 */

function linesToColumns(lines) {
    return lines.map(line => line.trim().split(';'));
}

/**
 * Converte uma linha de dados em um objeto JSON usando um cabeçalho para as chaves.
 *
 * @param {string[]} header - Um array de strings representando os nomes das chaves para o objeto JSON.
 * @param {string[]} content - Um array de strings representando os valores correspondentes às chaves do cabeçalho.
 * @returns {Object} Um objeto JSON onde as chaves são os elementos do cabeçalho e os valores são os elementos da linha de dados.
 */

function rowToJSON(header, content) {
    const obg = {};

    for (let i = 0; i < header.length; i++) {
        let key = header[i];
        let value = content[i];

        obg[key] = value;
    }
    return obg;
}

/**
 * Converte um array de linhas de dados em uma lista de objetos JSON usando um cabeçalho para as chaves.
 *
 * @param {string[]} header - Um array de strings representando os nomes das chaves para o objeto JSON.
 * @param {string[][]} content - Um array de arrays de strings, onde cada subarray representa uma linha de dados a ser convertida em um objeto JSON.
 * @returns {Object[]} Uma lista de objetos JSON, onde cada objeto é criado a partir das linhas de dados usando o cabeçalho para as chaves.
 */

function contentToJSON(header, content) {
    const list = [];

    for (let k = 0; k < content.length; k++) {
        let row = content[k];
        let obj = rowToJSON(header, row);

        list.push(obj);
    }
    return list;

}

/**
 * Extrai o cabeçalho (primeira linha) de um array de linhas de dados CSV.
 *
 * @param {string[][]} dadosCSV - Um array de arrays de strings representando dados CSV, onde cada subarray é uma linha do CSV.
 * @returns {string[]} Um array de strings representando o cabeçalho do CSV. Retorna um array vazio se `dadosCSV` estiver vazio.
 */

function extrairCabecalho(dadosCSV) {
    if (dadosCSV.length > 0) {
        return dadosCSV[0];
    }
    return [];
}

/**
 * Extrai o conteúdo (todas as linhas, exceto a primeira) de um array de linhas de dados CSV.
 *
 * @param {string[][]} dadosCSV - Um array de arrays de strings representando dados CSV, onde cada subarray é uma linha do CSV.
 * @returns {string[][]} Um array de arrays de strings representando o conteúdo do CSV, excluindo a primeira linha. Retorna um array vazio se `dadosCSV` contiver apenas uma linha ou estiver vazio.
 */

function extractContent(dadosCSV) {
    if (dadosCSV.length > 1) {
        return dadosCSV.slice(1);
    }
    return [];
}


function csvToLines(csvText) {
    return csvText.trim().split('\n');

}



module.exports = { contentToJSON, separarTexto, compararArrays, separarEmLetras, separarEmFrases, linesToColumns, rowToJSON, extrairCabecalho, extractContent, csvToLines };
