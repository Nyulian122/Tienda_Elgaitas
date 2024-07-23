function cargarProductos(productosList) {
    let divProductList = document.querySelector("#div_product_list");

    // Asegúrate de limpiar la lista de productos antes de agregar nuevos productos
    divProductList.innerHTML = '';

    productosList.forEach(product => {
        // Crear el contenedor para el producto
        let div = document.createElement("div");
        div.className = "item_product"; // usar className en lugar de classList para asignar clases

        // Tomar solo las primeras cinco palabras del título para el texto corto
        const shortText = product.title.split(' ').slice(0, 5).join(' ');

        // Usar plantillas literales para el contenido del div
        div.innerHTML = `
            <div class="box_img">
                <img src="${product.image}" alt="${shortText}">
            </div>
            <div class="caja_descri">
                <span class="name">${shortText}</span>
                <span class="price">Q${product.price}</span>
                <div class="buy_btn" id="comprar_${product.id}">Comprar</div>
            </div>
        `;

        // Agregar el nuevo producto al contenedor de la lista de productos
        divProductList.appendChild(div);
    });
}

export { cargarProductos }
