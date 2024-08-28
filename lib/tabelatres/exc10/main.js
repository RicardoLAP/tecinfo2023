function verificarCaractere(caractere) {
    
    if (typeof caractere !== 'string' || caractere.length !== 1) {
        return "Entrada inválida";
    }

    
    const charLower = caractere.toLowerCase();

    
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    
    if (charLower >= 'a' && charLower <= 'z') {
        
        if (vogais.includes(charLower)) {
            return "Vogal";
        } else {
            return "Consoante";
        }
    } else {
        return "Entrada inválida";
    }
}


console.log(verificarCaractere("a")); 
console.log(verificarCaractere("b")); 
console.log(verificarCaractere("e")); 
console.log(verificarCaractere("x")); 
console.log(verificarCaractere("y")); 