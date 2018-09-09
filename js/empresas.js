var app = new function(){
    var empresas = [
        {   
            nombre: "Lili Bisuteria",
            alias:"LILI",
            actividad:"Comercio de Bisuteria",
            pais:"CO",
            estado:"CO-VAC",
            ciudad:"Cali",
            dic:"Cll 10 #8-40 Oficina 201",
            web:"http://lilibisuteria.com/",
            contacto:"Sebastian Ramirez",
            cargo:"Admin",
            tel: 8801960,
            email:"sebasramirez@lilibisuteria.com", 
        },
        {  
            nombre: "Globant",
            alias:"GLBT",
            actividad:"Desarrollo informatico",
            pais:"AR",
            estado:"AR-BUE",
            ciudad:"Buenos Aires",
            dic:"Cll 43 #23-89 Edificio 'Globant'",
            web:"https://www.globant.com/",
            contacto:"Juan Guillermo",
            cargo:"Gerente",
            tel: 4891340,
            email:"juan.florez@globant.com", 
            
        },
        {   
            nombre: "PSL S.A.",
            alias:"PSL",
            actividad:"Desarrollo informatico",
            pais:"CO",
            estado:"CO-ANT",
            ciudad:"Medellín",
            dic:"Cra. 42 #72-11",
            web:"https://www.psl.com.co/",
            contacto:"Diana Garcia",
            cargo:"Encargada RH",
            tel: 3722022,
            email:"danitag@psl.com",            
        }

    ]

    getCurso = function(id){
        asig = ''
        for(var i=0; i<empresas.length; i++){
            for(var j=0; j<empresas[i].cursos.length; j++){
                codigo = empresas[i].cursos[j].id
                if(codigo == id){
                    asig = empresas[i].cursos[j].asignatura
                }
            }
        }
        return asig
    }

    this.edit = function(position){
        document.getElementById('studentName').value = empresas[position].nombre
        document.getElementById('studentAge').value = empresas[position].edad
        document.getElementById('studentCourse').value = empresas[position].cursos[1].asignatura
        document.getElementById('studentId').value = position
        document.getElementById('btnNew').style.display = "none"
        document.getElementById('btnUpdate').style.display = "inline"
        document.getElementById('btnCancel').style.display = "inline"
    }

    update = function(){
        var name = document.getElementById('studentName').value
        var age = document.getElementById('studentAge').value
        var curso = document.getElementById('studentCourse').value  
        var id = document.getElementById('studentId').value
        var myStudent = { nombre: name, edad:age, cursos:[curso] }
        empresas.splice(id,1,myStudent)
        getAll()
    }

    cancel = function(){
        document.getElementById('studentName').value = ''
        document.getElementById('studentAge').value = ''
        document.getElementById('studentCourse').value = ''
        document.getElementById('btnNew').style.display = "inline"
        document.getElementById('btnUpdate').style.display = "none"
        document.getElementById('btnCancel').style.display = "none"
        getAll()
    }

    this.delete = function(position){
        console.log('delete '+empresas[position].nombre)
        empresas.splice(position,1)
        getAll()
    }

    add = function(){
        var name = document.getElementById('txtNombre').value
        var activity = document.getElementById('txtActividad').value
        var alias = document.getElementById('txtAlias').value
        var country = document.getElementById('pais').value
        var state
        if(country == "CO"){
            state = document.getElementById('departamento').id
        }else{
            state = document.getElementById('txtEstado').value
        }       
        var city = document.getElementById('txtCiudad').value
        var adress = document.getElementById('txtDic').value
        var page = document.getElementById('txtWebsite').value
        var contact = document.getElementById('txtContacto').value
        var charge = document.getElementById('txtCargo').value
        var phone = document.getElementById('txtTelefono').value
        var correo = document.getElementById('txtEmail').value
        var company = { nombre: name, actividad: activity, alias: alias, pais: country, estado: state,
                        ciudad: city, dic: adress, web: page, contacto: contact,cargo: charge ,tel: phone ,email:correo }
        console.log('Saves: '+company) 
        empresas.push(company)
        //limpiar()
        getAll()
    }

    getAll = function() {
        //console.log(students) 
        var data =''
        for(var i = 0; i < empresas.length ;i++){
            //Datos
            data += '<tr>'
            data += '<td>'+empresas[i].nombre+'</td>'
            data += '<td>'+empresas[i].actividad+'</td>'
            data += '<td>'+empresas[i].web+'</td>'
            data += '<td>'+empresas[i].estado+'</td>'
            data += '<td>'+empresas[i].ciudad+'</td>'
            data += '<td>'+empresas[i].contacto+'</td>'
            data += '<td>'+empresas[i].tel+'</td>'
            data += '<td>'+empresas[i].email+'</td>'
            //Acciones     
            data += '<td><button onclick="app.edit('+i+')">Editar</button></td>'
            data += '<td><button onclick="app.delete('+i+')">Eliminar</button></td>'
            data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML = data     
    }
    getAll()
}

sugerir = function(){
    var pais = document.getElementById('pais').value
    if(pais == "CO"){
        console.log('Sugiriendo')
        document.getElementById('divDepar').style.display = "inline"
        document.getElementById('divEstado').style.display = "none" 
        var ciudad = document.getElementById('departamento').value
        document.getElementById('txtCiudad').value = ciudad  
    }      
}


