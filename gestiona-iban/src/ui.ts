import { bancoElement, codigosBancos, contenedorValidacionIban, digitoControlElement, numeroCuentaElement, sucursalElement } from "./constantes";

export const creaElementosValidacionIban = (mensajeIbanBienFormado: string, mensajeIbanValido: string) => {    
    const mensajeIbanBienFormadoElement = document.createElement("p");
    mensajeIbanBienFormadoElement.innerHTML = mensajeIbanBienFormado;
    mensajeIbanBienFormadoElement.id = "mensaje-iban-bien-formado-element";
    mensajeIbanBienFormadoElement.className = "mensaje-iban-bien-formado-element";
    contenedorValidacionIban?.appendChild(mensajeIbanBienFormadoElement);
    
    if (mensajeIbanBienFormado === "Por favor introduce un valor." || mensajeIbanBienFormado === "El IBAN introducido es erróneo") {
        mensajeIbanBienFormadoElement.style.color = "#ff0000";
    }
    
    const mensajeIbanValidoElement = document.createElement("p");
    mensajeIbanValidoElement.innerHTML = mensajeIbanValido;
    mensajeIbanValidoElement.id = "mensaje-iban-valido-element";
    mensajeIbanValidoElement.className = "mensaje-iban-valido-element";
    contenedorValidacionIban?.appendChild(mensajeIbanValidoElement);
    
    if (mensajeIbanValido === "El IBAN no es válido") {
        mensajeIbanValidoElement.style.color = "#ff0000";
    }
}

export const reiniciaElementos = () => {
    const mensajeIbanBienFormadoElement = document.getElementById("mensaje-iban-bien-formado-element");
    const mensajeIbanValidoElement = document.getElementById("mensaje-iban-valido-element");

    if (
        contenedorValidacionIban instanceof HTMLDivElement && mensajeIbanBienFormadoElement instanceof HTMLParagraphElement && mensajeIbanValidoElement instanceof HTMLParagraphElement &&
        bancoElement instanceof HTMLParagraphElement && sucursalElement instanceof HTMLParagraphElement && digitoControlElement instanceof HTMLParagraphElement && numeroCuentaElement instanceof HTMLParagraphElement
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

    if (bancoElement instanceof HTMLParagraphElement) {
        entidad
        ? bancoElement.innerText = entidad
        : bancoElement.innerText = "El banco es erróneo";
    }
};

// Muestra el número de la sucursal
export const muestraSucursal = (sucursal: string) => {
    if (sucursalElement instanceof HTMLParagraphElement) {
        sucursal
        ? sucursalElement.innerText = sucursal
        : sucursalElement.innerText = "La sucursal es errónea";
    }
};

// Devuelve el dígito de control
export const muestraDigitoControl = (digitoControl1: string,  digitoControl2: string) => {
    if (digitoControlElement instanceof HTMLParagraphElement) {
        digitoControl1 && digitoControl2
        ? digitoControlElement.innerText = `${digitoControl1}, ${digitoControl2}`
        : digitoControlElement.innerText = "uno o más digitos de control son erróneos";
    }
};

// Devuelve el número de cuenta
export const muestraNumeroCuenta = (numeroCuenta: string) => {
    if (numeroCuentaElement instanceof HTMLParagraphElement) {
        numeroCuenta
        ? numeroCuentaElement.innerText = numeroCuenta
        : numeroCuentaElement.innerText = "El banco es erróneo";
    }
};
