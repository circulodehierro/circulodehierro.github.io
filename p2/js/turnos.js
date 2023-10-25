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
            const turnos_roberto = [
                {dia:8,mes:1,ano:2023},
                {dia:22,mes:1,ano:2023},
                {dia:23,mes:1,ano:2023},
                {dia:24,mes:1,ano:2023},
                {dia:2,mes:2,ano:2023},
                {dia:25,mes:10,ano:2023},
                {dia:1,mes:11,ano:2023},
                {dia:2,mes:11,ano:2023},
                {dia:3,mes:11,ano:2023},
                {dia:4,mes:11,ano:2023},
                {dia:5,mes:11,ano:2023},
                {dia:6,mes:11,ano:2023},
                {dia:7,mes:11,ano:2023}
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
            for(var e = 0; e < turnos_roberto.length; e++){
                if (turnos_roberto[e].dia === dia && turnos_roberto[e].mes === parseInt(valorSeleccionado) && turnos_roberto[e].ano === 2023) {
                    celda.style.backgroundColor = "rgba(255, 91, 9, 0.7)"; // Fondo rosado con opacidad del 70% para el día actual
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
            coincidencia_turnos(dia,valorSeleccionado,celda,diaInicio,turnos_ale,turnos_braka,turnos_chadu,turnos_roberto);

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

function coincidencia_turnos(dia,valorSeleccionado,celda,diaInicio,turnos_ale,turnos_braka,turnos_chadu,turnos_roberto){
    //ALE vs BRAKA
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023) {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus uno" onclick="ver(1);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(1,'+dia+','+diaInicio+','+turnos_ale[e].mes+');return false;">'+dia+'</i>';
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(1,'+dia+','+diaInicio+','+turnos_ale[e].mes+');return false;">'+dia+'</i>';
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
                celda.innerHTML = '<i onclick="ver(2,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(2,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                }
            }
        }
    }
    //ALE vs ROBERTO
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var g = 0; g < turnos_roberto.length; g++) {
            if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                && turnos_roberto[g].dia === dia && turnos_roberto[g].mes === parseInt(valorSeleccionado) && turnos_roberto[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                //celda.innerHTML = '<i class="fa fa-user-plus dos" onclick="ver(2);return false;"></i>';
                celda.innerHTML = '<i onclick="ver(5,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(5,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
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
                celda.innerHTML = '<i onclick="ver(3,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(3,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                }
            }
        }
    }
    //BRAKA vs ROBERTO
    for (var f = 0; f < turnos_braka.length; f++) {
        for (var g = 0; g < turnos_roberto.length; g++) {
            if (turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                && turnos_roberto[g].dia === dia && turnos_roberto[g].mes === parseInt(valorSeleccionado) && turnos_roberto[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                //celda.innerHTML = '<i class="fa fa-user-plus tres" onclick="ver(3);return false;"></i>';
                celda.innerHTML = '<i onclick="ver(6,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(6,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
                }
            }
        }
    }
    //CHADU vs ROBERTO
    for (var f = 0; f < turnos_chadu.length; f++) {
        for (var g = 0; g < turnos_roberto.length; g++) {
            if (turnos_chadu[f].dia === dia && turnos_chadu[f].mes === parseInt(valorSeleccionado) && turnos_chadu[f].ano === 2023
                && turnos_roberto[g].dia === dia && turnos_roberto[g].mes === parseInt(valorSeleccionado) && turnos_roberto[g].ano === 2023) {
                celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                //celda.innerHTML = '<i class="fa fa-user-plus tres" onclick="ver(3);return false;"></i>';
                celda.innerHTML = '<i onclick="ver(7,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
                if (diaInicio === 1) {
                    //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                    celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(7,'+dia+','+diaInicio+','+turnos_roberto[g].mes+');return false;">'+dia+'</i>';
                }
            }
        }
    }
    //ALE vs BRAKA vs CHADU
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
            for (var g = 0; g < turnos_chadu.length; g++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                    && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023
                    ) 
                {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(8,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>'; 
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(8,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                    }
                }  
            }
        }
    }
    //ALE vs BRAKA vs ROBERTO
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
            for (var h = 0; h < turnos_roberto.length; h++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                    && turnos_roberto[h].dia === dia && turnos_roberto[h].mes === parseInt(valorSeleccionado) && turnos_roberto[h].ano === 2023
                    ) 
                {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(9,'+dia+','+diaInicio+','+turnos_roberto[h].mes+');return false;">'+dia+'</i>'; 
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(9,'+dia+','+diaInicio+','+turnos_roberto[h].mes+');return false;">'+dia+'</i>';
                    }
                }
            }    
        }
    }
    //ALE vs CHADU vs ROBERTO
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            for (var h = 0; h < turnos_roberto.length; h++) {
                if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                    && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023
                    && turnos_roberto[h].dia === dia && turnos_roberto[h].mes === parseInt(valorSeleccionado) && turnos_roberto[h].ano === 2023
                    ) 
                {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(10,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>'; 
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(10,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                    }
                }
            }    
        }
    }
    //BRAKA vs CHADU vs ROBERTO
    for (var f = 0; f < turnos_braka.length; f++) {
        for (var g = 0; g < turnos_chadu.length; g++) {
            for (var h = 0; h < turnos_roberto.length; h++) {
                if (turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                    && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023
                    && turnos_roberto[h].dia === dia && turnos_roberto[h].mes === parseInt(valorSeleccionado) && turnos_roberto[h].ano === 2023
                    ) 
                {
                    celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                    //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                    celda.innerHTML = '<i onclick="ver(11,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>'; 
                    if (diaInicio === 1) {
                        //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                        celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(11,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                    }
                }
            }    
        }
    }
    //TODOS
    for (var e = 0; e < turnos_ale.length; e++) {
        for (var f = 0; f < turnos_braka.length; f++) {
            for (var g = 0; g < turnos_chadu.length; g++) {
                for (var h = 0; h < turnos_roberto.length; h++) {

                    if (turnos_ale[e].dia === dia && turnos_ale[e].mes === parseInt(valorSeleccionado) && turnos_ale[e].ano === 2023
                        && turnos_braka[f].dia === dia && turnos_braka[f].mes === parseInt(valorSeleccionado) && turnos_braka[f].ano === 2023
                        && turnos_chadu[g].dia === dia && turnos_chadu[g].mes === parseInt(valorSeleccionado) && turnos_chadu[g].ano === 2023
                        && turnos_roberto[h].dia === dia && turnos_roberto[h].mes === parseInt(valorSeleccionado) && turnos_roberto[h].ano === 2023
                        ) 
                        {
                            celda.style.backgroundColor = "rgba(255, 255, 0, 0.7)"; // Fondo amarillo con opacidad del 70% para coincidencias en ambos arreglos
                            //celda.innerHTML = '<i class="fa fa-user-plus cuatro" onclick="ver(4);return false;"></i>';
                            celda.innerHTML = '<i onclick="ver(4,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>'; 
                            if (diaInicio === 1) {
                                //celda.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Fondo rojo con opacidad del 70% para los domingos en las filas
                                celda.innerHTML = '<i style="color:rgba(255, 0, 0, 0.7)" onclick="ver(4,'+dia+','+diaInicio+','+turnos_chadu[g].mes+');return false;">'+dia+'</i>';
                            }
                        }


                    }    
            }
        }
    }
}

