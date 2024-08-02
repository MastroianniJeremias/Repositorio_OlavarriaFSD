// Funcioón para armado de lista 
let lista = document.getElementById("caja-productos", "caja-tecnologia");
// let totalText = document.getElementById("total");
// let total = 0;




// Función para enviar datos de contacto
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let telefono = document.getElementById("teléfono");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");
let btnEnviar = document.getElementById("btnEnviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  informacion[0] = nombre.value;
  informacion[1] = apellido.value;
  informacion[2] = telefono.value;
  informacion[3] = email.value;
  informacion[4] = consulta.value;

  let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

  saveAs(blob, "contact.txt");

  alert("Gracias por su consulta. Hemos recibido sus datos.");
});

// Función para el carrito
// const alertCompras = document.getElementById("alert-compras");
// const carrito = document.getElementById("superior-extrema-izquierda");
// let total = 0;

// const showCart = () => {
//   alertCompras.classList.toggle("hidden");
//   alertCompras.classList.toggle("flex");
//   alertCompras.innerHTML = `<span><h1><i class="fi fi-rr-shop"></i>Tu carrito</h1></span>
//     <img src="Gif/Y3il.gif" alt="gif" title="Because when i shop, the world gets better">
//     <div id="bottom-button"><h1>Total: ${total}</h1>
//     <button class="button-hover">Finalizar compra</button></div>`;
// };

// carrito.addEventListener("click", showCart);
