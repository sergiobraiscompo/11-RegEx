import { validateIBAN } from "ibantools";
import "./styles.css";
import { codigoBanco, codigosBancos } from "./constantes";

const patronIban =  /^(?<pais>\w{2}\d{2}(\s|-|_|\.)?)(?<codigoBanco>\d{4})(\s|-|_|\.)?(?<sucursal>\d{4})(\s|-|_|\.)?(?<digitoControl>\d{2})(\s|-|_|\.)?(?<numeroCuenta>\d{10})$/;
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}


// Limpia el iban y lo pasa por validate iban
export const validaIban = (iban: string): boolean => {
    const limpiaIban = (iban: string): string => {
        let ibanLimpio = "";
        if (iban.includes(".")) {
            ibanLimpio = iban.split(".").join('');
            console.log(ibanLimpio)
        }

        if (iban.includes("-")) {
            ibanLimpio = iban.split("-").join('');
            console.log(ibanLimpio)
        }
        
        return ibanLimpio;
    }

    return validateIBAN(limpiaIban(iban)).valid;
};

export const devuelveBanco = (iban: string): codigoBanco => {
    const coincidencia = patronIban.exec(iban);
    const codigoBanco = coincidencia?.groups;

    if (codigoBanco) {
        const banco = codigosBancos.find(toString(codigoBanco));
        return {codigo: codigoBanco, entidad: banco};
    }
};

export const devuelveSucursal = (iban: string): string => {
    
};

export const devuelveDigitoControl = (iban: string): number => {

};

export const devuelveNumeroCuenta = (iban: string): number => {

};
