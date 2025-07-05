// Agrega un "escuchador" al formulario para interceptar el envío (submit)
document.getElementById("formularioInicioSesion").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional (recarga la página)

  // Obtiene el valor del campo de correo y lo limpia de espacios en blanco
  const correo = document.getElementById("correo").value.trim();

  // Obtiene el valor del campo de contraseña y lo limpia de espacios en blanco
  const contrasena = document.getElementById("Password").value.trim();

  // Expresión regular para validar un correo electrónico
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Variable bandera que indica si todos los campos son válidos
  let esValido = true;

  // Limpia cualquier mensaje de error o de éxito anterior
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorPassword").textContent = "";
  document.getElementById("okCorreo").textContent = "";
  document.getElementById("okPassword").textContent = "";

  // Validación del correo: si no cumple con la expresión regular, se muestra un error
  if (!regexCorreo.test(correo)) {
    document.getElementById("errorCorreo").textContent = "Por favor ingrese un correo válido.";
    document.getElementById("okCorreo").textContent = "";
    esValido = false; // Marca que hay un error
  } else {
    // Si el correo es válido, se muestra mensaje de éxito
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("okCorreo").textContent = "Correo válido.";
  }

  // Validación de la contraseña: debe tener al menos 8 caracteres
  if (contrasena.length < 8) {
    document.getElementById("errorPassword").textContent = "La contraseña debe ser de 8 caracteres.";
    document.getElementById("okPassword").textContent = "";
    esValido = false; // Marca que hay un error
  } else {
    // Si la contraseña es válida, se muestra mensaje de éxito
    document.getElementById("errorPassword").textContent = "";
    document.getElementById("okPassword").textContent = "Contraseña válida.";
  }

  // Si todos los campos son válidos, se muestra un mensaje de éxito y se reinicia el formulario
  if (esValido) {
    alert("Inicio de sesión exitoso."); // Muestra un mensaje emergente
    document.getElementById("formularioInicioSesion").reset(); // Limpia el formulario
  }
});
