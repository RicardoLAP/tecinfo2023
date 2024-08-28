function ePalindromo(str) {

    const strLimpa = str.replace(/\s+/g, '').toLowerCase();


    const strInvertida = strLimpa.split('').reverse().join('');


    return strLimpa === strInvertida;
}


console.log(ePalindromo("arara"));
console.log(ePalindromo("hello"));
console.log(ePalindromo("madam"));   
