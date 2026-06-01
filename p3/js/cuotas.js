import { cuotas } from '../apis/cuotas_api.js';

document.addEventListener("DOMContentLoaded", function() {
    // Obtener usuario y deuda desde localStorage
    const data = localStorage.getItem("usuario");
    const deudaRaw = localStorage.getItem("deuda");   // ← variable deuda (100%)
    if (!data) {
        console.error("No hay usuario en localStorage");
        document.querySelector('.paragraph').innerHTML = '<p>Error: No se encontró usuario.</p>';
        return;
    }

    let usuarioActual;
    try {
        const user = JSON.parse(data);
        usuarioActual = user.nombre;
    } catch(e) {
        console.error("Error parseando usuario", e);
        return;
    }

    // Validar y parsear la deuda
    let deudaNum = parseFloat(deudaRaw);
    if (isNaN(deudaNum)) {
        console.warn("La deuda no es un número válido, se usará 0 para evitar errores.");
        deudaNum = 0;
    }

    const cuotasObj = cuotas[0];
    if (!cuotasObj || typeof cuotasObj !== 'object') {
        console.error("La estructura de cuotas no es la esperada");
        document.querySelector('.paragraph').innerHTML = '<p>Error en la estructura de datos.</p>';
        return;
    }

    const datosUsuario = cuotasObj[usuarioActual];
    if (!datosUsuario) {
        document.querySelector('.paragraph').innerHTML = `<p>El usuario ${usuarioActual} no tiene cuotas registradas.</p>`;
        return;
    }

    // Aplanar la estructura jerárquica a un array de cuotas con año y mes
    let todasCuotas = [];
    for (const anoStr of Object.keys(datosUsuario)) {
        const ano = Number(anoStr);
        const mesesObj = datosUsuario[ano];
        for (const mesStr of Object.keys(mesesObj)) {
            const mes = Number(mesStr);
            const cuotasArray = mesesObj[mes];
            cuotasArray.forEach(cuota => {
                todasCuotas.push({
                    ...cuota,
                    ano: ano,
                    mes: mes,
                    usuario: usuarioActual
                });
            });
        }
    }

    if (todasCuotas.length === 0) {
        document.querySelector('.paragraph').innerHTML = `<p>El usuario ${usuarioActual} no tiene cuotas registradas.</p>`;
        return;
    }

    // ========== NUEVA LÓGICA: calcular estado global del usuario ==========
    const totalPendientes = todasCuotas
        .filter(c => c.estado === 'Pendiente')
        .reduce((sum, c) => sum + c.monto, 0);

    let estadoGlobal = '';
    let estadoColor = '';
    //console.log(deudaNum);
    if (deudaNum === 0) {
        estadoGlobal = 'El Club no presenta deudas';
        estadoColor = 'gray';
    } else {
        const porcentaje = (totalPendientes / deudaNum) * 100;
        const porcentajeRedondeado = Math.round(porcentaje);
        if (porcentaje == 0) {
            estadoGlobal = `Estado Excelente, deuda del ${porcentajeRedondeado}%`;
            estadoColor = 'green';
        }
        else if (porcentaje > 15) {
            estadoGlobal = `Estado Critico, deuda del ${porcentajeRedondeado}%`;
            estadoColor = 'red';
        } else {
            estadoGlobal = `Estado Moroso, deuda del ${porcentajeRedondeado}%`;
            estadoColor = 'orange';
        }
    }
    // ======================================================================

    // Extraer valores únicos para los filtros
    const años = [...new Set(todasCuotas.map(c => c.ano))].sort((a,b) => a-b);
    const meses = [...new Set(todasCuotas.map(c => c.mes))].sort((a,b) => a-b);
    const estados = [...new Set(todasCuotas.map(c => c.estado))];

    // Crear selects (sin cambios)
    function crearSelect(nombre, valores, placeholder) {
        const select = document.createElement('select');
        select.name = nombre;
        select.id = `filtro-${nombre}`;
        select.className = 'filtro-select';

        const optionTodo = document.createElement('option');
        optionTodo.value = 'todo';
        optionTodo.textContent = placeholder || 'Todo';
        optionTodo.selected = true;
        select.appendChild(optionTodo);

        valores.forEach(valor => {
            const option = document.createElement('option');
            option.value = valor;
            let texto = valor;
            if (nombre === 'mes') {
                const nombresMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
                texto = nombresMeses[valor-1] || valor;
            }
            option.textContent = texto;
            select.appendChild(option);
        });
        return select;
    }

    const selectAnio = crearSelect('ano', años, 'Año');
    const selectMes = crearSelect('mes', meses, 'Mes');
    const selectEstado = crearSelect('estado', estados, 'Estado');

    const listaContainer = document.querySelector('.item-list');
    if (listaContainer) {
        listaContainer.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.gap = '1rem';
        wrapper.style.flexWrap = 'wrap';
        wrapper.appendChild(selectAnio);
        wrapper.appendChild(selectMes);
        wrapper.appendChild(selectEstado);
        listaContainer.appendChild(wrapper);
    } else {
        console.error("No se encontró el elemento .item-list");
    }

    const resultadosDiv = document.querySelector('.paragraph');
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    function mostrarCuotas(filtradas) {
        if (!resultadosDiv) return;
        if (filtradas.length === 0) {
            resultadosDiv.innerHTML = '<p>No hay cuotas que coincidan con los filtros.</p>';
            return;
        }

        // Contenedor con scroll
        const tablaContainer = document.createElement('div');
        tablaContainer.className = 'tabla-container';
        tablaContainer.style.maxHeight = '300px';
        tablaContainer.style.overflowY = 'auto';
        tablaContainer.style.overflowX = 'auto';

        const tabla = document.createElement('table');
        tabla.className = 'tabla-cuotas';
        tabla.style.minWidth = '100%';
        tabla.innerHTML = `
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Monto</th>
                    <th>Mes</th>
                    <th>Año</th>
                    <th>Estado</th>
                    <th>Fecha Pago</th>
                </tr>
            </thead>
            <tbody>
                ${filtradas.map(c => `
                    <tr class="${c.estado === 'Pagado' ? 'green-pagado' : ''}">
                        <td>${c.deuda}</td>
                        <td>$${c.monto.toLocaleString('es-CL')}</td>
                        <td>${nombresMeses[c.mes - 1] || c.mes}</td>
                        <td>${c.ano}</td>
                        <td>${c.estado}</td>
                        <td>${c.fecha_pago || '-'}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        tablaContainer.appendChild(tabla);

        const totalFiltrado = filtradas.reduce((sum, c) => sum + c.monto, 0);
        const resumen = document.createElement('p');
        resumen.className = 'resumen';
        resumen.textContent = `Total items: ${filtradas.length} | Monto total: $${totalFiltrado.toLocaleString('es-CL')}`;

        // Limpiar y agregar los elementos
        resultadosDiv.innerHTML = '';
        resultadosDiv.appendChild(tablaContainer);
        resultadosDiv.appendChild(resumen);

        // ========== MOSTRAR ESTADO GLOBAL DEL USUARIO ==========
        if (estadoGlobal) {
            const estadoParrafo = document.createElement('p');
            estadoParrafo.className = 'estado-usuario';
            estadoParrafo.style.color = estadoColor;
            estadoParrafo.style.fontWeight = 'bold';
            estadoParrafo.style.marginTop = '0.5rem';
            estadoParrafo.textContent = `${estadoGlobal}`;
            resultadosDiv.appendChild(estadoParrafo);
        }
        // ======================================================
    }

    function aplicarFiltros() {
        const año = selectAnio.value;
        const mes = selectMes.value;
        const estado = selectEstado.value;
        const filtradas = todasCuotas.filter(c => {
            if (año !== 'todo' && c.ano != año) return false;
            if (mes !== 'todo' && c.mes != mes) return false;
            if (estado !== 'todo' && c.estado !== estado) return false;
            return true;
        });
        mostrarCuotas(filtradas);
    }

    selectAnio.addEventListener('change', aplicarFiltros);
    selectMes.addEventListener('change', aplicarFiltros);
    selectEstado.addEventListener('change', aplicarFiltros);

    // Mostrar todas al inicio
    mostrarCuotas(todasCuotas);
});