function somarArray(arr) {
    return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}



console.log(somarArray([1, 2, 3, 4, 5])); 
console.log(somarArray([2, 4, 6, 8]));    
console.log(somarArray([1, 3, 5, 7]));    
