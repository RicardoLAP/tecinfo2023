function determinarNota(porcentagem) {
    
    if (typeof porcentagem !== 'number' || isNaN(porcentagem) || porcentagem < 0 || porcentagem > 100) {
        return "Entrada inválida";
    }

    
    if (porcentagem >= 90) {
        return "A";
    } else if (porcentagem >= 80) {
        return "B";
    } else if (porcentagem >= 70) {
        return "C";
    } else if (porcentagem >= 60) {
        return "D";
    } else {
        return "F";
    }
}


console.log(determinarNota(90));  
console.log(determinarNota(75));  
console.log(determinarNota(60));  
console.log(determinarNota(0));   
console.log(determinarNota(59));  
console.log(determinarNota(89));  
console.log(determinarNota(69)); 
console.log(determinarNota(79));  
console.log(determinarNota(99));  
