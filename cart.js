displayItem();

function displayItem() {
    console.log("Display item function");
    const item = JSON.parse(localStorage.getItem("item"));        
    let output = "<tr>"
    + "<th>Produkt</td>"
    + "<th>Beskrivning</td>"
    + "<th>Pris</td>"
    + "</tr>"
    + "<tr>"
    + "<td headers='Produkt'>" + item.title + "</td>"
    + "<td>" + item.description + "</td>"
    + "<td>" + item.price + "</td>";
    + "</tr>"
    $('.show-cart').html(output);
}

function validateForm() {
    let name = document.forms["checkoutForm"]["name"].value;
    if (name === "") {
        alert("Du måste fylla i ett namn");
        return false;
    }

    let telephone = document.forms["checkoutForm"]["telephone"].value;
    let numbers = /^[0-9]+$/
    if (!telephone.match(numbers) || telephone === "") {
        alert("Använd bara siffror");
        return false;
    }

    let email = document.forms["checkoutForm"]["email"].value;
    if (email === "" || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        alert("Använd en fungerande epost-adress");
        return false;
    }

    let address = document.forms["checkoutForm"]["address"].value;
    if (address === "") {
        alert("Måste skriva in en adress")
        return false;
    }

    alert("Tack för din beställning!");
    return true;
  }