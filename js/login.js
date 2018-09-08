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

    var nombreUsuario =""

    changePage = function(vista){
        if(nombreUsuario != ""){           
            window.location = vista + ".html?name=" + nombreUsuario
            console.log("Enviar las siguientes variables")
            console.log(nombreUsuario)
            console.log('enviado')
        }else{
            window.location = vista + ".html"
            console.log('No usuario')
        }
    }

    log = function() {
        var email = document.getElementById('txtEmail').value
        var clave = document.getElementById('txtPass').value
        for (var i = 0; i < members.length; i++) {
            if (email == members[i].correo && members[i].contraseña == clave) {
                console.log(email + '\n' + clave)
                nombreUsuario = members[i].nombre                
                //proceso para pasar el nombre por la url a las otras vistas del la pagina
                document.getElementById('lblMember').innerText = nombreUsuario
                document.getElementById('lblMember').style.display = "inline"
                document.getElementById('iconUser').style.display = "inline"
                document.getElementById('btnLogin').style.display = "none"                
            } else {
                document.getElementById('msgAlerta').style.display = "inline"
            }
        }
        //document.getElementById('contenedor').innerHTML = data
    }

}