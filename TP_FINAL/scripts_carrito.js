//  Función para el carrito
const alertCompras = document.getElementById("alert-compras");
const carrito = document.getElementById("superior-extrema-izquierda");
let total = 0;

const showCart = () => {
  alertCompras.classList.toggle("hidden");
  alertCompras.classList.toggle("flex");
  alertCompras.innerHTML = `<span><h1><i class="fi fi-rr-shop"></i>Tu carrito</h1></span>
  <img src="Gif/Y3il.gif" alt="gif" title="Because when i shop, the world gets better">
    <div id="bottom-button" id="total-total"><h1>Total: $0</h1>
    <button class="button-hover">Finalizar compra</button></div>`;
};

carrito.addEventListener("click", showCart);
