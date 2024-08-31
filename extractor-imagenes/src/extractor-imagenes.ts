import { patronUrl } from "./constantes";

// Elimina los separados del url para poder mandarlo a los urltools
export const limpiaurl = (url: string): string => {
    let urlLimpia = "";
    if (url.includes(".")) {
        urlLimpia = url.split(".").join('');
    }

    if (url.includes(" ")) {
        urlLimpia = url.split(" ").join('');
    }

    if (url.includes("-")) {
        urlLimpia = url.split("-").join('');
    }

    if (url.includes("_")) {
        urlLimpia = url.split("_").join('');
    }
    
    return urlLimpia;
}

// Devuelve si el url está bien formado
export const urlBienFormada = (url: string): boolean => {
    return patronUrl.test(url);
}