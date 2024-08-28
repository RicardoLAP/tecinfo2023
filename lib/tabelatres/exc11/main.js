function eBissexto(ano) {
    
    if (typeof ano !== 'number' || isNaN(ano) || !Number.isInteger(ano)) {
        return "Entrada inválida";
    }

    
    if (ano % 4 === 0) {
        
        if (ano % 100 === 0) {
            
            if (ano % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}


console.log(eBissexto(2020));  
console.log(eBissexto(2024));  
console.log(eBissexto(1999));  
console.log(eBissexto(2014));  
console.log(eBissexto(2025));  
console.log(eBissexto(1900));  
console.log(eBissexto(2000));  
console.log(eBissexto(2100));  
