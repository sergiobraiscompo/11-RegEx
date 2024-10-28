import "./styles.css";
import { extraeUrls } from './extractor-imagenes.helper';
import { muestraGridImagenes, reiniciaElementos } from './ui';
import { contenedorDatosDevueltos } from "./constantes";
import "./shell";
export const devuelveElementosExtraidos = () => {
    reiniciaElementos();

    const listadoUrls: string[] = extraeUrls();
    if (listadoUrls.length === 0) {
        contenedorDatosDevueltos.innerText = "No se han encontrado elementos imagen."
    }
    muestraGridImagenes(listadoUrls);
}