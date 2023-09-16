function logo(){
    document.getElementById("general").style.display = 'none';
    document.getElementById("eventos").style.display = 'none';
    document.getElementById("fichas").style.display = 'none';
    document.getElementById("fichas_detalle").style.display = 'none';
    document.getElementById("turnos").style.display = 'none';
    document.getElementById("tablas_meses").style.display = 'none';
    document.getElementById("gastos").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';
    document.getElementById("logo_general").style = "reset";
    document.getElementById("logo_eventos").style = "reset";
    document.getElementById("logo_turnos").style = "reset";
    document.getElementById("logo_gastos").style = "reset";
}
function general(){
    //alert("Sección en mantención, no insista ¡¡");
    document.getElementById("eventos").style.display = 'none';
    document.getElementById("fichas").style.display = 'none';
    document.getElementById("fichas_detalle").style.display = 'none';
    document.getElementById("turnos").style.display = 'none';
    document.getElementById("tablas_meses").style.display = 'none';
    document.getElementById("gastos").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';
    document.getElementById("general").style.display = 'grid';

    document.getElementById("logo_eventos").style = "reset";
    document.getElementById("logo_turnos").style = "reset";
    document.getElementById("logo_gastos").style = "reset";
    document.getElementById("logo_general").style.animation = "feature 0.5s ease infinite alternate-reverse";
    /**/
}
function eventos(){
    alert("Sección en mantención, no insista ¡¡");
    /*
    document.getElementById("general").style.display = 'none';
    document.getElementById("turnos").style.display = 'none';
    document.getElementById("tablas_meses").style.display = 'none';
    document.getElementById("gastos").style.display = 'none';
    document.getElementById("fichas").style.display = 'none';
    document.getElementById("fichas_detalle").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';
    document.getElementById("eventos").style.display = 'grid';
    //document.getElementById("fichas").style.display = 'grid';

    document.getElementById("logo_general").style= "reset";
    document.getElementById("logo_turnos").style= "reset";
    document.getElementById("logo_gastos").style= "reset";
    document.getElementById("logo_eventos").style.animation = "feature 0.5s ease infinite alternate-reverse";
    */
}
function fichas(){
    alert("Sección en mantención, no insista ¡¡");
    /*
    document.getElementById("general").style.display = 'none';
    document.getElementById("turnos").style.display = 'none';
    document.getElementById("tablas_meses").style.display = 'none';
    document.getElementById("gastos").style.display = 'none';
    document.getElementById("eventos").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';
    document.getElementById("fichas").style.display = 'grid';
    //document.getElementById("fichas_detalle").style.display = 'grid';

    document.getElementById("logo_general").style= "reset";
    document.getElementById("logo_turnos").style= "reset";
    document.getElementById("logo_gastos").style= "reset";
    document.getElementById("logo_eventos").style.animation = "feature 0.5s ease infinite alternate-reverse";
    */
}
function ver_ficha(x){
    document.getElementById("fichas_detalle").style.display = 'block';
    if (parseInt(x) == 1){
        var ult_am = 21400;
        document.getElementById('kilometraje').value = "";
        var elementos = document.querySelectorAll('span.semaforo');
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.border = '1.5px solid grey';
        }
        document.getElementById('nombre_moto').innerHTML = 'Yamaha Virago 750cc';
        document.getElementById('modelo').innerHTML = 'Virago';
        document.getElementById('ano').innerHTML = '1989';
        document.getElementById('numero_chasis').innerHTML = '-';
        document.getElementById('distribucion').innerHTML = 'Cardan';
        document.getElementById('aceite').innerHTML = '-';
        document.getElementById('liquido_freno').innerHTML = 'DOT 4';
        document.getElementById('rueda_delantera').innerHTML = '-';
        document.getElementById('rueda_trasera').innerHTML = '-';
        document.getElementById('presion_rueda_delantera').innerHTML = '-';
        document.getElementById('presion_rueda_trasera').innerHTML = '-';
        document.getElementById('peso').innerHTML = '-';
        document.getElementById('capacidad_carga').innerHTML = '-';
        document.getElementById('combustible').innerHTML = 'Bencina 93 o 95';
        document.getElementById('bujias').innerHTML = 'NKG';
        document.getElementById('filtro_aire').innerHTML = '-';
        document.getElementById('capacidad_aceite').innerHTML = '-';
        document.getElementById('capacidad_estanque').innerHTML = '-';
        document.getElementById('rendimiento').innerHTML = '-';
        document.getElementById('ult_aceite_motor').innerHTML = ult_am;
    }else if(parseInt(x) == 2){
        var ult_am = 62200;
        document.getElementById('kilometraje').value = "";
        var elementos = document.querySelectorAll('span.semaforo');
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.border = '1.5px solid grey';
        }
        document.getElementById("nombre_moto").innerHTML = 'Yamaha Star 650cc';
        document.getElementById('ult_aceite_motor').innerHTML = ult_am;
    }else if(parseInt(x) == 3){
        document.getElementById("nombre_moto").innerHTML = 'Yamaha SRX 600cc';
    }else if(parseInt(x) == 4){
        document.getElementById("nombre_moto").innerHTML = 'Yamaha Virago 1100cc';
    }else if(parseInt(x) == 5){
        document.getElementById("nombre_moto").innerHTML = 'Yamaha Dragstar 1100cc';
    }else if(parseInt(x) == 6){
        document.getElementById("nombre_moto").innerHTML = 'Yamaha Virago 750cc';
    }
}
function calcular(){
    var ultimo_aceite = document.getElementById('ult_aceite_motor').innerHTML;
    var kilometraje = document.getElementById('kilometraje').value;
    var res = (parseInt(kilometraje) - parseInt(ultimo_aceite));
    var color_semaforo = 'green';
    if(res > 1000 && res < 3000){
        color_semaforo = 'orange';
    }else if(res > 3000){
        color_semaforo = 'red';
    }
    document.getElementById('s_aceite_motor').style.background = color_semaforo;
    //console.log([res,color_semaforo]);
}
function turnos(){
    document.getElementById("general").style.display = 'none';
    document.getElementById("eventos").style.display = 'none';
    document.getElementById("fichas").style.display = 'none';
    document.getElementById("fichas_detalle").style.display = 'none';
    document.getElementById("gastos").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';
    document.getElementById("turnos").style.display = 'grid';
    document.getElementById("tablas_meses").style.display = 'grid';

    document.getElementById("logo_general").style= "reset";
    document.getElementById("logo_eventos").style= "reset";
    document.getElementById("logo_gastos").style= "reset";
    document.getElementById("logo_turnos").style.animation = "feature 0.5s ease infinite alternate-reverse";
}
function gastos(){
    document.getElementById("general").style.display = 'none';
    document.getElementById("eventos").style.display = 'none';
    document.getElementById("fichas").style.display = 'none';
    document.getElementById("fichas_detalle").style.display = 'none';
    document.getElementById("turnos").style.display = 'none';
    document.getElementById("tablas_meses").style.display = 'none';
    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById("gastos").style.display = 'grid';

    document.getElementById("logo_general").style= "reset";
    document.getElementById("logo_eventos").style= "reset";
    document.getElementById("logo_turnos").style= "reset";
    document.getElementById("logo_gastos").style.animation = "feature 0.5s ease infinite alternate-reverse";
}
function deuda(nombre,d,m1){
    document.getElementById('miModal').style.display = 'block';
    var color, mensaje, deuda = "";
    if(parseInt(d) === 0){
        color = '#7DE352';
        deuda = 'Vo debí en cuotas loco $'+m1+' pesos.';
        mensaje = 'Pucha el tonto lindo.. ';
    }else{
        color = 'red';
        deuda = 'Vo debí en cuotas loco $'+m1+' pesos.';
        mensaje = 'Shiaa, no te da verguenza, Entrá a pagar poh.. !!';
    }
    document.getElementById('miModal').style.borderColor = color;
    document.getElementById('nombre_deudor').innerHTML = nombre;
    document.getElementById('deuda').innerHTML = deuda
    document.getElementById('mensaje').innerHTML = mensaje;
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
    document.getElementById('modal_clave').style.display = 'none';
}

