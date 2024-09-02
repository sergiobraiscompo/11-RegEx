import { contenedorDatosDevueltos } from "./constantes";


export const muestraMensajeError = (mensajeComprobacionCodigo: string) => {    
    const mensajeComprobacionCodigoElement = document.createElement("p");
    mensajeComprobacionCodigoElement.innerHTML = mensajeComprobacionCodigo;
    mensajeComprobacionCodigoElement.id = "mensaje-comprobacion-codigo-element";
    mensajeComprobacionCodigoElement.className = "mensaje-comprobacion-codigo-element";
    contenedorDatosDevueltos?.appendChild(mensajeComprobacionCodigoElement);
    
    if (mensajeComprobacionCodigo === "No se ha enontrado ningún elemento imagen." || mensajeComprobacionCodigo === "Por favor introduce un fragmento de código con imágenes.") {
        mensajeComprobacionCodigoElement.style.color = "#ff0000";
    }
}

export const muestraImagen = (urlImagen: string) => {
    const imagenElement = document.createElement("img");
    imagenElement.src = urlImagen;
    imagenElement.id = "imagen-element";
    imagenElement.className = "imagen-element";
    contenedorDatosDevueltos?.appendChild(imagenElement);
}

export const muestraUrl = (url: string) => {
    const urlElement = document.createElement("textarea");
    urlElement.innerText = url;
    urlElement.id = "link-element";
    urlElement.className = "link-element";
    contenedorDatosDevueltos?.appendChild(urlElement);
}

export const reiniciaElementos = () => {
    const mensajeComprobacionCodigoElement = document.getElementById("mensaje-comprobacion-codigo-element");
    const imagenElement = document.getElementById("imagen-element");
    const urlElement = document.getElementById("link-element");

    if ( mensajeComprobacionCodigoElement instanceof HTMLParagraphElement && contenedorDatosDevueltos instanceof HTMLDivElement) {
        contenedorDatosDevueltos.removeChild(mensajeComprobacionCodigoElement);
    }
    
    
    if ( imagenElement instanceof HTMLImageElement && urlElement instanceof HTMLSpanElement) {
        contenedorDatosDevueltos.removeChild(imagenElement);
        contenedorDatosDevueltos.removeChild(urlElement);
    }
}