function classificarAluno(media) {
    
    if (typeof media !== 'number' || isNaN(media)) {
        return "Entrada inválida";
    }

    
    const criterioAprovacao = 7.0;

    
    if (media >= criterioAprovacao) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


console.log(classificarAluno(10));    
console.log(classificarAluno(7.0));   
console.log(classificarAluno(6.95));  
console.log(classificarAluno(8.8));   
console.log(classificarAluno(0));     
console.log(classificarAluno(2.725)); 
