function habilitar_div(permiso) {
    const divs = document.querySelectorAll('.featured');
    // Iterar sobre cada div
    divs.forEach(div => {
        // Obtener el valor del atributo data-value
        const value = parseInt(div.getAttribute('data-value')); 
        // Si el valor no está en el array permiso
        if (!permiso.includes(value)) {
            // Añadir la clase 'disabled' al div
            //div.classList.add('disabled');
            div.style.display = 'none';
            // Evitar el clic en el div deshabilitado
            div.onclick = (e) => e.preventDefault(); // Opcional para evitar acciones adicionales
        }
    });
}
// Función para direccionar a los Documentos
function documentos() {
    window.location.href = 'documentos.html';
}
// Función para direccionar a los Movimientos
function movimientos() {
    window.location.href = 'movimientos.html';
}
// Función para direccionar a las Reuniones
function reuniones() {
    window.location.href = 'reuniones.html';
}
// Función para direccionar a los Eventos
function eventos() {
    window.location.href = 'eventos.html';
}
// Función para direccionar a las Fichas
function fichas() {
    window.location.href = 'fichas.html';
}
// Función para direccionar a los Turnos
function turnos() {
    window.location.href = 'turnos.html';
}
// Función para direccionar a las Cuotas
function cuotas() {
    window.location.href = 'cuotas.html';
}

document.addEventListener('DOMContentLoaded', () => {
    var spanCaja = document.querySelector('.caja');
    var spanDeuda = document.querySelector('.deuda');
    var spanTotal = document.querySelector('.total');

    var caja = 2911154;
    var deuda = 902232;
    localStorage.setItem("deuda", JSON.stringify(deuda));
    var total = caja + deuda;

    spanCaja.textContent = ': $' + caja.toLocaleString('es-CL');
    spanDeuda.textContent = ': $' + deuda.toLocaleString('es-CL');
    spanTotal.textContent = ': $' + total.toLocaleString('es-CL');

    const svg = document.getElementById('miTorta');
    if (!svg) return;
    // Limpiar SVG (opcional)
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    // Calcular porcentajes reales (evitando división por cero)
    var porcentajeCaja = total > 0 ? Math.round((caja / total) * 100) : 0;
    var porcentajeDeuda = total > 0 ? Math.round((deuda / total) * 100) : 0;

    var spanEstatus = document.querySelector('.estatus');

    if (spanEstatus) {
        var porcentaje = porcentajeCaja; // Usa el porcentaje que ya calculaste
        
        if (porcentaje < 50) {
            spanEstatus.textContent = 'Critico';
            spanEstatus.style.color = 'red';      // Rojo
        } else if (porcentaje >= 50 && porcentaje <= 74) {
            spanEstatus.textContent = 'Estable';
            spanEstatus.style.color = '#ffa91f';  // Naranja (el color original)
        } else {  // porcentaje >= 75
            spanEstatus.textContent = 'Bueno';
            spanEstatus.style.color = 'green';    // Verde
        }
    }

    // Construir array datos con los porcentajes calculados
    const datos = [
        { label: 'Caja', porcentaje: porcentajeCaja, color: '#4caf50' },
        { label: 'Deuda', porcentaje: porcentajeDeuda, color: '#f44336' }
    ];

    const radio = 45;
    const centro = { x: 50, y: 50 };
    let anguloInicio = -90; // empezar desde arriba (12 en punto)

    // Añadir círculo central
    const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circulo.setAttribute("cx", centro.x);
    circulo.setAttribute("cy", centro.y);
    circulo.setAttribute("r", "15");
    circulo.setAttribute("fill", "white");
    svg.appendChild(circulo);

    datos.forEach(d => {
        const anguloSector = (d.porcentaje / 100) * 360;
        const anguloFin = anguloInicio + anguloSector;
        // Dibujar sector
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", calcularPorcion(centro.x, centro.y, radio, anguloInicio, anguloFin));
        path.setAttribute("fill", d.color);
        path.setAttribute("class", "slice");
        svg.appendChild(path);
        // Calcular ángulo medio (en radianes) para la etiqueta
        const anguloMedioGrados = anguloInicio + anguloSector / 3;
        const anguloMedioRad = (anguloMedioGrados * Math.PI) / 270;
        const distanciaTexto = radio * 0.65;
        const textoX = centro.x + Math.cos(anguloMedioRad) * distanciaTexto;
        const textoY = centro.y + Math.sin(anguloMedioRad) * distanciaTexto;

        const texto = document.createElementNS("http://www.w3.org/2000/svg", "text");
        texto.setAttribute("x", textoX);
        texto.setAttribute("y", textoY);
        texto.setAttribute("text-anchor", "middle");
        texto.setAttribute("dominant-baseline", "middle"); // centrado vertical
        texto.setAttribute("class", "label");
        texto.textContent = d.porcentaje+'%';
        svg.appendChild(texto);
        // Actualizar ángulo para el siguiente sector
        anguloInicio = anguloFin;
        // console.log(`${d.label}: ángulo medio = ${anguloMedioGrados}°`);
    });
});

// Función para generar el path (la misma que ya tenías)
function calcularPorcion(centroX, centroY, radio, anguloInicio, anguloFin) {
    const inicioRad = (anguloInicio - 90) * Math.PI / 180;
    const finRad = (anguloFin - 90) * Math.PI / 180;
    const x1 = centroX + radio * Math.cos(inicioRad);
    const y1 = centroY + radio * Math.sin(inicioRad);
    const x2 = centroX + radio * Math.cos(finRad);
    const y2 = centroY + radio * Math.sin(finRad);
    const largeArc = (anguloFin - anguloInicio) > 180 ? 1 : 0;
    return `M ${centroX},${centroY} L ${x1},${y1} A ${radio},${radio} 0 ${largeArc},1 ${x2},${y2} Z`;
}