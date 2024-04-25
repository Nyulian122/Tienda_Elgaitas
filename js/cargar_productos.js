function cargar_productos(listado_de_productos){
    let DOM = document.querySelector("#root")
    listado_de_productos.forEach(elemento => {
        let cada_item = document.createElement("div")
        cada_item.classList.add("tarjeta")
        cada_item.innerHTML = `
        <h1 class="title">${elemento.title}</h1>
        <h2 class="category">${elemento.category}</h2>
        <div class="img">
        <img src="${elemento.image}" alt="">
        </div>
        <p class="desc">${elemento.description}</p>
        <span class="price">${elemento.price}</span>
        `
        DOM.appendChild(cada_item)
    });
}

export {cargar_productos}
