
const deckId = "7jy81w15adoa";
const deck = new Deck(deckId);

function Deck(deckId) {
    this.deckId = deckId;
    this.listOfCards = "4C,7H,AS,7D,3C,3H,3S,3D,2C,2H,2S,2D,AC,AH,AD,KC,KH,KS,KD,JC,JH,JS,JD,QC,QH,QS,QD";

    this.gerarBaralho = function () {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?cards=${this.listOfCards}`)
            .then(function (response) {
                const jsonData = response.json();
                return jsonData;
            })
            .then(atualizaInfo)
            .then(setDeckId)
            .catch(erro => alert(erro));
    }

    this.olharCartas = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`)
            .then((response) => {
                return response.json()
            })
            .then(atualizaInfo)
            .then(mostraCartas)
            .catch(erro => alert(erro));
    }

    this.reembaralhar = function () {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=false`)
            .then(response => response.json())
            .then(atualizaInfo)
            .catch(erro => alert(erro));
    }

    const setDeckId = (jsonData) => {
        this.deckId = jsonData.deck_id;

        return jsonData;
    }
}

const atualizaInfo = (jsonData) => {
    if (!jsonData.success)
        throw new Error("Oops! Tente reembaralhar as cartas");

    const deck_id = jsonData.deck_id;
    const remaining = jsonData.remaining;

    const info1 = document.getElementById("deck_id");
    const info2 = document.getElementById("remaining");

    info1.innerText = deck_id;
    info2.innerText = remaining;

    return jsonData;
}


function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "suit"]);
    console.log("Restam", json.remaining, "cartas");
}


function constroiCarta(cardId, cardImage) {
    const card = document.getElementById(cardId);

    let img = card.querySelector('img');
    if (img == null) img = document.createElement('img');

    img.setAttribute('src', cardImage);
    card.append(img);
}

// function getJsonData(response) {
//     return response.json();
// }

function mostraCartas(jsonData) {
    const cards = jsonData.cards;

    for (let i = 0; i < cards.length; i++) {
        const cardId = `card${i + 1}`;
        const cardImage = cards[i].image;

        constroiCarta(cardId, cardImage);
    }
}
