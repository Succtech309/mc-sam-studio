// Simple shopping cart functionality
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

// Render cart items
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item}