function hide_estatutos(){
    document.getElementById("parrafoI1").style.display = 'none';
    document.getElementById("parrafoI2").style.display = 'none';
    document.getElementById("parrafoI3").style.display = 'none';
    document.getElementById("parrafoI4").style.display = 'none';
    document.getElementById("parrafoI5").style.display = 'none';
    document.getElementById("parrafoII1").style.display = 'none';
    document.getElementById("parrafoII2").style.display = 'none';
    document.getElementById("parrafoII3").style.display = 'none';
    document.getElementById("parrafoII4").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'none';
    document.getElementById("parrafoIII2").style.display = 'none';
    document.getElementById("parrafoIII3").style.display = 'none';
    document.getElementById("parrafoIII4").style.display = 'none';
    document.getElementById("parrafoIII5").style.display = 'none';
    document.getElementById("parrafoIII6").style.display = 'none';
    document.getElementById("parrafoIII7").style.display = 'none';
    document.getElementById("parrafoIII8").style.display = 'none';
    document.getElementById("parrafoIII9").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'none';
    document.getElementById("parrafoIV2").style.display = 'none';
    document.getElementById("parrafoIV3").style.display = 'none';
    document.getElementById("parrafoIV4").style.display = 'none';
    document.getElementById("parrafoIV5").style.display = 'none';
    document.getElementById("parrafoIV6").style.display = 'none';
    document.getElementById("parrafoIV7").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'none';
    document.getElementById("parrafoV2").style.display = 'none';
    document.getElementById("parrafoV3").style.display = 'none';
    document.getElementById("parrafoV4").style.display = 'none';
    document.getElementById("parrafoV5").style.display = 'none';
}
function showI(){
    document.getElementById("parrafoII1").style.display = 'none';
    document.getElementById("parrafoII2").style.display = 'none';
    document.getElementById("parrafoII3").style.display = 'none';
    document.getElementById("parrafoII4").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'none';
    document.getElementById("parrafoIII2").style.display = 'none';
    document.getElementById("parrafoIII3").style.display = 'none';
    document.getElementById("parrafoIII4").style.display = 'none';
    document.getElementById("parrafoIII5").style.display = 'none';
    document.getElementById("parrafoIII6").style.display = 'none';
    document.getElementById("parrafoIII7").style.display = 'none';
    document.getElementById("parrafoIII8").style.display = 'none';
    document.getElementById("parrafoIII9").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'none';
    document.getElementById("parrafoIV2").style.display = 'none';
    document.getElementById("parrafoIV3").style.display = 'none';
    document.getElementById("parrafoIV4").style.display = 'none';
    document.getElementById("parrafoIV5").style.display = 'none';
    document.getElementById("parrafoIV6").style.display = 'none';
    document.getElementById("parrafoIV7").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'none';
    document.getElementById("parrafoV2").style.display = 'none';
    document.getElementById("parrafoV3").style.display = 'none';
    document.getElementById("parrafoV4").style.display = 'none';
    document.getElementById("parrafoV5").style.display = 'none';
    document.getElementById("parrafoI1").style.display = 'block';
    document.getElementById("parrafoI2").style.display = 'block';
    document.getElementById("parrafoI3").style.display = 'block';
    document.getElementById("parrafoI4").style.display = 'block';
    document.getElementById("parrafoI5").style.display = 'block';
}
function showII(){
    document.getElementById("parrafoI1").style.display = 'none';
    document.getElementById("parrafoI2").style.display = 'none';
    document.getElementById("parrafoI3").style.display = 'none';
    document.getElementById("parrafoI4").style.display = 'none';
    document.getElementById("parrafoI5").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'none';
    document.getElementById("parrafoIII2").style.display = 'none';
    document.getElementById("parrafoIII3").style.display = 'none';
    document.getElementById("parrafoIII4").style.display = 'none';
    document.getElementById("parrafoIII5").style.display = 'none';
    document.getElementById("parrafoIII6").style.display = 'none';
    document.getElementById("parrafoIII7").style.display = 'none';
    document.getElementById("parrafoIII8").style.display = 'none';
    document.getElementById("parrafoIII9").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'none';
    document.getElementById("parrafoIV2").style.display = 'none';
    document.getElementById("parrafoIV3").style.display = 'none';
    document.getElementById("parrafoIV4").style.display = 'none';
    document.getElementById("parrafoIV5").style.display = 'none';
    document.getElementById("parrafoIV6").style.display = 'none';
    document.getElementById("parrafoIV7").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'none';
    document.getElementById("parrafoV2").style.display = 'none';
    document.getElementById("parrafoV3").style.display = 'none';
    document.getElementById("parrafoV4").style.display = 'none';
    document.getElementById("parrafoV5").style.display = 'none';
    document.getElementById("parrafoII1").style.display = 'block';
    document.getElementById("parrafoII2").style.display = 'block';
    document.getElementById("parrafoII3").style.display = 'block';
    document.getElementById("parrafoII4").style.display = 'block';
}
function showIII(){
    document.getElementById("parrafoI1").style.display = 'none';
    document.getElementById("parrafoI2").style.display = 'none';
    document.getElementById("parrafoI3").style.display = 'none';
    document.getElementById("parrafoI4").style.display = 'none';
    document.getElementById("parrafoI5").style.display = 'none';
    document.getElementById("parrafoII1").style.display = 'none';
    document.getElementById("parrafoII2").style.display = 'none';
    document.getElementById("parrafoII3").style.display = 'none';
    document.getElementById("parrafoII4").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'none';
    document.getElementById("parrafoIV2").style.display = 'none';
    document.getElementById("parrafoIV3").style.display = 'none';
    document.getElementById("parrafoIV4").style.display = 'none';
    document.getElementById("parrafoIV5").style.display = 'none';
    document.getElementById("parrafoIV6").style.display = 'none';
    document.getElementById("parrafoIV7").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'none';
    document.getElementById("parrafoV2").style.display = 'none';
    document.getElementById("parrafoV3").style.display = 'none';
    document.getElementById("parrafoV4").style.display = 'none';
    document.getElementById("parrafoV5").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'block';
    document.getElementById("parrafoIII2").style.display = 'block';
    document.getElementById("parrafoIII3").style.display = 'block';
    document.getElementById("parrafoIII4").style.display = 'block';
    document.getElementById("parrafoIII5").style.display = 'block';
    document.getElementById("parrafoIII6").style.display = 'block';
    document.getElementById("parrafoIII7").style.display = 'block';
    document.getElementById("parrafoIII8").style.display = 'block';
    document.getElementById("parrafoIII9").style.display = 'block';
}
function showIV(){
    document.getElementById("parrafoI1").style.display = 'none';
    document.getElementById("parrafoI2").style.display = 'none';
    document.getElementById("parrafoI3").style.display = 'none';
    document.getElementById("parrafoI4").style.display = 'none';
    document.getElementById("parrafoI5").style.display = 'none';
    document.getElementById("parrafoII1").style.display = 'none';
    document.getElementById("parrafoII2").style.display = 'none';
    document.getElementById("parrafoII3").style.display = 'none';
    document.getElementById("parrafoII4").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'none';
    document.getElementById("parrafoIII2").style.display = 'none';
    document.getElementById("parrafoIII3").style.display = 'none';
    document.getElementById("parrafoIII4").style.display = 'none';
    document.getElementById("parrafoIII5").style.display = 'none';
    document.getElementById("parrafoIII6").style.display = 'none';
    document.getElementById("parrafoIII7").style.display = 'none';
    document.getElementById("parrafoIII8").style.display = 'none';
    document.getElementById("parrafoIII9").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'none';
    document.getElementById("parrafoV2").style.display = 'none';
    document.getElementById("parrafoV3").style.display = 'none';
    document.getElementById("parrafoV4").style.display = 'none';
    document.getElementById("parrafoV5").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'block';
    document.getElementById("parrafoIV2").style.display = 'block';
    document.getElementById("parrafoIV3").style.display = 'block';
    document.getElementById("parrafoIV4").style.display = 'block';
    document.getElementById("parrafoIV5").style.display = 'block';
    document.getElementById("parrafoIV6").style.display = 'block';
    document.getElementById("parrafoIV7").style.display = 'block';
}
function showV(){
    document.getElementById("parrafoI1").style.display = 'none';
    document.getElementById("parrafoI2").style.display = 'none';
    document.getElementById("parrafoI3").style.display = 'none';
    document.getElementById("parrafoI4").style.display = 'none';
    document.getElementById("parrafoI5").style.display = 'none';
    document.getElementById("parrafoII1").style.display = 'none';
    document.getElementById("parrafoII2").style.display = 'none';
    document.getElementById("parrafoII3").style.display = 'none';
    document.getElementById("parrafoII4").style.display = 'none';
    document.getElementById("parrafoIII1").style.display = 'none';
    document.getElementById("parrafoIII2").style.display = 'none';
    document.getElementById("parrafoIII3").style.display = 'none';
    document.getElementById("parrafoIII4").style.display = 'none';
    document.getElementById("parrafoIII5").style.display = 'none';
    document.getElementById("parrafoIII6").style.display = 'none';
    document.getElementById("parrafoIII7").style.display = 'none';
    document.getElementById("parrafoIII8").style.display = 'none';
    document.getElementById("parrafoIII9").style.display = 'none';
    document.getElementById("parrafoIV1").style.display = 'none';
    document.getElementById("parrafoIV2").style.display = 'none';
    document.getElementById("parrafoIV3").style.display = 'none';
    document.getElementById("parrafoIV4").style.display = 'none';
    document.getElementById("parrafoIV5").style.display = 'none';
    document.getElementById("parrafoIV6").style.display = 'none';
    document.getElementById("parrafoIV7").style.display = 'none';
    document.getElementById("parrafoV1").style.display = 'block';
    document.getElementById("parrafoV2").style.display = 'block';
    document.getElementById("parrafoV3").style.display = 'block';
    document.getElementById("parrafoV4").style.display = 'block';
    document.getElementById("parrafoV5").style.display = 'block';
}
function descargar_pdf(){
    // URL del archivo PDF que deseas descargar
    var pdfUrl = "images/Estatutos.pdf";
  
    // Crea un elemento <a> temporal y establece su atributo href con la URL del PDF
    var a = document.createElement("a");
    a.href = pdfUrl;
  
    // Establece el atributo "download" del elemento <a> para que el archivo se descargue en lugar de abrirse en una nueva pestaña
    a.setAttribute("download", "");
  
    // Simula un clic en el elemento <a> para descargar el archivo
    a.click();
}
function eventos_click(){
    const fichas = document.querySelector('.eventos_fichas');
    fichas.style.display = 'none';
    const blocks = document.querySelector('.eventos_block');
    blocks.style.display = 'block';
}
function fichas_click(){
    const blocks = document.querySelector('.eventos_block');
    blocks.style.display = 'none';
    const fichas = document.querySelector('.eventos_fichas');
    fichas.style.display = 'block';
}


