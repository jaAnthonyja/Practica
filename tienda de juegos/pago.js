 document.getElementById('paymentForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const cardNumber = document.getElementById('cardNumber').value.trim();
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();

      let esValido = true;

 if (name === '') {
          document.getElementById('errorname').textContent = 'El nombre de la tarjeta es obligatorio.';
          document.getElementById('okname').textContent = '';
          esValido = false;
        } else {
          document.getElementById('errorname').textContent = '';
          document.getElementById('okname').textContent = 'Nombre válido.';
        }

      if (!/^\d{16}$/.test(cardNumber)) {
        document.getElementById("errorcardNumber").textContent = "Número de tarjeta inválido.";
        document.getElementById("okcardNumber").textContent = "";
        esValido = false;
      }else {
        document.getElementById('errorcardNumber').textContent = '';
        document.getElementById('okcardNumber').textContent = 'Número de tarjeta válido.';
        }

      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        document.getElementById("errorexpiry").textContent = "Por favor ingrese un fecha de expiración.";
        document.getElementById("okexpiry").textContent = "";
        esValido = false;
      }else {
        document.getElementById('errorexpiry').textContent = '';
        document.getElementById('okexpiry').textContent = 'Fecha de expiración válida.';
        }

      if (!/^\d{3,4}$/.test(cvv)) {
        document.getElementById("errorcvv").textContent = "Por favor ingrese un codigo válido.";
        document.getElementById("okcvv").textContent = "";
        esValido = false;
      }else {
        document.getElementById('errorcvv').textContent = '';
        document.getElementById('okcvv').textContent = 'Codigo CVV válido';
        }
    if (esValido) {
        alert("Pago procesado correctamente!."); 
        document.getElementById("paymentForm").reset(); 
    }});