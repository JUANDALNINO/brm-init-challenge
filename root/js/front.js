// Inicio
let urlFinal = `http://localhost:3001/usuarios/`;

cargarUrl(urlFinal);



let dataUsuarios = [];
function cargarUrl(url) {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            dataUsuarios = (data);
            listadoUsuarios(dataUsuarios);
        })
}



// Listado
function listadoUsuarios(data) {
    let contenedor = "";

    for (const usuario of data) {

        let listaUsuarios = document.getElementById("tablaUsuarios");
        contenedor = document.createElement("tr");

        contenedor.innerHTML =
            `<th scope="row">${usuario?.id}</th>
            <td>${usuario?.fullName}</td>
            <td>${usuario?.phone}</td>
            <td>${usuario?.datetime}</td>
            <td>${usuario?.address}</td>
            <td>${usuario?.email}</td>
            <button type="button" class="btn" data-bs-toggle="modal"
                data-bs-target="#editModal"><i class="bi bi-pencil-fill"></i></button>
            <button type="button" class="btn" data-bs-toggle="modal"
                data-bs-target="#deleteModal"><i class="bi bi-trash3-fill"></i></button>
        </td>`;

        listaUsuarios.appendChild(contenedor);
    }


}



// Crear ID Auto
function getId() {
    if (dataUsuarios.length === 0) {
        return 1;
    } else {
        let ultimoId = dataUsuarios[dataUsuarios.length - 1];
        return ultimoId.id + 1;
    }
}


//