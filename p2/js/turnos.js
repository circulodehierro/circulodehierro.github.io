function obtenerDiasDelMes(anio, mes) {
    const diasDelMes = [];
    const fechaInicial = new Date(anio, mes - 1, 1); // mes - 1 porque los meses en JavaScript son de 0 a 11
    const fechaFinal = new Date(anio, mes, 0); // 0 significa el último día del mes anterior

    for (let fecha = fechaInicial; fecha <= fechaFinal; fecha.setDate(fecha.getDate() + 1)) {
        diasDelMes.push(new Date(fecha));
    }
    return diasDelMes;
}

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
        var tabla_simbologia = document.getElementById('simbologia_turnos');
        tabla_simbologia.style.display = 'block';
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
                //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)">'+dia+'</i>';
                //celda.innerHTML = '<div class="row" style="border:1px solid yellow;"><i class="fa fa-user" style="color:white;"></i></div>';
                //celda.innerHTML += '<div class="row" style="border:1px solid yellow;">'+dia+'</div>';
            }
            // Verificar si la fecha actual coincide con la fecha que estamos iterando

            const turnos_ale = [
                {dia:2,mes:1,ano:2023},
                {dia:7,mes:1,ano:2023},
                {dia:8,mes:1,ano:2023},
                {dia:19,mes:1,ano:2023},
                {dia:29,mes:1,ano:2023},
                {dia:25,mes:10,ano:2023},
                {dia:26,mes:10,ano:2023},
                {dia:27,mes:10,ano:2023},
                {dia:28,mes:10,ano:2023},
                {dia:29,mes:10,ano:2023},
                {dia:30,mes:10,ano:2023},
                {dia:31,mes:10,ano:2023},
                {dia:1,mes:11,ano:2023},
                {dia:2,mes:11,ano:2023},
                {dia:3,mes:11,ano:2023},
                {dia:4,mes:11,ano:2023},
                {dia:5,mes:11,ano:2023},
                {dia:6,mes:11,ano:2023},
                {dia:7,mes:11,ano:2023},
                {dia:22,mes:11,ano:2023},
                {dia:23,mes:11,ano:2023},
                {dia:24,mes:11,ano:2023},
                {dia:25,mes:11,ano:2023},
                {dia:26,mes:11,ano:2023},
                {dia:27,mes:11,ano:2023},
                {dia:28,mes:11,ano:2023},
                {dia:29,mes:11,ano:2023},
                {dia:30,mes:11,ano:2023},
                {dia:1,mes:12,ano:2023},
                {dia:2,mes:12,ano:2023},
                {dia:3,mes:12,ano:2023},
                {dia:4,mes:12,ano:2023},
                {dia:5,mes:12,ano:2023},
                {dia:20,mes:12,ano:2023},
                {dia:21,mes:12,ano:2023},
                {dia:22,mes:12,ano:2023},
                {dia:23,mes:12,ano:2023},
                {dia:24,mes:12,ano:2023},
                {dia:25,mes:12,ano:2023},
                {dia:26,mes:12,ano:2023},
                {dia:27,mes:12,ano:2023},
                {dia:28,mes:12,ano:2023},
                {dia:29,mes:12,ano:2023},
                {dia:30,mes:12,ano:2023},
                {dia:31,mes:12,ano:2023}
            ];
            const turnos_braka = [
                {dia:6,mes:1,ano:2023},
                {dia:7,mes:1,ano:2023},
                {dia:8,mes:1,ano:2023},
                {dia:10,mes:1,ano:2023},
                {dia:16,mes:1,ano:2023},
                {dia:19,mes:1,ano:2023},
                {dia:26,mes:1,ano:2023},
                {dia:4,mes:11,ano:2023},
                {dia:5,mes:11,ano:2023},
                {dia:11,mes:11,ano:2023},
                {dia:12,mes:11,ano:2023},
                {dia:18,mes:11,ano:2023},
                {dia:19,mes:11,ano:2023},
                {dia:25,mes:11,ano:2023},
                {dia:26,mes:11,ano:2023},
                {dia:2,mes:12,ano:2023},
                {dia:3,mes:12,ano:2023},
                {dia:9,mes:12,ano:2023},
                {dia:10,mes:12,ano:2023},
                {dia:16,mes:12,ano:2023},
                {dia:17,mes:12,ano:2023},
                {dia:23,mes:12,ano:2023},
                {dia:24,mes:12,ano:2023},
                {dia:30,mes:12,ano:2023},
                {dia:31,mes:12,ano:2023}
            ];
            const turnos_chadu = [
                {dia:8,mes:1,ano:2023},
                {dia:19,mes:1,ano:2023},
                {dia:26,mes:1,ano:2023},
                {dia:29,mes:1,ano:2023},
                {dia:24,mes:10,ano:2023}
            ];

            for(var e = 0; e < turnos_ale.length; e++){
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(0, 105, 255, 0.7)"; // Fondo azul con opacidad del 70% para el día actual
                    celda.innerHTML = dia;
                    //celda.innerHTML = '<i class="fa fa-user" style="color:rgba(0, 105, 255, 0.7);">'+dia+'</i>';
                    
                    /*celda.innerHTML = '<table style="border:1px solid yellow;">';
                    celda.innerHTML +=     '<tbody>';
                    celda.innerHTML +=         '<tr><td><i class="fa fa-user" style="color:rgba(0, 105, 255, 0.7);"></i></td></tr>';
                    celda.innerHTML +=         '<tr><td>'+dia+'</td></tr>';
                    celda.innerHTML +=     '</tbody>';
                    celda.innerHTML += '</table>';
                    celda.innerHTML = '<div class="row" style="border:1px solid yellow;"><i class="fa fa-user" style="color:rgba(0, 105, 255, 0.7);"></i></div>';
                    celda.innerHTML += '<div class="row" style="border:1px solid yellow;">'+dia+'</div>';*/
                }
            }
            for(var e = 0; e < turnos_braka.length; e++){
                if (turnos_braka[e].dia === dia && turnos_braka[e].mes === parseInt(valorSeleccionado) && turnos_braka[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(0, 255, 255, 0.7)"; // Fondo celeste con opacidad del 70% para el día actual
                    celda.innerHTML = dia;
                }
            }
            for(var e = 0; e < turnos_chadu.length; e++){
                if (turnos_chadu[e].dia === dia && turnos_chadu[e].mes === parseInt(valorSeleccionado) && turnos_chadu[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(250, 150, 200, 0.7)"; // Fondo rosado con opacidad del 70% para el día actual
                    celda.innerHTML = dia;
                }
            }
            if (diaInicio === 6) {
                fila = tablaMeses.insertRow();
                diaInicio = 0;
            } else {
                diaInicio++;
            }
            if (diaInicio === 1) {
                //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)">'+dia+'</i>';
            }
            coincidencia_turnos(dia,valorSeleccionado,celda,diaInicio,turnos_ale,turnos_braka,turnos_chadu);

            if (fechaActual.getDate() === dia && fechaActual.getMonth() + 1 === parseInt(valorSeleccionado) && fechaActual.getFullYear() === 2023) {
                //celda.style.backgroundColor = "rgba(0, 255, 0, 0.7)"; // Fondo verde con opacidad del 70% para el día actual
                celda.innerHTML = '<i style="color:rgba(0, 255, 0, 0.7)">'+dia+'</i>';
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

function coincidencia_turnos(dia,valorSeleccionado,celda,diaInicio,turnos_ale,turnos_braka,turnos_chadu){
    //ALE vs BRAKA
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023) {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus uno" onclick="ver(1);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(1);return false;">'+dia+'</i>';
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(1);return false;">'+dia+'</i>';
                    }
                }
        }
    }
    //ALE vs CHADU
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                //celda.innerHTML = '<i class="fa fa-user-plus dos" onclick="ver(2);return false;"></i>';
                celda.innerHTML = '<i onclick="ver(2);return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(2);return false;">'+dia+'</i>';
                }
            }
        }
    }
    //BRAKA vs CHADU
    for (var f = 0; f < turnos_braka.length; f++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            if (turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                //celda.innerHTML = '<i class="fa fa-user-plus tres" onclick="ver(3);return false;"></i>';
                celda.innerHTML = '<i onclick="ver(3);return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(3);return false;">'+dia+'</i>';
                }
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
                    //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(4);return false;">'+dia+'</i>'; 
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(4,'+dia+');return false;">'+dia+'</i>';
                    }
                }
                
            }
        }
    }
}

function ver(n,d){
    alert([n,d]);
}
