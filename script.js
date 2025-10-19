// ==============================
// Prestige Level Clothing JS
// ==============================

// Initialize or load the cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ==============================
// ADD TO CART FUNCTION
// ==============================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const productCard = e.target.closest(".card");
    if (!productCard) return;

    const name = productCard.querySelector("h3").textContent;
    const price = parseFloat(productCard.querySelector(".price").textContent.replace("$", ""));
    const image = productCard.querySelector("img").src;

    // Check if product already exists in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, image, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
  }
});

// ==============================
// DISPLAY CART CONTENTS
// ==============================
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No items in cart.</p>";
    document.getElementById("checkout-btn").style.display = "none";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" width="80">
        <p><strong>${item.name}</strong><br>$${item.price.toFixed(2)} × ${item.qty}</p>
        <button onclick="removeItem(${index})" aria-label="Remove ${item.name}">Remove</button>
      </div>`;
  });

  cartContainer.innerHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
  document.getElementById("checkout-btn").style.display = "inline-block";
}

// ==============================
// REMOVE ITEM FROM CART
// ==============================
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// ==============================
// CHECKOUT FORM VALIDATION
// ==============================
function validateCheckoutForm() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !address || !email) {
    alert("Please fill out all required fields.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Order placed successfully! Thank you for shopping with us.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
  return false;
}

// ==============================
// AUTO DISPLAY CART IF ON CART PAGE
// ==============================
if (document.title.includes("Cart")) {
  window.addEventListener("DOMContentLoaded", displayCart);
}
