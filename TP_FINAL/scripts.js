const alertCompras = document.getElementById("alert-compras");
const carrito = document.getElementById("superior-extrema-izquierda");
let total = 0;

const showCart = () => {
    alertCompras.classList.toggle("hidden");
    alertCompras.classList.toggle("flex");
    alertCompras.innerHTML = 
    `<span><h1><i class="fi fi-rr-shop"></i>Tu carrito</h1></span>
    // <video src="video/shopping-harley-quinn.mp4"> no funciona el video
    <div id="bottom-button"><h1>Total: ${total}</h1>
    <button class="button-hover">Finalizar compra</button></div>`
} 

carrito.addEventListener("click", showCart);