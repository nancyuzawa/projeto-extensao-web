document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu li");
    const contentItems = document.querySelectorAll(".content-item");

    
    const defaultContent = "sobre"; 
    const defaultMenuItem = document.querySelector(`[data-content="${defaultContent}"]`);
    const defaultContentItem = document.getElementById(defaultContent);

    if (defaultMenuItem && defaultContentItem) {
        defaultMenuItem.classList.add("active");
        defaultContentItem.classList.add("active");
    }

    
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            
            menuItems.forEach(menu => menu.classList.remove("active"));
            contentItems.forEach(content => content.classList.remove("active"));

            
            const contentId = item.getAttribute("data-content");
            const contentToShow = document.getElementById(contentId);

            if (contentToShow) {
                item.classList.add("active"); 
                contentToShow.classList.add("active"); 
            }
        });
    });
});