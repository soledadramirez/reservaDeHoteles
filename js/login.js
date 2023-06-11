document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
  
    // Obtener usuarios registrados del almacenamiento local (localStorage)
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Buscar el usuario en el almacenamiento local
    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.username === username && usuario.password === password;
    });
  
    if (usuarioEncontrado) {
      // Inicio de sesión exitoso
      var loginLink = document.getElementById('inicio');
      loginLink.style.display = 'none'; 
      var registerLink = document.getElementById('registerLink');
      registerLink.style.display = 'none';
      var logoutLink = document.getElementById('logoutLink');
      logoutLink.style.display = "block";
      
    } else {
      // Credenciales incorrectas
      alert('El mail ingresado no es correcto. Intentalo de nuevo.');
    }

  });
  
  
  