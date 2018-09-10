var app = new function(){
    
    var empresas = ["LILI","GLBT","PSL"]
    getEmpresas = function() {
        var data =''
        for(var i = 0; i < empresas.length ;i++){
            //Datos
            data += "<option value='"+empresas[i]+"'>"+empresas[i]+"</option>"
        }
        document.getElementById('empresa').innerHTML = data     
    }
    getEmpresas()
    

    var ofertas = [
        {   
            empresa:"LILI",
            cargo:"Auxiliar contable",
            vacantes:2,
            labores:["liquidar nomina","Digitar ventas diarias",
            "Preparar impuestos", "Digitar compras",],
            salario:781.242,           
            termino:"Fijo",
            duracion:"1 años",
            horario:"Lunes-Viernes 8-12 2-6",
            pais:"CO",
            estado:"CO-VAC",
            ciudad:"Cali",
            requisitos: ["Minimo 5to semestre de pregrado","Manejo de sistema CG1"],
            contacto:"8801960 - sebasramirez@lilibisuteria.com ", 
        },
        {
            empresa:"GLBT",
            cargo:"Desarrollador Web",
            vacantes:5,
            labores:["Dllo Front-end","Dllo Back-end","Diseñar de vistas",],
            salario: 2300.001,           
            termino:"Por servicio",
            duracion:"6 meses",
            horario:"No tiene",
            pais:"AR",
            estado:"AR-BUE",
            ciudad:"Buenos Aires",
            requisitos: ["Javascript","Php","Css","Angular"],
            contacto:"4891340 - juan.florez@globant.com",            
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
            contacto:"3722022 - danitag@psl.com",  
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
            contacto:"4891340 - juan.florez@globant.com",
        },
        {  
            empresa:"PSL",
            cargo:"Scrum Master",
            vacantes:2,
            labores:["",""],
            salario:3000.001,           
            termino:"Fijo",
            duracion:"1 años",
            horario:"Lunes-Viernes 8-12 2-6",
            pais:"CO",
            estado:"CO-ANT",
            ciudad:"Medellín",
            requisitos: ["","Habilidad de trabajo grupal"],
            contacto:"3722022 - danitag@psl.com",
        }
    ]

    this.edit = function(position){
        document.getElementById('offerId').value = position
        document.getElementById('empresa').value = ofertas[position].empresa
        document.getElementById('txtCargo').value = ofertas[position].cargo
        document.getElementById('txtVacantes').value = ofertas[position].vacantes
        document.getElementById('txtSalario').value= ofertas[position].salario   
        document.getElementById('txtEstado').value= ofertas[position].estado
        document.getElementById('pais').value = ofertas[position].pais        
        var duration = ofertas[position].duracion.split(" ")
        document.getElementById('txtDuracion').value= duration[0]
        document.getElementById('tiempo').value=  duration[1]
        document.getElementById('txtHorario').value= ofertas[position].horario
        document.getElementById('txtLabores').value= ofertas[position].labores.join(', ')
        document.getElementById('txtRequisitos').value= ofertas[position].requisitos.join(', ')
        document.getElementById('txtCiudad').value = ofertas[position].ciudad    
        var contact = ofertas[position].contacto.split(" - ")
        document.getElementById('txtTelefono').value = contact[0]
        document.getElementById('txtEmail').value = contact[1]
        if(ofertas[position].termino == "Por servicio"){
            document.getElementById('txtHorario').disabled = true
            document.getElementById('rbServicio').checked = true
            document.getElementById('rbFijo').checked = false            
        }else{            
            document.getElementById('rbServicio').checked = false
            document.getElementById('rbFijo').checked = true
            document.getElementById('txtHorario').disabled = false
        }
        document.getElementById('btnNew').style.display = "none"
        document.getElementById('btnUpdate').style.display = "inline"
        document.getElementById('btnCancel').style.display = "inline"
    }

    update = function(){
        if( checkCampos() == true){
            var id = document.getElementById('offerId').value
            var company = document.getElementById('empresa').value
            var charge = document.getElementById('txtCargo').value
            var vacancy = document.getElementById('txtVacantes').value
            var terminus
            var schedule = document.getElementById('txtHorario').value
            if(document.getElementById('rbFijo').checked){
                terminus = document.getElementById('rbFijo').value
            }else{
                terminus = document.getElementById('rbServicio').value
            } 
            var salary = document.getElementById('txtSalario').value           
            var duration = document.getElementById('txtDuracion').value +" "+ document.getElementById('tiempo').value
            var labors = document.getElementById('txtLabores').value.split(", ")
            var  requirements = document.getElementById('txtRequisitos').value.split(", ")
            var country = document.getElementById('pais').value
            var state
            if(country == "CO"){
                state = document.getElementById('departamento').id
            }else{
                state = document.getElementById('txtEstado').value
            }       
            var city = document.getElementById('txtCiudad').value            
            var contact = document.getElementById('txtTelefono').value +" - "+document.getElementById('txtEmail').value
            var offer = { empresa: company, cargo: charge, vacantes: vacancy, labores: labors, salario: salary,
                            termino: terminus, duracion: duration, horario: schedule, pais: country, estado: state,
                            ciudad: city, requisitos: requirements, contacto: contact}
            console.log('Saves: '+offer) 
            ofertas.splice(id,1,offer)
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
        console.log('delete '+ofertas[position].id)
        ofertas.splice(position,1)
        getAll()
    }

    checkCampos = function(){
        if( document.getElementById('empresa').value=="" ||
        document.getElementById('txtCargo').value=="" ||
        document.getElementById('txtVacantes').value=="" ||
        document.getElementById('txtSalario').value=="" ||      
        document.getElementById('txtDuracion').value=="" ||
        (document.getElementById('txtEstado').display == "inline" 
        && document.getElementById('txtEstado').value == "")||
        document.getElementById('pais').value == "" ||
        document.getElementById('tiempo').value=="" ||
        document.getElementById('txtHorario').value=="" ||
        document.getElementById('txtLabores').value=="" ||
        document.getElementById('txtRequisitos').value=="" ||
        document.getElementById('txtCiudad').value =="" ||        
        document.getElementById('txtTelefono').value =="" ||
        document.getElementById('txtEmail').value == "" ) {return false} 
        else{ return true }
    }

    limpiar = function(){
        document.getElementById('empresa').value=""
        document.getElementById('txtCargo').value=""
        document.getElementById('txtVacantes').value=""
        document.getElementById('rbFijo').checked = true
        document.getElementById('rbServicio').checked = false
        document.getElementById('txtSalario').value=""           
        document.getElementById('txtDuracion').value=""
        document.getElementById('tiempo').value=""
        document.getElementById('txtHorario').value=""
        document.getElementById('txtHorario').disabled = false
        document.getElementById('txtLabores').value=""
        document.getElementById('txtRequisitos').value=""
        document.getElementById('pais').value="AF"
        document.getElementById('departamento').value = "Leticia"
        document.getElementById('txtEstado').value =""
        document.getElementById('txtCiudad').value =""        
        document.getElementById('txtTelefono').value =""
        document.getElementById('txtEmail').value =""
    }

    add = function(){
        if(checkCampos()==true){
            var id = document.getElementById('offerId').value
            var company = document.getElementById('empresa').value
            var charge = document.getElementById('txtCargo').value
            var vacancy = document.getElementById('txtVacantes').value
            var terminus
            var schedule = document.getElementById('txtHorario').value
            if(document.getElementById('rbFijo').checked){
                terminus = document.getElementById('rbFijo').value
            }else{
                terminus = document.getElementById('rbServicio').value
            } 
            var salary = document.getElementById('txtSalario').value           
            var duration = document.getElementById('txtDuracion').value +" "+ document.getElementById('tiempo').value
            var labors = document.getElementById('txtLabores').value.split(", ")
            var  requirements = document.getElementById('txtRequisitos').value.split(", ")
            var country = document.getElementById('pais').value
            var state
            if(country == "CO"){
                state = document.getElementById('departamento').id
            }else{
                state = document.getElementById('txtEstado').value
            }       
            var city = document.getElementById('txtCiudad').value            
            var contact = document.getElementById('txtTelefono').value +" - "+document.getElementById('txtEmail').value
            var offer = { empresa: company, cargo: charge, vacantes: vacancy, labores: labors, salario: salary,
                            termino: terminus, duracion: duration, horario: schedule, pais: country, estado: state,
                            ciudad: city, requisitos: requirements, contacto: contact}
            console.log('Saves: '+offer) 
            ofertas.push(offer)
        }else{
            //mostrar alerta
            console.log('Fail')
            document.getElementById('msgAlerta').style.display = "inline"
        }
        limpiar()
        getAll()
    }

    getAll = function() {
        var data =''
        for(var i = 0; i < ofertas.length ;i++){
            //Datos
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
            data += '<td><center><button type="button" class="btn btn-light" onclick="app.edit('+i+')">Editar</button>'
            data += '<button type="button" class="btn btn-secondary" onclick="app.delete('+i+')">Eliminar</center></button></center></td>'
            data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML = data     
    }
    getAll()
}

sugerirHorario = function(){
    //El termino del contrato condiciona al horario
    if(document.getElementById('rbServicio').checked){
        if(document.getElementById('txtHorario').value == "" ){
            document.getElementById('txtHorario').value = "No tiene"
            document.getElementById('txtHorario').disabled = true
        }else{
            document.getElementById('rbServicio').checked = false
            document.getElementById('rbFijo').checked = true
        }         
    }    
    if(document.getElementById('rbFijo').checked) {
        document.getElementById('txtHorario').disabled = false 
        if(document.getElementById('txtHorario').value == "No tiene"){
            document.getElementById('txtHorario').value = ""
        }
    }  
}

sugerirEstado = function(){
    console.log('Sugiriendo')   
    //El pais condiciona el estado o departamento
    var pais = document.getElementById('pais').value
    if(pais == "CO"){
        document.getElementById('divDepar').style.display = "inline"
        document.getElementById('divEstado').style.display = "none" 
        var ciudad = document.getElementById('departamento').value
        document.getElementById('txtCiudad').value = ciudad  
    }else{
        document.getElementById('divDepar').style.display = "none"
        document.getElementById('divEstado').style.display = "inline" 
        document.getElementById('departamento').value = "Leticia"
        document.getElementById('txtCiudad').value = ""  
    }    
}



