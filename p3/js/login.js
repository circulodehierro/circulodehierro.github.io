// Función para el logo
function logo() {
    // Alternar una clase en el body para cambiar el modo
    document.body.classList.toggle('dark-mode');
    // Guardar el estado del modo en localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
}
  
window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    //console.log(permiso);
};

let usuario = {};
let permiso = [];
//1 Documentos
//2 Movimientos
//3 Reuniones
//4 Eventos
//5 Fichas
//6 Turnos
//7 Cuotas
//8 Otros
    
  // Función de login
function login() {
    const password = document.getElementById('pass').value;
    const spanPass = document.getElementById('span_pass');
    const spanPass_bien = document.getElementById('span_pass_bien');

    switch(password){
        case 'pa': // Pablo
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Pablo!';
            // Guardar el usuario en localStorage
            /**/
            usuario = { 
                nombre: "Pablo", 
                email: "pablo@example.com", 
                edad: 25
            };
            permiso = [1,2,5,6];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            
            window.location.href = 'pages/inicio.html';
        break;
        case 'al': // Ale
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Ale!';
            usuario = { nombre: "Ale", email: "ale@example.com", edad: 28}; 
            permiso = [1,2,5,6];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        case 'jo': // Jota
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Jota!';
            usuario = { nombre: "Jota", email: "jota@example.com", edad: 32};
            permiso = [1,2,5,6];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        case 'ro': // Robinson
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Robinson!';
            usuario = { 
                nombre: "Robinson", 
                email: "yoyo@example.com", 
                edad: 40
            };
            permiso = [1,2,3,4,5,6,7,8];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        case 'br': // Bracka
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Bracka!';
            usuario = { nombre: "Bracka", email: "bracka@example.com", edad: 35};
            permiso = [1,2,6];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        case 'ch': // Chadu
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Chadu!';
            usuario = { nombre: "Chadu", email: "chadu@example.com", edad: 27};
            permiso = [1,2,6];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        case 'pr': // Prospecto
            spanPass.style.display = 'none';
            spanPass_bien.style.display = 'block';
            spanPass_bien.textContent = '¡Bienvenido Prospecto!';
            usuario = { nombre: "Prospecto", email: "prospecto@example.com", edad: 22};
            permiso = [1,3,4,5];
            localStorage.setItem("usuario", JSON.stringify(usuario));
            localStorage.setItem("permiso", JSON.stringify(permiso));
            window.location.href = 'pages/inicio.html';
        break;
        default:
            spanPass_bien.style.display = 'none';
            spanPass.style.display = 'block';
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
    //var clave = aleatorio(3)+sp[1]+aleatorio(2)+sp[0]+aleatorio(3);
    //window.location.href = 'pages/inicio.html?'+aleatorio(8)+'='+clave;
    window.location.href = 'pages/inicio.html';
}