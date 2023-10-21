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
        break;
    }
    
}

function url(pass){
    var sp = pass.split('');
    var clave = '1k0'+sp[1]+'ko'+sp[0]+'2kq';
    window.location.href = 'pages/inicio.html?fa87sdbk='+clave;
}