function ano_2023(){
    document.getElementById("meses_2024").style.display = 'none';
    document.getElementById("meses_2023").style.display = 'grid';
    document.getElementById('2024').style.background = 'black';
    document.getElementById('2024').style.color = 'white';
    document.getElementById('2023').style.background = 'white';
    document.getElementById('2023').style.color = 'black';

    document.getElementById('click_enero_2024').style.background = 'black';
    document.getElementById('click_febrero_2024').style.background = 'black';
    document.getElementById('click_marzo_2024').style.background = 'black';
    document.getElementById('click_abril_2024').style.background = 'black';
    document.getElementById('click_mayo_2024').style.background = 'black';
    document.getElementById('click_junio_2024').style.background = 'black';
    document.getElementById('click_julio_2024').style.background = 'black';
    document.getElementById('click_agosto_2024').style.background = 'black';
    document.getElementById('click_septiembre_2024').style.background = 'black';
    document.getElementById('click_octubre_2024').style.background = 'black';
    document.getElementById('click_noviembre_2024').style.background = 'black';
    document.getElementById('click_diciembre_2024').style.background = 'black';

    document.getElementById("enero_2024").style.display = 'none';
    document.getElementById("febrero_2024").style.display = 'none';
    document.getElementById("marzo_2024").style.display = 'none';
    document.getElementById("abril_2024").style.display = 'none';
    document.getElementById("mayo_2024").style.display = 'none';
    document.getElementById("junio_2024").style.display = 'none';
    document.getElementById("julio_2024").style.display = 'none';
    document.getElementById("agosto_2024").style.display = 'none';
    document.getElementById("septiembre_2024").style.display = 'none';
    document.getElementById("octubre_2024").style.display = 'none';
    document.getElementById("noviembre_2024").style.display = 'none';
    document.getElementById("diciembre_2024").style.display = 'none';
}
function ano_2024(){
    document.getElementById("meses_2023").style.display = 'none';
    document.getElementById("meses_2024").style.display = 'grid';
    document.getElementById('2023').style.background = 'black';
    document.getElementById('2023').style.color = 'white';
    document.getElementById('2024').style.background = 'white';
    document.getElementById('2024').style.color = 'black';

    document.getElementById('click_enero_2023').style.background = 'black';
    document.getElementById('click_febrero_2023').style.background = 'black';
    document.getElementById('click_marzo_2023').style.background = 'black';
    document.getElementById('click_abril_2023').style.background = 'black';
    document.getElementById('click_mayo_2023').style.background = 'black';
    document.getElementById('click_junio_2023').style.background = 'black';
    document.getElementById('click_julio_2023').style.background = 'black';
    document.getElementById('click_agosto_2023').style.background = 'black';
    document.getElementById('click_septiembre_2023').style.background = 'black';
    document.getElementById('click_octubre_2023').style.background = 'black';
    document.getElementById('click_noviembre_2023').style.background = 'black';
    document.getElementById('click_diciembre_2023').style.background = 'black';

    document.getElementById("enero_2023").style.display = 'none';
    document.getElementById("febrero_2023").style.display = 'none';
    document.getElementById("marzo_2023").style.display = 'none';
    document.getElementById("abril_2023").style.display = 'none';
    document.getElementById("mayo_2023").style.display = 'none';
    document.getElementById("junio_2023").style.display = 'none';
    document.getElementById("julio_2023").style.display = 'none';
    document.getElementById("agosto_2023").style.display = 'none';
    document.getElementById("septiembre_2023").style.display = 'none';
    document.getElementById("octubre_2023").style.display = 'none';
    document.getElementById("noviembre_2023").style.display = 'none';
    document.getElementById("diciembre_2023").style.display = 'none';
}
function mes_2023(m){
    document.getElementById("enero_2024").style.display = 'none';
    document.getElementById("febrero_2024").style.display = 'none';
    document.getElementById("marzo_2024").style.display = 'none';
    document.getElementById("abril_2024").style.display = 'none';
    document.getElementById("mayo_2024").style.display = 'none';
    document.getElementById("junio_2024").style.display = 'none';
    document.getElementById("julio_2024").style.display = 'none';
    document.getElementById("agosto_2024").style.display = 'none';
    document.getElementById("septiembre_2024").style.display = 'none';
    document.getElementById("octubre_2024").style.display = 'none';
    document.getElementById("noviembre_2024").style.display = 'none';
    document.getElementById("diciembre_2024").style.display = 'none';
    if (parseInt(m) === 1){
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_enero_2023").style.background = 'grey';
        document.getElementById("enero_2023").style.display = 'block';
    }else if (parseInt(m) === 2){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_febrero_2023").style.background = 'grey';
        document.getElementById("febrero_2023").style.display = 'block';
    }else if (parseInt(m) === 3){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_marzo_2023").style.background = 'grey';
        document.getElementById("marzo_2023").style.display = 'block';
    }else if (parseInt(m) === 4){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_abril_2023").style.background = 'grey';
        document.getElementById("abril_2023").style.display = 'block';
    }else if (parseInt(m) === 5){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_mayo_2023").style.background = 'grey';
        document.getElementById("mayo_2023").style.display = 'block';
    }else if (parseInt(m) === 6){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_junio_2023").style.background = 'grey';
        document.getElementById("junio_2023").style.display = 'block';
    }else if (parseInt(m) === 7){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_julio_2023").style.background = 'grey';
        document.getElementById("julio_2023").style.display = 'block';
    }else if (parseInt(m) === 8){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_agosto_2023").style.background = 'grey';
        document.getElementById("agosto_2023").style.display = 'block';
    }else if (parseInt(m) === 9){
        background_celdas();
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_septiembre_2023").style.background = 'grey';
        document.getElementById("septiembre_2023").style.display = 'block';
    }else if (parseInt(m) === 10){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_octubre_2023").style.background = 'grey';
        document.getElementById("octubre_2023").style.display = 'block';
    }else if (parseInt(m) === 11){
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("diciembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_diciembre_2023").style.background = 'black';

        document.getElementById("click_noviembre_2023").style.background = 'grey';
        document.getElementById("noviembre_2023").style.display = 'block';
    }else{
        document.getElementById("enero_2023").style.display = 'none';
        document.getElementById("febrero_2023").style.display = 'none';
        document.getElementById("marzo_2023").style.display = 'none';
        document.getElementById("abril_2023").style.display = 'none';
        document.getElementById("mayo_2023").style.display = 'none';
        document.getElementById("junio_2023").style.display = 'none';
        document.getElementById("julio_2023").style.display = 'none';
        document.getElementById("agosto_2023").style.display = 'none';
        document.getElementById("septiembre_2023").style.display = 'none';
        document.getElementById("octubre_2023").style.display = 'none';
        document.getElementById("noviembre_2023").style.display = 'none';

        document.getElementById("click_enero_2023").style.background = 'black';
        document.getElementById("click_febrero_2023").style.background = 'black';
        document.getElementById("click_marzo_2023").style.background = 'black';
        document.getElementById("click_abril_2023").style.background = 'black';
        document.getElementById("click_mayo_2023").style.background = 'black';
        document.getElementById("click_junio_2023").style.background = 'black';
        document.getElementById("click_julio_2023").style.background = 'black';
        document.getElementById("click_agosto_2023").style.background = 'black';
        document.getElementById("click_septiembre_2023").style.background = 'black';
        document.getElementById("click_octubre_2023").style.background = 'black';
        document.getElementById("click_noviembre_2023").style.background = 'black';

        document.getElementById("click_diciembre_2023").style.background = 'grey';
        document.getElementById("diciembre_2023").style.display = 'block';
    }
}
function mes_2024(m){
    document.getElementById("enero_2023").style.display = 'none';
    document.getElementById("febrero_2023").style.display = 'none';
    document.getElementById("marzo_2023").style.display = 'none';
    document.getElementById("abril_2023").style.display = 'none';
    document.getElementById("mayo_2023").style.display = 'none';
    document.getElementById("junio_2023").style.display = 'none';
    document.getElementById("julio_2023").style.display = 'none';
    document.getElementById("agosto_2023").style.display = 'none';
    document.getElementById("septiembre_2023").style.display = 'none';
    document.getElementById("octubre_2023").style.display = 'none';
    document.getElementById("noviembre_2023").style.display = 'none';
    document.getElementById("diciembre_2023").style.display = 'none';
    if (parseInt(m) === 1){
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_enero_2024").style.background = 'grey';
        document.getElementById("enero_2024").style.display = 'block';
    }else if (parseInt(m) === 2){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_febrero_2024").style.background = 'grey';
        document.getElementById("febrero_2024").style.display = 'block';
    }else if (parseInt(m) === 3){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_marzo_2024").style.background = 'grey';
        document.getElementById("marzo_2024").style.display = 'block';
    }else if (parseInt(m) === 4){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_abril_2024").style.background = 'grey';
        document.getElementById("abril_2024").style.display = 'block';
    }else if (parseInt(m) === 5){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_mayo_2024").style.background = 'grey';
        document.getElementById("mayo_2024").style.display = 'block';
    }else if (parseInt(m) === 6){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_junio_2024").style.background = 'grey';
        document.getElementById("junio_2024").style.display = 'block';
    }else if (parseInt(m) === 7){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_julio_2024").style.background = 'grey';
        document.getElementById("julio_2024").style.display = 'block';
    }else if (parseInt(m) === 8){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_agosto_2024").style.background = 'grey';
        document.getElementById("agosto_2024").style.display = 'block';
    }else if (parseInt(m) === 9){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_septiembre_2024").style.background = 'grey';
        document.getElementById("septiembre_2024").style.display = 'block';
    }else if (parseInt(m) === 10){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_octubre_2024").style.background = 'grey';
        document.getElementById("octubre_2024").style.display = 'block';
    }else if (parseInt(m) === 11){
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("diciembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_diciembre_2024").style.background = 'black';

        document.getElementById("click_noviembre_2024").style.background = 'grey';
        document.getElementById("noviembre_2024").style.display = 'block';
    }else{
        document.getElementById("enero_2024").style.display = 'none';
        document.getElementById("febrero_2024").style.display = 'none';
        document.getElementById("marzo_2024").style.display = 'none';
        document.getElementById("abril_2024").style.display = 'none';
        document.getElementById("mayo_2024").style.display = 'none';
        document.getElementById("junio_2024").style.display = 'none';
        document.getElementById("julio_2024").style.display = 'none';
        document.getElementById("agosto_2024").style.display = 'none';
        document.getElementById("septiembre_2024").style.display = 'none';
        document.getElementById("octubre_2024").style.display = 'none';
        document.getElementById("noviembre_2024").style.display = 'none';

        document.getElementById("click_enero_2024").style.background = 'black';
        document.getElementById("click_febrero_2024").style.background = 'black';
        document.getElementById("click_marzo_2024").style.background = 'black';
        document.getElementById("click_abril_2024").style.background = 'black';
        document.getElementById("click_mayo_2024").style.background = 'black';
        document.getElementById("click_junio_2024").style.background = 'black';
        document.getElementById("click_julio_2024").style.background = 'black';
        document.getElementById("click_agosto_2024").style.background = 'black';
        document.getElementById("click_septiembre_2024").style.background = 'black';
        document.getElementById("click_octubre_2024").style.background = 'black';
        document.getElementById("click_noviembre_2024").style.background = 'black';

        document.getElementById("click_diciembre_2024").style.background = 'grey';
        document.getElementById("diciembre_2024").style.display = 'block';
    }
}


