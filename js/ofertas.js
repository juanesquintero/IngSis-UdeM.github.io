var app = new function(){
    var ofertas = [
        {   
            empresa:"LILI",
            cargo:"Auxiliar contable",
            vacantes:2,
            labores:["liquidar nomina","Digitar ventas diarias",
            "Preparar impuestos", "Digitar compras",],
            salario:781.242,           
            termino:"Fijo",
            duracion:"1 año",
            horario:"Lunes-Viernes 8-12 2-6",
            pais:"CO",
            estado:"CO-VAC",
            ciudad:"Cali",
            requisitos: ["Minimo 5to semestre de pregrado","Manejo de sistema CG1"],
            contacto:"sebasramirez@lilibisuteria.com - 8801960 ", 
        },
        {
            empresa:"GLBT",
            cargo:"Desarrollador Web",
            vacantes:5,
            labores:["Dllo Front-end","Dllo Back-end","Diseñar de vistas",],
            salario: 2300.001,           
            termino:"Por Servicio",
            duracion:"6 meses",
            horario:"No tiene",
            pais:"AR",
            estado:"AR-BUE",
            ciudad:"Buenos Aires",
            requisitos: ["Javascript","Php","Css","Angular"],
            contacto:"juan.florez@globant.com - 4891340",            
        },
        {   
            empresa:"PSL",
            cargo:"Cientifico de Datos ",
            vacantes:1,
            labores:["Analitycs","Maquine Learning","Modeling dataBases"],
            salario:4200.001,           
            termino:"Fijo",
            duracion:"3 años",
            horario:"3 dias 8-12 o 2-6",
            pais:"CO",
            estado:"CO-ANT",
            ciudad:"Medellín",
            requisitos: ["Doctorado Informatico","Tablue","Hadoop map","stadistic R"],
            contacto:"danitag@psl.com - 3722022",  
        },
        {   
            empresa:"GLBT",
            cargo:"Cientifico de Datos ",
            vacantes:2,
            labores:["Analitycs","Maquine Learning","Modeling dataBases"],
            salario:5800.001,           
            termino:"Fijo",
            duracion:"4 años",
            horario:"4 dias 8-12 y 2-6",
            pais:"CO",
            estado:"CO-ANT",
            ciudad:"Medellín",
            requisitos: ["Doctorado Informatico","Tablue","Hadoop map","stadistic R"],
            contacto:"juan.florez@globant.com - 4891340",
        },
        {   
            empresa:"PSL",
            cargo:"Scrum Master",
            vacantes:2,
            labores:["",""],
            salario:3000.001,           
            termino:"Fijo",
            duracion:"1 año",
            horario:"Lunes-Viernes 8-12 2-6",
            pais:"CO",
            estado:"CO-ANT",
            ciudad:"Medellín",
            requisitos: ["","Habilidad de trabajo grupal"],
            contacto:"danitag@psl.com - 3722022",    
        }
    ]

    this.edit = function(position){
        document.getElementById('txtNombre').value = ofertas[position].nombre
        document.getElementById('txtActividad').value = ofertas[position].actividad
        document.getElementById('txtAlias').value = ofertas[position].alias
        document.getElementById('pais').value = ofertas[position].pais
        if(ofertas[position].pais == "CO"){
            document.getElementById('divDepar').style.display = "inline"
            document.getElementById('divEstado').style.display = "none"
            document.getElementById(ofertas[position].estado).selected=true             
        }else{            
            document.getElementById('divDepar').style.display = "none"
            document.getElementById('divEstado').style.display = "inline"
            document.getElementById('txtEstado').value = ofertas[position].estado
        }
        document.getElementById('txtCiudad').value = ofertas[position].ciudad
        document.getElementById('txtDic').value = ofertas[position].dic
        document.getElementById('txtWebsite').value = ofertas[position].web
        document.getElementById('txtContacto').value = ofertas[position].contacto
        document.getElementById('txtCargo').value = ofertas[position].cargo
        document.getElementById('txtTelefono').value = ofertas[position].tel
        document.getElementById('txtEmail').value = ofertas[position].email

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
            ofertas.splice({alias:""+id+""},1,company)
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
        console.log('delete '+ofertas[position].nombre)
        ofertas.splice(position,1)
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
            ofertas.push(company)
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
        for(var i = 0; i < ofertas.length ;i++){
            //Datos
            /**
             * <th scope="col"><center><b>Empresa</b></center></th>
                <th scope="col"><center><b>Vacantes</b></center></th>
                <th scope="col"><center><b>Cargo</b></center></th>
                <th scope="col" colspan="2"><center><b>Tipo</b></center></th>
                <th scope="col"><center><b>Salario</b></center></th>
                <th scope="col" colspan="2"><center><b>Ubicacion</b></center></th>
                <th scope="col"><center><b>Requisitos</b></center></th>
                <th scope="col"><center><b>Labores</b></center></th>
                <th scope="col" colspan="2"><center><b>Acciones</b></center></th>
             */
            data += '<tr>'
            data += '<td>'+ofertas[i].empresa+'</td>'
            data += '<td>'+ofertas[i].vacantes+'</td>'
            data += '<td>'+ofertas[i].cargo+'</td>'
            data += '<td>'+ofertas[i].termino+'</td>'
            data += '<td>'+ofertas[i].duracion+'</td>'
            data += '<td> $'+ofertas[i].salario+'</td>'
            data += '<td>'+ofertas[i].estado+'</td>'
            data += '<td>'+ofertas[i].ciudad+'</td>'
            var requisitos = ''
            for(var j = 0; j < ofertas[i].requisitos.length ;j++){
                 requisitos += ofertas[i].requisitos[j]+', '
            }
            data += '<td>'+requisitos+'</td>'
            var labores = ''
            for(var j = 0; j < ofertas[i].labores.length ;j++){
                labores += ofertas[i].labores[j]+', '
            }
            data += '<td>'+labores+'</td>'
            //data += '<td>'+ofertas[i].contacto+'</td>'           
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



