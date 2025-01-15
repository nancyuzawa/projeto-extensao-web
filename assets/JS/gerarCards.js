async function carregarCards(tipoFiltro) {
    try {
        const response = await fetch('./assets/JSON/cards.json'); 
        const cards = await response.json();

        console.log(cards); 

        
        const cardsFiltrados = tipoFiltro ? cards.filter(card => card.tipo === tipoFiltro) : cards;

        criarCards(cardsFiltrados); 
    } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
    }
}

function criarCards(cards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    cards.forEach(card => {
        
        if (card.img === undefined || card.img === "") {
            console.error("Imagem não encontrada para o card:", card);
            return; 
        }

        // Criação do elemento card
        const divCard = document.createElement('div');
        divCard.classList.add('card');

        // Imagem do card
        const divImg = document.createElement('div');
        divImg.classList.add('img');
        const img = document.createElement('img');
        img.src = card.img;
        img.alt = "";
        divImg.appendChild(img);

        // Data do card
        const divData = document.createElement('div');
        divData.classList.add('data');
        const pData = document.createElement('p');
        pData.textContent = card.data;
        divData.appendChild(pData);

        // Título do card
        const divTitulo = document.createElement('div');
        divTitulo.classList.add('titulo');
        divTitulo.textContent = card.titulo;

        // Adicionando os elementos ao card
        divCard.appendChild(divImg);
        divCard.appendChild(divData);
        divCard.appendChild(divTitulo);

        
        container.appendChild(divCard);
    });
}


window.onload = function() {
    const tipoDefinido = document.getElementById('cards-container').getAttribute('data-tipo');
    carregarCards(tipoDefinido); 
};
