import { fichas } from '../apis/fichas_api.js';
document.addEventListener("DOMContentLoaded", function() {
  const usuario = localStorage.getItem("usuario");
  const headerRow = document.getElementById('headerRow');
  headerRow.scrollLeft = 0;
  const user = JSON.parse(usuario);
  let usuarioActual;
  usuarioActual = user.nombre;
  //console.log(usuario);
  // Limpiamos el contenido previo por si acaso
  headerRow.innerHTML = '';
  // Iteramos sobre cada ficha y creamos una imagen
  fichas.forEach(ficha => {
    const img = document.createElement('img');
    //console.log([usuario,ficha.nombre]);
    if (usuarioActual !== ficha.nombre && ficha.estado !== 0) {
      // Asignamos la URL de la foto (si no existe, usamos un placeholder)
    img.src = ficha.foto_usuario || 'https://via.placeholder.com/5/cccccc?text=?';
    img.alt = `Foto de ${ficha.nombre || 'usuario'}`;
    // No se añaden eventos ni funcionalidad extra
    headerRow.appendChild(img);  
    }
  });
});