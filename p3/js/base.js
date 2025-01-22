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

imgElement.src = usuario.foto_usuario; // Asegúrate de que esta ruta sea correcta
imgElement.style.width = '40px'; // Ancho de la imagen
imgElement.style.height = '40px'; // Alto de la imagen
imgElement.style.border = '2px solid #b07b45'; // Borde rojo
imgElement.style.borderRadius = '50%'; // Imagen redondeada
imgElement.style.marginLeft = '10px'; // Espaciado a la izquierda
imgElement.style.cursor = 'pointer'; // Cambio de cursor al pasar sobre la imagen

// Crea el menú de usuario (inicialmente oculto)
var menuElement = document.createElement('div');
menuElement.style.display = 'none'; // Ocultarlo inicialmente
menuElement.style.position = 'absolute'; // Posición absoluta para que aparezca sobre otros elementos
menuElement.style.backgroundColor = '#b07b45'; // Fondo naranjo
menuElement.style.border = '1px solid #ccc'; // Borde gris
menuElement.style.padding = '10px'; // Espaciado interno
menuElement.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Sombra para darle efecto de menú desplegable
menuElement.style.borderRadius = '5px'; // Esquinas redondeadas
menuElement.style.top = '60px';
menuElement.style.right = '10px';
menuElement.style.zIndex = '1000';

// Añadir el botón de "Cerrar sesión" al menú
var logoutButton = document.createElement('a');
logoutButton.style.textDecoration = 'none'; // Quita el subrayado
logoutButton.style.color = 'black';
logoutButton.href = '#';
logoutButton.textContent = 'Cerrar Sesión';
logoutButton.setAttribute('onclick', 'cerrarSesion(); return false;');
menuElement.appendChild(logoutButton);

// Inserta la imagen después del mensaje de bienvenida
navbarRight.insertBefore(imgElement, spanElement.nextSibling);

// Inserta el menú al contenedor de la barra
navbarRight.appendChild(menuElement);

// Modifica el contenido del <span>
spanElement.textContent = '¡Bienvenido ' + usuario.nombre + '!';

// Añade el evento de clic a la imagen para mostrar/ocultar el menú con efecto slide
imgElement.addEventListener('click', function () {
    if (menuElement.style.display === 'none' || menuElement.style.display === '') {
        menuElement.style.display = 'block'; // Mostrar el menú
    } else {
        menuElement.style.display = 'none'; // Ocultar el menú
    }
});

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