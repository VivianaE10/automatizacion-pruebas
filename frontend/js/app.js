
const form = document.getElementById('productForm');
const message = document.getElementById('message');
const productList = document.getElementById('productList');

const API_URL = '/api/products';

// Load registered products
async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        productList.innerHTML = '';

        products.forEach(product => {
            const item = document.createElement('li');
            item.textContent = `${product.name} - $${product.price}`;
            productList.appendChild(item);
        });
    } catch (error) {
        message.textContent = 'No se pudieron cargar los productos.';
    }
}

// Register a product
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const product = {
        name: document.getElementById('name').value.trim(),
        description: document.getElementById('description').value.trim(),
        price: Number(document.getElementById('price').value),
        category: document.getElementById('category').value.trim()
    };

    if (!product.name) {
        message.textContent = 'El nombre del producto es obligatorio.';
        return;
    }

    if (!Number.isFinite(product.price) || product.price <= 0) {
        message.textContent = 'Ingresa un precio mayor que cero.';
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const result = await response.json();

        if (!response.ok) {
            message.textContent = result.message;
            return;
        }

        message.textContent = 'Producto registrado correctamente.';
        form.reset();

        await loadProducts();

    } catch (error) {
        message.textContent = 'No fue posible conectar con el servidor.';
    }
});

// Initial product list
loadProducts();
