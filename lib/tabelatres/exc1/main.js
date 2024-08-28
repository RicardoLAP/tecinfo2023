function verificarNumero(valor) {
    let numero = Number(valor);

    if (isNaN(numero)) {
        return "Entrada inválida"; 

    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}


console.log(verificarNumero(5)); 
console.log(verificarNumero(-3)); 
console.log(verificarNumero(0)); 
console.log(verificarNumero("1110")); 
console.log(verificarNumero("-987654321")); 
console.log(verificarNumero("abc")); 
