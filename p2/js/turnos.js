function obtenerDiasDelMes(anio, mes) {
    const diasDelMes = [];
    const fechaInicial = new Date(anio, mes - 1, 1); // mes - 1 porque los meses en JavaScript son de 0 a 11
    const fechaFinal = new Date(anio, mes, 0); // 0 significa el último día del mes anterior

    for (let fecha = fechaInicial; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 1)) {
        diasDelMes.push(new Date(fecha));
    }
    return diasDelMes;
}
/*
document.addEventListener('DOMContentLoaded', function() {
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    var select = document.getElementById('meses_del_anio');
    for (var i = 0; i < nombresMeses.length; i++) {
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = (i + 1); // Valor de la opción
        nuevaOpcion.text = nombresMeses[i]; // Texto de la opción
        select.appendChild(nuevaOpcion);
    }
    select.addEventListener('change', function() {
        var valorSeleccionado = select.value;
        var textoSeleccionado = select.options[select.selectedIndex].text;
        var resultado = obtenerDiasDelMes(2023, valorSeleccionado);

        // Obtén una referencia a la tabla y borra todas las filas existentes en la tabla
        var tablaMeses = document.getElementById('tabla-meses');
        tablaMeses.innerHTML = "";

        var thead = document.getElementById("thead");
        thead.innerHTML = "";
       
        //var thead = document.getElementById("thead");
        var tr_thead = thead.insertRow();
        var td_thead = tr_thead.insertCell(0);
        td_thead.colSpan = 7;
        td_thead.innerHTML = textoSeleccionado.toUpperCase();
        //td_thead.innerHTML = nombresMeses[(valorSeleccionado - 1)].toUpperCase();

        var Fila1 = tablaMeses.insertRow();
        var lunes = Fila1.insertCell(0);
        var martes = Fila1.insertCell(1);
        var miercoles = Fila1.insertCell(2);
        var jueves = Fila1.insertCell(3);
        var viernes = Fila1.insertCell(4);
        var sabado = Fila1.insertCell(5);
        var domingo = Fila1.insertCell(6);
        lunes.innerHTML = "LUN";
        martes.innerHTML = "MAR";
        miercoles.innerHTML = "MIE";
        jueves.innerHTML = "JUE";
        viernes.innerHTML = "VIE";
        sabado.innerHTML = "SAB";
        domingo.innerHTML = "DOM";
        
        // Dividir los días en semanas
        var semanas = [];
        var semanaActual = [];

        resultado.forEach(function(dia) {
            semanaActual.push(dia);

            if (dia.getDay() === 6) { // Si es sábado (0 es domingo, 6 es sábado)
                semanas.push(semanaActual);
                semanaActual = [];
            }
        });

        if (semanaActual.length > 0) {
            semanas.push(semanaActual);
        }

        // Crear una fila por cada semana y agregar los días
        semanas.forEach(function(semana) {
            var fila = tablaMeses.insertRow();
            semana.forEach(function(dia) {
                var celda = fila.insertCell();
                celda.textContent = dia.getDate(); // Muestra el día del mes
            });
        });
    });
    
    return select;
    
});

*/

