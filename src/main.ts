import { validateIBAN } from "ibantools";
import "./styles.css";
import { bancoElement, codigosBancos, digitoControlElement, ibanBienFormadoElement, ibanIntroducido, lupa, numeroCuentaElement, patronIban, sucursalElement } from "./constantes";

// Devuelve si el IBAN está bien formado
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}


// Gestiona datos iban
export const muestraDatosIban = (iban: string) => {
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

    if (ibanBienFormadoElement instanceof HTMLSpanElement) {
        validateIBAN(limpiaIban(iban)).valid === true
        ? ibanBienFormadoElement.innerText = "El IBAN está bien formado"
        : ibanBienFormadoElement.innerText = "El IBAN es erróneo";
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

lupa?.addEventListener("click", () => muestraDatosIban(ibanIntroducido.toString()));