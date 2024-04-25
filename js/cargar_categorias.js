function cargar_Categorias(params) {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categorias =>{

            })
}

function imprimir_categorias(lista_categorias){
    let div_informacion = document.querySelectorAll("#desc");
    lista_categorias.forEach(element => {
       let div = document.createElement("div");
       div.innerHTML = `
       <input type = "checkbox" id ="${element}">
       <label for = "${element}">${element}</label>
       `;
       div_informacion.appendChild(div);

       console.log(element);
    });
}

export {cargar_Categorias}