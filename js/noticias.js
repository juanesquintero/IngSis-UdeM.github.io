var app = new function(){
    var noticias = [
        {   
            titulo:"4 años sin Gustavo Cerati, una leyenda del rock latinoamericano",
            subtitulo:"Se cumplen cuatro años de la muerte del ex líder de Soda Stereo, Gustavo Cerati, quien dejó un inmenso legado musical.",
            imagen:"https://media.ultimahora.com/adjuntos/161/imagenes/007/813/0007813403.jpg",
            descripcion:"Gustavo Cerati dejó un gran legado musical con más de una decena de discos.",
            autor:"caras.perfil.com",
            fecha:"04/09/2018",
            contenido:"El músico Gustavo Cerati, ex líder de Soda Stereo, falleció el 4"+
            "de setiembre del 2014, a sus 55 años, luego de estar cuatro años y"+
            "medio en coma por un accidente cerebro vascular (acv) sufrido tras"+
            "un concierto en Venezuela."+
            "Estaba promocionando su último disco, denominado Fuerza Natural, que"+
            "había lanzado en setiembre del 2009."+
            "Nacido el 11 de agosto de 1959, Cerati mostró interés en la música"+
            "desde pequeño, llegando incluso a ser director del coro de su escuela."+
            "Formó dos bandas durante su adolescencia, Savage y Vozarrón, y luego"+
            "integró The Morgan, junto con Zeta Bosio, el que seguiría siendo su"+
            "compañero de banda",
            lugar:"Buenos Aires - Argentina",
            temas: ["musica","rock en español","gustavo cerati","soda stereo"]            
        },
        {   
            titulo:"Revelan método informático más ágil y eficaz en detección del cáncer de seno",
            subtitulo:"Un método más eficiente y preciso para identificar tumoraciones cancerosas en senos"+
                    "que analiza imágenes de tejidos mediante un ordenador, un proceso mucho más rápido que"+
                    "el tradicional, fue presentado por la Universidad el Sur de California (USC).",
            imagen:"https://media.ultimahora.com/adjuntos/161/imagenes/007/830/0007830300.jpg",
            descripcion:"El investigador destacó que la clave para identificar y tratar el cáncer es conocer la naturaleza del tumor.",
            autor:"diariolibre.com",
            fecha:"10/09/2018",
            contenido:"'Es el principio de una revolución para usar el aprendizaje de máquina y obtener para el"+
             "médico nueva información acerca del cáncer de seno', aseguró David Agus, profesor de la Escuela de"+ 
             "Medicina Keck y de la Escuela de Ingeniería Viterbi, de USC, y uno de los autores de la investigación."+
             "Podemos utilizarlo (este sistema) para establecer mejores tratamientos, dar información a los pacientes"+
             "de manera más rápida y ayudar a más gente. Estamos liberando este hallazgo para ofrecer nueva información"+
             "a los médicos y ayudar a tratar el cáncer', aseguró Agus."+
             "\nEl investigador destacó que la clave para identificar y tratar el cáncer es conocer la naturaleza del tumor."+
             "\nLas células cancerosas que contienen receptores para el estrógeno y otras hormonas responden de forma diferente"+
              "a las drogas que tratan este mecanismo', añadió.",
            lugar:"California - EEUU",
            temas: ["medicina","tecnologia","estres","droga"]            
        },
        {   
            titulo:"Chinos diseñan nanorobot para estrangular tumores",
            subtitulo:"Cientifícos chinos han diseñado, a través de nanotecnología y plegando moléculas de ADN en un proceso similar a la papiroflexia, lo que denominan 'el caballo de Troya', más delgado que 1/4000 de un cabello y que libera 'asesinos' para combatir tumores cancerígenos, informó el medio oficial Xinhua.",
            imagen:"https://media.ultimahora.com/adjuntos/161/imagenes/006/840/0006840423.jpg",
            descripcion:"Los investigadores han llevado a cabo experimentos controlados con el nanorobot en más de 200 ratones con melanoma.as.com",
            autor:"melamona.as.com",
            fecha:"9/08/2018",
            contenido:"Toda la sangre, el oxígeno y la energía se transmiten a las células cancerosas a través de los vasos sanguíneos, por lo que el objetivo es bloquear, con este nanorobot, los vasos que alimentan los tumores para eliminarlos."+
                      "Ding Baoquan, investigador del Centro Nacional chino de Nanociencia y Tecnología (NCNST), dobló un ADN monocatenario de un fago (tipo de virus) en forma de hoja rectangular para después colocar cuatro moléculas de trombina (enzima de coagulación en el plasma sanguíneo) en la misma y enrollar todo."+
                      "En la interfaz, a través de fragmentos de ADN de proteína nucleolina se instalaron bloqueos, formando un nanorobot o 'caballo de Troya', con un diámetro de 19 nanómetros y unos 90 de largo.",
            lugar:"Shangai - China",
            temas: ["ciencia","tecnologia","salud","china"]            
        }
    ]

    this.edit = function(position){
        document.getElementById('noticiaId').value = position
        document.getElementById('txtTitulo').value = noticias[position].titulo
        document.getElementById('txtSubtitulo').value = noticias[position].subtitulo
        document.getElementById('txtImagen').value = noticias[position].imagen
        document.getElementById('txtDescripcion').value= noticias[position].descripcion   
        document.getElementById('txtAutor').value= noticias[position].autor
        document.getElementById('txtLugar').value = noticias[position].lugar        
        document.getElementById('txtTemas').value = noticias[position].temas.join(', ')        
        document.getElementById('datepicker').value= noticias[position].fecha
        document.getElementById('txtContenido').value= noticias[position].contenido
        document.getElementById('btnNew').style.display = "none"
        document.getElementById('btnUpdate').style.display = "inline"
        document.getElementById('btnCancel').style.display = "inline"
    }

    update = function(){
        if( checkCampos() == true){
            var id = document.getElementById('noticiaId').value
            var title = document.getElementById('txtTitulo').value
            var subtitle = document.getElementById('txtSubtitulo').value
            var image = document.getElementById('txtImagen').value
            var description = document.getElementById('txtDescripcion').value
            var author = document.getElementById('txtAutor').value
            var place = document.getElementById('txtLugar').value
            var topics = document.getElementById('txtTemas').value.split(', ')
            var date = document.getElementById('datepicker').value
            var body = document.getElementById('txtContenido').value     
            var noticia = { titulo: title, subtitulo: subtitle, imagen: image, descripcion: description,
                            autor: author, lugar: place, temas: topics, fecha: date, contenido: body}
            console.log('Saves: '+noticia) 
            noticias.splice(id,1,noticia)
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
        console.log('delete '+noticias[position].id)
        noticias.splice(position,1)
        getAll()
    }

    checkCampos = function(){
        if( 
        document.getElementById('txtTitulo').value == "" ||
        document.getElementById('txtSubtitulo').value ==""||
        document.getElementById('txtImagen').value == ""||
        document.getElementById('txtDescripcion').value == ""||
        document.getElementById('txtAutor').value == ""||
        document.getElementById('txtLugar').value == ""||
        document.getElementById('txtTemas').value == ""||
        document.getElementById('datepicker').value == ""||
        document.getElementById('txtContenido').value == "") {return false} 
        else{ return true }

    }

    limpiar = function(){
        document.getElementById('txtTitulo').value = ""
        document.getElementById('txtSubtitulo').value =""
        document.getElementById('txtImagen').value = ""
        document.getElementById('txtDescripcion').value= ""
        document.getElementById('txtAutor').value= ""
        document.getElementById('txtLugar').value = ""
        document.getElementById('txtTemas').value = ""
        document.getElementById('datepicker').value= ""
        document.getElementById('txtContenido').value= ""
    }

    add = function(){
        if(checkCampos()==true){
            var title = document.getElementById('txtTitulo').value
            var subtitle = document.getElementById('txtSubtitulo').value
            var image = document.getElementById('txtImagen').value
            var description = document.getElementById('txtDescripcion').value
            var author = document.getElementById('txtAutor').value
            var place = document.getElementById('txtLugar').value
            var topics = document.getElementById('txtTemas').value.split(', ')
            var date = document.getElementById('datepicker').value
            var body = document.getElementById('txtContenido').value     
            var noticia = { titulo: title, subtitulo: subtitle, imagen: image, descripcion: description,
                            autor: author, lugar: place, temas: topics, fecha: date, contenido: body}
            console.log('Saves: '+noticia) 
            noticias.push(noticia)
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
        for(var i = 0; i < noticias.length ;i++){
            //Datos
            data += '<tr>'
            data += '<td>'
            data += '<div class="card mb-3" >'            
            data += '<div class="card-body">'
            data += '<h4 class="card-title">'+noticias[i].titulo+'</h4>'                
            data += '<p class="card-text text-muted">'+noticias[i].subtitulo+'</p>'
            data += '<img height="400" class="card-img-top" src="'+noticias[i].imagen+'" alt="Card image cap">'
            data += '<p class="card-text"><small class="text-muted">'+noticias[i].descripcion+'</small></p>'
            data += '<p class="card-text">'+noticias[i].contenido+'</p></div>'
            data += '<ul class="list-group list-group-flush"><li class="list-group-item" ><center><div class="row">'
            data += '<div class="col-md-4"><table><tr><td><p class="card-text text-muted">Fecha:</p></td>'
            data += '<td><p class="card-text text-muted">'+noticias[i].fecha+'</p></td>'
            data += '</tr></table></div><div class="col-md-4"><table><tr><td><p class="card-text text-muted">Autor:</p></td>'
            data += '<td><p class="card-text text-muted">'+noticias[i].autor+'</p></td>'
            data += '</tr></table></div><div class="col-md-4"><table><tr><td><p class="card-text text-muted">Lugar:</p></td>'
            data += '<td><p class="card-text text-muted">'+noticias[i].lugar+'</p></td>'
            data += '</tr></table></div></center></li><li class="list-group-item text-center"><center><table><tr>'
            data += '<td><p class="card-text text-muted">Temas:</p></td><td><p class="card-text text-muted">'
            data += noticias[i].temas.join("  |  ")+'</p></td></tr></table></center></li></ul><div class="card-body"><center>'
            //Acciones
            data += '<button type="button" class="btn btn-secondary" onclick="app.edit('+i+')">Editar</button>'
            data += '<button type="button" class="btn btn-secondary" onclick="app.delete('+i+')" style="margin-left: 10px">Eliminar</button>'
            data += '</center></div></div></td>'            
            data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML = data     
    }
    getAll()
}
sugerir = function(){
    console.log('Sugiriendo')
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()+1 //enero es 0
    var yyyy = today.getFullYear()
    if(dd<10) { dd = '0'+dd }
    if(mm<10) { mm = '0'+mm }
    today = mm+ '/' + dd  + '/' + yyyy
    console.log(today)
    console.log(document.getElementById('datepicker').value)
    if(document.getElementById('datepicker').value > today ){
        document.getElementById('datepicker').value = today
        document.getElementById('lblFechaMayor').style.display = "inline"
    }else{
        document.getElementById('lblFechaMayor').style.display = "none"
    }
}
$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});


