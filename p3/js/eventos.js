document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.row.header');

    // Crear meses y mostrarlos en el encabezado
    function createCalendars() {
        const today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        const currentDay = today.getDate();

        for (let i = 0; i < 5; i++) {
            const table = document.createElement('table');
            table.classList.add('month-table');

            // Crear cabecera del mes y año
            const thead = document.createElement('thead');
            const monthRow = document.createElement('tr');
            const monthHeader = document.createElement('th');

            monthHeader.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
            monthHeader.setAttribute('colspan', 7); // Abarca todas las columnas
            monthRow.appendChild(monthHeader);
            thead.appendChild(monthRow);

            // Crear cabeceras de días
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
                    if (dayCounter === currentDay && i === 0) { // Solo en el mes actual
                        td.classList.add('today');
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

                        // Marcar día actual
                        if (dayCounter === currentDay && i === 0) {
                            td.classList.add('today');
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

            // Actualizar al siguiente mes
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
        }
    }

    // Obtener el nombre del mes
    function getMonthName(monthIndex) {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return months[monthIndex];
    }

    // Verificar modo oscuro
    function checkDarkMode() {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    // Inicializar
    checkDarkMode();
    createCalendars();
});