document.addEventListener('DOMContentLoaded', function() {
    const nombresMeses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    //console.log(turnos_braka);
    var select = document.getElementById('meses_del_anio');
    for (var i = 0; i < nombresMeses.length; i++) {
        var nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = (i + 1); // Valor de la opción
        nuevaOpcion.text = nombresMeses[i]; // Texto de la opción
        select.appendChild(nuevaOpcion);
    }

    select.addEventListener('change', function() {
        var valorSeleccionado = select.value;
        var textoSeleccionado = select.options[select.selectedIndex].text;

        // Obtén una referencia a la tabla y borra todas las filas existentes en la tabla
        var tablaMeses = document.getElementById('tabla-meses');
        tablaMeses.innerHTML = "";

        var thead = document.getElementById("thead");
        thead.innerHTML = "";

        // Crear el encabezado de la tabla
        var tr_thead = thead.insertRow();
        var diasSemana = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
        for (var i = 0; i < 7; i++) {
            var td_thead = tr_thead.insertCell(i);
            td_thead.innerHTML = diasSemana[i];
            if (diasSemana[i] === "DOM") {
                td_thead.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70%
            }else{
                td_thead.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo rojo con opacidad del 70%
            }
        }

        // Obtén el día de inicio del mes (0 es domingo, 1 es lunes, ..., 6 es sábado)
        var diaInicio = obtenerDiaInicio(2023, valorSeleccionado);

        // Calcula la cantidad de días en el mes
        var diasEnMes = obtenerDiasEnMes(2023, valorSeleccionado);

        var fechaActual = new Date();

        // Crear las filas de la tabla con los días de la semana
        var fila = tablaMeses.insertRow();
        for (var i = 0; i < diaInicio; i++) {
            fila.insertCell();
        }
        for (var dia = 1; dia <= diasEnMes; dia++) {
            var celda = fila.insertCell();
            
            celda.textContent = dia;
            if (diaInicio === 0) {
                celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
            }
            // Verificar si la fecha actual coincide con la fecha que estamos iterando

            const turnos_ale = [
                {dia:2,mes:1,ano:2023},
                {dia:7,mes:1,ano:2023},
                {dia:19,mes:1,ano:2023},
                {dia:29,mes:1,ano:2023},
                {dia:24,mes:10,ano:2023}
            ];
            const turnos_braka = [
                {dia:6,mes:1,ano:2023},
                {dia:7,mes:1,ano:2023},
                {dia:10,mes:1,ano:2023},
                {dia:16,mes:1,ano:2023},
                {dia:19,mes:1,ano:2023},
                {dia:26,mes:1,ano:2023},
            ];
            const turnos_chadu = [
                {dia:19,mes:1,ano:2023},
                {dia:26,mes:1,ano:2023},
                {dia:29,mes:1,ano:2023},
                {dia:24,mes:10,ano:2023}
            ];

            for(var e = 0; e < turnos_ale.length; e++){
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(0, 105, 255, 0.7)"; // Fondo verde con opacidad del 70% para el día actual
                    celda.innerHTML = '<i class="fa fa-user"></i>';
                }
            }
            for(var e = 0; e < turnos_braka.length; e++){
                if (turnos_braka[e].dia === dia && turnos_braka[e].mes === parseInt(valorSeleccionado) && turnos_braka[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(0, 255, 255, 0.7)"; // Fondo verde con opacidad del 70% para el día actual
                    celda.innerHTML = '<i class="fa fa-user"></i>';
                }
            }
            for(var e = 0; e < turnos_chadu.length; e++){
                if (turnos_chadu[e].dia === dia && turnos_chadu[e].mes === parseInt(valorSeleccionado) && turnos_chadu[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(250, 150, 200, 0.7)"; // Fondo verde con opacidad del 70% para el día actual
                    celda.innerHTML = '<i class="fa fa-user"></i>';
                }
            }
            if (diaInicio === 6) {
                fila = tablaMeses.insertRow();
                diaInicio = 0;
            } else {
                diaInicio++;
            }
            if (diaInicio === 1) {
                celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
            }
            coincidencia_turnos(dia,valorSeleccionado,celda,turnos_ale,turnos_braka,turnos_chadu);

            if (fechaActual.getDate() === dia && fechaActual.getMonth() + 1 === parseInt(valorSeleccionado) && fechaActual.getFullYear() === 2023) {
                celda.style.backgroundColor = "rgba(0, 255, 0, 0.7)"; // Fondo verde con opacidad del 70% para el día actual
            }
        }
    });
    
    return select;
    
    function obtenerDiasEnMes(anio, mes) {
        return new Date(anio, mes, 0).getDate();
    }
    
    function obtenerDiaInicio(anio, mes) {
        // Obtenemos el último día de mes anterior
        var ultimoDiaMesAnterior = new Date(anio, mes - 1, 0);
        // Devolvemos el día de la semana (0: domingo, 1: lunes, ..., 6: sábado)
        return (ultimoDiaMesAnterior.getDay() + 1) % 7;
    }
    
});

function coincidencia_turnos(dia,valorSeleccionado,celda,turnos_ale,turnos_braka,turnos_chadu){
    //ALE vs BRAKA
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023) {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    celda.innerHTML = '<i class="fa fa-user-plus uno" onclick="ver(1);return false;"></i>';
                }
        }
    }
    //ALE vs CHADU
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                celda.innerHTML = '<i class="fa fa-user-plus dos" onclick="ver(2);return false;"></i>';
            }
        }
    }
    //BRAKA vs CHADU
    for (var f = 0; f < turnos_braka.length; f++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            if (turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                celda.innerHTML = '<i class="fa fa-user-plus tres" onclick="ver(3);return false;"></i>';
            }
        }
    }
    //TODOS
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
            for (var g = 0; g < turnos_chadu.length; g++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                    && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023) {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                }
            }
        }
    }
}

function ver(n){
    alert(n);
}
