/* =====================================
   PRODUCT DETAILS PAGE
===================================== */

// Get Product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Load Product Data
fetch("../data/products.json")
.then(response => response.json())
.then(products => {

    const product = products.find(item => item.id === productId);

    if(!product){

        document.querySelector(".product-page").innerHTML =
        "<h2>Product Not Found</h2>";

        return;

    }

    // Show Product Details
    document.getElementById("productImage").src = product.image;

    document.getElementById("productImage").alt = product.name;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productPrice").textContent = "₹" + product.price;

    document.getElementById("productDescription").textContent = product.description;

    // Buy Now Button
    document.getElementById("buyNow").addEventListener("click",function(){

        const quantity = Number(document.getElementById("quantity").value);

        const order = {

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            total: product.price * quantity

        };

        localStorage.setItem("currentOrder", JSON.stringify(order));

        window.location.href = "payment.html";

    });

})
.catch(error => {

    console.error("Error loading product:", error);

});