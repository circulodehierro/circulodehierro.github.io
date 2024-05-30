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
            ficha_robinson.style.display = 'block';
            break;
        default:
            break;
    } 
}