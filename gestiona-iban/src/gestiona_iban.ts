import "./styles.css";
import * as shell from './shell';
import { validateIBAN } from "ibantools";
import { limpiaIban } from "./gestiona_iban.helper";
import { creaElementosValidacionIban, muestraBanco, muestraDigitoControl, muestraNumeroCuenta, muestraSucursal, reiniciaElementos } from "./ui";
import { ibanIntroducido, patronIban } from "./constantes";

// Gestiona datos iban
export const muestraDatosIban = () => {
    let mensajeIbanBienFormado: string = "";
    reiniciaElementos();

    const iban: string = String(ibanIntroducido.value); 
    const coincidencia = patronIban.exec(iban);
    
    if (iban === "") {
        mensajeIbanBienFormado = "Por favor introduce un valor.";
        creaElementosValidacionIban(mensajeIbanBienFormado, "");
    } else {
        if (coincidencia) {
            const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;            
            mensajeIbanBienFormado = "El IBAN está bien formado";
            const mensajeIbanValido: string = validaIban(iban);
            
            if (validaIban(iban) === "El IBAN es válido") {
                muestraBanco(codigoBanco);
                muestraSucursal(sucursal);
                muestraDigitoControl(digitoControl1, digitoControl2);
                muestraNumeroCuenta(numeroCuenta);
            }

            creaElementosValidacionIban(mensajeIbanBienFormado, mensajeIbanValido);
        } else {
            mensajeIbanBienFormado = "El IBAN introducido es erróneo"; creaElementosValidacionIban(mensajeIbanBienFormado, "");
        }
    }
}


// Pasa el iban limpio por validateIBAN
export const validaIban = (iban: string): string => {
    let mensajeIbanValido = "";

    validateIBAN(limpiaIban(iban)).valid === true
        ? mensajeIbanValido = "El IBAN es válido"
        : mensajeIbanValido = "El IBAN no es válido";

    return mensajeIbanValido;
};


shell;