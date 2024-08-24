import { validateIBAN } from "ibantools";
import "./styles.css";

export const ibanBienFormado = (iban: string): boolean => {
    const patronIban =  /^\w{2}\d{2}(\s|-|_|\.)?\d{4}(\s|-|_|\.)?\d{4}(\s|-|_|\.)?\d{2}(\s|-|_|\.)?\d{10}$/;
    return patronIban.test(iban);
}

export const validaIban = (iban: string): boolean => {
    return validateIBAN(iban).valid;
};

export const devuelveBanco = () => {};
export const devuelveSucursal = () => {};
export const devuelveDigitoControl = () => {};
export const devuelveNumeroCuenta = () => {};

