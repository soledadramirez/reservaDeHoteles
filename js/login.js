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
      window.location.href = './homeLogueado.html';
      // Inicio de sesión exitoso 
      
    } else {
      // Credenciales incorrectas
      alert('La contraseña es incorrecta.');
    }

  });
  
  
  