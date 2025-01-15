async function carregarCards(tipoFiltro) {
    try {
        const response = await fetch('./assets/JSON/cards.json'); // Caminho para o arquivo JSON
        const cards = await response.json(); // Parse do JSON

        console.log(cards); // Verifique se o JSON foi carregado corretamente

        // Filtra os cards com base no tipo (se fornecido)
        const cardsFiltrados = tipoFiltro ? cards.filter(card => card.tipo === tipoFiltro) : cards;

        criarCards(cardsFiltrados); // Chama a função para criar os cards com os dados filtrados
    } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
    }
}

function criarCards(cards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpa os cards existentes antes de adicionar novos

    cards.forEach(card => {
        // Verifique se a imagem foi fornecida corretamente
        if (card.img === undefined || card.img === "") {
            console.error("Imagem não encontrada para o card:", card);
            return; // Se a imagem não estiver definida, pula para o próximo card
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

        // Adicionando o card ao container
        container.appendChild(divCard);
    });
}

// Lógica para buscar o tipo no HTML
window.onload = function() {
    const tipoDefinido = document.getElementById('cards-container').getAttribute('data-tipo');
    carregarCards(tipoDefinido); // Carrega os cards com base no tipo
};
