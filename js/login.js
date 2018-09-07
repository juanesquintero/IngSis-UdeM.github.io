var app = new function() {

    var members = [{
            nombre: "Santiago Urrego",
            edad: 19,
            estudiante: false,
            profesor: true,
            correo: "sarumo@gmail.com",
            contraseña: "sarumo",
        },
        {
            nombre: "Admin",
            edad: 19,
            estudiante: false,
            profesor: true,
            correo: "admin",
            contraseña: "admin",
        },
        {
            nombre: "Juanes Quintero",
            edad: 19,
            estudiante: true,
            profesor: false,
            correo: "juaneschrome@gmail.com",
            contraseña: "juanesquintero",
        },
        {
            nombre: "Juan Leal",
            edad: 20,
            estudiante: true,
            profesor: false,
            correo: "juane.leal98@gmail.com",
            contraseña: "juanesleal",
        }
    ]

    log = function() {
        var email = document.getElementById('txtEmail').value
        var clave = document.getElementById('txtPass').value
        for (var i = 0; i < members.length; i++) {
            console.log(members[i])
            if (email == members[i].correo && members[i].contraseña == clave) {
                console.log(email + '\n' + clave)
                var nombreUsuario = members[i].nombre
                document.getElementById('lblMember').style.display = "inline"
                document.getElementById('btnLogin').style.display = "none"

                //proceso para pasar el nombre por la url a las otras vistas del la pagina
                window.location = "index.html?name=" + nombreUsuario
                console.log("Enviar las siguientes variables")
                console.log(nombre)
                console.log('enviado')
            } else {
                document.getElementById('msgAlerta').style.display = "inline"
            }
        }
        //document.getElementById('contenedor').innerHTML = data
    }

}