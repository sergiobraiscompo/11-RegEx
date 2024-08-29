import { patronIban } from "./constantes";

// Elimina los separados del iban para poder mandarlo a los ibantools
export const limpiaIban = (iban: string): string => {
    let ibanLimpio = "";
    if (iban.includes(".")) {
        ibanLimpio = iban.split(".").join('');
    }

    if (iban.includes(" ")) {
        ibanLimpio = iban.split(" ").join('');
    }

    if (iban.includes("-")) {
        ibanLimpio = iban.split("-").join('');
    }

    if (iban.includes("_")) {
        ibanLimpio = iban.split("_").join('');
    }
    
    return ibanLimpio;
}

// Devuelve si el IBAN está bien formado
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}