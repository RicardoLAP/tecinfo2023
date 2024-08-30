function contarVogais(str) {

    const vogais = /[aeiou]/gi;


    const final = str.match(vogais);


    return final ? final.length : 0;
}


console.log(contarVogais("hello"));
console.log(contarVogais("javascript"));
console.log(contarVogais("aeiou"));      
