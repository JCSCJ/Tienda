document.addEventListener("DOMContentLoaded", async function () {
    const productContainer = document.getElementById("productContainer");

    try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }

        const products = await response.json();

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="Buy">Comprar</button>
            `;
            productContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
        productContainer.innerHTML = "<p>Error al cargar los productos.</p>";
    }
});
