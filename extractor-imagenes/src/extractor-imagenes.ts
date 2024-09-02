import "./styles.css";
import { extraeUrls } from './extractor-imagenes.helper';
import * as shell from './shell';
import { reiniciaElementos } from './ui';

// Gestiona datos iban
export const extraeUrlImagenes = () => {
    reiniciaElementos();
    const urlsImagenes = Array(extraeUrls());
    console.log(urlsImagenes);
}


shell;