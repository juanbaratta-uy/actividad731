function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacion(){ 
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const email = document.getElementById("email").value;
const password1 = document.getElementById("password1").value;
const password2 = document.getElementById("password2").value;
const regBtn = document.getElementById("regBtn");
const terminos = document.getElementById("terminos").checked;

    if((nombre === "") || (apellido === "") || (email === "") || (password1 === "") || (password2 === "") || (password1 !== password2) || (password1.length < 6) || (terminos === false)){
        showAlertError();
    }
    else{
        showAlertSuccess();
    }

};

regBtn.addEventListener("click", validacion);
