// Función para el logo
function logo() {
    // Alternar una clase en el body para cambiar el modo
    document.body.classList.toggle('dark-mode');
  }
  
  
  // Función de login
  function login() {
    const password = document.getElementById('pass').value;
    const spanPass = document.getElementById('span_pass');
    const spanPass_bien = document.getElementById('span_pass_bien');
  
    /*if (password === '1234') { // Reemplaza '1234' por tu contraseña real
      alert('Contraseña correcta. ¡Bienvenido!');
      spanPass.style.display = 'none';
      // Redireccionar a otra página si es necesario
      // window.location.href = 'pages/home.html';
    } else {
      spanPass.style.display = 'block';
    }*/

    switch(password){
        case 'pa'://Pablo
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Pablo!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'al'://Ale
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Ale!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'jo'://Jota
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Jota!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'ro'://Robinson
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Robinson!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'br'://Bracka
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Bracka!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'ch'://Chadu
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Chadu!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        case 'pr'://Prospecto
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Prospecto!';
            //document.getElementById('miModal').style.display = 'none';
            //url(pass);
        break;
        default:
            spanPass_bien.style.display = 'none';
            spanPass.style.display = 'block';
            /*document.getElementById('pass').value = '';
            var msj = document.getElementById('span_pass');
            msj.style.display = 'block';
            input.addEventListener('click', function (){
                msj.style.display = 'none';
            });*/
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