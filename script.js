// script.js

// Sample data for products (replace with your actual data)
const products = [
    { name: "Men's Shirt", price: 25 },
    { name: "Men's Jeans", price: 40 },
    { name: "Women's Dress", price: 30 },
    { name: "Women's Handbag", price: 50 },
    { name: "Kids' T-Shirt", price: 15 },
    { name: "Kids' Shoes", price: 20 }
];

// Function to handle adding a product to the cart
function addToCart(productIndex) {
    const selectedProduct = products[productIndex];
    // Example: Add the selected product to the cart (replace with actual implementation)
    console.log(`Added ${selectedProduct.name} to cart.`);
    // You can add more logic here, like updating the UI to reflect the added item
}

// Example of using JavaScript for interactive functionality
document.addEventListener("DOMContentLoaded", function() {
    const addButtons = document.querySelectorAll(".product button");
    
    // Attach event listener to each "Add to Cart" button
    addButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            addToCart(index); // Passes the index of the product in the array
        });
    });

    // Monsoon Sale Popup
    const monsoonSalePopup = document.getElementById("monsoonSalePopup");
    const closePopup = document.querySelector(".close");

    if (monsoonSalePopup && closePopup) {
        // Show popup on page load
        monsoonSalePopup.style.display = "block";

        // Close popup on close button click
        closePopup.addEventListener("click", function() {
            monsoonSalePopup.style.display = "none";
        });
    }
});
