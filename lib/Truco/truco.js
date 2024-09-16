function converterParaJson(data) {
    const obj = data.json();
    return obj;
}

function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "suit"]);
    console.log("restam", json.remaining, "cartas")
}


fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=4C,7H,AS,7D,3C,3H,3S,3D,2C,2H,2S,2D,AC,AH,AS,AD,KC,QC,JC,KH,QH,JH,KS,QS,JS,KD,QD,JD')
    .then(converterParaJson)
    .then(imprimeTabela);