/* =====================================
   PAYMENT PAGE
===================================== */

// Get Order
const order = JSON.parse(localStorage.getItem("currentOrder"));

if (!order) {

    alert("No product selected.");

    window.location.href = "products.html";

}

// Show Order
document.getElementById("productName").textContent = order.name;

document.getElementById("productPrice").textContent = order.price;

document.getElementById("productQuantity").textContent = order.quantity;

document.getElementById("productTotal").textContent = order.total;

// Paid Button
document.getElementById("paidBtn").addEventListener("click", function () {

    const name = document.getElementById("customerName").value.trim();

    const phone = document.getElementById("customerPhone").value.trim();

    const email = document.getElementById("customerEmail").value.trim();

    if (name === "" || phone === "") {

        alert("Please enter your Name and Phone Number.");

        return;

    }

    const customer = {

        name: name,

        phone: phone,

        email: email,

        order: order

    };

    localStorage.setItem("customerDetails", JSON.stringify(customer));

    window.location.href = "success.html";

});