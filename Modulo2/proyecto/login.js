//arreglo de usuarios con password 
let login = [
    { usuario: "Ricardo", pass: '12345678' },
    { usuario: "Isabella", pass: 'isa12345' },
    { usuario: "Joss", pass: 'joss2023' }
  ];
    
  // función para iniciar sesión
  function iniciarSesion() {    
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
  
    // verirficar las credenciales
    const usuarioEncontrado = login.find(credencial => credencial.usuario === usuario && credencial.pass === pass);
  
    if (usuarioEncontrado) {
      // inicio de sesión exitoso
      // Redirigir al otro HTML y pasar la información del usuario autenticado en la URL... sin enmascarar :(
      window.location.href = `cajero.html?usuario=${usuarioEncontrado.usuario}`;
    } else {
      // inicio de sesión no exitoso
      alert('Credenciales incorrectas. Inténtelo de nuevo.');
    }
  }
  
  // referencia al botón
  const ingresarBtn = document.getElementById('botonIngresar');
  
  // agrega un event listener al botón, que ejecuta la funcion hasta que se le da click
  ingresarBtn.addEventListener('click', iniciarSesion);

 
  