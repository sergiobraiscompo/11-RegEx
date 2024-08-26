import { validateIBAN } from "ibantools";
import "./styles.css";
import { codigoBancoType, codigosBancos } from "./constantes";

const iban = "ES21 1465 0100 72 2030876293"


const patronIban =  /^\w{2}(?<digitoControl1>\d{2})(\s|-|_|\.)?(?<codigoBanco>\d{4})(\s|-|_|\.)?(?<sucursal>\d{4})(\s|-|_|\.)?(?<digitoControl2>\d{2})(\s|-|_|\.)?(?<numeroCuenta>\d{10})$/;
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}

// Gestiona datos iban
const muestraDatosIban = (iban: string) => {
    const coincidencia = patronIban.exec(iban);
    if (coincidencia) {
        const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;

        validaIban(iban);
        muestraBanco(codigoBanco);
        muestraSucursal(sucursal);
        muestraDigitoControl(digitoControl1);
        muestraNumeroCuenta(numeroCuenta);
        digitoControl2;
    } else {
        console.log("El iban introducido es incorrecto.");
    }
}


// Limpia el iban y lo pasa por validate iban
export const validaIban = (iban: string) => {
    const limpiaIban = (iban: string): string => {
        let ibanLimpio = "";
        if (iban.includes(".")) {
            ibanLimpio = iban.split(".").join('');
        }

        if (iban.includes("-")) {
            ibanLimpio = iban.split("-").join('');
        }
        
        return ibanLimpio;
    }

    return validateIBAN(limpiaIban(iban)).valid;
};

export const muestraBanco = (codigoBanco: string) => {
    const banco = codigosBancos.find(banco => (banco.codigo === codigoBanco));
    const entidad = banco?.entidad;

    if (banco) {
        return entidad;
    } else {
        return "No se ha encontrado el banco"; 
    }
};

export const muestraSucursal = (sucursal: string) => {
    
};

export const muestraDigitoControl = (digitoControl: string) => {

};

export const muestraNumeroCuenta = (numeroCuenta: string) => {

};