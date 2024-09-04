import { campoCodigo, patronImagenLocal } from "./constantes";
// import { muestraMensajeError } from "./ui";


export const extraeUrls = (): string[] => {
    const codigoInput: string = String(campoCodigo.value); 
    const imgElements = codigoInput.matchAll(patronImagenLocal);
    let urls: string[] = [];

    for (const imgElement of imgElements) {
        const imageUrl = imgElement.groups;
        
        if(imageUrl) {
            urls.push(imageUrl.link);
        }
    }

    return urls;
}

