function mensaje() {
    document.getElementById('txtName').innerText = 'Hola Perro'
}

var app = new function(){
    var students = ['Juan','Alejo','Camila']
    console.log(students)
    
    add = function(){
        var name = document.getElementById('studentName').value
        students.push(name)
        document.getElementById('studentName').value = ''
        getAll()
    }

    this.delete = function(position){
        console.log('delete '+students[position])
        students.splice(position,1)
        getAll()
    }

    this.edit = function(position){
        document.getElementById('studentName').value = students[position]
        document.getElementById('studentId').value = position
        document.getElementById('btnNew').style.display = "none"
        document.getElementById('btnUpdate').style.display = "inline"
    }

    update = function(){
        var name = document.getElementById('studentName').value
        var id = document.getElementById('studentId').value
        students.splice(id,1,name)
        getAll()
    }

    getAll = function() {
        console.log('Obteniendo todos los estudiantes')
        var data =''
        for(var i = 0; i < students.length ;i++){
            console.log(students[i])
            data += '<tr>'
            data += '<td>'+students[i]+'</td>'
            data += '<td><button onclick="app.edit('+i+')">Editar</button></td>'
            data += '<td><button onclick="app.delete('+i+')">Eliminar</button></td>'
            data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML = data       
    }
    getAll()
}


