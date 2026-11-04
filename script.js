
const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll("[data-add-to-cart]");

let totalItems = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    totalItems++;

    cartCount.textContent = totalItems;
    button.textContent = "Added!";

    setTimeout(() => {
      button.textContent = "Add to cart";
    }, 800);
  });
});
