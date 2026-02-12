export const renderProducts = (products) => {
    const productsList = document.querySelector('#products-list');
    const productCount = document.querySelector('#product-count');

    productsList.innerHTML = '';
    productCount.textContent = products.length;
    
    products.forEach((product) => {
        const li = document.createElement('li');
        li.dataset.productId = product.id;

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const h3 = document.createElement('h3');
        h3.textContent = product.title;

        const price = document.createElement('p');
        price.textContent = product.price;

        li.append(img, h3, price);
        productsList.append(li);
    })
};

const errorMessage = document.querySelector('#error-message');

export const renderProductDetails = (product) => {
    errorMessage.classList.remove('hidden');
    errorMessage.textContent = product;
};
