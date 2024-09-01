import { campoCodigo, patronUrl } from "./constantes";


export const devuelveUrls = () => {
    const codigo: string = String(campoCodigo.value); 
    const urlsExtraidas = codigo.match(patronUrl);
    
    
};

export const muestraImagenes = () => {

};
