/* =====================================
   PRODUCTS PAGE
===================================== */

let allProducts = [];

// Load products from JSON
fetch("../data/products.json")
.then(response => response.json())
.then(data => {

    allProducts = data;

    showProducts(allProducts);

})
.catch(error => {

    console.error("Error loading products:", error);

});

// Show Products
function showProducts(products){

    const productsGrid = document.querySelector(".products-grid");

    productsGrid.innerHTML = "";

    products.forEach(product => {

        productsGrid.innerHTML += `

        <div class="product">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <h4>₹${product.price}</h4>

                <button onclick="viewProduct(${product.id})">

                    Buy Now

                </button>

            </div>

        </div>

        `;

    });

}

// Search
document.getElementById("searchInput").addEventListener("input", function(){

    const keyword = this.value.toLowerCase();

    const filtered = allProducts.filter(product =>

        product.name.toLowerCase().includes(keyword)

    );

    showProducts(filtered);

});

// Category Filter
document.getElementById("categoryFilter").addEventListener("change", function(){

    const category = this.value;

    if(category === "All"){

        showProducts(allProducts);

        return;

    }

    const filtered = allProducts.filter(product =>

        product.category === category

    );

    showProducts(filtered);

});

// Open Product Page
function viewProduct(id){

    window.location.href = "product.html?id=" + id;

}