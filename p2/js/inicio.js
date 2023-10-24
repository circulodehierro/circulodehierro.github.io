    var parametros = new URLSearchParams(window.location.search);
    // Obtiene el valor de la variable
    var miVariable = parametros.get('fa87sdbk');
    var x = miVariable.split('1k0');
    var y = x[1].split('2kq');
    var z = y[0].split('');
    var clave = z[3]+z[0];
    //console.log(clave);
    
    
    window.addEventListener('load', function() {
        const estatutos = document.getElementById('estatutos');
        const movimientos = document.getElementById('movimientos');
        const reuniones = document.getElementById('reuniones');
        const eventos = document.getElementById('eventos');
        const fichas = document.getElementById('fichas');
        const turnos = document.getElementById('turnos');
        const cuotas = document.getElementById('cuotas');
        switch(clave){
            case 'pa'://Pablo
            break;
            case 'al'://Ale
            break;
            case 'jo'://Jota
            break;
            case 'ro'://Robinson
            break;
            case 'br'://Braka
            break;
            case 'ch'://Chadu
            break;
            case 'pr'://Prospecto
                deshabilita_bloque(movimientos);
                deshabilita_bloque(turnos);
                deshabilita_bloque(cuotas);
            break;
            default:
                //document.getElementById('pass').value = '';
            break;
        }
    });

    function deshabilita_bloque(bloque){
        if (bloque.classList.contains('div-deshabilitado')) {
            bloque.classList.remove('div-deshabilitado');
          } else {
            bloque.classList.add('div-deshabilitado');
          }
    }

    function estatutos(){
        window.location.href = 'estatutos.html';
    }
    function movimientos(){
        window.location.href = 'movimientos.html';
    }
    function reuniones(){
        window.location.href = 'reuniones.html';
    }
    function eventos(){
        window.location.href = 'eventos.html';
    }
    function fichas(){
        window.location.href = 'fichas.html';
    }
    function turnos(){
        window.location.href = 'turnos.html';
    }
    function cuotas(){
        window.location.href = 'cuotas.html';
    }

    