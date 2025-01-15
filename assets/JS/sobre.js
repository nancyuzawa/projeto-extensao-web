// Função para carregar os dados JSON
fetch('../JSON/servicos.json')
.then(response => response.json())
.then(data => {
    
    const container = document.getElementById('servicosContainer');

    // Para cada serviço no JSON, cria um novo card
    data.forEach(servico => {
       
        const card = document.createElement('div');
        card.classList.add('card');

        // Monta o HTML do card
        card.innerHTML = `
            <div class="containerGeral"> 
                <div class="servHeader">
                    <div class="img"><img src="${servico.imagem}" alt="${servico.titulo}"></div>
                    <div class="titulo"><h3>${servico.titulo}</h3></div>
                </div>
                <div class="descricao">
                    <p>${servico.descricao}</p>
                </div>
            </div>
        `;

        // Adiciona o card ao container
        container.appendChild(card);
    });
})
.catch(error => console.error('Erro ao carregar os dados:', error));