function ver(n,d,i,m){
    var dia_letra = '';
    var mes_letra = '';
    var listado = '';
    switch(i){
        case 0://Sabado
            dia_letra = 'Sabado';
        break;
        case 1://Domingo
            dia_letra = 'Domingo';
        break;
        case 2://Lunes
            dia_letra = 'Lunes';
        break;
        case 3://Martes
            dia_letra = 'Martes';
        break;
        case 4://Miercoles
            dia_letra = 'Miercoles';
        break;
        case 5://Jueves
            dia_letra = 'Jueves';
        break;
        case 6://Viernes
            dia_letra = 'Viernes';
        break;
        default:
        break;
    }
    switch(m){
        case 1://Enero
            mes_letra = 'Enero';
        break;
        case 2://Febrero
            mes_letra = 'Febrero';
        break;
        case 3://Marzo
            mes_letra = 'Marzo';
        break;
        case 4://Abril
            mes_letra = 'Abril';
        break;
        case 5://Mayo
            mes_letra = 'Mayo';
        break;
        case 6://Junio
            mes_letra = 'Junio';
        break;
        case 7://Julio
            mes_letra = 'Julio';
        break;
        case 8://Agosto
            mes_letra = 'Agosto';
        break;
        case 9://Septiembre
            mes_letra = 'Septiembre';
        break;
        case 10://Octubre
            mes_letra = 'Octubre';
        break;
        case 11://Noviembre
            mes_letra = 'Noviembre';
        break;
        case 12://Diciembre
            mes_letra = 'Diciembre';
        break;
        default:
        break;
    }
    switch(n){
        case 1://ALE vs BRAKA
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
        break;
        case 2://ALE vs CHADU
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
        break;
        case 3://BRAKA vs CHADU
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
        break;
        case 4://TODOS
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 5://ALE vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 6://BRAKA vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 7://CHADU vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 8://ALE vs BRAKA vs CHADU
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
        break;
        case 9://ALE vs BRAKA vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 10://ALE vs CHADU vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Ale</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        case 11://BRAKA vs CHADU vs ROBERTO
            listado = '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Braka</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Chadu</td></tr>';
            listado += '<tr><td align="left" style="font-size: 20px; padding-left: 10px;">- Roberto</td></tr>';
        break;
        default:
        break;
    }
    var div = document.getElementById('listado');
        div.style.display = 'block';
    var countdown = document.getElementById('countdown');
    var duration = 10;

        // Establece un temporizador para ocultar el elemento después de 10 segundos (10000 milisegundos)
        function updateCountdown() {
            countdown.textContent = 'La ventana se cerrará en '+duration+'seg.';
            duration--;
            if (duration < 0) {
                // Oculta el elemento "listado" después de 10 segundos
                div.style.display = 'none';
            } else {
                // Programa la próxima actualización del contador después de 1 segundo
                setTimeout(updateCountdown, 1000);
            }
        }
        updateCountdown();
        

    var thead = document.getElementById("dia_ql");
        thead.innerHTML = 'Descansos del '+dia_letra+' '+d+' de '+mes_letra;
    var tbody = document.getElementById('body_descansan');
        tbody.innerHTML = listado;
    console.log([n,d,i,dia_letra,mes_letra]);
}
