function saoAnagramas(str1, str2) {

    const processarString = (str) =>
        str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');


    const str1Processada = processarString(str1);
    const str2Processada = processarString(str2);


    return str1Processada === str2Processada;
}

console.log(saoAnagramas("listen", "silent"));
console.log(saoAnagramas("hello", "world"));
console.log(saoAnagramas("evil", "vile"));     
