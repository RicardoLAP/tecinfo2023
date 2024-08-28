function imprimirTabuada(numero) {
    
    if (typeof numero !== 'number' || isNaN(numero)) {
        console.log("Entrada inválida");
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}



for (let n = 1; n <= 10; n++) {
    imprimirTabuada(n);
    console.log(); 
}

