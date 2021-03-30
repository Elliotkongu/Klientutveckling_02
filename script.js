$(function() {

    loadProducts();

    async function loadProducts() {
        await fetch("https://webacademy.se/fakestore/")
                .then(response => response.json())
                .then(products => {displayProducts(products)})
                .catch(error => console.error(error));
    }

    function displayProducts(products) {
        let productContainer = document.getElementById("product-content");

        products.forEach(element => {
            let card = displayCard(element);
            productContainer.appendChild(card);
        });
    }

    function displayCard(product) {
        let card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `<div class="product-img"><img src="${product.image}" alt="${product.title} " height="200"> </div>`;

        let productDescription = document.createElement("div");
        productDescription.className = "product-description";
        productDescription.innerHTML = 
            `<h3>${product.title}</h3>
            <p>${product.description}
            <h4>Pris: ${product.price} kr</h4>
            <br>`;

        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.setAttribute("data-id", `${product.id}`);
        button.setAttribute("onclick", "document.location='checkout.html'")
        button.textContent = "Beställ";

        button.addEventListener("click", function(e){
            addToCart(product);
        })

        productDescription.appendChild(button);
        card.appendChild(productDescription);
        return card;
    }

    function addToCart(product) {
        localStorage.setItem("cart", JSON.stringify(product));
    }
})