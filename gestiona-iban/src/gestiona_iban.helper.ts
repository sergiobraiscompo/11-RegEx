import { patronIban } from "./constantes";

// Devuelve si el IBAN está bien formado
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}