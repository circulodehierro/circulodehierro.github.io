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
    const permiso = JSON.parse(localStorage.getItem("permiso"));
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