function somaAteN(N) {
    
    if (typeof N !== 'number' || isNaN(N) || N < 1 || !Number.isInteger(N)) {
        return "Entrada inválida";
    }

    
    return (N * (N + 1)) / 2;
}


console.log(somaAteN(5));   
console.log(somaAteN(10));  
console.log(somaAteN(1));   
console.log(somaAteN(64));  
