import { fichas } from '../apis/fichas_api.js';
//const usuario = JSON.parse(localStorage.getItem("usuario"));
document.addEventListener('DOMContentLoaded', () => {
    var header = document.querySelector('.row.header');
    let imagesLoaded = 0;

    for (let i = 0; i < fichas.length; i++) {
      var foto_user = document.createElement('img');
      // Asigna una fuente a la imagen
      foto_user.src = fichas[i].foto_usuario; 
      // Aplica los estilos necesarios
      foto_user.style.width = '50px';
      foto_user.style.height = '50px';
      foto_user.style.borderRadius = '30%';
      foto_user.style.border = '2px solid black';
      foto_user.style.margin = '15px'; 
      // Escucha el evento de carga de cada imagen
      foto_user.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === fichas.length) {
              // Ajusta el scroll una vez que todas las imágenes estén cargadas
              header.scrollLeft = 0;
          }
      };
      // Inserta la imagen en el header
      header.appendChild(foto_user);
    }
});