function ano_2021_gastos(){
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';

    document.getElementById('2021_gastos').style.background = 'white';
    document.getElementById('2021_gastos').style.color = 'black';

    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('t_2021').style.display = 'block';
}
function ano_2022_gastos(){
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';

    document.getElementById('2022_gastos').style.background = 'white';
    document.getElementById('2022_gastos').style.color = 'black';

    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('t_2022').style.display = 'block';
}
function ano_2023_gastos(){
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2024_gastos').style.background = 'black';
    document.getElementById('2024_gastos').style.color = 'white';

    document.getElementById('2023_gastos').style.background = 'white';
    document.getElementById('2023_gastos').style.color = 'black';

    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2024').style.display = 'none';
    document.getElementById('t_2023').style.display = 'block';
}
function ano_2024_gastos(){
    document.getElementById('2021_gastos').style.background = 'black';
    document.getElementById('2021_gastos').style.color = 'white';
    document.getElementById('2022_gastos').style.background = 'black';
    document.getElementById('2022_gastos').style.color = 'white';
    document.getElementById('2023_gastos').style.background = 'black';
    document.getElementById('2023_gastos').style.color = 'white';

    document.getElementById('2024_gastos').style.background = 'white';
    document.getElementById('2024_gastos').style.color = 'black';

    document.getElementById('t_2021').style.display = 'none';
    document.getElementById('t_2022').style.display = 'none';
    document.getElementById('t_2023').style.display = 'none';
    document.getElementById('t_2024').style.display = 'block';
}

