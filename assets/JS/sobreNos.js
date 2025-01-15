document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu li");
    const contentItems = document.querySelectorAll(".content-item");

    // Configurar o item inicial ativo (exemplo: Sobre Nós)
    const defaultContent = "sobre"; // ID do conteúdo inicial
    const defaultMenuItem = document.querySelector(`[data-content="${defaultContent}"]`);
    const defaultContentItem = document.getElementById(defaultContent);

    if (defaultMenuItem && defaultContentItem) {
        defaultMenuItem.classList.add("active");
        defaultContentItem.classList.add("active");
    }

    // Adicionar evento de clique aos itens do menu
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remover a classe ativa de todos os itens
            menuItems.forEach(menu => menu.classList.remove("active"));
            contentItems.forEach(content => content.classList.remove("active"));

            // Adicionar a classe ativa ao item e conteúdo correspondente
            const contentId = item.getAttribute("data-content");
            const contentToShow = document.getElementById(contentId);

            if (contentToShow) {
                item.classList.add("active"); // Destaque no menu
                contentToShow.classList.add("active"); // Mostrar o conteúdo
            }
        });
    });
});