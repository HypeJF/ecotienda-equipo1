// =============================================================
// EcoTienda: el catalogo y el carrito, con JavaScript
// Cada linea tiene un comentario: QUE hace y PARA QUE.
// =============================================================

// --- CONSTANTES: valores que no cambian. Se declaran con const ---
const TARIFA = 950;            // lo que cuesta 1 kWh, en pesos (COP). Tarifa de ejemplo
const DIAS_MES = 30;           // dias de un mes

// --- ARREGLO DE OBJETOS LITERALES: la lista de productos ---
const productos = [
    // --- ILUMINACIÓN ---
    { id: 1, nombre: "Bombillo LED 9W", precio: 8500, categoria: "iluminacion", descripcion: "Reemplaza al tradicional de 60W. Vida útil de 25,000 horas, ideal para el hogar.", ahorro: 7200, imagen: "https://via.placeholder.com/300x200?text=Bombillo+LED+9W" },
    { id: 2, nombre: "Panel LED Plafón 18W", precio: 22000, categoria: "iluminacion", descripcion: "Luz blanca de incrustar. Excelente distribución térmica e iluminación uniforme.", ahorro: 12500, imagen: "https://via.placeholder.com/300x200?text=Panel+LED+18W" },
    { id: 3, nombre: "Reflector LED 50W Exterior", precio: 45000, categoria: "iluminacion", descripcion: "Protección IP66 contra agua. Reemplaza reflectores halógenos de 300W.", ahorro: 35600, imagen: "https://via.placeholder.com/300x200?text=Reflector+LED+50W" },
    { id: 4, nombre: "Cinta LED 5 Metros 12V", precio: 35000, categoria: "iluminacion", descripcion: "Iluminación decorativa de bajísimo consumo. Incluye adaptador eficiente.", ahorro: 5400, imagen: "https://via.placeholder.com/300x200?text=Cinta+LED+5m" },
    { id: 5, nombre: "Tubo LED 18W T8", precio: 15000, categoria: "iluminacion", descripcion: "Reemplazo directo para tubos fluorescentes de 40W sin necesidad de balasto.", ahorro: 10400, imagen: "https://via.placeholder.com/300x200?text=Tubo+LED+18W" },
    { id: 6, nombre: "Bombillo Inteligente WiFi 10W", precio: 32000, categoria: "iluminacion", descripcion: "Control por app o voz (Alexa/Google). Apágalo desde el celular si lo olvidas encendido.", ahorro: 8100, imagen: "https://via.placeholder.com/300x200?text=Bombillo+WiFi" },
    { id: 7, nombre: "Lámpara de Escritorio LED", precio: 55000, categoria: "iluminacion", descripcion: "Con batería recargable, no necesita estar conectada todo el día. 3 niveles de luz.", ahorro: 4200, imagen: "https://via.placeholder.com/300x200?text=Lampara+Escritorio" },

    // --- ELECTRODOMÉSTICOS ---
    { id: 8, nombre: "Nevera Inverter 300L", precio: 1850000, categoria: "electrodomesticos", descripcion: "Compresor Digital Inverter que ajusta la velocidad según la demanda de enfriamiento.", ahorro: 45000, imagen: "https://via.placeholder.com/300x200?text=Nevera+Inverter" },
    { id: 9, nombre: "Lavadora Carga Frontal 15Kg", precio: 2100000, categoria: "electrodomesticos", descripcion: "Motor Inverter Direct Drive. Usa menos agua y reduce el consumo eléctrico por ciclo.", ahorro: 28500, imagen: "https://via.placeholder.com/300x200?text=Lavadora+Frontal" },
    { id: 10, nombre: "Aire Acondicionado Inverter 12000 BTU", precio: 1650000, categoria: "electrodomesticos", descripcion: "Mantiene la temperatura estable sin apagar y prender el compresor. Etiqueta A.", ahorro: 85000, imagen: "https://via.placeholder.com/300x200?text=Aire+Acondicionado" },
    { id: 11, nombre: "Televisor Smart LED Eco 50\"", precio: 1450000, categoria: "electrodomesticos", descripcion: "Modo de ahorro de energía automático y pantalla de bajo consumo.", ahorro: 18000, imagen: "https://via.placeholder.com/300x200?text=TV+Eco+50" },
    { id: 12, nombre: "Ventilador Pedestal Motor DC", precio: 220000, categoria: "electrodomesticos", descripcion: "Motor de corriente continua que consume un 60% menos que un ventilador tradicional.", ahorro: 12000, imagen: "https://via.placeholder.com/300x200?text=Ventilador+DC" },
    { id: 13, nombre: "Horno Microondas Inverter", precio: 480000, categoria: "electrodomesticos", descripcion: "Calienta de manera constante y eficiente sin picos altos de energía.", ahorro: 9500, imagen: "https://via.placeholder.com/300x200?text=Microondas+Inverter" },
    { id: 14, nombre: "Freidora de Aire Eficiencia A", precio: 350000, categoria: "electrodomesticos", descripcion: "Resistencia optimizada que alcanza la temperatura más rápido con menos vatios.", ahorro: 15200, imagen: "https://via.placeholder.com/300x200?text=Air+Fryer" },
    { id: 15, nombre: "Licuadora de Bajo Consumo", precio: 190000, categoria: "electrodomesticos", descripcion: "Motor optimizado para triturar hielo en segundos sin sobrecargar la red eléctrica.", ahorro: 3000, imagen: "https://via.placeholder.com/300x200?text=Licuadora+Eficiente" },

    // --- ENERGÍA SOLAR ---
    { id: 16, nombre: "Panel Solar Policristalino 150W", precio: 320000, categoria: "solar", descripcion: "Ideal para iniciar tu sistema aislado. Genera energía limpia durante todo el día.", ahorro: 25000, imagen: "https://via.placeholder.com/300x200?text=Panel+Solar+150W" },
    { id: 17, nombre: "Reflector Solar 100W con Sensor", precio: 125000, categoria: "solar", descripcion: "Cero consumo eléctrico. Batería de litio integrada y panel independiente.", ahorro: 18000, imagen: "https://via.placeholder.com/300x200?text=Reflector+Solar" },
    { id: 18, nombre: "Kit Iluminación Solar Portátil", precio: 180000, categoria: "solar", descripcion: "Incluye mini panel, batería y 3 bombillos LED. Perfecto para zonas sin red eléctrica.", ahorro: 15000, imagen: "https://via.placeholder.com/300x200?text=Kit+Iluminacion+Solar" },
    { id: 19, nombre: "Cargador Solar Powerbank 20000mAh", precio: 95000, categoria: "solar", descripcion: "Carga tu celular gratis con la luz del sol. Resistente al agua y golpes.", ahorro: 4500, imagen: "https://via.placeholder.com/300x200?text=Powerbank+Solar" },
    { id: 20, nombre: "Calentador de Agua Solar 150L", precio: 1850000, categoria: "solar", descripcion: "Reemplaza tu calentador eléctrico o a gas. Aprovecha el calor del sol para toda la familia.", ahorro: 95000, imagen: "https://via.placeholder.com/300x200?text=Calentador+Solar" },
    { id: 21, nombre: "Ventilador Solar Recargable", precio: 250000, categoria: "solar", descripcion: "Se carga de día con su propio panel y funciona toda la noche de forma autónoma.", ahorro: 14000, imagen: "https://via.placeholder.com/300x200?text=Ventilador+Solar" },

    // --- DOMÓTICA (NUEVO) ---
    { id: 22, nombre: "Enchufe Inteligente WiFi", precio: 45000, categoria: "domotica", descripcion: "Corta el paso de energía por completo evitando el consumo fantasma de tus equipos.", ahorro: 5800, imagen: "https://via.placeholder.com/300x200?text=Enchufe+WiFi" },
    { id: 23, nombre: "Sensor de Movimiento", precio: 35000, categoria: "domotica", descripcion: "Enciende y apaga las luces automáticamente solo cuando hay alguien en la habitación.", ahorro: 6500, imagen: "https://via.placeholder.com/300x200?text=Sensor+Movimiento" },
    { id: 24, nombre: "Regleta Multitoma Smart", precio: 95000, categoria: "domotica", descripcion: "Programa horarios de apagado para tu centro de entretenimiento o computadora.", ahorro: 12000, imagen: "https://via.placeholder.com/300x200?text=Regleta+Smart" },
    { id: 25, nombre: "Monitor de Consumo Eléctrico", precio: 120000, categoria: "domotica", descripcion: "Mide en tiempo real cuánta energía gastas para identificar fugas en tu hogar.", ahorro: 15000, imagen: "https://via.placeholder.com/300x200?text=Monitor+Consumo" },
    { id: 26, nombre: "Interruptor Táctil WiFi", precio: 65000, categoria: "domotica", descripcion: "Automatiza la iluminación de toda tu casa desde el celular para no dejar luces encendidas.", ahorro: 7200, imagen: "https://via.placeholder.com/300x200?text=Interruptor+WiFi" },

    // --- COCINA EFICIENTE (NUEVO) ---
    { id: 27, nombre: "Estufa de Inducción 1 Puesto", precio: 180000, categoria: "cocina", descripcion: "Calienta directamente la olla mediante magnetismo. Mucho más rápida que la resistencia eléctrica.", ahorro: 22000, imagen: "https://via.placeholder.com/300x200?text=Estufa+Induccion" },
    { id: 28, nombre: "Olla Multiusos Eléctrica", precio: 250000, categoria: "cocina", descripcion: "Cocina a presión en la mitad del tiempo, sellando el calor y reduciendo el consumo.", ahorro: 18000, imagen: "https://via.placeholder.com/300x200?text=Olla+Multiusos" },
    { id: 29, nombre: "Hervidor de Agua Rápido", precio: 85000, categoria: "cocina", descripcion: "Lleva el agua a ebullición en 2 minutos y se apaga automáticamente.", ahorro: 9000, imagen: "https://via.placeholder.com/300x200?text=Hervidor+Agua" },
    { id: 30, nombre: "Lavavajillas Compacto Eco", precio: 1600000, categoria: "cocina", descripcion: "Gasta menos agua y calienta eficientemente en ciclos cortos. Etiqueta energética A++.", ahorro: 35000, imagen: "https://via.placeholder.com/300x200?text=Lavavajillas+Eco" },
    { id: 31, nombre: "Extractor de Olores Inverter", precio: 420000, categoria: "cocina", descripcion: "Motor de bajo consumo que elimina el humo de la cocina usando un 50% menos de energía.", ahorro: 8500, imagen: "https://via.placeholder.com/300x200?text=Extractor+Inverter" }
];

