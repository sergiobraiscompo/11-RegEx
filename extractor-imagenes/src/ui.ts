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


export const muestraGridImagenes = (urls: string[]) => {
    for (const url of urls) {
        const cardImagen = creaCardImagen(url);
        contenedorDatosDevueltos.appendChild(cardImagen);
    }
}

const creaCardImagen = (url: string): HTMLDivElement => {
    // Crea el contenedor de la imagen
    const cardImagenElement = document.createElement("div");
    cardImagenElement.id = "card-imagen-element";
    cardImagenElement.className = "card-imagen-element";

    const imagenElement = creaElementoImagen(url);
    const urlElement = creaElementoUrl(url);

    if (
        cardImagenElement && cardImagenElement != null && cardImagenElement != undefined &&
        imagenElement && imagenElement != null && imagenElement != undefined &&
        urlElement && urlElement != null && urlElement != undefined
    ) {
        cardImagenElement.appendChild(imagenElement);
        cardImagenElement.appendChild(urlElement);
    }

    return cardImagenElement;
}

const creaElementoImagen = (urlImagen: string): HTMLImageElement => {
    const imagenElement = document.createElement("img");
    imagenElement.src = urlImagen;
    imagenElement.id = `imagen-${urlImagen}`;
    imagenElement.className = "imagen-element";

    return imagenElement;
}

const creaElementoUrl = (url: string): HTMLAnchorElement => {
    const urlElement = document.createElement("a");
    urlElement.href = url;
    urlElement.innerText = url;
    urlElement.id = `url-${url}`;
    urlElement.className = "link-element";

    return urlElement;
}

export const reiniciaElementos = () => {
    const mensajeComprobacionCodigoElement = document.getElementById("mensaje-comprobacion-codigo-element");

    if (mensajeComprobacionCodigoElement instanceof HTMLParagraphElement && contenedorDatosDevueltos instanceof HTMLDivElement) {
        contenedorDatosDevueltos.removeChild(mensajeComprobacionCodigoElement);
    }

    contenedorDatosDevueltos.innerHTML = "";
}