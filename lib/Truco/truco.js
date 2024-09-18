function converterParaJson(data) {
    return data.json(); // Simplesmente retorna o objeto JSON
}

function imprimeTabela(json) {
    console.table(json.cards, ["code", "image", "value", "suit"]);
    console.log("Restam", json.remaining, "cartas");
}

function mostrarCartas(cards) {
    if (!cards || cards.length < 3) {
        console.error('Erro: Não há cartas suficientes para exibir.');
        return; // Sai da função se não houver cartas
    }

    // Limpa as cartas antigas antes de adicionar as novas
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    card1.innerHTML = '';
    card2.innerHTML = '';
    card3.innerHTML = '';

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.setAttribute('src', cards[0].image);
    img2.setAttribute('src', cards[1].image);
    img3.setAttribute('src', cards[2].image);

    card1.append(img1);
    card2.append(img2);
    card3.append(img3);
}

function extrairCartas(jsonData) {
    return jsonData.cards; // Extrai diretamente as cartas do JSON
}

function imprimeCartas(json) {
    const cards = extrairCartas(json);
    if (!cards || cards.length < 3) {
        console.error('Erro: A API retornou menos cartas do que o esperado.');
        return;
    }
    mostrarCartas(cards);
    imprimeTabela(json);
}

function reembaralhar() {
    fetch('https://deckofcardsapi.com/api/deck/7jy81w15adoa/return/')
        .then(converterParaJson)
        .then(function (jsonData) {
            console.log(jsonData); // Exibe os dados retornados no console
        });
}

// Função para buscar e exibir cartas continuamente após o refresh
function buscarCartas() {
    fetch('https://deckofcardsapi.com/api/deck/7jy81w15adoa/draw/?count=3')
        .then(converterParaJson)
        .then(imprimeCartas)
        .catch(error => console.error('Erro ao buscar cartas:', error));
}



// Iniciar a busca automática de cartas após o refresh
buscarCartasPeriodicamente();

fetch('https://deckofcardsapi.com/api/deck/7jy81w15adoa/draw/?count=3')
    .then(converterParaJson)
    .then(json => {
        console.log('Resposta da API:', json);
    });
