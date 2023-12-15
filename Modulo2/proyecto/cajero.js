// para obtener el nombre de usuario de la url
const urlParams = new URLSearchParams(window.location.search);
const usuarioAutenticadoNombre = urlParams.get('usuario');

//arreglo con uentas de usuario
const cuentas = [
  { usuario: "Ricardo", saldo: 200 },
  { usuario: "Isabella", saldo: 29 },
  { usuario: "Joss", saldo: 512 }
];

// buscar la cuenta del usuario que hizo login
const usuarioAutenticado = cuentas.find(cuenta => cuenta.usuario === usuarioAutenticadoNombre);

//función para actualizar el saldo en la interfaz
function actualizarSaldo(saldo) {
  const saldoElemento = document.getElementById('saldo-valor');
  saldoElemento.textContent = `$${saldo}`;
}

// Cambia el usuario seleccionado
function cambiarUsuario() {
  // obtener el elemento select
  const selectUsuario = document.getElementById('selectUsuario');

  //Limpiar el select antes de agregar las opciones
  selectUsuario.innerHTML = '';

  //Agregar la opción del usuario autenticado
  const optionAutenticado = document.createElement('option');
  optionAutenticado.value = usuarioAutenticado.usuario;
  optionAutenticado.textContent = usuarioAutenticado.usuario;
  selectUsuario.appendChild(optionAutenticado);

  //actualizar el saldo en la interfaz
  actualizarSaldo(usuarioAutenticado.saldo);

  // preseleccionar el usuario autenticado
  selectUsuario.value = usuarioAutenticado.usuario;
}

// Función para realizar transacciones (retirar o depositar)
function realizarTransaccion(accion) {
  const cantidadInput = document.getElementById('cantidad-input');
  const cantidad = parseFloat(cantidadInput.value);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Ingrese una cantidad válida.');
    return;
  }

  const saldoActual = usuarioAutenticado.saldo;

  if (accion === 'retirar' && cantidad > saldoActual) {
    alert('Fondos insuficientes.');
    return;
  }

  const saldoMinimo = 10;
  const saldoMaximo = 990;
  
  // Verificar que la transacción cumple con los límites
  if (accion === 'retirar' && saldoActual - cantidad < saldoMinimo) {
    alert(`No se puede retirar esa cantidad. El saldo mínimo permitido es $${saldoMinimo}.`);
    return;
  }

  if (accion === 'depositar' && saldoActual + cantidad > saldoMaximo) {
    alert(`No se puede depositar esa cantidad. El saldo máximo permitido es $${saldoMaximo}.`);
    return;
  }


  // Actualizar saldo según la acción
  const nuevoSaldo = (accion === 'retirar') ? saldoActual - cantidad : saldoActual + cantidad;
  usuarioAutenticado.saldo = nuevoSaldo;

  // Actualizar la interfaz con el nuevo saldo
  actualizarSaldo(nuevoSaldo);

  // Limpiar el campo de cantidad
  cantidadInput.value = '';
}

// Función para consultar el saldo actual
function consultarSaldo() {
  const saldoActual = usuarioAutenticado.saldo;
  alert(`Saldo actual: $${saldoActual}`);
}

// Llamar a la función cambiarUsuario al cargar la página
cambiarUsuario();
