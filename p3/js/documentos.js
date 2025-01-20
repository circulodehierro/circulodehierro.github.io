window.onload = function () {
    const iconContainer = document.querySelector('.icon-container');
    if (iconContainer) {
        // Desplazamos el contenedor al principio
        iconContainer.scrollLeft = 0;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    let scale = 1.0;  // Variable para manejar el nivel de zoom
    const paragraph = document.querySelector('.paragraph');  // El contenedor del PDF
    const canvasContainer = document.createElement('div');
    paragraph.appendChild(canvasContainer);
    let new_url = '';
    let nombre_documento = '';

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

    // Agregar evento al botón con ID "estatutosFull"
    const estatutosFullBtn = document.getElementById('estatutosFull');
    const solcitudColoresBtn = document.getElementById('solcitudColores');
    if (estatutosFullBtn) {
        estatutosFullBtn.addEventListener('click', function () {
            new_url = '../documentos/prueba_circulo.pdf';
            nombre_documento = 'estatutos_full.pdf';
            cargarPDF(new_url); // Solo carga el PDF al hacer clic en el botón
            // Cambiar display de las clases "control" y "paragraph"
            const controlElements = document.querySelectorAll('.controls');
            controlElements.forEach(element => {
                element.style.display = 'block';
            });
            paragraph.style.display = 'block'; // Asegurarse de mostrar el contenedor del PDF
        });
    }
    if (solcitudColoresBtn) {
        solcitudColoresBtn.addEventListener('click', function () {
            new_url = '../documentos/solicitud_colores.pdf';
            nombre_documento = 'solicitud_colores.pdf';
            cargarPDF(new_url); // Solo carga el PDF al hacer clic en el botón
            // Cambiar display de las clases "control" y "paragraph"
            const controlElements = document.querySelectorAll('.controls');
            controlElements.forEach(element => {
                element.style.display = 'block';
            });
            paragraph.style.display = 'block'; // Asegurarse de mostrar el contenedor del PDF
        });
    }

    // Función de descarga
    const downloadBtn = document.querySelector('#downloadPDF');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.href = new_url;  // Usar la URL actual del PDF
            link.download = nombre_documento || 'documento.pdf';  // Usar el nombre dinámico o uno por defecto
            link.click();  // Inicia la descarga
        });
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
