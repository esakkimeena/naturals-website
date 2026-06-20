let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");
}

function buyNow(productName, price) {
    let singleProduct = [
        {
            name: productName,
            price: price
        }
    ];

    localStorage.setItem("cart", JSON.stringify(singleProduct));

    window.location.href = "checkout.html";
}

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if(input.includes("soap")){
        window.location.href = "soaps.html";
    }
    else if(input.includes("laddoo") || input.includes("laddu")){
        window.location.href = "laddoos.html";
    }
    else if(input.includes("protein")){
        window.location.href = "protein.html";
    }
    else{
        alert("Product not found!");
    }
}

function addReview(){

    let name = document.getElementById("reviewName").value;
    let review = document.getElementById("reviewText").value;

    if(name === "" || review === ""){
        alert("Please fill all fields");
        return;
    }

    let reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        name:name,
        review:review
    });

    localStorage.setItem("reviews",
    JSON.stringify(reviews));

    loadReviews();

    document.getElementById("reviewName").value="";
    document.getElementById("reviewText").value="";
}