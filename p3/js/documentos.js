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

window.onload = function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    var spanElement = document.querySelector('.navbar-right span');
    spanElement.textContent = '¡Bienvenido ' + usuario.nombre + '!';

    let paragraphDiv = document.querySelector('.paragraph');
    let items = document.querySelectorAll('.item-list li');
    paragraphDiv.innerHTML = parrafos.al_iniciar;

    items.forEach(item => {
        item.addEventListener('click', function () {
            let key = this.textContent.trim();

            if (key === "Estatuto Full") {
                paragraphDiv.innerHTML = `
                    <div class="pdf-container">
                        <embed src="../documentos/prueba_circulo.pdf" type="application/pdf" />
                    </div>
                `;
            } else {
                paragraphDiv.innerHTML = parrafos[key] || '<p>Contenido no encontrado.</p>';
            }
        });
    });

    const permiso = JSON.parse(localStorage.getItem("permiso"));
    habilitar_documentos(permiso);
};

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


