document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
  
    // Obtener usuarios registrados del almacenamiento local (localStorage)
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    // Verificar si el usuario ya está registrado
    var usuarioExistente = usuarios.find(function(usuario) {
      return usuario.username === username;
    });
  
    if (usuarioExistente) {
      // Usuario ya existe
      alert('El usuario ya está registrado. Por favor, elige otro nombre de usuario.');
    } else {
      // Registrar nuevo usuario
      var nuevoUsuario = {
        username: username,
        password: password
      };
  
      usuarios.push(nuevoUsuario);
  
      // Guardar usuarios en el almacenamiento local
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      // Registro exitoso
      window.location.href = './homeLogueado.html';
    }
  });