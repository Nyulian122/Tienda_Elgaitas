function cargarFooter() {
    let div_footer = document.querySelector("#footer");

    div_footer.innerHTML = `
        <div class="arriba_footer">
            <p class="sigenos">
                Síguenos
            </p>
            <div class="imgs_redes">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/linkedin.svg" alt="LinkedIn" class="img">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/pinterest.svg" alt="Pinterest" class="img">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/reddit.svg" alt="Reddit" class="img">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/brands/tumblr.svg" alt="Tumblr" class="img">
            </div>
        </div>
        <div class="abajo_footer">
            <div class="logotipo_foter">
                <span class="material-symbols-outlined logo"> shopping_bag </span>
                <p class="name_tienda_footer">TiendaFicticia</p>
            </div>
            <div class="contactos">
                <p class="contacto_text">Contacto</p>
                <p class="correo">contacto@tiendaficticia.com</p>
                <p class="numero">1234-5678</p>
            </div>
            <div class="productos">
                <p class="categorias_footer">Electrónica</p>
                <p class="categorias_footer">Joyería</p>
                <p class="categorias_footer">Ropa de Hombre</p>
                <p class="categorias_footer">Ropa de Mujer</p>
            </div>
        </div>
    `;
}

export { cargarFooter }
