function verificarParOuImpar(numero) {
    
    if (typeof numero !== 'number' || isNaN(numero)) {
        return "Entrada inválida";
    }

    
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}


console.log(verificarParOuImpar(4));  
console.log(verificarParOuImpar(7));  
console.log(verificarParOuImpar(0));  
console.log(verificarParOuImpar(-5)); 
