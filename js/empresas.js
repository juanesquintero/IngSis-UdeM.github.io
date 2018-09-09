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

    this.edit = function(position){
        document.getElementById('txtNombre').value = empresas[position].nombre
        document.getElementById('txtActividad').value = empresas[position].actividad
        document.getElementById('txtAlias').value = empresas[position].alias
        document.getElementById('pais').value = empresas[position].pais
        if(empresas[position].pais == "CO"){
            document.getElementById('divDepar').style.display = "inline"
            document.getElementById('divEstado').style.display = "none"
            document.getElementById(empresas[position].estado).selected=true             
        }else{            
            document.getElementById('divDepar').style.display = "none"
            document.getElementById('divEstado').style.display = "inline"
            document.getElementById('txtEstado').value = empresas[position].estado
        }
        document.getElementById('txtCiudad').value = empresas[position].ciudad
        document.getElementById('txtDic').value = empresas[position].dic
        document.getElementById('txtWebsite').value = empresas[position].web
        document.getElementById('txtContacto').value = empresas[position].contacto
        document.getElementById('txtCargo').value = empresas[position].cargo
        document.getElementById('txtTelefono').value = empresas[position].tel
        document.getElementById('txtEmail').value = empresas[position].email

        document.getElementById('btnNew').style.display = "none"
        document.getElementById('btnUpdate').style.display = "inline"
        document.getElementById('btnCancel').style.display = "inline"
    }

    update = function(){
        if( checkCampos == true){
            var name = document.getElementById('txtNombre').value
            var activity = document.getElementById('txtActividad').value
            var id = document.getElementById('txtAlias').value
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
            var company = { nombre: name, actividad: activity, alias: id, pais: country, estado: state,
                            ciudad: city, dic: adress, web: page, contacto: contact,cargo: charge ,tel: phone ,email:correo }
            console.log('Saves: '+company) 
            empresas.splice({alias:""+id+""},1,company)
        }else{
            //mostrar alerta
            console.log('Fail')
            document.getElementById('msgAlerta').style.display = "inline"
        }        
        limpiar()
        getAll()
    }

    cancel = function(){
        limpiar()
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

    checkCampos = function(){
        if(document.getElementById('txtNombre').value == "" ||
        document.getElementById('txtActividad').value == "" ||
        document.getElementById('txtAlias').value == "" ||
        document.getElementById('pais').value == "" ||
        document.getElementById('departamento').value == "" ||
        document.getElementById('txtEstado').value == "" ||
        document.getElementById('txtCiudad').value == "" ||
        document.getElementById('txtDic').value == "" ||
        document.getElementById('txtWebsite').value == "" ||
        document.getElementById('txtContacto').value == "" ||
        document.getElementById('txtCargo').value == "" ||
        document.getElementById('txtTelefono').value == "" ||
        document.getElementById('txtEmail').value == ""){return false}
        else{ return true }
    }

    limpiar = function(){
        document.getElementById('txtNombre').value = ""
        document.getElementById('txtActividad').value = ""
        document.getElementById('txtAlias').value = ""
        document.getElementById('pais').value = ""
        document.getElementById('departamento').value = ""
        document.getElementById('txtEstado').value = ""
        document.getElementById('txtCiudad').value = ""
        document.getElementById('txtDic').value = ""
        document.getElementById('txtWebsite').value = ""
        document.getElementById('txtContacto').value = ""
        document.getElementById('txtCargo').value = ""
        document.getElementById('txtTelefono').value =""
        document.getElementById('txtEmail').value = ""
    } 


    add = function(){
        if(checkCampos()==true){
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
        }else{
            //mostrar alerta
            console.log('Fail')
            document.getElementById('msgAlerta').style.display = "inline"
        }
        limpiar()
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


