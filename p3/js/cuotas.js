import { cuotas } from '../apis/cuotas_api.js';
document.addEventListener("DOMContentLoaded", function() {
    const data = localStorage.getItem("usuario");
    const user = JSON.parse(data);
    console.log(user.nombre);
});
