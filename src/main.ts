import "./styles.css";
import { validateIBAN } from "ibantools";
import { bancoElement, botonEnviaIban, codigosBancos, digitoControlElement, contenedorValidacionIban, ibanIntroducido, numeroCuentaElement, patronIban, sucursalElement } from "./constantes";

// Devuelve si el IBAN está bien formado
export const ibanBienFormado = (iban: string): boolean => {
    return patronIban.test(iban);
}

const creaElementosValidacionIban = (mensajeIbanBienFormado: string, mensajeIbanValido: string) => {
    const mensajeIbanBienFormadoElement = document.createElement("p");
    const mensajeIbanValidoElement = document.createElement("p");

    mensajeIbanBienFormadoElement.innerHTML = mensajeIbanBienFormado;
    mensajeIbanValidoElement.innerHTML = mensajeIbanValido;
    mensajeIbanBienFormadoElement.className = "mensaje_iban_bien_formado_element";
    mensajeIbanValidoElement.className = "mensaje_iban_valido_element";
    mensajeIbanBienFormadoElement.id = "mensaje_iban_bien_formado_element";
    mensajeIbanValidoElement.id = "mensaje_iban_valido_element";

    contenedorValidacionIban?.appendChild(mensajeIbanBienFormadoElement);
    contenedorValidacionIban?.appendChild(mensajeIbanValidoElement);
}

const eliminaElementosValidacionIban = () => {
    const mensajeIbanBienFormadoElement = document.getElementById("mensaje_iban_bien_formado_element");
    const mensajeIbanValidoElement = document.getElementById("mensaje_iban_valido_element");

    if (contenedorValidacionIban instanceof HTMLDivElement && mensajeIbanBienFormadoElement instanceof HTMLParagraphElement && mensajeIbanValidoElement instanceof HTMLParagraphElement) {
        contenedorValidacionIban.removeChild(mensajeIbanBienFormadoElement);
        contenedorValidacionIban.removeChild(mensajeIbanValidoElement);
    }
}

// Gestiona datos iban
export const muestraDatosIban = () => {
    let mensajeIbanBienFormado = "";
    eliminaElementosValidacionIban;

    const iban: string = String(ibanIntroducido.value); 
    const coincidencia = patronIban.exec(iban);        
    if (coincidencia) {
        const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;
        
        mensajeIbanBienFormado = "El IBAN está bien formado";
        
        limpiaIban(iban);
        validaIban(iban);
        muestraBanco(codigoBanco);
        muestraSucursal(sucursal);
        muestraDigitoControl(digitoControl1);
        muestraNumeroCuenta(numeroCuenta);
        digitoControl2;
    } else {
        creaElementosValidacionIban(mensajeIbanBienFormado, validaIban(iban));
        mensajeIbanBienFormado = "El IBAN es erróneo";
        if (iban === "") {
            mensajeIbanBienFormado = "Por favor introduce un valor.";
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
export const validaIban = (iban: string): string => {
    let mensajeIbanValido = "";

    validateIBAN(limpiaIban(iban)).valid === true
        ? mensajeIbanValido = "El IBAN es válido"
        : mensajeIbanValido = "El IBAN no es válido";

    return mensajeIbanValido;
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