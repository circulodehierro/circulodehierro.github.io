document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ficha').style.display = 'none';

});
function ver_ficha__(f){
    var nombre = document.getElementById('nombre');
    nombre.style.display = 'block';
    switch (f){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            nombre.innerHTML = "ROBINSON";
            break;
        default:
            break;
    }
    var div1 = document.getElementById("bloques");
    var div2 = document.getElementById("ficha");

    div1.addEventListener("click", function() {
        slideUp(div1, function() {
            slideDown(div2);
        });
    });

    div2.addEventListener("click", function() {
        slideUp(div2, function() {
            slideDown(div1);
        });
    });

    function slideUp(element, callback) {
        var height = element.scrollHeight;
        element.style.height = height + 'px';
        element.style.transition = 'height 0.5s ease-out';
        requestAnimationFrame(function() {
            element.style.height = '0';
        });

        element.addEventListener('transitionend', function() {
            element.style.display = 'none';
            element.style.height = '';
            element.style.transition = '';
            if (callback) callback();
        }, { once: true });
    }

    function slideDown(element) {
        element.style.display = 'block';
        var height = element.scrollHeight;
        element.style.height = '0';
        requestAnimationFrame(function() {
            element.style.transition = 'height 0.5s ease-out';
            element.style.height = height + 'px';
        });

        element.addEventListener('transitionend', function() {
            element.style.height = '';
            element.style.transition = '';
        }, { once: true });
    }
}

function ver_ficha(f) {
    var bloques = document.getElementById('bloques');
    var ficha = document.getElementById('ficha');
    var nombreElement = document.getElementById('nombre');
    ficha.style.textAlign = 'center';
    switch (f){
        case 1:
            nombreElement.innerHTML = "PABLO";
            break;
        case 2:
            nombreElement.innerHTML = "ALE";
            break;
        case 3:
            nombreElement.innerHTML = "JOTA";
            break;
        case 4:
            nombreElement.innerHTML = "BRACKA";
            break;
        case 5:
            nombreElement.innerHTML = "ROBINSON";
            break;
        default:
            break;
    }

    slideUp(bloques, function() {
        //ficha.style.border = '1px solid green';
        //ficha.style.width = '100%';
        //ficha.style.marginTop = '2%';
        slideDown(ficha);
    });
}

function cerrarFicha() {
    var bloques = document.getElementById('bloques');
    var ficha = document.getElementById('ficha');

    slideUp(ficha, function() {
        slideDown(bloques);
    });
}

function slideUp(element, callback) {
    
    var height = element.scrollHeight;
    element.style.height = height + 'px';
    element.style.transition = 'height 0.5s ease-out';
    requestAnimationFrame(function() {
        element.style.height = '0';
    });

    element.addEventListener('transitionend', function() {
        element.style.display = 'none';
        element.style.height = '';
        element.style.transition = '';
        if (callback) callback();
    }, { once: true });
}

function slideDown(element) {
    //element.style.display = 'block';

    element.style.display = 'flex';
    element.style.height = '70vh';

    var height = element.scrollHeight;
    element.style.height = '0';
    requestAnimationFrame(function() {
        element.style.transition = 'height 0.5s ease-out';
        element.style.height = height + 'px';
    });

    element.addEventListener('transitionend', function() {
        element.style.height = '';
        element.style.transition = '';
    }, { once: true });
}