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
            // Establecer display: none para ocultar el div
            div.style.display = 'none';
            // Evitar el clic en el div oculto (opcional)
            div.onclick = (e) => e.preventDefault(); 
        } else {
            // Asegurarse de que el div visible tenga display: block (o el valor original de visualización)
            div.style.display = ''; // Esto restaurará el valor de display original
        }
    });
}

