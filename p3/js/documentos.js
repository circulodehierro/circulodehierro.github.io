function logo() {
    // Alternar una clase en el body para cambiar el modo
    document.body.classList.toggle('dark-mode');
    // Guardar el estado del modo en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
}

function cerrarSesion() {
    // Redirigir al index.html
    window.location.href = '../index.html';
} 

document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    var spanElement = document.querySelector('.navbar-right span');
    spanElement.textContent = '¡Bienvenido ' + usuario.nombre + '!';

    let paragraphDiv = document.querySelector('.paragraph');
    let items = document.querySelectorAll('.item-list li');
    paragraphDiv.innerHTML = parrafos.al_iniciar;

    items.forEach(item => {
        item.addEventListener('click', function () {
            let key = this.textContent.trim();
            let url = "";
            if (key === "Estatuto Full") {
                url = "../documentos/prueba_circulo.pdf";
                // Limpiar el contenedor antes de cargar un nuevo PDF
                paragraphDiv.innerHTML = ''; 
                // Llamar a cargarPDF para renderizar el PDF en el contenedor
                cargarPDF(url);
            } else {
                paragraphDiv.innerHTML = parrafos[key] || '<p>Contenido no encontrado.</p>';
            }
        });
    });

    const permiso = JSON.parse(localStorage.getItem("permiso"));
    habilitar_documentos(permiso);
});

function cargarPDF(url) {
    const container = document.getElementById('pdf-container');
    if (!container) {
        console.error('Contenedor no encontrado.');
        return;
    }

    console.log('Cargando PDF desde:', url);

    // Limpiar el contenedor antes de cargar el PDF
    container.innerHTML = '';

    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        const totalPages = pdf.numPages;
        console.log('Número total de páginas:', totalPages);

        // Renderizar la primera página primero
        renderPage(pdf, 1);

        // Función para renderizar una página específica
        function renderPage(pdf, pageNum) {
            pdf.getPage(pageNum).then(function(page) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1 });

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise.then(function() {
                    console.log('Página ' + pageNum + ' renderizada');
                });

                container.appendChild(canvas);
            }).catch(function(error) {
                console.error('Error al renderizar la página ' + pageNum, error);
            });
        }
    }).catch(function(error) {
        console.error('Error al cargar el PDF: ', error);
    });
}


function habilitar_documentos(permiso) {
    const divs = document.querySelectorAll('.documento');
    divs.forEach(div => {
        const value = parseInt(div.getAttribute('data-value'));
        if (!permiso.includes(value)) {
            div.style.display = 'none';
        } else {
            div.style.display = 'block';
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

function volver_inicio() {
    window.location.href = 'inicio.html';
}

let parrafos = {
    al_iniciar: '<p>Click en el Documento para leer.</p>',
    "Estatuto Prospecto": '<p>Este es el contenido del Estatuto Prospecto.</p>',
    "Protocolo Colores": '<p>Este es el contenido del Protocolo Colores.</p>',
    "Protocolo Receso": '<p>Este es el contenido del Protocolo Receso.</p>',
    "Protocolo Retiro": '<p>Este es el contenido del Protocolo Retiro.</p>',
    "Protocolo Expulsión": '<p>Este es el contenido del Protocolo Expulsión.</p>',
    "Protocolo Prestamo": '<p>Este es el contenido del Protocolo Préstamo.</p>'
};


