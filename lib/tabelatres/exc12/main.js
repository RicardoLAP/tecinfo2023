function imprimirTabuada(numero) {
    
    if (typeof numero !== 'number' || isNaN(numero)) {
        console.log("Entrada inválida");
        return;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


imprimirTabuada(2);

imprimirTabuada(10);
