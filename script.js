const menu = document.getElementById('menu');

const email = document.getElementById('correo');
const nombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

document.onclick = function(e){
    if(e.target.id !== "menu"){
    menu.classList.remove('active');
    }
};

thanks.onclick = function() {
    if (email.value.length <= 0 || nombre.value.length <= 0 || mensaje.value.length <= 0){
        swal({
            title: "Por favor",
            text: "Complete todos los datos",
            buttons: false,
            icon: 'error',
            timer: 2500,
        });
    }
    else if (!email.value.match(validRegex)){
        swal({
            title: "Por favor",
            text: "Complete todos los datos",
            buttons: false,
            icon: 'error',
            timer: 2500,
        });
    }
    else {
        swal({
            title: "¡Correo enviado con exito!",
            text: "Muchas gracias por comunicarse",
            buttons: false,
            icon: 'success',
            timer: 2500,
        });
    }
};

const typed = new Typed('.multiple-text', {
    strings: ['César Augusto Salazar Vargas', 'Software Engineering Student'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;