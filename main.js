/**
 * Realizar un aplicativo web con HTML, CSS y JAVASCRIPT, el aplicativo debe de contener:
 *  Página de inicio: Donde se debe describir de que se trata el proyecto y sus objetivos. 
 *  Página “Sobre Nosotros”: Donde se debe mostrar la foto y la biografía de cada integrante del grupo. 
 *  Página de login: Una página con un formulario que solicite un email y contraseña para realizar el respectivo inicio de sesión.
 *  Página de CRUD principal
 *  Página de CRUD secundario  
 *  Página de CRUD terciario. 
    Para la funcionalidad se trabajará con arreglos y objetos.

 * CRUD de Noticias
 * CRUD de Empresas 
 * CRUD de Ofertas de Empleo
 * 
 *  <li class="nav-item dropdown">
        <a href="sobreNosotros.html" class="nav-link dropdown-toggle" data-toggle="dropdown">Sobre Nosotros<b class='caret'></b></a>
            <ul class="dropdown-menu">
                <li href="#"><a>Mision</a></li>
                <li href="#"><a>Vision</a></li>
                <li href="#"><a>Contacto</a></li>
            </ul>
    </li>
 * 
 * 
 */ 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});