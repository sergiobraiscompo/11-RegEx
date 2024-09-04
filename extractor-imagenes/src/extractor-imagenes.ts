import "./styles.css";
import * as shell from './shell';
import { extraeUrls } from './extractor-imagenes.helper';
import { creaCardImagen, reiniciaElementos } from './ui';

// Gestiona datos iban
export const extraeUrlImagenes = () => {
    reiniciaElementos();
    const urlsImagenes = extraeUrls();

    for (const urlImagen of urlsImagenes) {
        creaCardImagen(urlImagen);
    }
}


shell;