import "./styles.css";
import { extraeUrls } from './extractor-imagenes.helper';
import * as shell from './shell';
import { muestraImagen, reiniciaElementos } from './ui';

// Gestiona datos iban
export const extraeUrlImagenes = () => {
    reiniciaElementos();
    const urlsImagenes = extraeUrls();

    console.log(urlsImagenes)
    for (const urlImagen of urlsImagenes) {
        muestraImagen(urlImagen);
    }
}


shell;