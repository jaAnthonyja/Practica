// Carousel (tu código original)
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const total = images.children.length;
  let index = 0;

  carousel.querySelector('.prev').onclick = () => {
    index = (index - 1 + total) % total;
    images.style.transform = `translateX(-${index * 100}%)`;
  };
  carousel.querySelector('.next').onclick = () => {
    index = (index + 1) % total;
    images.style.transform = `translateX(-${index * 100}%)`;
  };
});

// Botones Comprar (tu código original)
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const nombre = btn.getAttribute('data-juego');
    const precio = parseFloat(btn.getAttribute('data-precio'));

    // Guardamos el juego como "carrito actual"
    const juegoSeleccionado = { nombre, precio };
    localStorage.setItem('carrito_actual', JSON.stringify(juegoSeleccionado));

    // Redirigimos a la página de pago
    window.location.href = 'pago.html';
  });
});

// Botón "Ver carrito" (añadir redirección)
document.getElementById('btn-ver-carrito').addEventListener('click', () => {
  window.location.href = 'carrito.html';  // o la página que uses para el carrito
});

// Nuevo: Botones "Añadir al carrito"
document.querySelectorAll('.add-cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const juego = btn.getAttribute('data-juego');
    const precio = btn.getAttribute('data-precio');

    // Leer carrito actual
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Ver si ya está en el carrito
    const existe = carrito.find(item => item.nombre === juego);
    if (existe) {
      alert(`El juego "${juego}" ya está en el carrito.`);
      return;
    }

    // Agregar juego al carrito
    carrito.push({ nombre: juego, precio: precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`Juego "${juego}" añadido al carrito.`);
  });
});
