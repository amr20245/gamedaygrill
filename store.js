// Add this code after your existing JavaScript code

document.addEventListener("DOMContentLoaded", function () {
    // Cart array to store selected items
    let cart = [];
  
    // Function to handle the "Add to Cart" button click
    function addToCart(itemName, itemPrice) {
      const item = {
        name: itemName,
        price: itemPrice,
        quantity: 1,
      };
  
      // Check if the item is already in the cart
      const existingItem = cart.find((cartItem) => cartItem.name === itemName);
  
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push(item);
      }
  
      updateCartDisplay();
    }
  
    // Function to update the cart display
    function updateCartDisplay() {
      const cartItemsElement = document.getElementById("cart_items");
      const cartTotalElement = document.getElementById("cart_total");
  
      // Clear existing cart items
      cartItemsElement.innerHTML = "";
  
      // Populate cart items
      cart.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
          <button onclick="removeFromCart('${item.name}')">Remove</button>`;
        cartItemsElement.appendChild(listItem);
      });
  
      // Calculate and display total
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      cartTotalElement.innerHTML = `Total: $${total.toFixed(2)}`;
  
      // Display a message if the cart is empty
      if (cart.length === 0) {
        cartTotalElement.innerHTML = "Your cart is empty";
      }
    }
  
    // Function to remove an item from the cart
    window.removeFromCart = function (itemName) {
      const itemIndex = cart.findIndex((item) => item.name === itemName);
  
      if (itemIndex !== -1) {
        const item = cart[itemIndex];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          cart.splice(itemIndex, 1);
        }
        updateCartDisplay();
      }
    };
  
    // Function to simulate a checkout (you can replace this with your actual checkout logic)
    window.checkout = function () {
      alert("Checkout - Total: $" + cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
    };
  
    // Update the cart display initially
    updateCartDisplay();
  });
  