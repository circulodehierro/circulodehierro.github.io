import { fichas } from '../apis/fichas_api.js';

// Seleccionamos todos los elementos con la clase "icon-item"
const iconItems = document.querySelectorAll('.icon-item');
const fotoFicha = document.querySelector('.div2'); // Div donde se cargará la foto

// Agregamos un evento de clic a cada elemento
iconItems.forEach(item => {
  item.addEventListener('click', () => {
    // Obtenemos el atributo "id" del elemento clicado
    const itemId = item.id;

    // Buscamos la ficha correspondiente en el array
    const fichaSeleccionada = fichas.find(ficha => ficha.idficha == itemId);

    // Verificamos si encontramos una ficha
    if (fichaSeleccionada) {
      // Limpiamos el contenido actual de fotoFicha
      fotoFicha.innerHTML = '';

      // Creamos un elemento <img> para cargar la foto
      const img = document.createElement('img');
      img.src = fichaSeleccionada.foto_usuario; // Usamos la propiedad foto_usuario
      img.alt = `Foto de ${fichaSeleccionada.nombre || 'usuario'}`; // Texto alternativo (opcional)
      img.style.maxWidth = '100%'; // Aseguramos que la imagen sea responsiva

      // Agregamos la imagen al div
      fotoFicha.appendChild(img);
    } else {
      console.error(`No se encontró una ficha con el id ${itemId}`);
    }
  });
});




