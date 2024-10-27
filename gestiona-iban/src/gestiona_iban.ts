import "./styles.css";
import * as shell from './shell';
import { validateIBAN } from "ibantools";
import { ibanBienFormado } from "./gestiona_iban.helper";
import { creaElementosValidacionIban, muestraBanco, reiniciaElementosValidacionIban, muestraDigitoControl, muestraNumeroCuenta, muestraSucursal } from "./ui";
import { ibanIntroducido, patronIban } from "./constantes";

// Pasa el iban limpio por validateIBAN
export const validaIban = (iban: string): string => {
    reiniciaElementosValidacionIban();
    let mensajeIbanValido = "";

    validateIBAN(iban).valid === true
        ? mensajeIbanValido = "El IBAN es válido"
        : mensajeIbanValido = "El IBAN no es válido";

    return mensajeIbanValido;
};

// Gestiona datos iban
export const muestraDatosIban = () => {
    const iban: string = ibanIntroducido.value;

    if (iban === "") {
        creaElementosValidacionIban("Por favor introduce un IBAN bancario.");
    }

    if (ibanBienFormado(iban) === true) {
        const coincidencia = patronIban.exec(iban);

        if (coincidencia) {
            const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;
            const mensajeIbanValido: string = validaIban(`ES${digitoControl1}${codigoBanco}${sucursal}${digitoControl2}${numeroCuenta}`);

            if (mensajeIbanValido === "El IBAN es válido") {
                muestraBanco(codigoBanco);
                muestraSucursal(sucursal);
                muestraDigitoControl(digitoControl1, digitoControl2);
                muestraNumeroCuenta(numeroCuenta);
            }

            creaElementosValidacionIban("El IBAN está bien formado", mensajeIbanValido);

        } else {
            creaElementosValidacionIban("El IBAN no está bien formado");
        }
    }
}



shell;