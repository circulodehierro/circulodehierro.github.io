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

// Al cargar la página, verifica el estado del modo oscuro
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    var spanElement = document.querySelector('.navbar-right span');
    spanElement.textContent = '¡Bienvenido '+usuario.nombre+'!';

    // Seleccionar el contenedor donde se mostrará el contenido
    let paragraphDiv = document.querySelector('.paragraph');

    // Seleccionar todos los elementos <li>
    let items = document.querySelectorAll('.item-list li');
    paragraphDiv.innerHTML = parrafos.al_iniciar;

    // Agregar evento click a cada <li>
    items.forEach(item => {
        item.addEventListener('click', function () {
            // Obtener el texto del <li> clickeado
            let key = this.textContent.trim();

            // Actualizar el contenido del div con el párrafo correspondiente
            paragraphDiv.innerHTML = parrafos[key] || '<p>Contenido no encontrado.</p>';
        });
    });
    const permiso = JSON.parse(localStorage.getItem("permiso"));
    //console.log(permiso);
    habilitar_documentos(permiso);
};

function habilitar_documentos(permiso) {
    const divs = document.querySelectorAll('.documento');
    // Iterar sobre cada div
    divs.forEach(div => {
        // Obtener el valor del atributo data-value
        const value = parseInt(div.getAttribute('data-value'));
        // Si el valor no está en el array permiso
        if (!permiso.includes(value)) {
            // Ocultar el div
            div.style.display = 'none';
        } else {
            // Mostrar el div si está permitido
            div.style.display = 'block';
        }
    });
}

// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Guardar el estado del modo oscuro en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
}

// Función para direccionar a inicio
function volver_inicio() {
    window.location.href = 'inicio.html';
}

let estatuto_full = `
<p>Parrafo primero</p>
<p>Parrafo segundo y todo lo que venga</p>
`;

let parrafos = {
    al_iniciar: '<p>Click en el Documento para leer.</p>',
    "Estatuto Full": estatuto_full,
    "Estatuto Prospecto": '<p>Este es el contenido del Estatuto Prospecto.</p>',
    "Protocolo Colores": '<p>Este es el contenido del Protocolo Colores.</p>',
    "Protocolo Receso": '<p>Este es el contenido del Protocolo Receso.</p>',
    "Protocolo Retiro": '<p>Este es el contenido del Protocolo Retiro.</p>',
    "Protocolo Expulsión": '<p>Este es el contenido del Protocolo Expulsión.</p>',
    "Protocolo Prestamo": '<p>Este es el contenido del Protocolo Préstamo.</p>'
};
