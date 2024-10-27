import "./styles.css";
import { extraeUrls } from './extractor-imagenes.helper';
import { creaCardImagen, reiniciaElementos } from './ui';

export const devuelveElementosExtraidos = () => {
    reiniciaElementos();
    const listadoUrls = extraeUrls();

    for (const urlImagen of listadoUrls) {
        creaCardImagen(urlImagen);
    }
}


