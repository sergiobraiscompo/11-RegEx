import { bancoElement, codigosBancos, contenedorValidacionIban, digitoControlElement, numeroCuentaElement, sucursalElement } from "./constantes";

export const creaElementosValidacionIban = (mensajeIbanBienFormado: string, mensajeIbanValido: string) => {
    console.log("Creando elementos iban", mensajeIbanBienFormado, mensajeIbanValido);
    
    const mensajeIbanBienFormadoElement = document.createElement("p");
    mensajeIbanBienFormadoElement.innerHTML = mensajeIbanBienFormado;
    mensajeIbanBienFormadoElement.id = "mensaje_iban_bien_formado_element";
    mensajeIbanBienFormadoElement.className = "mensaje_iban_bien_formado_element";
    contenedorValidacionIban?.appendChild(mensajeIbanBienFormadoElement);
    
    const mensajeIbanValidoElement = document.createElement("p");
    mensajeIbanValidoElement.innerHTML = mensajeIbanValido;
    mensajeIbanValidoElement.id = "mensaje_iban_valido_element";
    mensajeIbanValidoElement.className = "mensaje_iban_valido_element";
    contenedorValidacionIban?.appendChild(mensajeIbanValidoElement);
}

export const reiniciaElementos = () => {
    const mensajeIbanBienFormadoElement = document.getElementById("mensaje_iban_bien_formado_element");
    const mensajeIbanValidoElement = document.getElementById("mensaje_iban_valido_element");

    if (
        contenedorValidacionIban instanceof HTMLDivElement && mensajeIbanBienFormadoElement instanceof HTMLParagraphElement && mensajeIbanValidoElement instanceof HTMLParagraphElement &&
        bancoElement instanceof HTMLSpanElement && sucursalElement instanceof HTMLSpanElement && digitoControlElement instanceof HTMLSpanElement && numeroCuentaElement instanceof HTMLSpanElement
    ) {
        contenedorValidacionIban.removeChild(mensajeIbanBienFormadoElement);
        contenedorValidacionIban.removeChild(mensajeIbanValidoElement);
        bancoElement.innerText = "";
        sucursalElement.innerText = "";
        digitoControlElement.innerText = "";
        numeroCuentaElement.innerText = "";  
    }
}


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

// Muestra el número de la sucursal
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
