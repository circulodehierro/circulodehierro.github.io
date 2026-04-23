import { fichas } from '../apis/fichas_api.js';

// Seleccionamos todos los elementos con la clase "icon-item"
const iconItems = document.querySelectorAll('.icon-item');
const div1 = document.querySelector('.div1'); // Div donde se cargará la foto
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');

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
      div1.innerHTML = '';
      div2.innerHTML = '';
      div3.innerHTML = '';
      // Creamos un elemento <img> para cargar la foto
      const img = document.createElement('img');
      img.src = fichaSeleccionada.foto_usuario; // Usamos la propiedad foto_usuario
      img.alt = `Foto de ${fichaSeleccionada.nombre || 'usuario'}`; // Texto alternativo (opcional)
      img.style.maxWidth = '100%'; // Aseguramos que la imagen sea responsiva
      // Agregamos la imagen al div
      div2.appendChild(img);
      // Cargamos el nombre y apellido en el div3
      const nombre = `${fichaSeleccionada.nombre} ${fichaSeleccionada.apellido}`;
      const alias = `${fichaSeleccionada.alias}`;
      // Creamos elementos separados
const nombreElemento = document.createElement('p');
nombreElemento.textContent = nombre;

const aliasElemento = document.createElement('p');
aliasElemento.textContent = alias;

// Agregamos los elementos al div3
div3.appendChild(nombreElemento);
div3.appendChild(aliasElemento);
    } else {
      console.error(`No se encontró una ficha con el id ${itemId}`);
    }
  });
});




