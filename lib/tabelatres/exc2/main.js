function encontrarMenorDeTres(a, b, c) {
    
    let menor = a;

    
    if (b < menor) {
        menor = b;
    }

    
    if (c < menor) {
        menor = c;
    }

    return menor;
}


console.log(encontrarMenorDeTres(3, 7, 5)); 
console.log(encontrarMenorDeTres(-1, -5, -3)); 
console.log(encontrarMenorDeTres(8, 2, 10)); 
