document.addEventListener("DOMContentLoaded", function() {

    const paragraph = document.querySelector('.reunion');  // El contenedor del PDF
    const canvasContainer = document.createElement('div');
    paragraph.appendChild(canvasContainer);

    const items = document.querySelectorAll(".custom-list li > span");
    items.forEach(span => {
        span.addEventListener("click", function(e) {
            e.stopPropagation();
            const parentLi = this.parentElement;
            const subList = parentLi.querySelector(":scope > ul");
            if (!subList) return;
            const parentUl = parentLi.parentElement;
            // 🔒 Cerrar hermanos (solo mismo nivel)
            const siblings = parentUl.querySelectorAll(":scope > li > ul");
            siblings.forEach(ul => {
                if (ul !== subList) {
                    ul.style.display = "none";
                }
            });
            // 🔁 Toggle del actual
            if (subList.style.display === "none" || subList.style.display === "") {
                subList.style.display = subList.classList.contains("meses") ? "grid" : "block";
            } else {
                subList.style.display = "none";
            }
        });
    });

});