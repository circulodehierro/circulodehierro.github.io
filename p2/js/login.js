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
    var log = 0;
    switch(pass){
        case 'pa':
            document.getElementById('miModal').style.display = 'none';
            var sp = pass.split('');
            var clave = '1k0'+sp[1]+'ko'+sp[0]+'2kq';
            window.location.href = 'pages/inicio.html?fa87sdbk='+clave;
            
        break;
        case 'al':
            document.getElementById('miModal').style.display = 'none';
            console.log(pass);
        break;
        case 'jo':
            document.getElementById('miModal').style.display = 'none';
            console.log(pass);
        break;
        case 'ro':
            document.getElementById('miModal').style.display = 'none';
            console.log(pass);
        break;
        case 'br':
            document.getElementById('miModal').style.display = 'none';
            console.log(pass);
        break;
        case 'ch':
            document.getElementById('miModal').style.display = 'none';
            console.log(pass);
        break;
        default:
            document.getElementById('pass').value = '';
            console.log(pass);
            log;
        break;
    }
    
}