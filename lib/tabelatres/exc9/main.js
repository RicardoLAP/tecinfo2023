function fatorialRecursivo(n) {
    
    if (typeof n !== 'number' || isNaN(n) || n < 0 || !Number.isInteger(n)) {
        return "Entrada inválida";
    }

    
    if (n === 0) {
        return 1;
    }

    
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));  
console.log(fatorialRecursivo(0));  
console.log(fatorialRecursivo(3));  
console.log(fatorialRecursivo(12)); 
