/* OBTENER  EL CARRITO  */
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

/* ACTUALIZAR CONTADOR */
function actualizarContador() {
    let carrito = obtenerCarrito();
    let contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrito.length;
    }
}

/* AGREGAR PRODUCTO */
function agregar(nombre, precio) {
    let carrito = obtenerCarrito();
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
}

/* MOSTRAR CARRITO */
function mostrarCarrito() {
    let carrito = obtenerCarrito();
    let contenedor = document.getElementById("carrito");
    let totalElemento = document.getElementById("total");

    if (!contenedor) return;

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        contenedor.innerHTML += `
            <div>
                <span>${producto.nombre}</span>
                <span>$${producto.precio}</span>
                <button onclick="eliminar(${index})">X</button>
            </div>
        `;
    });

    if (totalElemento) {
        totalElemento.textContent = "$" + total;
    }
}

/* ELIMINAR */
function eliminar(index) {
    let carrito = obtenerCarrito();
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContador();
}

/* VACIAR CARRITO */
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
    actualizarContador();
}

/* FILTRO PRODUCTOS */
function filtrar(categoria) {
    let productos = document.querySelectorAll(".card");

    productos.forEach(producto => {
        if (categoria === "todos" || producto.dataset.categoria === categoria) {
            producto.classList.remove("hide");
        } else {
            producto.classList.add("hide");
        }
    });
}

/* ANIMACIONES SCROLL */
window.addEventListener("scroll", () => {
    let elementos = document.querySelectorAll(".animar");

    elementos.forEach(el => {
        let posicion = el.getBoundingClientRect().top;
        let pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.classList.add("visible");
        }
    });
});

/* HEADER SCROLL */
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* CARGA INICIAL  */
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    mostrarCarrito();
});