window.onload = function() {
    const iconContainer = document.querySelector('.icon-container');
    // Desplazamos el contenedor al principio
    iconContainer.scrollLeft = 0;
};
function habilitar_div(permiso) {
    const divs = document.querySelectorAll('.icon-item');
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