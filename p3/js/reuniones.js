document.addEventListener("DOMContentLoaded", function() {
    let scale = 3.0;  // Variable para manejar el nivel de zoom
    const paragraph = document.querySelector('.reunion');  // El contenedor del PDF
    const canvasContainer = document.createElement('div');
    paragraph.appendChild(canvasContainer);
    let new_url = '';
    let nombre_documento = '';

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

     // Función para cargar y mostrar el PDF
    function cargarPDF(url) {
        pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
            const pdfDoc = pdfDoc_;
            const totalPages = pdfDoc.numPages;
            // Limpiar el contenido del contenedor antes de renderizar las páginas
            canvasContainer.innerHTML = '';
            for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                const canvas = document.createElement('canvas');
                canvasContainer.appendChild(canvas);
                renderPage(pageNum, canvas);
            }
            function renderPage(pageNum, canvas) {
                pdfDoc.getPage(pageNum).then(function (page) {
                    const context = canvas.getContext('2d');                   
                    const viewport = page.getViewport({ scale: scale });  // Usar la escala actual
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    page.render({
                        canvasContext: context,
                        viewport: viewport
                    });
                });
            }
        }).catch(function (error) {
            console.error('Error al cargar el PDF: ', error);
        });
    }

    document.querySelectorAll('.custom-list span').forEach(span => {
        span.addEventListener('click', function(e) {
            const url = this.dataset.pdf;
                if (!url) return;
                cargarPDF(url);
            const controlElements = document.querySelectorAll('.controls');
            controlElements.forEach(element => {
                element.style.display = 'block';
            });
            paragraph.style.display = 'block';
        });
    });

});