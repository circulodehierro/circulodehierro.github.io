// Al cargar la página, verifica el estado del modo oscuro
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    var spanElement = document.querySelector('.navbar-right span');
    spanElement.textContent = '¡Bienvenido '+usuarioGuardado.nombre+'!';
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