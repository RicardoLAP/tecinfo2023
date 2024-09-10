

/**
 * 
 * @param {string} csvString 
 * @returns {string[]}  
 */
function csvToLines(csvString) {
    return csvString.split('\n');
}


module.exports = { csvToLines };
