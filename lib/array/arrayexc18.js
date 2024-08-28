function contarVogais(str) {

    const regex = /[aeiou]/gi;


    const correspondencias = str.match(regex);


    return correspondencias ? correspondencias.length : 0;
}


console.log(contarVogais("hello"));
console.log(contarVogais("javascript"));
console.log(contarVogais("aeiou"));      
