import { campoCodigo, patronImagenHtml } from "./constantes";

export const extraeUrls = (): string[] => {
    const codigoInput: string = String(campoCodigo.value); 
    const imgElements = codigoInput.matchAll(patronImagenHtml);
    let urls: string[] = [];

    for (const imgElement of imgElements) {
        const imageUrl = imgElement.groups;
        
        if(imageUrl) {
            urls.push(imageUrl.link);
        }
    }

    urls.forEach((url) => console.log(url))
    return urls;
}


