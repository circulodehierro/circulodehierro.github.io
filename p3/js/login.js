// Función para el logo
// Función para el logo
function logo() {
    // Alternar una clase en el body para cambiar el modo
    document.body.classList.toggle('dark-mode');
  }
  
  
  // Función de login
  function login() {
    const password = document.getElementById('pass').value;
    const spanPass = document.getElementById('span_pass');
  
    if (password === '1234') { // Reemplaza '1234' por tu contraseña real
      alert('Contraseña correcta. ¡Bienvenido!');
      spanPass.style.display = 'none';
      // Redireccionar a otra página si es necesario
      // window.location.href = 'pages/home.html';
    } else {
      spanPass.style.display = 'block';
    }
  }
  