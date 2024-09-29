import "./styles.css";
import { extraeUrls } from './extractor-imagenes.helper';
import { creaCardImagen, reiniciaElementos } from './ui';
import { botonExtraeImagenes } from "./constantes";

// Gestiona datos iban
export const extraeUrlImagenes = () => {
    reiniciaElementos();
    const urlsImagenes = extraeUrls();

    for (const urlImagen of urlsImagenes) {
        creaCardImagen(urlImagen);
    }
}

const eventos = () => {
    botonExtraeImagenes.addEventListener("click", () => {extraeUrlImagenes()});
}

addEventListener("DOMContentLoaded", eventos);