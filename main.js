import { cargar_categorias } from "./cargar_categorias/Cargar_categorias.js";
import { cargarProductos } from "./Cargar_productos/cargar_productos.js"
import { cargar_header } from "./cargar_header/header.js";
import { cargarFooter } from "./cargar_footer/footer.js";
 
// Selecciona el elemento con el ID 'root'
const DOM = document.querySelector("#root");

// Estructura HTML básica
DOM.innerHTML = `
    <header id="header"></header>
    <main class="body">
        <p class="categoria_txt">
            Categorias
        </p>
        <section id="div_summery_description"></section>
        <section id="div_product_list"></section>
    </main>
    <footer id="footer"></footer>

    <!-- Modal -->
    <div id="carritoModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Tu Carrito de Compras</h2>
            <div id="carritoItems">
                
            </div>
        </div>
    </div>
`;

// Función para cargar categorías y productos
async function cargarCategoriasYProductos() {
    try {
        // Obtener productos de la API
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Llamar a la función para cargar productos
        cargarProductos(data);

        // Llamar a la función para cargar categorías
        cargar_categorias();
    } catch (error) {
        console.error("Error al cargar categorías y productos:", error);
    }
}

// Llamar a la función para cargar categorías y productos
cargarCategoriasYProductos();
cargar_header();
cargarFooter();
