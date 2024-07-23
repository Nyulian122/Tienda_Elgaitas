import { cargarCarrito, inicializarCarritoModal } from "./cargar_carrito/cargar_carrito.js";

function cargar_header() {
    let div_header = document.querySelector("#header");

    // Modificar el contenido del header
    let parte_ariba = `
        <div class="logotipo">
            <span class="material-symbols-outlined logo"> shopping_bag </span>
            <p class="name_tienda"> TiendaFicticia </p>
        </div>
        <span class="material-symbols-outlined menu"> menu </span>
        <div class="div_buscador">
            <input type="text" name="" id="" class="buscador">
            <div class="lupa">
                <span class="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
        <span class="material-symbols-outlined carrito_compras"> shopping_cart </span>
        <span class="material-symbols-outlined user" > account_circle </span>
    `;
    div_header.innerHTML = parte_ariba;

    cargarCarrito();
    inicializarCarritoModal();
}

export { cargar_header };
