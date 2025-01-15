async function carregarCards(tipoFiltro) {
    try {
        const response = await fetch('../JSON/sobre.json'); // Caminho para o arquivo JSON
        const servicos = await response.json(); // Parse do JSON

        console.log(servicos); // Verifique se o JSON foi carregado corretamente

        // Filtra os cards com base no tipo (se fornecido)
        const servicosFiltrados = tipoFiltro ? servicos.filter(servico => servico.tipo === tipoFiltro) : servicos;

        criarCards(servicosFiltrados); // Chama a função para criar os cards com os dados filtrados
    } catch (error) {
        console.error('Erro ao carregar os dados do JSON:', error);
    }
}

function criarCards(servicos) {
    const container = document.getElementById('servicosContainer');
    container.innerHTML = ''; // Limpa os cards existentes antes de adicionar novos

    servicos.forEach(servico => {
        // Verifique se a imagem foi fornecida corretamente
        if (servico.imagem === undefined || servico.imagem === "") {
            console.error("Imagem não encontrada para o card:", servico);
            return; // Se a imagem não estiver definida, pula para o próximo card
        }

        // Criação do elemento card
        const divCard = document.createElement('div');
        divCard.classList.add('servHeader');

        // Imagem do card
        const divImg = document.createElement('div');
        divImg.classList.add('img');
        const img = document.createElement('img');
        img.src = servico.imagem;
        img.alt = servico.nome;
        divImg.appendChild(img);

        // Título do card
        const divTitulo = document.createElement('div');
        divTitulo.classList.add('titulo');
        divTitulo.textContent = servico.nome;

        // Descrição do card
        const divDescricao = document.createElement('div');
        divDescricao.classList.add('descricao');
        divDescricao.textContent = servico.descricao;

        // Adicionando os elementos ao card
        divCard.appendChild(divImg);
        divCard.appendChild(divTitulo);
        divCard.appendChild(divDescricao);

        // Adicionando o card ao container
        container.appendChild(divCard);
    });
}

// Lógica para buscar o tipo no HTML
window.onload = function() {
    const tipoDefinido = document.getElementById('servicosContainer').getAttribute('data-tipo');
    carregarCards(tipoDefinido); // Carrega os cards com base no tipo
};