// --- VARIABLE: el carrito ---
let carrito = [];

// --- FUNCIONES ---

// ahorroKwhMes: calcula los kWh ahorrados al mes.
function ahorroKwhMes(producto) {
    return producto.ahorro / TARIFA;
}

// ahorroPesosMes: devuelve lo que ahorra el producto en pesos.
function ahorroPesosMes(producto) {
    return producto.ahorro; 
}

// pesos: escribe un numero como plata colombiana.
function pesos(valor) {
    return "$" + Math.round(valor).toLocaleString("es-CO");
}

// nombreCategoria: el nombre de la categoria para mostrar, con tilde y mayuscula.
function nombreCategoria(categoria) {
    if (categoria === "iluminacion") {
        return "Iluminación";
    } else if (categoria === "electrodomesticos") {
        return "Electrodomésticos";
    } else if (categoria === "solar") {
        return "Energía solar";
    } else if (categoria === "domotica") {
        return "Domótica";
    } else if (categoria === "cocina") {
        return "Cocina Eficiente";
    }
    return categoria;
}

// --- DOM: escribir en la pagina las tarjetas de los productos ---
function mostrarProductos(categoria) {
    const contenedor = document.querySelector("#productos");
    contenedor.innerHTML = "";

    for (const producto of productos) {
        if (categoria !== "todas" && producto.categoria !== categoria) {
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

// --- El carrito ---
function agregarAlCarrito(id) {
    for (const producto of productos) {
        if (producto.id === id) {
            carrito.push(producto);
        }
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    const lista = document.querySelector("#lista-carrito");
    lista.innerHTML = "";
    
    let total = 0;
    let ahorroMes = 0;

    for (const producto of carrito) {
        lista.innerHTML += `
            <li class="mb-2 pb-2 border-bottom">
                <div class="d-flex justify-content-between">
                    <span style="font-size: 0.9em;">${producto.nombre}</span>
                    <strong style="font-size: 0.9em;">${pesos(producto.precio)}</strong>
                </div>
            </li>`;
        total += producto.precio;
        ahorroMes += ahorroPesosMes(producto);
    }

    document.querySelector("#total").textContent = "Total: " + pesos(total);

    const badgeCarrito = document.querySelector("#contador-carrito");
    if(badgeCarrito) {
        badgeCarrito.textContent = carrito.length;
    }

    if (carrito.length === 0) {
        document.querySelector("#ahorro").textContent = "El carrito está vacío.";
    } else {
        const meses = Math.ceil(total / ahorroMes);
        document.querySelector("#ahorro").textContent =
            `Ahorra ${pesos(ahorroMes)} al mes: la compra se paga sola en ${meses} meses.`;
    }
}

// --- EVENTOS: el programa reacciona a lo que hace el usuario ---
const botonesFiltro = document.querySelectorAll(".filtro");
for (const boton of botonesFiltro) {
    boton.addEventListener("click", function () {
        for (const otro of botonesFiltro) {
            otro.classList.remove("activo");
        }
        boton.classList.add("activo");
        mostrarProductos(boton.dataset.categoria);
    });
}

document.querySelector("#productos").addEventListener("click", function (evento) {
    if (evento.target.dataset.id) {
        agregarAlCarrito(Number(evento.target.dataset.id));
    }
});

document.querySelector("#vaciar").addEventListener("click", function () {
    carrito = [];
    mostrarCarrito();
});

// --- Al cargar la pagina ---
mostrarProductos("todas");
mostrarCarrito();