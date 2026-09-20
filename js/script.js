/* =========================================
   VENTAS ELDA
   JAVASCRIPT
========================================= */


/* =========================================
   CONFIGURACIÓN
========================================= */

const configuracion = {

    whatsapp: "527226276427",

   redes: {
    facebook: "https://www.facebook.com/share/19MQwCwmTh/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/eldafabila?stkn=NHA4NmZyaWozcG5o"
}

};


/* =========================================
   CATÁLOGOS
   SOLO CAMBIA LOS ENLACES CUANDO
   LOS CATÁLOGOS SE ACTUALICEN
========================================= */

const catalogos = [

    {
        marca: "Arabela",
        descripcion: "Consulta el catálogo actual de productos Arabela.",
        icono: "ARA",
        url: "https://viewer.ipaper.io/arabela/MX/2026/completo/MX-C21-2026"
    },

    {
        marca: "Natura",
        descripcion: "Descubre las novedades y productos del catálogo Natura.",
        icono: "NAT",
        url: "https://mx.natura.digital-catalogue.com/mx/2026/14/revista/ciclo-14/view/index.html?id_consultora=5884368&utm_term=web&info=eyJ1c2VyIjp7ImN5Y2xlIjoiMjAyNjE0Iiwic2Vzc2lvbklkIjoiM2I5ZmVlY2ItZjA3Mi00OWRlLTg0N2MtZWI5OWIzZjVlNTFiIiwic2hvcElkIjpudWxsfSwibWFnYXppbmUiOnsieWVhciI6IjIwMjYiLCJjeWNsZSI6IjIwMjYxNCIsImlkIjoiMWplbDh4ZDJoZm1zNGhudnU0anZzbHNmb2lvZGVlcmNsYjJsZ2lxNiJ9fQ==&page=1"
    },

    {
        marca: "Avon",
        descripcion: "Consulta el catálogo Avon y conoce sus productos.",
        icono: "AVO",
        url: "https://mx.natura-avon.digital-catalogue.com/mx/2026/14/revista/avon/view/index.html?id_consultora=5884368&utm_term=web?representante=5884368"
    },

    {
        marca: "Casa & Estilo",
        descripcion: "Explora productos para tu hogar y estilo.",
        icono: "CASA",
        url: "https://mx.natura-avon.digital-catalogue.com/mx/2026/14/revista/casa-estilo/view/index.html?id_consultora=5884368&utm_term=web&info=eyJ1c2VyIjp7ImN5Y2xlIjoiMjAyNjE0Iiwic2Vzc2lvbklkIjoiMWEyZDY4OTctZGY3OC00YzNmLTkxMWEtNzRjMTg5NTU4MTJmIiwic2hvcElkIjpudWxsfSwibWFnYXppbmUiOnsieWVhciI6IjIwMjYiLCJjeWNsZSI6IjIwMjYxNCIsImlkIjoiNDN0ZGhmYmtlZnh2bWxhcTJ6cjEyc3Z5NWVtOHB0bHJqaDBzeXducSJ9fQ=="
    },

    {
        marca: "Price Shoes",
        descripcion: "Consulta el catálogo de Price Shoes disponible.",
        icono: "PS",
        url: "https://www.priceshoes.com/"
    },

    {
        marca: "Fuller",
        descripcion: "Consulta las novedades de Fuller México.",
        icono: "FUL",
        url: "catalogos/fuller-c12.pdf"
    }

];


/* =========================================
   MOSTRAR CATÁLOGOS
========================================= */

const catalogGrid = document.getElementById("catalogGrid");


function mostrarCatalogos() {

    if (!catalogGrid) {
        return;
    }

    catalogGrid.innerHTML = "";

    catalogos.forEach(catalogo => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "catalog-card";

        tarjeta.innerHTML = `
            <div class="catalog-brand">
                ${catalogo.icono}
            </div>

            <h3>
                ${catalogo.marca}
            </h3>

            <p>
                ${catalogo.descripcion}
            </p>

            <a
                href="${catalogo.url}"
                class="catalog-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver catálogo →
            </a>
        `;

        catalogGrid.appendChild(tarjeta);

    });

}


/* =========================================
   MENÚ MÓVIL
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

        });

    });

}


/* =========================================
   REDES SOCIALES
========================================= */

const facebookLink = document.getElementById("facebookLink");
const instagramLink = document.getElementById("instagramLink");


function configurarRedes() {

    if (facebookLink) {

        if (configuracion.redes.facebook) {

            facebookLink.href = configuracion.redes.facebook;

        } else {

            facebookLink.addEventListener("click", event => {

                event.preventDefault();

                alert(
                    "El enlace de Facebook todavía no ha sido configurado."
                );

            });

        }

    }


    if (instagramLink) {

        if (configuracion.redes.instagram) {

            instagramLink.href = configuracion.redes.instagram;

        } else {

            instagramLink.addEventListener("click", event => {

                event.preventDefault();

                alert(
                    "El enlace de Instagram todavía no ha sido configurado."
                );

            });

        }

    }

}


/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================
   INICIALIZACIÓN
========================================= */

mostrarCatalogos();
configurarRedes();