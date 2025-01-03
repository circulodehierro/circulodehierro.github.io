document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.row.header');
    const content = document.querySelector('.row.content');

    const eventos = [
        { ano: 2025, mes: 1, dia: 10, duracion: '10, 11 y 12 de Enero', evento: 'Segundo Encuentro', lugar: 'Fundo el Porvenir', imagen: '../images/segundo_encuentro.png', detalle: 'Sector Quiriquina, Camino Calle Alegre KM 3,5' },
        /*
        { ano: 2025, mes: 1, dia: 10, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/a_mandinga2025.png', detalle: 'Entrada General $20.000' },
        { ano: 2025, mes: 1, dia: 10, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/ruta_circulo.png', detalle: 'Entrada General $20.000' },
        { ano: 2025, mes: 1, dia: 10, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/piratas_isla.png', detalle: 'Entrada General $20.000' },
        */
        { ano: 2025, mes: 1, dia: 11, duracion: '10, 11 y 12 de Enero', evento: 'Segundo Encuentro', lugar: 'Fundo el Porvenir', imagen: '../images/segundo_encuentro.png', detalle: 'Sector Quiriquina, Camino Calle Alegre KM 3,5' },
        { ano: 2025, mes: 1, dia: 12, duracion: '10, 11 y 12 de Enero', evento: 'Segundo Encuentro', lugar: 'Fundo el Porvenir', imagen: '../images/segundo_encuentro.png', detalle: 'Sector Quiriquina, Camino Calle Alegre KM 3,5' },
        { ano: 2025, mes: 1, dia: 17, duracion: '17, 18 y 19 de Enero', evento: 'Tercer MotoEncuentro', lugar: 'Valle del Elqui', imagen: '../images/3_motoencuentro.png', detalle: 'Entrada General $25.000' },
        { ano: 2025, mes: 1, dia: 18, duracion: '17, 18 y 19 de Enero', evento: 'Tercer MotoEncuentro', lugar: 'Valle del Elqui', imagen: '../images/3_motoencuentro.png', detalle: 'Entrada General $25.000' },
        { ano: 2025, mes: 1, dia: 19, duracion: '17, 18 y 19 de Enero', evento: 'Tercer MotoEncuentro', lugar: 'Valle del Elqui', imagen: '../images/3_motoencuentro.png', detalle: 'Entrada General $25.000' },
        { ano: 2025, mes: 1, dia: 24, duracion: '24, 25 y 26 de Enero', evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/ruta_circulo.png', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 1, dia: 25, duracion: '24, 25 y 26 de Enero', evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/ruta_circulo.png', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 1, dia: 26, duracion: '24, 25 y 26 de Enero', evento: 'Ruta Anual C.D.H.M.', lugar: 'Serena', imagen: '../images/ruta_circulo.png', detalle: 'Ruta Anual Larga del Circulo de Hierro Motoclub.' },
        { ano: 2025, mes: 1, dia: 31, duracion: '31, 01 y 02 de Enero, Febrero', evento: '17 Aniversario', lugar: 'Chiloe', imagen: '../images/piratas_isla.png', detalle: 'Ruta hasta Castro Chiloe.' },
        { ano: 2025, mes: 2, dia: 1, duracion: '31, 01 y 02 de Enero, Febrero', evento: '17 Aniversario', lugar: 'Chiloe', imagen: '../images/piratas_isla.png', detalle: 'Ruta hasta Castro Chiloe.' },
        { ano: 2025, mes: 2, dia: 2, duracion: '31, 01 y 02 de Enero, Febrero', evento: '17 Aniversario', lugar: 'Chiloe', imagen: '../images/piratas_isla.png', detalle: 'Ruta hasta Castro Chiloe.' },
        { ano: 2025, mes: 2, dia: 14, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/a_mandinga2025.png', detalle: 'Entrada General $20.000' },
        { ano: 2025, mes: 2, dia: 15, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/a_mandinga2025.png', detalle: 'Entrada General $20.000' },
        { ano: 2025, mes: 2, dia: 16, duracion: '14, 15 y 16 de Febrero', evento: '9 Aniversario Mandinga', lugar: 'Camino las Molinas 1156, Chimbarongo', imagen: '../images/a_mandinga2025.png', detalle: 'Entrada General $20.000' },
        { ano: 2025, mes: 2, dia: 22, duracion: '22 de Febrero', evento: '5 Aniversario Craneos de Alicanto', lugar: 'Vallenar', imagen: '../images/5a_craneos.png', detalle: 'Por Confirmar' },
        
    ];

    const diaDeCursado = 10; // Día de cursado

    function createCalendars() {
        const today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        const currentDay = today.getDate();

        for (let i = 0; i < 5; i++) {
            const table = document.createElement('table');
            table.classList.add('month-table');

            const thead = document.createElement('thead');
            const monthRow = document.createElement('tr');
            const monthHeader = document.createElement('th');

            monthHeader.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
            monthHeader.setAttribute('colspan', 7);
            monthRow.appendChild(monthHeader);
            thead.appendChild(monthRow);

            const daysRow = document.createElement('tr');
            const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

            days.forEach(day => {
                const th = document.createElement('th');
                th.textContent = day;
                daysRow.appendChild(th);
            });

            thead.appendChild(daysRow);
            table.appendChild(thead);

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

                    if (dayCounter === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                        td.classList.add('today');
                        td.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Verde con opacidad 50% para día de cursado
                    }

                    const eventosDelDia = eventos.filter(evento =>
                        evento.ano === currentYear && evento.mes === currentMonth + 1 && evento.dia === dayCounter
                    );

                    if (eventosDelDia.length > 1) {
                        td.style.backgroundColor = 'rgba(139, 69, 19, 0.5)'; // Marrón con opacidad 50%
                        td.style.cursor = 'pointer';
                        td.addEventListener('click', () => showMultipleEventDetails(eventosDelDia));
                    } else if (eventosDelDia.length === 1) {
                        td.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                        td.style.cursor = 'pointer';
                        td.addEventListener('click', () => showEventDetails(eventosDelDia[0]));
                    }

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

                        if (dayCounter === currentDay && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                            td.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Verde con opacidad 50% para día de cursado
                        }

                        const eventosDelDia = eventos.filter(evento =>
                            evento.ano === currentYear && evento.mes === currentMonth + 1 && evento.dia === dayCounter
                        );

                        if (eventosDelDia.length > 1) {
                            td.style.backgroundColor = 'rgba(139, 69, 19, 0.5)';
                            td.style.cursor = 'pointer';
                            td.addEventListener('click', () => showMultipleEventDetails(eventosDelDia));
                        } else if (eventosDelDia.length === 1) {
                            td.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
                            td.style.cursor = 'pointer';
                            td.addEventListener('click', () => showEventDetails(eventosDelDia[0]));
                        }

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

            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
        }
    }

    function showEventDetails(evento) {
        content.innerHTML = '';
        createEventCard(evento);
    }

    function showMultipleEventDetails(eventos) {
        content.innerHTML = '';
        eventos.forEach(evento => createEventCard(evento));
    }

    function createEventCard(evento) {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('event-card');
        //tarjeta.style.margin = '20px';

        const titulo = document.createElement('h2');
        titulo.textContent = evento.evento;
        tarjeta.appendChild(titulo);

        const imagen = document.createElement('img');
        imagen.src = evento.imagen;
        imagen.alt = evento.evento;
        tarjeta.appendChild(imagen);

        const detalles = document.createElement('p');
        detalles.textContent = evento.detalle;
        tarjeta.appendChild(detalles);

        const destinoDiv = document.createElement('div');
        destinoDiv.textContent = `Destino: ${evento.lugar}`;
        destinoDiv.style.fontWeight = 'bold';
        tarjeta.appendChild(destinoDiv);

        const duracionDiv = document.createElement('div');
        duracionDiv.textContent = `Duración: ${evento.duracion}`;
        duracionDiv.style.fontWeight = 'bold';
        tarjeta.appendChild(duracionDiv);

        content.appendChild(tarjeta);
    }

    function getMonthName(monthIndex) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[monthIndex];
    }

    createCalendars();
});
