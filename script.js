const WHATSAPP_NUMBER = "523322564360";

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const tortillaForm = document.querySelector("#tortilla-form");

tortillaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const quantity = Number(document.querySelector("#tortilla-quantity").value);

  if (!Number.isInteger(quantity) || quantity < 1) {
    window.alert("Escribe una cantidad válida de paquetes.");
    return;
  }

  const packageLabel = quantity === 1 ? "paquete" : "paquetes";
  openWhatsApp(
    `Hola, quiero hacer un pedido: 🌯 ${quantity} ${packageLabel} de tortillas de harina ($50 MXN cada uno).`,
  );
});

const cakeForm = document.querySelector("#cake-form");
const flavorFieldset = document.querySelector("#flavor-fieldset");
const sizeInputs = document.querySelectorAll('input[name="cake-size"]');

sizeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    flavorFieldset.hidden = false;
  });
});

cakeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedSize = document.querySelector('input[name="cake-size"]:checked');
  const selectedFlavor = document.querySelector('input[name="cake-flavor"]:checked');
  const decoration = document.querySelector("#cake-decoration").value.trim();

  if (!selectedSize) {
    window.alert("Elige el tamaño de tu pastel.");
    return;
  }

  if (!selectedFlavor) {
    window.alert("Elige el sabor de tu pastel.");
    return;
  }

  const decorationText = decoration || "sin especificaciones adicionales";
  openWhatsApp(
    `Hola, quiero hacer un pedido: 🎂 Pastel ${selectedSize.value}, sabor ${selectedFlavor.value}. Decoración: ${decorationText}`,
  );
});

const specialDessertForm = document.querySelector("#special-dessert-form");

specialDessertForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedDessert = document.querySelector('input[name="special-dessert"]:checked');

  if (!selectedDessert) {
    window.alert("Elige el postre que quieres pedir.");
    return;
  }

  openWhatsApp(`Hola, quiero hacer un pedido: 🍰 ${selectedDessert.value}.`);
});
