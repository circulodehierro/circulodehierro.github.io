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