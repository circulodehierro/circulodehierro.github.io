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
    //console.log(permiso);
    habilitar_div(permiso);
};

function habilitar_div(permiso) {
    const divs = document.querySelectorAll('.featured');
    // Iterar sobre cada div
    divs.forEach(div => {
        // Obtener el valor del atributo data-value
        const value = parseInt(div.getAttribute('data-value'));
        // Si el valor no está en el array permiso
        if (!permiso.includes(value)) {
            // Añadir la clase 'disabled' al div
            div.classList.add('disabled');
            // Evitar el clic en el div deshabilitado
            div.onclick = (e) => e.preventDefault(); // Opcional para evitar acciones adicionales
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
// Función para direccionar a los Documentos
function documentos() {
    window.location.href = 'documentos.html';
}
// Función para direccionar a los Movimientos
function movimientos() {
    window.location.href = 'movimientos.html';
}
// Función para direccionar a las Reuniones
function reuniones() {
    window.location.href = 'reuniones.html';
}
// Función para direccionar a los Eventos
function eventos() {
    window.location.href = 'eventos.html';
}
// Función para direccionar a las Fichas
function fichas() {
    window.location.href = 'fichas.html';
}
// Función para direccionar a los Turnos
function turnos() {
    window.location.href = 'turnos.html';
}
// Función para direccionar a las Cuotas
function cuotas() {
    window.location.href = 'cuotas.html';
}