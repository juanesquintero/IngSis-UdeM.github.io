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
             //proceso para pasar el nombre por la url a las otras vistas del la pagina      
            window.location = vista + ".html?name=" + nombreUsuario
        }else{
            //pasar a otra vista sin usuario logeado
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
               //Ocultar y limbiar elemtos de la vista que no se nesecitan
                document.getElementById('btnLogin').style.display = "none"  
                document.getElementById('msgAlerta').style.display = "none" 
                document.getElementById('txtEmail').value = ""  
                document.getElementById('txtPass').value = "" 
                //mostrar el nombre de usuario
                document.getElementById('lblMember').innerText = nombreUsuario
                document.getElementById('lblMember').style.display = "inline"
                document.getElementById('iconUser').style.display = "inline"              
                            
            }else{
                //mostrar alerta
                document.getElementById('msgAlerta').style.display = "inline"
            }
        }
    }

}