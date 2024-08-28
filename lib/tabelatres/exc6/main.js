function ehPrimo(numero) {
    
    if (typeof numero !== 'number' || isNaN(numero) || !Number.isInteger(numero)) {
        return "Entrada inválida";
    }

    
    if (numero <= 1) {
        return false;
    }

    
    if (numero === 2) {
        return true;
    }

    
    if (numero % 2 === 0) {
        return false;
    }

    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(ehPrimo(7));  
console.log(ehPrimo(10)); 
console.log(ehPrimo(13)); 
console.log(ehPrimo(0));  
console.log(ehPrimo(1));  
console.log(ehPrimo(2)); 
