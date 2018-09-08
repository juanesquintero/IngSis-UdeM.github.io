//se recibe las variables pasadas por parametros en la url
var paramstr = window.location.search.substr(1);
var params = {};

//se recorta el string pasado por la url despues del "?" donde encuentre un = y se guarda en un array temporal
var tmparr = paramstr.split("=");
/*la pasocion del array params ya no es un numero si no el valor de lo que hay en "tmparr[0]",
 * en "tmparr[0]" quedó 'name' que es la variable que se pasa por la url
 * y en "tmparr[1]" quedó el valor de la variable 'name' pasada por url, es decir, quedó el nombre del usuario
 */
params[tmparr[0]] = tmparr[1];

//si en la posicion 'name' del arreglo hay algun valor entonces entra
if (params['name']) {
    console.log('El valor del parámetro variable es: ' + params['name']);
    var tmpUserName = params['name']
    var loginUserName=tmpUserName
    /*si es un nombre compuesto corta el %20 que pone la url como un espacio en blanco. si no es nombre compuesto entonces 
     * guarda la var tal como la recibe y la imprime
     */
    if (tmpUserName.includes('%20')) {
        loginUserName = tmpUserName.replace('%20', ' ')
    }
    document.getElementById('lblMember').innerText = loginUserName
    document.getElementById('lblMember').style.display = "inline"
    document.getElementById('iconUser').style.display = "inline"
    document.getElementById('btnLogin').style.display = "none"
    console.log('El nombre del usuario logueado es: ' + loginUserName)
} else {
    console.log('No se envió el parámetro variable');
}


var app = new function(){
    var students = [
        {   
            nombre: "Juanes",
            edad: 20,
            estudiante: true,
            cursos: [
                {id:1, asignatura:"Dllo Web",nota: 4.5},
                {id:2, asignatura:"IngSW 2",nota: 4.1},
                {id:3, asignatura:"Sis Digitales",nota: 4.5}], 
        },
        {   
            nombre: "Elias",
            edad: 19,
            estudiante: true,
            cursos: [
                {id:4, asignatura:"Tecnicas BD",nota: 4.4},
                {id:5, asignatura:"Ing de SW 3",nota: 4.0},
                {id:3, asignatura:"Sis Digitales",nota: 4.5}], 
        },
        {   
            nombre: "Alejo",
            edad: 19,
            estudiante: true,
            cursos: [
                {id:6, asignatura:"Bases de Datos",nota: 4.5},
                {id:2, asignatura:"Ing de SW 2",nota: 4.1},
                {id:3, asignatura:"Sis Digitales",nota: 4.5}], 
        }

    ]

    add = function(){
        var name = document.getElementById('studentName').value
        var age = document.getElementById('studentAge').value
        var idcurso = document.getElementById('studentCourse').value
        var asignatura = getCurso(idcurso)
        var myStudent = { nombre: name, edad:age, cursos:[{id: idcurso,asignatura: asignatura, nota:0.0}] }
        console.log('Saves: '+myStudent) 
        students.push(myStudent)
        document.getElementById('studentName').value = ''
        document.getElementById('studentAge').value = ''
        document.getElementById('studentCourse').value = ''
        getAll()
    }

    getCurso = function(id){
        asig = ''
        for(var i=0; i<students.length; i++){
            for(var j=0; j<students[i].cursos.length; j++){
                codigo = students[i].cursos[j].id
                if(codigo == id){
                    asig = students[i].cursos[j].asignatura
                }
            }
        }
        return asig
    }

    this.edit = function(position){
        document.getElementById('studentName').value = students[position].nombre
        document.getElementById('studentAge').value = students[position].edad
        document.getElementById('studentCourse').value = students[position].cursos[1].asignatura
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
        students.splice(id,1,myStudent)
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
        console.log('delete '+students[position].nombre)
        students.splice(position,1)
        getAll()
    }

    getAll = function() {
        console.log(students) 
        var data =''
        for(var i = 0; i < students.length ;i++){
            console.log(students[i])
            data += '<tr>'
            data += '<td>'+students[i].nombre+'</td>'
            data += '<td>'+students[i].edad+'</td>'
            var cursos = ''
            for(var j = 0; j < students[i].cursos.length ;j++){
                 cursos += students[i].cursos[j].asignatura+', '
            }
            data += '<td>'+cursos+'</td>'            
            data += '<td><button onclick="app.edit('+i+')">Editar</button></td>'
            data += '<td><button onclick="app.delete('+i+')">Eliminar</button></td>'
            data += '</tr>'
        }
        document.getElementById('contenedor').innerHTML = data     
    }
    getAll()
}


