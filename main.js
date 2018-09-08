/**
 <li class="nav-item dropdown">
    <a href="sobreNosotros.html" class="nav-link dropdown-toggle" data-toggle="dropdown">Sobre Nosotros<b class='caret'></b></a>
    <ul class="dropdown-menu">
        <li href="#"><a>Mision</a></li>
        <li href="#"><a>Vision</a></li>
        <li href="#"><a>Contacto</a></li>
    </ul>
</li>
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
*/

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