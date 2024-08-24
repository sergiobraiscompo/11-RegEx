import "./styles.css";

export const ibanBienFormado = (iban: string): boolean => {
    const patronIban =  /^\w{2}\d{2}(\s|-|_|\.)?\d{4}(\s|-|_|\.)?\d{4}(\s|-|_|\.)?\d{2}(\s|-|_|\.)?\d{10}$/;
    return patronIban.test(iban);
}

const validaIban = () => {};
const devuelveBanco = () => {};
const devuelveSucursal = () => {};
const devuelveDigitoControl = () => {};
const devuelveNumeroCuenta = () => {};

