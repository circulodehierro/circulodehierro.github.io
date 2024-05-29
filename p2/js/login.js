function logo(){
    // JavaScript para mostrar y ocultar la modal
    const modal = document.getElementById('miModal');
    const abrirModal = document.getElementById('abrirModal');
    
    modal.style.display = 'block';

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function login(){
    var input = document.getElementById('pass');
    var pass = input.value;
    switch(pass){
        case 'pa'://Pablo
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'al'://Ale
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'jo'://Jota
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'ro'://Robinson
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'br'://Braka
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'ch'://Chadu
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        case 'pr'://Prospecto
            document.getElementById('miModal').style.display = 'none';
            url(pass);
        break;
        default:
            document.getElementById('pass').value = '';
            var msj = document.getElementById('span_pass');
            msj.style.display = 'block';
            input.addEventListener('click', function (){
                msj.style.display = 'none';
            });
        break;
    }
    
}

function aleatorio(cant) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = cant;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function url(pass){
    var sp = pass.split('');
    //var clave = '1k0'+sp[1]+'ko'+sp[0]+'2kq';
    //window.location.href = 'pages/inicio.html?fa87sdbk='+clave;
    var clave = aleatorio(3)+sp[1]+aleatorio(2)+sp[0]+aleatorio(3);
    window.location.href = 'pages/inicio.html?'+aleatorio(8)+'='+clave;
}