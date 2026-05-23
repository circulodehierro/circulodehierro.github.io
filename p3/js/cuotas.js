import { cuotas } from '../apis/cuotas_api.js';

document.addEventListener("DOMContentLoaded", function() {
    // Obtener usuario desde localStorage
    const data = localStorage.getItem("usuario");
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
    //console.log(usuarioActual);
    // Extraer el objeto de usuarios del array (suponiendo que es el primer elemento)
    // Si tu array pudiera tener más elementos, habría que fusionarlos, pero parece que solo tiene uno.
    const cuotasObj = cuotas[0]; // <<< --- CORRECCIÓN CLAVE
    if (!cuotasObj || typeof cuotasObj !== 'object') {
        console.error("La estructura de cuotas no es la esperada");
        document.querySelector('.paragraph').innerHTML = '<p>Error en la estructura de datos.</p>';
        return;
    }
    // Ahora cuotasObj es { "Robinson": {...}, "Arturo": {...} }
    const datosUsuario = cuotasObj[usuarioActual];
    if (!datosUsuario) {
        //console.error(`No hay datos para el usuario ${usuarioActual}`);
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
    
    // Extraer valores únicos para los filtros
    const años = [...new Set(todasCuotas.map(c => c.ano))].sort((a,b) => a-b);
    const meses = [...new Set(todasCuotas.map(c => c.mes))].sort((a,b) => a-b);
    const estados = [...new Set(todasCuotas.map(c => c.estado))];
    
    //console.log("Años:", años, "Meses:", meses, "Estados:", estados);
    
    // Crear selects
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
    
    // Insertar selects en .item-list
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
        // Crear contenedor con scroll
        const tablaContainer = document.createElement('div');
        tablaContainer.className = 'tabla-container';
        tablaContainer.style.maxHeight = '350px';
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
                    <tr>
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
        resultadosDiv.innerHTML = '';
        resultadosDiv.appendChild(tablaContainer);
        
        const total = filtradas.reduce((sum, c) => sum + c.monto, 0);
        const resumen = document.createElement('p');
        resumen.className = 'resumen';
        resumen.textContent = `Total items: ${filtradas.length} | Monto total: $${total.toLocaleString('es-CL')}`;
        resultadosDiv.appendChild(resumen);
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