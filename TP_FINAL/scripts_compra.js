"use strict";

// Definimos los productos en arrays separados
// La lista de productos, precios y stock de la caja de productos
let nombresProductos = [
  "Morcilla Criolla",
  "Yogur Entero Milkaut Vainilla",
  "Queso Tybo Feteado",
  "Salchichas Vienissima",
  "Postre Vainilla Con Rocklets Serenito",
  "Radicheta en Bandeja",
  "Galletitas Oreo Rellenas Con Crema",
  "Leche Descremada La Serenísima Protein",
  "Queso Crema",
];

let preciosProductos = [1590, 1880, 2490, 1150, 1015, 1390, 3700, 1475, 3700];

let stockProductos = [560, 755, 960, 140, 265, 854, 740, 320, 832];

let imagenesProductos = [
  "Img/mercaderia11.jpg",
  "Img/mercaderia12.jpg",
  "Img/mercaderia10.jpg",
  "Img/mercaderia3.jpg",
  "Img/mercaderia4.jpg",
  "Img/mercaderia5.jpg",
  "Img/mercaderia6.jpg",
  "Img/mercaderia7.jpg",
  "Img/mercaderia8.jpg",
];

// La lista de productos, precios y stock de la caja de tecnología
let nombresProductosTecnologia = [
  "Auriculares JBL BT Wave Flex Negro",
  "Cortadora de Césped Black & Decker 1200W 32 cm",
  "Termotanque a Gas Escorial 80 Lts",
  "Celular Motorola Moto G84 5G 256GB Viva Magenta",
  "Celular Samsung Galaxy A05 64GB Gris",
  "Notebook Lenovo 14´ Celeron 4GB 128GB eMMC W11 82V60027AR",
  "Heladera Gafa 282 Lts HGF358 AFB Blanca",
  "Colchón Espuma 1 plaza 080 x 190 ONE",
  "Mate Origen con Bombilla Color Verde",
  "Termo Coleman 700ml Acero Inoxidable Celeste",
];

let preciosProductosTecnologia = [
  120000, 220000, 249999, 569999, 285000, 504800, 660000, 257900, 37000, 75300,
];

let stockProductosTecnologia = [
  155, 405, 995, 786, 340, 654, 953, 444, 255, 888,
];

let imagenesProductosTecnologia = [
  "Img/productos1.jpg",
  "Img/productos2.jpg",
  "Img/productos3.jpg",
  "Img/productos4.jpg",
  "Img/productos5.jpg",
  "Img/productos6.jpg",
  "Img/productos7.jpg",
  "Img/productos8.jpg",
  "Img/productos9.jpg",
  "Img/productos10.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  let totalTotal = parseFloat(sessionStorage.getItem("total-total")) || 0.0;
  document.getElementById("total-total").textContent = totalTotal.toFixed(2);
  console.log(`Monto total cargado desde sessionStorage: ${totalTotal}`);

  let productContainers = document.querySelectorAll(".contenedor-principal");
  productContainers.forEach((container, index) => {
    if (
      nombresProductos[index] &&
      preciosProductos[index] &&
      stockProductos[index] !== undefined
    ) {
      let imgElement = container.querySelector(".imagen-producto");
      let productStockElement = container.querySelector(".product-stock");
      let productNameElement = container.querySelector(".titulo-producto");
      let productPriceElement = container.querySelector(".precio-producto");

      if (productNameElement && productPriceElement) {
        productStockElement.textContent = `Stock: ${stockProductos[index]}`;
        productNameElement.textContent = `${nombresProductos[index]}`;
        productPriceElement.textContent = `Precio: $${preciosProductos[index]}`;
        imgElement.setAttribute("src", imagenesProductos[index]);
        imgElement.setAttribute("alt", nombresProductos[index]);
      }
    }
  });

  let productContainersTecnologia = document.querySelectorAll(
    ".contenedor-principal-tecnologia"
  );
  productContainersTecnologia.forEach((container, index) => {
    if (
      nombresProductosTecnologia[index] &&
      preciosProductosTecnologia[index] &&
      stockProductosTecnologia[index] !== undefined
    ) {
      let imgElement = container.querySelector(".imagen-producto");
      let productStockElement = container.querySelector(".product-stock");
      let productNameElement = container.querySelector(".titulo-producto");
      let productPriceElement = container.querySelector(".precio-producto");

      if (productNameElement && productPriceElement) {
        productStockElement.textContent = `Stock: ${stockProductosTecnologia[index]}`;
        productNameElement.textContent = `${nombresProductosTecnologia[index]}`;
        productPriceElement.textContent = `Precio: $${preciosProductosTecnologia[index]}`;
        imgElement.setAttribute("src", imagenesProductosTecnologia[index]);
        imgElement.setAttribute("alt", nombresProductosTecnologia[index]);
      }

      let cantidadInput = container.querySelector(".producto-cantidad");
      let addBtn = container.querySelector(".btn-p");

      cantidadInput.addEventListener("input", () => {
        if (cantidadInput.value < 0 || cantidadInput.value == "") {
          cantidadInput.value = 0;
        }
      });

      addBtn.addEventListener("click", () => {
        let quantity = parseInt(cantidadInput.value);
        if (quantity > stockProductosTecnologia[index]) {
          alert("No hay suficiente stock para realizar la compra");
        } else {
          stockProductosTecnologia[index] -= quantity;
          totalTotal += preciosProductosTecnologia[index] * quantity;
          document.getElementById("total-total").textContent =
            totalTotal.toFixed(2);
          sessionStorage.setItem("total-total", totalTotal.toFixed(2));
          console.log(
            `Cantidad disponible. Stock restante: ${stockProductosTecnologia[index]}`
          );
          productStockElement.textContent = `Stock: ${stockProductosTecnologia[index]}`;
        }
      });
    }
  });
});
