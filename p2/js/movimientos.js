const movimientos = [
    //fecha: fecha del movimiento
    //movimiento: 1-Entrada, 2-Salida
    //monto: cantidad del movimiento
    //detalle: Descripción de la Entrada o la Salida 
    {fecha:'08-10-2023',movimiento:1,monto:'40.000',detalle:'El Pablo pidio mas plata que la xuxa'},
    {fecha:'09-10-2023',movimiento:2,monto:'16.000',detalle:'popo'},
    {fecha:'10-10-2023',movimiento:2,monto:'6.000',detalle:'koko'},
    {fecha:'11-10-2023',movimiento:1,monto:'200.000',detalle:'sasa'},
    {fecha:'12-10-2023',movimiento:1,monto:'100.000',detalle:'rere'},
    {fecha:'13-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'13-10-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {fecha:'13-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'13-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'14-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:2,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
    {fecha:'15-10-2023',movimiento:1,monto:'10.000',detalle:'cucu'},
];

document.addEventListener('DOMContentLoaded', function() {

    var tbody_d = document.getElementById("tbody_d");
    tbody_d.innerHTML = "";

    var sum_total = 0;
    var suma = 0;
    var resta = 0;


    for (var i = 0; i < movimientos.length; i++){
        // Crear el encabezado de la tabla
        var mo = movimientos[i].monto.split('.');
        var monto = mo[0]+''+mo[1];
        //console.log(parseInt(monto));
        var tr_body = tbody_d.insertRow(i);
        var td_fecha = tr_body.insertCell(0);
        var td_movimiento = tr_body.insertCell(1);
        var td_monto = tr_body.insertCell(2);
        var td_detalle = tr_body.insertCell(3);
        td_fecha.innerHTML = movimientos[i].fecha;
        td_movimiento.innerHTML = ((parseInt(movimientos[i].movimiento) === 1)?'Entrada':'Salida');
        td_monto.innerHTML = movimientos[i].monto;
        td_detalle.innerHTML = movimientos[i].detalle;
        if(parseInt(movimientos[i].movimiento) === 1){
            suma += parseInt(monto);
        }else{
            resta += parseInt(monto);
        }
    }
    //console.log([suma,resta]);
    sum_total = (suma - resta);
    var suma_total = document.getElementById('sum_total');
    suma_total.textContent = agregarSeparadorDeMiles(sum_total);

    //console.log(agregarSeparadorDeMiles(sum_total));
});

function filtrar() {
    var fd = document.getElementById('fecha_desde');
    var fh = document.getElementById('fecha_hasta');
    var select = document.getElementById('movimiento');
    
    if(select.value == 2){
        
        for(var i = 0; i < parseInt(movimientos.length); i++){
            
            if(movimientos[i].movimiento == 1){

                var mo = movimientos[i].monto.split('.');
                var monto = mo[0]+''+mo[1];
                //console.log(parseInt(movimientos[i].movimiento));
                var tr_body = tbody_d.insertRow(i);
                var td_fecha = tr_body.insertCell(0);
                var td_movimiento = tr_body.insertCell(1);
                var td_monto = tr_body.insertCell(2);
                var td_detalle = tr_body.insertCell(3);
                td_fecha.innerHTML = movimientos[i].fecha;
                td_movimiento.innerHTML = ((parseInt(movimientos[i].movimiento) === 1)?'Entrada':'Salida');
                td_monto.innerHTML = movimientos[i].monto;
                td_detalle.innerHTML = movimientos[i].detalle;

            }
        }
        //alert(movimientos);
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