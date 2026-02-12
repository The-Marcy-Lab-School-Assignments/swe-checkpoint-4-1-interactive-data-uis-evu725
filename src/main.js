import { getProducts, getProductById } from './fetch-helpers.js'
import { renderProducts } from './dom-helpers.js'

getProducts().then((products) => {
    if (products.error) {
        console.error(products.error);
        renderProductDetails("Failed to find products. Try again later. Error: ${error.message");
        return;
    }
    renderProducts(products.data);
});

const productList = document.querySelector('#');
productList.addEventListener('submit', (event) => {
    event.target.closest('li');
    if (!li) return;

    getProductById(li.dataset.productId)
})