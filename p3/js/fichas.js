import { fichas } from '../apis/fichas_api.js';
//const usuario = JSON.parse(localStorage.getItem("usuario"));
document.addEventListener('DOMContentLoaded', () => {
    var header = document.querySelector('.header');
    
    // Agregar imágenes
    for (let i = 0; i < fichas.length; i++) {
        var foto_user = document.createElement('img');
        foto_user.src = fichas[i].foto_usuario;
        foto_user.style.width = '50px';
        foto_user.style.height = '50px';
        foto_user.style.borderRadius = '30%';
        foto_user.style.border = '2px solid black';
        foto_user.style.margin = '2px';
        header.appendChild(foto_user);
    }

    // Asegurarnos de que el scroll comience desde el inicio
    setTimeout(() => {
        header.scrollLeft = 0;  // Desplazar al principio
    }, 500);  // Usamos un pequeño retraso para permitir que el DOM se renderice correctamente

    // Ajustar el scroll al principio cuando cambie el tamaño de la ventana
    window.addEventListener('resize', () => {
        setTimeout(() => {
            header.scrollLeft = 0;  // Volver al principio
        }, 500);  // Espera un poco para asegurarse de que el contenido se haya redibujado
    });
});
