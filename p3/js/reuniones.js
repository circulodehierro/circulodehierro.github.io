document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".custom-list li > span");

    items.forEach(span => {
        span.addEventListener("click", function(e) {
            e.stopPropagation(); // evita conflictos

            const parentLi = this.parentElement;
            const subList = parentLi.querySelector(":scope > ul");

            if (subList) {
                // toggle
                if (subList.style.display === "none" || subList.style.display === "") {
                    subList.style.display = "block";
                } else {
                    subList.style.display = "none";
                }
            }
        });
    });
});