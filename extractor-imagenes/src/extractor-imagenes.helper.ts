import { campoCodigo, patronUrl, url } from "./constantes";
import { muestraMensajeError } from "./ui";


export const extraeUrls = () => {
    const codigoInput: string = String(campoCodigo.value); 
    const urlsExtraidas: url[] = codigoInput.match(patronUrl);

    if (!urlsExtraidas) {
        console.log(`urls extraídas ${urlsExtraidas}`)
        muestraMensajeError("No se ha enontrado ningún elemento imagen."); 
    } else {
        console.log(`urls extraídas ${urlsExtraidas}`);
        return urlsExtraidas
        ? urlsExtraidas
        : muestraMensajeError("Por favor introduce un fragmento de código con imágenes.");
    }
};
