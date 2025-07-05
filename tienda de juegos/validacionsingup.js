// Se agrega un "escuchador" al formulario de registro para interceptar el envío
document.getElementById("formularioRegistro").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe y recargue la página

  // Se capturan y limpian los valores ingresados por el usuario
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const mensajeError = document.getElementById("mensajeError");

  // Expresión regular para validar el formato del correo electrónico
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Expresión regular para validar que el teléfono contenga entre 7 y 15 dígitos
  const telefonoRegex = /^[0-9]{7,15}$/;

  // Variable bandera para determinar si todos los campos son válidos
  let esValido = true;

  // Limpia los mensajes de error y éxito anteriores
  document.querySelectorAll('.error-message, .ok-message').forEach(el => el.textContent = '');

  // Validar campo nombre
  if (nombre === '') {
    document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
    document.getElementById('okNombre').textContent = '';
    esValido = false;
  } else {
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('okNombre').textContent = 'Nombre válido.';
  }

  // Validar campo apellido
  if (apellido === '') {
    document.getElementById('errorApellido').textContent = 'El apellido es obligatorio.';
    document.getElementById('okApellido').textContent = '';
    esValido = false;
  } else {
    document.getElementById('errorApellido').textContent = '';
    document.getElementById('okApellido').textContent = 'Apellido válido.';
  }

  // Validar correo electrónico
  if (!correoRegex.test(correo)) {
    document.getElementById('errorCorreo').textContent = 'El correo electrónico no es válido.';
    document.getElementById('okCorreo').textContent = '';
    esValido = false;
  } else {
    document.getElementById('errorCorreo').textContent = '';
    document.getElementById('okCorreo').textContent = 'Correo válido.';
  }

  // Validar número de teléfono
  if (!telefonoRegex.test(telefono)) {
    document.getElementById('errorTelefono').textContent = 'El número de teléfono debe contener entre 7 y 15 dígitos.';
    document.getElementById('okTelefono').textContent = '';
    esValido = false;
  } else {
    document.getElementById('errorTelefono').textContent = '';
    document.getElementById('okTelefono').textContent = 'Teléfono válido.';
  }

  // Validar fecha de nacimiento
  if (fechaNacimiento === '') {
    document.getElementById('errorfechaNacimiento').textContent = 'La fecha de nacimiento es obligatoria.';
    document.getElementById('okfechaNacimiento').textContent = '';
    esValido = false;
  } else {
    document.getElementById('errorfechaNacimiento').textContent = '';
    document.getElementById('okfechaNacimiento').textContent = 'Fecha válida.';
  }

  // Validar contraseña
  if (password === '') {
    document.getElementById('errorPassword').textContent = 'La contraseña es requerida.';
    document.getElementById('errorconfirmpassword').textContent = '';
    esValido = false;
  } else if (password !== confirmPassword) {
    // Verifica si las contraseñas coinciden
    document.getElementById('errorconfirmpassword').textContent = 'Las contraseñas no coinciden.';
    document.getElementById('errorPassword').textContent = '';
    esValido = false;
  } else {
    // Contraseña válida y coincide con la confirmación
    document.getElementById('errorPassword').textContent = '';
    document.getElementById('errorconfirmpassword').textContent = '';
  }

  // Verifica si todos los campos son válidos
  if (esValido) {
    mensajeError.innerHTML = ""; // Limpia mensajes de error generales
    alert("Registro exitoso."); // Muestra alerta de éxito
    document.getElementById("formularioRegistro").reset(); // Limpia el formulario
    document.querySelectorAll('.ok-message').forEach(el => el.textContent = ''); // Limpia mensajes de éxito
  } else {
    // Muestra mensaje general si hay errores
    mensajeError.innerHTML = "Corrige los errores antes de continuar.";
  }
});
