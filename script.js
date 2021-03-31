$(function() {


        fetch("https://webacademy.se/fakestore/")
            .then(response => response.json())
            .then(products => displayProducts(products))
            .catch(error => console.error(error));
    

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
        button.setAttribute("onclick", "document.location='checkout.html'")
        button.textContent = "Beställ";

        button.addEventListener("click", function(e){
            addItem(product);
        })

        productDescription.appendChild(button);
        card.appendChild(productDescription);
        return card;
    }

    function addItem(product) {
        localStorage.setItem("item", JSON.stringify(product));
    }
})