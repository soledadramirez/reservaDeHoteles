
function cerrarSesion () {
    // Eliminar el estado de inicio de sesión del localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Redireccionar al formulario de inicio de sesión después de cerrar sesión
    window.location.href = "login.html";
}


document.getElementById('logout').addEventListener('click', cerrarSesion);

