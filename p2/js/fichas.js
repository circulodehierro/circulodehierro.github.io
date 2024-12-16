document.addEventListener('DOMContentLoaded', function() {
    var parametros = new URLSearchParams(window.location.search);
    var ficha = document.getElementById('ficha');
    var nombreElement = document.getElementById('nombre');
    var tabla = document.getElementById('tabla');
    ficha.style.textAlign = 'center';

    const exampleString = parametros;
    var new_cadena = extractFirstFiveCharacters(exampleString, 0, 8);
    var miVariable = parametros.get(new_cadena);
    var pl = extractFirstFiveCharacters(miVariable, 3, 4);
    var ul = extractFirstFiveCharacters(miVariable, 6, 7);
    var clave = String(ul+pl);
    
    function extractFirstFiveCharacters(inputString, inicio, final) {
        const str = String(inputString);
        return str.substring(inicio, final);
    }
    ver_ficha(clave, parametros, nombreElement, tabla);
});


function ver_ficha(f, parametros, nombreElement, tabla) {
    const ficha_pablo = document.getElementById('ficha_pablo');
    const ficha_robinson = document.getElementById('ficha_robinson');
    switch (f){
        case 'pa':
            ficha_pablo.style.display = 'block';
            break;
        case 'al':
            //nombreElement.innerHTML = "ALE";
            break;
        case 'jo':
            //nombreElement.innerHTML = "JOTA";
            break;
        case 'br':
            //nombreElement.innerHTML = "BRACKA";
            break;
        case 'ro':
            //enviar('Robinson');
            ficha_robinson.style.display = 'block';
            break;
        case 'ch':
            //nombreElement.innerHTML = "CHADU";
            break;
        case 'ra':
            //nombreElement.innerHTML = "RAUL";
            break;
        case 'ar':
            //nombreElement.innerHTML = "ARTURO";
            break;            
        case 'tr':
            //nombreElement.innerHTML = "TRONCOSO";
            break;    
        default:
            break;
    } 
}

function enviar(miembro) {

    const phoneNumber = '+56976366886'; // Reemplaza con el número de teléfono
    //const phoneNumber = '+56982189813'; // Reemplaza con el número de teléfono
    const message = 'Hola, '+miembro; // Mensaje predefinido (opcional)

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    //const url = `https://api.whatsapp.com/send?phone=${56944331910}&text=${encodeURIComponent(miembro)}`;
    //window.open(url, '_blank');

    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
}