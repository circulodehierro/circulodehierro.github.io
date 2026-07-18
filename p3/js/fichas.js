import { fichas } from '../apis/fichas_api.js';

document.addEventListener("DOMContentLoaded", function() {
  const usuarioRaw = localStorage.getItem("usuario");
  const usuario = usuarioRaw ? JSON.parse(usuarioRaw) : null;
  const usuarioActual = usuario?.nombre || null;

  const headerRow = document.getElementById('headerRow');
  const contentArea = document.getElementById('contentArea');

  headerRow.scrollLeft = 0;
  headerRow.innerHTML = '';

  // Variables para mantener la ficha seleccionada y la pestaña activa
  let fichaSeleccionada = null;
  let pestañaActiva = 'ficha'; // 'ficha' o 'moto'

  // ----- Función para renderizar el contenido de pestañas -----
  function renderTabs(ficha) {
    // Contenedor principal
    const container = document.createElement('div');
    container.className = 'tabs-container';

    // Cabecera con botones
    const header = document.createElement('div');
    header.className = 'tabs-header';

    const btnFicha = document.createElement('button');
    btnFicha.className = 'tab-btn active';
    btnFicha.textContent = '📋 Ficha';
    btnFicha.dataset.target = 'panel-ficha';

    const btnMoto = document.createElement('button');
    btnMoto.className = 'tab-btn';
    btnMoto.textContent = '🏍️ Moto';
    btnMoto.dataset.target = 'panel-moto';

    header.appendChild(btnFicha);
    header.appendChild(btnMoto);

    // Paneles
    const panelFicha = document.createElement('div');
    panelFicha.id = 'panel-ficha';
    panelFicha.className = 'tab-panel active';
    panelFicha.innerHTML = buildFichaContent(ficha);

    // Dentro de renderTabs, reemplaza esta parte:
    const panelMoto = document.createElement('div');
    panelMoto.id = 'panel-moto';
    panelMoto.className = 'tab-panel';
    panelMoto.innerHTML = buildMotoContent(ficha); // <-- Cambio aquí

    container.appendChild(header);
    container.appendChild(panelFicha);
    container.appendChild(panelMoto);

    // Limpiar contentArea y agregar el nuevo contenedor
    contentArea.innerHTML = '';
    contentArea.appendChild(container);

    // ----- Eventos de las pestañas -----
    const tabs = container.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetId = this.dataset.target;

        // Desactivar todos
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // Activar el seleccionado
        this.classList.add('active');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');

        pestañaActiva = targetId === 'panel-ficha' ? 'ficha' : 'moto';
      });
    });
  }

  // ----- Función para construir el contenido de la pestaña Ficha -----
  function buildFichaContent(ficha) {
    // Crear estructura HTML con imagen y lista de campos
    const campos = [
      { label: 'Nombre', value: ficha.nombre || '' },
      { label: 'Apellido', value: ficha.apellido || '' },
      { label: 'Edad', value: ficha.edad || '' },
      { label: 'Alias', value: ficha.alias || '' },
      { label: 'Cargo', value: ficha.cargo || '' },
      { label: 'Email', value: ficha.email || '' },
      // Agrega aquí más campos que tenga tu objeto (teléfono, dirección, etc.)
    ];

    let listaHTML = '';
    campos.forEach(campo => {
      if (campo.value) {
        listaHTML += `
          <li>
            <span class="label">${campo.label}</span>
            <span class="value">${campo.value}</span>
          </li>
        `;
      }
    });

    // Si no hay campos, mostramos un mensaje
    if (!listaHTML) {
      listaHTML = '<li>No hay información disponible.</li>';
    }

    const fotoSrc = ficha.foto_usuario || 'https://via.placeholder.com/180x240/cccccc?text=Sin+foto';

    return `
      <div class="ficha-content">
        <div class="ficha-image">
          <img src="${fotoSrc}" alt="Foto de ${ficha.nombre || 'usuario'}">
        </div>
        <div class="ficha-details">
          <ul>${listaHTML}</ul>
        </div>
      </div>
    `;
  }

  // ----- Recorrer fichas y crear imágenes en el header -----
  fichas.forEach(ficha => {
    const img = document.createElement('img');
    if (ficha.estado !== 0) {
      //if (usuarioActual !== ficha.nombre && ficha.estado !== 0) {
      img.src = ficha.foto_usuario || 'https://via.placeholder.com/40/cccccc?text=?';
      img.alt = `Foto de ${ficha.nombre || 'usuario'}`;
      
      // Agregar evento click: mostrar la ficha seleccionada
      img.addEventListener('click', function() {
        fichaSeleccionada = ficha;
        renderTabs(ficha);
      });

      headerRow.appendChild(img);
    }
  });

  // ----- Función para construir el contenido de la pestaña Moto -----
  function buildMotoContent(ficha) {
    // Definir los campos que se mostrarán para la moto
    const camposMoto = [
      { label: 'Marca', value: ficha.marca_moto || '' },
      { label: 'Modelo', value: ficha.modelo_moto || '' },
      { label: 'Año', value: ficha.ano_moto || '' },
      // Agrega aquí más campos que tenga tu objeto relacionados con la moto
    ];

    let listaHTML = '';
    camposMoto.forEach(campo => {
      if (campo.value) {
        listaHTML += `
          <li>
            <span class="label">${campo.label}</span>
            <span class="value">${campo.value}</span>
          </li>
        `;
      }
    });

    if (!listaHTML) {
      listaHTML = '<li>No hay información de la moto disponible.</li>';
    }

    const fotoMotoSrc = ficha.foto_moto || 'https://via.placeholder.com/180x240/cccccc?text=Sin+foto+moto';

    return `
      <div class="moto-content">
        <div class="moto-image">
          <img src="${fotoMotoSrc}" alt="Foto de la moto de ${ficha.nombre || 'usuario'}">
        </div>
        <div class="moto-details">
          <ul>${listaHTML}</ul>
        </div>
      </div>
    `;
  }
});