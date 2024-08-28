import "./styles.css";
import { validateIBAN } from "ibantools";
import { bancoElement, botonEnviaIban, codigosBancos, digitoControlElement, ibanBienFormadoElement, ibanIntroducido, ibanValidoElement, numeroCuentaElement, patronIban, sucursalElement } from "./constantes";

// Devuelve si el IBAN está bien formado
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}


// Gestiona datos iban
export const muestraDatosIban = () => { 
    const iban: string = String(ibanIntroducido.value); 
    console.log(iban);
    
    if (ibanValidoElement instanceof HTMLParagraphElement) {
        const coincidencia = patronIban.exec(iban);
        
        if (coincidencia) {
            const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;
            
            ibanValidoElement.innerText = "El IBAN está bien formado"
            
            limpiaIban(iban);
            validaIban(iban);
            muestraBanco(codigoBanco);
            muestraSucursal(sucursal);
            muestraDigitoControl(digitoControl1);
            muestraNumeroCuenta(numeroCuenta);
            digitoControl2;
        } else {
            ibanValidoElement.innerText = "El IBAN es erróneo";
        }
    }
}


// Elimina los separados del iban para poder mandarlo a los ibantools
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

// Limpia el iban y lo pasa por validate iban
export const validaIban = (iban: string) => {
    if (ibanBienFormadoElement instanceof HTMLParagraphElement) {
        validateIBAN(limpiaIban(iban)).valid === true
        ? ibanBienFormadoElement.innerText = "El IBAN es válido"
        : ibanBienFormadoElement.innerText = "El IBAN no es válido";
    }
};

// Muestra el nombre del banco
export const muestraBanco = (codigoBanco: string) => {
    const banco = codigosBancos.find(banco => (banco.codigo === codigoBanco));
    const entidad = banco?.entidad;

    if (bancoElement instanceof HTMLSpanElement) {
        entidad
        ? bancoElement.innerText = entidad
        : bancoElement.innerText = "El banco es erróneo";
    }
};

// Devuelve el número de la sucursal
export const muestraSucursal = (sucursal: string) => {
    if (sucursalElement instanceof HTMLSpanElement) {
        sucursal
        ? sucursalElement.innerText = sucursal
        : sucursalElement.innerText = "La sucursal es errónea";
    }
};

// Devuelve el dígito de control
export const muestraDigitoControl = (digitoControl: string) => {
    if (digitoControlElement instanceof HTMLSpanElement) {
        digitoControl
        ? digitoControlElement.innerText = digitoControl
        : digitoControlElement.innerText = "El digito de control es erróneo";
    }
};

// Devuelve el número de cuenta
export const muestraNumeroCuenta = (numeroCuenta: string) => {
    if (numeroCuentaElement instanceof HTMLSpanElement) {
        numeroCuenta
        ? numeroCuentaElement.innerText = numeroCuenta
        : numeroCuentaElement.innerText = "El banco es erróneo";
    }
};


botonEnviaIban?.addEventListener("click", () => {muestraDatosIban()});