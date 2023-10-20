    var parametros = new URLSearchParams(window.location.search);
    // Obtiene el valor de la variable
    var miVariable = parametros.get('fa87sdbk');
    var x = miVariable.split('1k0');
    var y = x[1].split('2kq');
    var z = y[0].split('');
    var clave = z[3]+z[0];
    console.log(clave);
    
    
    window.addEventListener('load', function() {
        document.getElementById('oculto').value = clave;
    });

    