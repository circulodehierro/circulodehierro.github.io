window.onload = function () {
    const iconContainer = document.querySelector('.icon-container');
    if (iconContainer) {
        // Desplazamos el contenedor al principio
        iconContainer.scrollLeft = 0;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const botonEstatutosFull = document.querySelector('#estatutosFull');
    if (botonEstatutosFull) {
        botonEstatutosFull.addEventListener('click', cargarPDF);
    } else {
        console.error("No se encontró el botón 'Estatutos Full'");
    }

    function cargarPDF() {
        const url = '../documentos/prueba_circulo.pdf';
        const paragraph = document.querySelector('.paragraph');

        if (paragraph) {
            paragraph.innerHTML = '';

            pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
                const pdfDoc = pdfDoc_;
                const totalPages = pdfDoc.numPages;
                const canvasContainer = document.createElement('div');
                paragraph.appendChild(canvasContainer);

                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    const canvas = document.createElement('canvas');
                    canvasContainer.appendChild(canvas);
                    renderPage(pageNum, canvas);
                }

                function renderPage(pageNum, canvas) {
                    pdfDoc.getPage(pageNum).then(function (page) {
                        const context = canvas.getContext('2d');
                        const viewport = page.getViewport({ scale: 1.0 });
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
    }
});



function habilitar_div(permiso) {
    const divs = document.querySelectorAll('.icon-item');
    // Iterar sobre cada div
    divs.forEach(div => {
        // Obtener el valor del atributo data-value
        const value = parseInt(div.getAttribute('data-value'));
        // Si el valor no está en el array permiso
        if (!permiso.includes(value)) {
            // Establecer display: none para ocultar el div
            div.style.display = 'none';
            // Evitar el clic en el div oculto (opcional)
            div.onclick = (e) => e.preventDefault();
        } else {
            // Asegurarse de que el div visible tenga display: block
            div.style.display = ''; // Restaurar valor de display original
        }
    });
}

// Función para cambiar el color del texto según el modo
function cambiarColorTexto() {
    const iconItems = document.querySelectorAll('.icon-item span');
    const modoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Verificar si hay elementos para actualizar
    if (iconItems.length > 0) {
        iconItems.forEach(span => {
            if (modoOscuro) {
                // Si está en modo oscuro, poner el texto en blanco
                span.style.color = 'white !important';
            } else {
                // Si está en modo claro, poner el texto en negro
                span.style.color = 'black !important';
            }
        });
    }
}

// Ejecutar la función al cargar la página para ajustar el color inicial
cambiarColorTexto();

// Escuchar cambios en la preferencia del esquema de color
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (mediaQuery.addEventListener) {
    // Método moderno
    mediaQuery.addEventListener('change', cambiarColorTexto);
} else if (mediaQuery.addListener) {
    // Fallback para navegadores antiguos
    mediaQuery.addListener(cambiarColorTexto);
}
