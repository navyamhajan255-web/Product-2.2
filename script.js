const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 },
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 12000 }
];

const filter = document.getElementById("filter");
const productBox = document.getElementById("products");

function displayProducts(list) {
    productBox.innerHTML = "";
    list.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${item.name}</h3><p>₹${item.price}</p>`;
        productBox.appendChild(div);
    });
}

filter.addEventListener("change", () => {
    let sorted = [...products];

    if (filter.value === "low") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (filter.value === "high") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (filter.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    displayProducts(sorted);
});

displayProducts(products);
