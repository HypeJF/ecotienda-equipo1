// =============================================================
// AhorraPlus: el catalogo y el carrito, con JavaScript
// =============================================================

const TARIFA = 950;
const DIAS_MES = 30;

const productos = [
    // --- ILUMINACIÓN ---
    { id: 1, nombre: "Bombillo LED 9W", precio: 8500, categoria: "iluminacion", wattsAntes: 60, wattsDespues: 9, horasDia: 5, descripcion: "Reemplaza al tradicional de 60W. Vida útil de 25,000 horas.", imagen: "img/1-bombillo.jpg" },
    { id: 2, nombre: "Panel LED Plafón 18W", precio: 22000, categoria: "iluminacion", wattsAntes: 100, wattsDespues: 18, horasDia: 6, descripcion: "Luz blanca de incrustar. Excelente distribución térmica.", imagen: "img/2-panel.jpg" },
    { id: 3, nombre: "Reflector LED 50W Exterior", precio: 45000, categoria: "iluminacion", wattsAntes: 300, wattsDespues: 50, horasDia: 8, descripcion: "Protección IP66 contra agua. Reemplaza reflectores de 300W.", imagen: "img/3-reflector.jpg" },
    { id: 4, nombre: "Cinta LED 5 Metros 12V", precio: 35000, categoria: "iluminacion", wattsAntes: 40, wattsDespues: 12, horasDia: 4, descripcion: "Iluminación decorativa de bajísimo consumo. Incluye adaptador.", imagen: "img/4-cinta.jpg" },
    { id: 5, nombre: "Tubo LED 18W T8", precio: 15000, categoria: "iluminacion", wattsAntes: 40, wattsDespues: 18, horasDia: 8, descripcion: "Reemplazo directo para tubos fluorescentes de 40W.", imagen: "img/5-tubo.jpg" },
    { id: 6, nombre: "Bombillo Inteligente WiFi", precio: 32000, categoria: "iluminacion", wattsAntes: 60, wattsDespues: 10, horasDia: 4, descripcion: "Control por app o voz (Alexa/Google). Apágalo desde el celular.", imagen: "img/6-bombillo-wifi.jpg" },
    { id: 7, nombre: "Lámpara de Escritorio LED", precio: 55000, categoria: "iluminacion", wattsAntes: 40, wattsDespues: 5, horasDia: 3, descripcion: "Batería recargable, no necesita estar conectada todo el día.", imagen: "img/7-lampara.jpg" },

    // --- ELECTRODOMÉSTICOS ---
    { id: 8, nombre: "Nevera Inverter 300L", precio: 1850000, categoria: "electrodomesticos", wattsAntes: 400, wattsDespues: 150, horasDia: 24, descripcion: "Compresor Digital Inverter que ajusta la velocidad.", imagen: "img/8-nevera.jpg" },
    { id: 9, nombre: "Lavadora Carga Frontal", precio: 2100000, categoria: "electrodomesticos", wattsAntes: 500, wattsDespues: 150, horasDia: 2, descripcion: "Motor Inverter Direct Drive. Usa menos agua y energía.", imagen: "img/9-lavadora.jpg" },
    { id: 10, nombre: "Aire Acondicionado Inverter", precio: 1650000, categoria: "electrodomesticos", wattsAntes: 1500, wattsDespues: 600, horasDia: 6, descripcion: "Mantiene la temperatura estable sin picos de consumo.", imagen: "img/10-aire.jpg" },
    { id: 11, nombre: "Televisor Smart Eco 50\"", precio: 1450000, categoria: "electrodomesticos", wattsAntes: 180, wattsDespues: 60, horasDia: 5, descripcion: "Modo de ahorro automático y pantalla de bajo consumo.", imagen: "img/11-tv.jpg" },
    { id: 12, nombre: "Ventilador Motor DC", precio: 220000, categoria: "electrodomesticos", wattsAntes: 90, wattsDespues: 30, horasDia: 8, descripcion: "Motor de corriente continua. Consume 60% menos.", imagen: "img/12-ventilador.jpg" },
    { id: 13, nombre: "Horno Microondas Inverter", precio: 480000, categoria: "electrodomesticos", wattsAntes: 1200, wattsDespues: 800, horasDia: 0.5, descripcion: "Calienta de manera constante sin picos altos de energía.", imagen: "img/13-microondas.jpg" },
    { id: 14, nombre: "Freidora de Aire", precio: 350000, categoria: "electrodomesticos", wattsAntes: 1500, wattsDespues: 1000, horasDia: 1, descripcion: "Resistencia optimizada, alcanza la temperatura más rápido.", imagen: "img/14-freidora.jpg" },
    { id: 15, nombre: "Licuadora Bajo Consumo", precio: 190000, categoria: "electrodomesticos", wattsAntes: 600, wattsDespues: 350, horasDia: 0.2, descripcion: "Motor optimizado para triturar hielo en segundos.", imagen: "img/15-licuadora.jpg" },

    // --- ENERGÍA SOLAR ---
    { id: 16, nombre: "Panel Solar 150W", precio: 320000, categoria: "solar", wattsAntes: 150, wattsDespues: 0, horasDia: 6, descripcion: "Ideal para iniciar tu sistema aislado. Genera energía limpia.", imagen: "img/16-panel.jpg" },
    { id: 17, nombre: "Reflector Solar 100W", precio: 125000, categoria: "solar", wattsAntes: 100, wattsDespues: 0, horasDia: 8, descripcion: "Cero consumo eléctrico. Batería de litio integrada.", imagen: "img/17-reflector-solar.jpg" },
    { id: 18, nombre: "Kit Iluminación Portátil", precio: 180000, categoria: "solar", wattsAntes: 60, wattsDespues: 0, horasDia: 5, descripcion: "Incluye mini panel, batería y 3 bombillos LED.", imagen: "img/18-kit.jpg" },
    { id: 19, nombre: "Powerbank Solar", precio: 95000, categoria: "solar", wattsAntes: 15, wattsDespues: 0, horasDia: 3, descripcion: "Carga tu celular gratis con la luz del sol.", imagen: "img/19-powerbank.jpg" },
    { id: 20, nombre: "Calentador de Agua Solar", precio: 1850000, categoria: "solar", wattsAntes: 4000, wattsDespues: 0, horasDia: 1, descripcion: "Aprovecha el calor del sol para toda la familia.", imagen: "img/20-calentador.jpg" },
    { id: 21, nombre: "Ventilador Solar", precio: 250000, categoria: "solar", wattsAntes: 60, wattsDespues: 0, horasDia: 8, descripcion: "Se carga de día con su propio panel y funciona de noche.", imagen: "img/21-ventilador-solar.jpg" },

    // --- DOMÓTICA ---
    { id: 22, nombre: "Enchufe Inteligente WiFi", precio: 45000, categoria: "domotica", wattsAntes: 25, wattsDespues: 2, horasDia: 12, descripcion: "Corta el paso de energía evitando el consumo fantasma.", imagen: "img/22-enchufe.jpg" },
    { id: 23, nombre: "Sensor de Movimiento", precio: 35000, categoria: "domotica", wattsAntes: 60, wattsDespues: 0.5, horasDia: 4, descripcion: "Enciende y apaga las luces solo si hay alguien.", imagen: "img/23-sensor.jpg" },
    { id: 24, nombre: "Regleta Smart", precio: 95000, categoria: "domotica", wattsAntes: 40, wattsDespues: 3, horasDia: 10, descripcion: "Programa horarios de apagado para tu centro de TV.", imagen: "img/24-regleta.jpg" },
    { id: 25, nombre: "Monitor de Consumo", precio: 120000, categoria: "domotica", wattsAntes: 10, wattsDespues: 1, horasDia: 24, descripcion: "Mide en tiempo real cuánta energía gastas.", imagen: "img/25-monitor.jpg" },
    { id: 26, nombre: "Interruptor Táctil WiFi", precio: 65000, categoria: "domotica", wattsAntes: 40, wattsDespues: 1, horasDia: 6, descripcion: "Automatiza la iluminación desde el celular.", imagen: "img/26-interruptor.jpg" },

    // --- COCINA EFICIENTE ---
    { id: 27, nombre: "Estufa de Inducción", precio: 180000, categoria: "cocina", wattsAntes: 2000, wattsDespues: 1200, horasDia: 1.5, descripcion: "Calienta por magnetismo. Mucho más rápida y eficiente.", imagen: "img/27-estufa.jpg" },
    { id: 28, nombre: "Olla Multiusos", precio: 250000, categoria: "cocina", wattsAntes: 1000, wattsDespues: 600, horasDia: 1, descripcion: "Cocina a presión en la mitad del tiempo, sellando el calor.", imagen: "img/28-olla.jpg" },
    { id: 29, nombre: "Hervidor de Agua Rápido", precio: 85000, categoria: "cocina", wattsAntes: 1500, wattsDespues: 1200, horasDia: 0.2, descripcion: "Hierve en 2 minutos y se apaga automáticamente.", imagen: "img/29-hervidor.jpg" },
    { id: 30, nombre: "Lavavajillas Eco", precio: 1600000, categoria: "cocina", wattsAntes: 1800, wattsDespues: 900, horasDia: 1, descripcion: "Gasta menos agua y calienta eficientemente en ciclos cortos.", imagen: "img/30-lavavajillas.jpg" },
    { id: 31, nombre: "Extractor Inverter", precio: 420000, categoria: "cocina", wattsAntes: 250, wattsDespues: 100, horasDia: 1, descripcion: "Motor de bajo consumo que usa un 50% menos de energía.", imagen: "img/31-extractor.jpg" }
];