function cu(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Los meses comienzan desde 0
    var year = today.getFullYear();
    //var formattedDate = day + "/" + month + "/" + year;
    var formattedDate = day;
    return formattedDate;
}

function background_celdas(){

        // Obtén una referencia a la tabla
        var tabla = document.getElementById("tablaql");
        // Obtén una referencia a las filas del cuerpo de la tabla

        var filasth = tabla.getElementsByTagName("thead")[0].rows;
        // Itera a través de las filas
        for (var i = 0; i < filasth.length; i++) {
            var filath = filasth[i];
            // Obtén una referencia a las celdas de la fila
            var celdasth = filath.cells;
            // Itera a través de las celdas
            for (var j = 0; j < celdasth.length; j++) {
                var celdath = celdasth[j];
                var contenidoth = celdath.innerHTML;
                // Accede a la clase de la celda
                var claseCeldath = celdath.classList[0]; // Suponemos que solo tiene una clase
                // Hacer algo con la clase de la celda
                if (celdath.classList.contains(cu())) {
                    // Aplica el fondo rojo a la celda
                    //celdath.style.backgroundColor = "#b07d46";
                    //celdath.style.opacity = "30%";
                    //celdath.style.border = "1px solid #b07d46";
                    celdath.style.animation = "feature 1.5s ease infinite alternate-reverse";
                    //celdath.classList.add('logo_circulo');
                }
            }
        }

        var filas = tabla.getElementsByTagName("tbody")[0].rows;
        // Itera a través de las filas
        for (var i = 0; i < filas.length; i++) {
            var fila = filas[i];
            // Obtén una referencia a las celdas de la fila
            var celdas = fila.cells;
            // Itera a través de las celdas
            for (var j = 0; j < celdas.length; j++) {
                var celda = celdas[j];
                var contenido = celda.innerHTML;
                // Accede a la clase de la celda
                var claseCelda = celda.classList[0]; // Suponemos que solo tiene una clase
                // Hacer algo con la clase de la celda
                if (celda.classList.contains(cu())) {
                    // Aplica el fondo rojo a la celda
                    //celda.style.backgroundColor = "#b07d46";
                    //celda.style.opacity = "30%";
                    //celda.style.border = "1px solid red";
                    //celda.classList.add('logo_circulo');
                    celda.style.animation = "feature 1.5s ease infinite alternate-reverse";
                    
                }
            }
        }
}

function ver_movimientos(){
    var input = document.querySelector('input[name="clave_movimientos"]');
    var valor = input.value;
    //alert(valor);
    if(valor == '.'){
        input.value = '';
        document.getElementById("caja-detalle-gastos").style.display = 'block';
        document.getElementById("total-gastos").style.display = 'block';
        
    }else{
        input.value = '';
        document.getElementById("caja-detalle-gastos").style.display = 'none';
        document.getElementById("total-gastos").style.display = 'none';
        document.getElementById('modal_clave').style.display = 'block';
        //alert('Intentalo de nuevo awueonao ¡¡¡');
    }
}