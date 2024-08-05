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



