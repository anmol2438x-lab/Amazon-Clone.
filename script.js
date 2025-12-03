// Simple Cart Functionality

let cart = [];

document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", function () {
    let itemName = this.getAttribute("data-name");
    let itemPrice = this.getAttribute("data-price");

    cart.push({
      name: itemName,
      price: itemPrice,
    });

    alert(itemName + " added to cart!");
    console.log(cart);
  });
});
