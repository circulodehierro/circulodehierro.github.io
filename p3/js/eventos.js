document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.row.header');
    const content = document.querySelector('.row.content'); // El contenedor donde se mostrarán los detalles del evento

    const eventos = [
        { ano: 2024, mes: 12, dia: 25, evento: 'Navidad', lugar: 'Casa', imagen: '../images/navidad.jpg', detalle: 'Celebración de Navidad en familia.' },
        { ano: 2025, mes: 1, dia: 1, evento: 'Año Nuevo', lugar: 'Plaza Central', imagen: '../images/ano_nuevo.jpg', detalle: 'Fiesta para recibir el Año Nuevo.' },
        { ano: 2025, mes: 1, dia: 12, evento: 'Especial', lugar: 'Casa', imagen: '../images/especial.jpg', detalle: 'Evento especial con amigos.' },
        { ano: 2025, mes: 1, dia: 24, evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/evento.jpeg', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 1, dia: 25, evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/evento.jpeg', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 1, dia: 26, evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/evento.jpeg', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 2, dia: 14, evento: 'San Valentín', lugar: 'Restaurante', imagen: '../images/san_valentin.jpg', detalle: 'Cena romántica en restaurante.' }
    ];

    function createCalendars() {
        const today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        const currentDay = today.getDate();

        for (let i = 0; i < 5; i++) {
            const table = document.createElement('table');
            table.classList.add('month-table');

            // Cabecera del mes y año
            const thead = document.createElement('thead');
            const monthRow = document.createElement('tr');
            const monthHeader = document.createElement('th');

            monthHeader.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
            monthHeader.setAttribute('colspan', 7);
            monthRow.appendChild(monthHeader);
            thead.appendChild(monthRow);

            // Cabeceras de días
            const daysRow = document.createElement('tr');
            const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

            days.forEach(day => {
                const th = document.createElement('th');
                th.textContent = day;
                daysRow.appendChild(th);
            });

            thead.appendChild(daysRow);
            table.appendChild(thead);

            // Crear días del mes
            const tbody = document.createElement('tbody');
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

            let dayCounter = 1;
            let row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                if (j < (firstDay === 0 ? 6 : firstDay - 1)) {
                    const td = document.createElement('td');
                    row.appendChild(td);
                } else if (dayCounter <= totalDays) {
                    const td = document.createElement('td');
                    td.textContent = dayCounter;

                    // Marcar día actual
                    if (dayCounter === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                        td.classList.add('today');
                        td.style.backgroundColor = 'rgba(0, 128, 0, 0.5)'; // Verde con opacidad 50%
                    }

                    // Buscar coincidencias con eventos
                    eventos.forEach(evento => {
                        if (
                            evento.ano === currentYear &&
                            evento.mes === currentMonth + 1 &&
                            evento.dia === dayCounter
                        ) {
                            td.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Azul con opacidad 50%
                            td.title = `${evento.evento} - ${evento.lugar}`;

                            // Asignar manejador de clic para mostrar los detalles del evento
                            td.style.cursor = 'pointer';
                            td.addEventListener('click', () => showEventDetails(evento));
                        }
                    });

                    row.appendChild(td);
                    dayCounter++;
                }
            }

            tbody.appendChild(row);

            while (dayCounter <= totalDays) {
                row = document.createElement('tr');
                for (let j = 0; j < 7; j++) {
                    if (dayCounter <= totalDays) {
                        const td = document.createElement('td');
                        td.textContent = dayCounter;

                        // Marcar día actual
                        if (dayCounter === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                            td.classList.add('today');
                            td.style.backgroundColor = 'rgba(0, 128, 0, 0.5)';
                        }

                        // Buscar coincidencias con eventos
                        eventos.forEach(evento => {
                            if (
                                evento.ano === currentYear &&
                                evento.mes === currentMonth + 1 &&
                                evento.dia === dayCounter
                            ) {
                                td.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                                td.title = `${evento.evento} - ${evento.lugar}`;
                                td.style.cursor = 'pointer'; // Cambia el cursor a pointer al hacer hover
                                td.addEventListener('click', () => showEventDetails(evento)); // Añadir el manejador de clic
                            }
                        });

                        row.appendChild(td);
                        dayCounter++;
                    } else {
                        const td = document.createElement('td');
                        row.appendChild(td);
                    }
                }
                tbody.appendChild(row);
            }

            table.appendChild(tbody);
            header.appendChild(table);

            // Actualizar al siguiente mes
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
        }
    }

    // Función para mostrar los detalles del evento
    function showEventDetails(evento) {
        // Limpiar el contenido actual
        content.innerHTML = '';

        // Crear tarjeta de evento
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('event-card');

        // Título del evento
        const titulo = document.createElement('h2');
        titulo.textContent = evento.evento;
        tarjeta.appendChild(titulo);

        // Imagen del evento
        const imagen = document.createElement('img');
        imagen.src = evento.imagen;
        imagen.alt = evento.evento;
        tarjeta.appendChild(imagen);

        // Detalles del evento
        const detalles = document.createElement('p');
        detalles.textContent = evento.detalle;
        tarjeta.appendChild(detalles);

        // Añadir la tarjeta al div content
        content.appendChild(tarjeta);
    }

    function getMonthName(monthIndex) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[monthIndex];
    }

    function checkDarkMode() {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    checkDarkMode();
    createCalendars();
});
