import "./styles.css";
import { validateIBAN } from "ibantools";
import { limpiaIban } from "./gestiona_iban.helper";
import { creaElementosValidacionIban, muestraBanco, muestraDigitoControl, muestraNumeroCuenta, muestraSucursal, reiniciaElementos } from "./ui";
import { ibanIntroducido, patronIban } from "./constantes";
import * as shell from './shell';

// Gestiona datos iban
export const muestraDatosIban = () => {
    let mensajeIbanBienFormado: string = "";
    reiniciaElementos();

    const iban: string = String(ibanIntroducido.value); 
    const coincidencia = patronIban.exec(iban);
    console.log(coincidencia);
    
    if (iban === "") {
        mensajeIbanBienFormado = "Por favor introduce un valor.";
        creaElementosValidacionIban(mensajeIbanBienFormado, "");
    } else {
        if (coincidencia) {
            console.log("iban correcto");
            const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;            
            
            muestraBanco(codigoBanco);
            muestraSucursal(sucursal);
            muestraDigitoControl(digitoControl1);
            muestraNumeroCuenta(numeroCuenta);
            digitoControl2;
            
            mensajeIbanBienFormado = "El IBAN está bien formado";
            const mensajeIbanValido: string = validaIban(iban);
    
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