let carrito = [];

function ahorroKwhMes(producto) {
    return (producto.wattsAntes - producto.wattsDespues) * producto.horasDia * DIAS_MES / 1000;
}

function ahorroPesosMes(producto) {
    return ahorroKwhMes(producto) * TARIFA; 
}

function pesos(valor) {
    return "$" + Math.round(valor).toLocaleString("es-CO");
}

function nombreCategoria(categoria) {
    if (categoria === "iluminacion") return "Iluminación";
    if (categoria === "electrodomesticos") return "Electrodomésticos";
    if (categoria === "solar") return "Energía solar";
    if (categoria === "domotica") return "Domótica";
    if (categoria === "cocina") return "Cocina Eficiente";
    return categoria;
}

function mostrarProductos(categoria, textoBusqueda = "") {
    const contenedor = document.querySelector("#productos");
    contenedor.innerHTML = "";

    for (const producto of productos) {
        if (categoria !== "todas" && producto.categoria !== categoria) {
            continue;
        }
        
        if (textoBusqueda !== "" && !producto.nombre.toLowerCase().includes(textoBusqueda)) {
            continue;
        }
        
        contenedor.innerHTML += `
            <article class="tarjeta d-flex flex-column h-100">
                <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
                <span class="categoria">${nombreCategoria(producto.categoria)}</span>
                <h3 class="fs-5">${producto.nombre}</h3>
                <p style="font-size: 0.9em; color: #555; min-height: 48px;">${producto.descripcion}</p>
                <p class="mb-1">Ahorra <span class="ahorro text-success fw-bold">${ahorroKwhMes(producto).toFixed(1)} kWh</span> al mes.</p>
                <p class="precio fw-bold fs-4 mb-1">${pesos(producto.precio)}</p>
                <p class="mb-3 text-muted" style="font-size: 0.85em;">Ahorro en pesos: <span class="ahorro">${pesos(ahorroPesosMes(producto))}</span></p>
                <button class="btn btn-primary btn-sm w-100 mt-auto" data-id="${producto.id}">Agregar al carrito</button>
            </article>`;
    }
}

