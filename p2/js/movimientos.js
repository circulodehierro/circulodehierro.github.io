const movimientos_2023 = [
    //ano: año
    //mes: mes
    //fecha: fecha del movimiento
    //movimiento: 1-Entrada, 2-Salida
    //monto: cantidad del movimiento
    //detalle: Descripción de la Entrada o la Salida 
    {mes:6,fecha:'10-06-2023',movimiento:2,monto:'6.000',detalle:'koko'},
    {mes:6,fecha:'12-06-2023',movimiento:3,monto:'100.000',detalle:'rere'},
    {mes:10,fecha:'13-10-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {mes:2,fecha:'23-02-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {mes:11,fecha:'13-11-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:11,fecha:'14-11-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:10,fecha:'14-10-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:7,fecha:'01-07-2023',movimiento:3,monto:'10.000',detalle:'cucusw'},
    {mes:10,fecha:'14-10-2023',movimiento:3,monto:'10.000',detalle:'cucuf'},
    {mes:4,fecha:'04-04-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {mes:10,fecha:'14-10-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:4,fecha:'14-04-2023',movimiento:3,monto:'10.000',detalle:'cucuerw'},
    {mes:4,fecha:'15-04-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {mes:1,fecha:'25-01-2023',movimiento:2,monto:'12.000',detalle:'cucu1'},
    {mes:1,fecha:'15-01-2023',movimiento:2,monto:'18.000',detalle:'cucu2'},
    {mes:5,fecha:'15-05-2023',movimiento:2,monto:'10.000',detalle:'cusdcu'},
    {mes:10,fecha:'15-10-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:10,fecha:'15-10-2023',movimiento:3,monto:'10.000',detalle:'cucu'},
];
const movimientos_2024 = [
    //ano: año
    //mes: mes
    //fecha: fecha del movimiento
    //movimiento: 1-Entrada, 2-Salida
    //monto: cantidad del movimiento
    //detalle: Descripción de la Entrada o la Salida 
    {mes:10,fecha:'08-10-2024',movimiento:3,monto:'40.000',detalle:'El Pablo '},
    {mes:10,fecha:'09-10-2024',movimiento:2,monto:'16.000',detalle:'popo'},
    {mes:6,fecha:'11-06-2024',movimiento:3,monto:'200.000',detalle:'sasa'},
    {mes:10,fecha:'13-10-2024',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:11,fecha:'14-11-2024',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:11,fecha:'12-11-2024',movimiento:3,monto:'10.000',detalle:'cucux'},
    {mes:10,fecha:'14-10-2024',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:4,fecha:'14-04-2024',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:4,fecha:'15-04-2024',movimiento:3,monto:'10.000',detalle:'cucsdu'},
    {mes:10,fecha:'15-10-2024',movimiento:3,monto:'10.000',detalle:'cudscu'},
    {mes:10,fecha:'11-10-2024',movimiento:2,monto:'30.000',detalle:'cucu'},
    {mes:5,fecha:'15-05-2024',movimiento:3,monto:'10.000',detalle:'cu23cu'},
    {mes:5,fecha:'15-05-2024',movimiento:3,monto:'10.000',detalle:'cucu'},
    {mes:10,fecha:'15-10-2024',movimiento:3,monto:'10.000',detalle:'cughcu'},
    {mes:10,fecha:'15-10-2024',movimiento:2,monto:'40.000',detalle:'cutrcu'},
];
const movimientos_2025 = [
    //ano: año
    //mes: mes
    //fecha: fecha del movimiento
    //movimiento: 1-Entrada, 2-Salida
    //monto: cantidad del movimiento
    //detalle: Descripción de la Entrada o la Salida 
    {mes:2,fecha:'18-02-2025',movimiento:2,monto:'12.000',detalle:'sdcucu'},
    {mes:3,fecha:'05-03-2025',movimiento:3,monto:'10.000',detalle:'cuc23uvv'},
];

document.addEventListener('DOMContentLoaded', function() {
    //console.log('inicio');
    document.getElementById('contenedor_detalle').style.display = 'none';
    document.getElementById('total').style.display = 'none';
});

function filtrar() {
    //document.getElementById('contenedor_detalle').style.display = 'block';

    //contenedor.style.display = 'block';
    //var fd = document.getElementById('fecha_desde');
    //var fh = document.getElementById('fecha_hasta');
    var an = document.getElementById('ano');
    var me = document.getElementById('mes');
    var mo = document.getElementById('mov');
    
    function updateSelectedAno() {
        var selectedOption = an.options[an.selectedIndex].value;
        return selectedOption;
    }
    function updateSelectedMes() {
        var selectedOption = me.options[me.selectedIndex].value;
        return selectedOption;
    }
    function updateSelectedMov() {
        var selectedOption = mo.options[mo.selectedIndex].value;
        return selectedOption;
    }
    // Capturar la opción seleccionada al cargar la página
    var ano = parseInt(updateSelectedAno());
    var mes = parseInt(updateSelectedMes());
    var mov = parseInt(updateSelectedMov());

    an.addEventListener('change', function() {
        document.getElementById('contenedor_detalle').style.display = 'none';
        document.getElementById('total').style.display = 'none';
    });
    me.addEventListener('change', function() {
        document.getElementById('contenedor_detalle').style.display = 'none';
        document.getElementById('total').style.display = 'none';
    });
    mo.addEventListener('change', function() {
        document.getElementById('contenedor_detalle').style.display = 'none';
        document.getElementById('total').style.display = 'none';
    });

    var tbody_d = document.getElementById("tbody_d");
    tbody_d.innerHTML = "";

    var sum_total = 0;
    var suma = 0;
    var resta = 0;
    switch (ano){
        case 0:
            return get_todo(tbody_d, mes, mov, sum_total, suma, resta);
            break;
        case 1:
            return get_2023(tbody_d, mes, mov, sum_total, suma, resta);
            break;
        case 2:
            return get_2024(tbody_d, mes, mov, sum_total, suma, resta);
            break;
        case 3:
            return get_2025(tbody_d, mes, mov, sum_total, suma, resta);
            break;
        default:
            break;
    }
}

function get_todo(tbody_d, mes, mov, sum_total, suma, resta){
    const entradas = [];
    const salidas = [];
    const todos = [];
    movimientos_2023.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    movimientos_2024.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    movimientos_2025.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    switch (mov){
        case 1://TODOS
            for (var i = 0; i < todos.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                if (todos[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 2://ENTRADAS
        tbody_d.style.color = 'green';
            for (var i = 0; i < entradas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                if (entradas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 3://SALIDAS
        tbody_d.style.color = 'red';
            for (var i = 0; i < salidas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
                if (salidas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
            }
            sum_total = resta;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
    }
}

function get_2023(tbody_d, mes, mov, sum_total, suma, resta){
    const entradas = [];
    const salidas = [];
    const todos = [];
    movimientos_2023.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    switch (mov){
        case 1://TODOS
            for (var i = 0; i < todos.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                if (todos[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = todos[i][0].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += todos[i][0].fecha;
                td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                td_monto.innerHTML += todos[i][0].monto;
                td_detalle.innerHTML += todos[i][0].detalle;
                if(parseInt(todos[i][0].movimiento) === 2){
                    suma += parseInt(monto);
                }else{
                    suma -= parseInt(monto);
                }
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 2://ENTRADAS
        tbody_d.style.color = 'green';
            for (var i = 0; i < entradas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                if (entradas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = entradas[i].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += entradas[i].fecha;
                td_movimiento.innerHTML += 'Entrada';
                td_monto.innerHTML += entradas[i].monto;
                td_detalle.innerHTML += entradas[i].detalle;
                suma += parseInt(monto);
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 3://SALIDAS
        tbody_d.style.color = 'red';
            for (var i = 0; i < salidas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
                if (salidas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
            }
            sum_total = resta;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
    }
}

function get_2024(tbody_d, mes, mov, sum_total, suma, resta){
    const entradas = [];
    const salidas = [];
    const todos = [];
    movimientos_2024.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    switch (mov){
        case 1://TODOS
            for (var i = 0; i < todos.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                if (todos[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = todos[i][0].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += todos[i][0].fecha;
                td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                td_monto.innerHTML += todos[i][0].monto;
                td_detalle.innerHTML += todos[i][0].detalle;
                if(parseInt(todos[i][0].movimiento) === 2){
                    suma += parseInt(monto);
                }else{
                    suma -= parseInt(monto);
                }
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 2://ENTRADAS
        tbody_d.style.color = 'green';
            for (var i = 0; i < entradas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                if (entradas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = entradas[i].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += entradas[i].fecha;
                td_movimiento.innerHTML += 'Entrada';
                td_monto.innerHTML += entradas[i].monto;
                td_detalle.innerHTML += entradas[i].detalle;
                suma += parseInt(monto);
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 3://SALIDAS
        tbody_d.style.color = 'red';
            for (var i = 0; i < salidas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
                if (salidas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
            }
            sum_total = resta;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
    }
}

function get_2025(tbody_d, mes, mov, sum_total, suma, resta){
    const entradas = [];
    const salidas = [];
    const todos = [];
    movimientos_2025.forEach(movimiento => {
        switch (movimiento.movimiento) {
            case 2:
                const e_mes = [];
                const e_mes_todos = [];
                switch (mes){
                    case 0:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 1:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 2:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 4:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 5:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 6:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 7:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 8:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 9:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 10:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 11:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;
                    case 12:
                        e_mes.push(movimiento);
                        e_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                entradas.push(e_mes);
                todos.push(e_mes_todos);
                break;
            case 3:
                const s_mes = [];
                const s_mes_todos = [];
                switch (mes){
                    case 0:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 1:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 2:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break; 
                    case 3:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 4:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 5:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 6:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 7:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 8:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 9:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 10:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 11:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;
                    case 12:
                        s_mes.push(movimiento);
                        s_mes_todos.push(movimiento);
                        break;   
                    default:
                        break;        
                }
                salidas.push(s_mes);
                todos.push(s_mes_todos);
                break;
            default:
                break;
        }
    });
    switch (mov){
        case 1://TODOS
            for (var i = 0; i < todos.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                if (todos[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = todos[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += todos[i][0].fecha;
                    td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                    td_monto.innerHTML += todos[i][0].monto;
                    td_detalle.innerHTML += todos[i][0].detalle;
                    if(parseInt(todos[i][0].movimiento) === 2){
                        suma += parseInt(monto);
                        td_fecha.style.color = 'green';
                        td_movimiento.style.color = 'green';
                        td_monto.style.color = 'green';
                        td_detalle.style.color = 'green';
                    }else{
                        suma -= parseInt(monto);
                        td_fecha.style.color = 'red';
                        td_movimiento.style.color = 'red';
                        td_monto.style.color = 'red';
                        td_detalle.style.color = 'red';
                    }
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = todos[i][0].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += todos[i][0].fecha;
                td_movimiento.innerHTML += ((parseInt(todos[i][0].movimiento) === 2)?'Entrada':'Salida');
                td_monto.innerHTML += todos[i][0].monto;
                td_detalle.innerHTML += todos[i][0].detalle;
                if(parseInt(todos[i][0].movimiento) === 2){
                    suma += parseInt(monto);
                }else{
                    suma -= parseInt(monto);
                }
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 2://ENTRADAS
        tbody_d.style.color = 'green';
            for (var i = 0; i < entradas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                if (entradas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = entradas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += entradas[i][0].fecha;
                    td_movimiento.innerHTML += 'Entrada';
                    td_monto.innerHTML += entradas[i][0].monto;
                    td_detalle.innerHTML += entradas[i][0].detalle;
                    suma += parseInt(monto);
                }
                /*
                var tr_body = tbody_d.insertRow();
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                var mo = entradas[i].monto.split('.');
                var monto = mo[0]+''+mo[1];
                td_fecha.innerHTML += entradas[i].fecha;
                td_movimiento.innerHTML += 'Entrada';
                td_monto.innerHTML += entradas[i].monto;
                td_detalle.innerHTML += entradas[i].detalle;
                suma += parseInt(monto);
                */
            }
            sum_total = suma;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
        case 3://SALIDAS
        tbody_d.style.color = 'red';
            for (var i = 0; i < salidas.length; i++){
                if (mes === 0){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
                if (salidas[i][0].mes === mes){
                    var tr_body = tbody_d.insertRow();
                    var td_fecha = tr_body.insertCell(0);
                    var td_movimiento = tr_body.insertCell(1);
                    var td_monto = tr_body.insertCell(2);
                    var td_detalle = tr_body.insertCell(3);
                    var mo = salidas[i][0].monto.split('.');
                    var monto = mo[0]+''+mo[1];
                    td_fecha.innerHTML += salidas[i][0].fecha;
                    td_movimiento.innerHTML += 'Salida';
                    td_monto.innerHTML += salidas[i][0].monto;
                    td_detalle.innerHTML += salidas[i][0].detalle;
                    resta += parseInt(monto);
                }
            }
            sum_total = resta;
            var suma_total = document.getElementById('sum_total');
            suma_total.textContent = agregarSeparadorDeMiles(sum_total);
            document.getElementById('contenedor_detalle').style.display = 'block';
            document.getElementById('total').style.display = 'block';
            break;
    }
}

function agregarSeparadorDeMiles(numero) {
    if (typeof numero !== 'string') {
      numero = numero.toString(); // Convertir a cadena si no lo es
    }
    return numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formato_fecha(f){
    var fechaInicio = new Date(f); // Crear un objeto Date a partir de la cadena
    // Formatear la fecha en el formato dd-mm-yyyy
    var dia = fechaInicio.getDate().toString().padStart(2, '0');
    var mes = (fechaInicio.getMonth() + 1).toString().padStart(2, '0'); // ¡Recuerda que los meses en JavaScript comienzan en 0!
    var año = fechaInicio.getFullYear();
    var fechaFormateada = `${dia}-${mes}-${año}`;
    return fechaFormateada;
}