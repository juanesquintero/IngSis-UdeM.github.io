var app = new function(){

    var members = [          
        {   
            nombre: "Santiago Urrego",
            edad: 19,
            estudiante: false,
            profesor: true,
            correo:"sarumo@gmail.com",
            contraseña:"sarumo",
        },        
        {   
            nombre: "Juanes Quintero",
            edad: 19,
            estudiante: true,
            profesor: false,
            correo:"juaneschrome@gmail.com",
            contraseña:"juanesquintero",
        },           
        {   
            nombre: "Juanes Leal",
            edad: 19,
            estudiante: true,
            profesor: false,
            correo:"@gmail.com",
            contraseña:"juanesleal",
        }
    ]

    inicio = function(){
        var correo = document.getElementById('email').value
        var clave = document.getElementById('contra').value
        for(var i = 0; i < members.length ;i++){
            console.log(members[i])
            var ambos = correo == members[i].correo &&  members[i].contraseña == clave
            if(ambos){
                console.log(correo+'\n'+clave)
                document.getElementById('member').style.display = "inline"
                document.getElementById('login').style.display = "none"
            }
        }
        console.log('sdkdshkdkhds')
        //document.getElementById('contenedor').innerHTML = data     
    }    
}