// --- EVENTOS ---


document.querySelector("#buscador").addEventListener("input", function (evento) {
    const textoBusqueda = evento.target.value.toLowerCase(); // Lo que se escribe
    const categoriaActiva = document.querySelector(".filtro.activo").dataset.categoria; // La pestaña actual
    mostrarProductos(categoriaActiva, textoBusqueda);
});

const botonesFiltro = document.querySelectorAll(".filtro");
for (const boton of botonesFiltro) {
    boton.addEventListener("click", function () {
        for (const otro of botonesFiltro) {
            otro.classList.remove("activo");
        }
        boton.classList.add("activo");
        
        const textoActual = document.querySelector("#buscador").value.toLowerCase();
        mostrarProductos(boton.dataset.categoria, textoActual);
    });
}

function agregarAlCarrito(id) {
    for (const producto of productos) {
        if (producto.id === id) {
            carrito.push(producto);
        }
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const listas = document.querySelectorAll(".lista-carrito");
    const totales = document.querySelectorAll(".total-carrito");
    const ahorros = document.querySelectorAll(".ahorro-carrito");
    
    let total = 0;
    let ahorroMes = 0;
    let htmlLista = "";

    for (const producto of carrito) {
        htmlLista += `
            <li class="mb-2 pb-2 border-bottom">
                <div class="d-flex justify-content-between">
                    <span style="font-size: 0.9em;">${producto.nombre}</span>
                    <strong style="font-size: 0.9em;">${pesos(producto.precio)}</strong>
                </div>
            </li>`;
        total += producto.precio;
        ahorroMes += ahorroPesosMes(producto);
    }

    listas.forEach(lista => lista.innerHTML = htmlLista);
    totales.forEach(t => t.textContent = "Total: " + pesos(total));

    const badgeCarrito = document.querySelector("#contador-carrito");
    if(badgeCarrito) {
        badgeCarrito.textContent = carrito.length;
    }

    if (carrito.length === 0) {
        ahorros.forEach(a => a.textContent = "El carrito está vacío.");
    } else {
        const meses = Math.ceil(total / ahorroMes);
        ahorros.forEach(a => a.textContent = `Ahorra ${pesos(ahorroMes)} al mes: se paga en ${meses} meses.`);
    }
}

document.querySelector("#productos").addEventListener("click", function (evento) {
    if (evento.target.dataset.id) {
        agregarAlCarrito(Number(evento.target.dataset.id));
    }
});

document.querySelectorAll(".btn-vaciar").forEach(boton => {
    boton.addEventListener("click", function () {
        carrito = [];
        mostrarCarrito();
    });
});

// --- Al cargar la pagina ---
mostrarProductos("todas");
mostrarCarrito();