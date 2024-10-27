import { botonExtraeImagenes } from "./constantes";
import { devuelveElementosExtraidos } from "./extractor-imagenes";

const eventos = () => {
    botonExtraeImagenes.addEventListener("click", devuelveElementosExtraidos);
}

addEventListener("DOMContentLoaded", eventos);