// Mensajes:
// Llenar
function llenarDatos() {
    Swal.fire({
        title: "Rellenar datos",
        text: "Por favor llene todos los datos",
        icon: "info",
    })
}

// Nuevo usuario:
function alertUsuarioCreado() {
    Swal.fire({
        title: "Usuario Creado",
        text: "Usuario creado con exito",
        icon: "success",
    })
}


// Crear Usuario:

let btnAgregarUser = document.getElementById("btnAgregarUsuario");

btnAgregarUser.addEventListener("click", function () {
    crearNuevoUsuario();
})




function crearNuevoUsuario() {
    const fullNameInputText = document.getElementById("fullName");
    const numberInputText = document.getElementById("number");
    const dateInputText = document.getElementById("date");
    const addressInputText = document.getElementById("address");
    const emailInputText = document.getElementById("email");


    const newUser = {
        fullName: fullNameInputText.value.trim(),
        number: numberInputText.value.trim(),
        date: dateInputText.value.trim(),
        address: addressInputText.value.trim(),
        email: emailInputText.value.trim(),
    };


    console.log(JSON.stringify(newUser));
    fetch(urlFinal, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(() => {
            cargarUrl();
            fullNameInputText.value = "";
            numberInputText.value = "";
            dateInputText.value = "";
            addressInputText.value = "";
            emailInputText.value = "";
        })
        .catch(error => console.error("Error Agregando Usuario", error));
}


