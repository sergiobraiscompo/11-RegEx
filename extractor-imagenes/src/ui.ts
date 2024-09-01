
const muestraMensajeError = (mensajeComprobacionCodigo: string) => {    
    const mensajeComprobacionCodigo = document.createElement("p");
    mensajeComprobacionCodigoElement.innerHTML = mensajeComprobacionCodigo;
    mensajeComprobacionCodigoElement.id = "mensaje-comprobacion-codigo-element";
    mensajeComprobacionCodigoElement.className = "mensaje-comprobacion-codigo-element";
    contenedormensajeComprobacionCodigo?.appendChild(mensajeComprobacionCodigo);
    
    if (mensajeComprobacionCodigo === "Por favor introduce un valor." || mensajeComprobacionCodigo === "El IBAN introducido es erróneo") {
        mensajeComprobacionCodigoElement.style.color = "#ff0000";
    }
}


export const reiniciaElementos = () => {
    const mensajeIbanBienFormadoElement = document.getElementById("mensaje-comprobacion-codigo-element");

    if ( mensajeComprobacionCodigoElement instanceof HTMLDivElement && mensajeIbanBienFormadoElement instanceof HTMLParagraphElement ) {
        contenedorValidacionIban.removeChild(mensajeIbanBienFormadoElement);
    }
}