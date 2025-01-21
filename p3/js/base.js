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
    localStorage.removeItem("usuario");
    window.location.href = '../index.html';
} 

// Al cargar la página, verifica el estado del modo oscuro
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const permiso = JSON.parse(localStorage.getItem("permiso"));
    if (usuario == null || permiso == null){
        cerrarSesion();
    }
// Selecciona el contenedor principal
var navbarRight = document.querySelector('.navbar-right');

// Selecciona el elemento <span>
var spanElement = document.querySelector('.navbar-right span');

// Crea la etiqueta <img>
var imgElement = document.createElement('img');

// Configura la imagen
imgElement.src = '../images/user1.jpeg'; // Asegúrate de que esta ruta sea correcta
imgElement.style.width = '35px'; // Ancho de la imagen
imgElement.style.height = '35px'; // Alto de la imagen
imgElement.style.border = '2px solid red'; // Borde rojo
imgElement.style.borderRadius = '50%'; // Imagen redondeada
imgElement.style.marginRight = '10px'; // Espaciado a la derecha

// Inserta la imagen antes del <span>
navbarRight.insertBefore(imgElement, spanElement);

// Modifica el contenido del <span>
spanElement.textContent = '¡Bienvenido ' + usuario.nombre + '!';

    const url = window.location.href;
    const lastSlashIndex = url.lastIndexOf('/'); // Encuentra el último "/"

    // Extrae desde el último "/" hasta el final
    const result = url.slice(lastSlashIndex + 1);

    //console.log(result);
    if (result != 'eventos.html' && result != 'cuotas.html' && result != 'turnos.html' && result != 'fichas.html' && result != 'reuniones.html') {
        habilitar_div(permiso);
    }
    
};

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