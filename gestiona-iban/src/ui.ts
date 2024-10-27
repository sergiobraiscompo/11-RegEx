import { bancoContainer, codigosBancos, contenedorValidacionIban, digitosControlContainer, numeroCuentaContainer, sucursalContainer } from "./constantes";

export const creaElementosValidacionIban = (mensajeIbanBienFormado: string, mensajeIbanValido?: string) => {
    const mensajeIbanBienFormadoElement = document.createElement("p");
    mensajeIbanBienFormadoElement.innerHTML = mensajeIbanBienFormado;
    mensajeIbanBienFormadoElement.id = "mensaje-iban-bien-formado-element";
    mensajeIbanBienFormadoElement.className = "mensaje-iban-bien-formado-element";
    contenedorValidacionIban?.appendChild(mensajeIbanBienFormadoElement);

    if (mensajeIbanBienFormado === "Por favor introduce un valor." || mensajeIbanBienFormado === "El IBAN no está bien formado") {
        mensajeIbanBienFormadoElement.style.color = "#ff0000";
    }

    if (mensajeIbanValido) {
        const mensajeIbanValidoElement = document.createElement("p");
        mensajeIbanValidoElement.innerHTML = mensajeIbanValido;
        mensajeIbanValidoElement.id = "mensaje-iban-valido-element";
        mensajeIbanValidoElement.className = "mensaje-iban-valido-element";
        contenedorValidacionIban?.appendChild(mensajeIbanValidoElement);

        if (mensajeIbanValido === "El IBAN no es válido") {
            mensajeIbanValidoElement.style.color = "#ff0000";
        }
    }
}


// Vacía todos los campos que rellena el backend
export const reiniciaElementosValidacionIban = () => {
    if (
        contenedorValidacionIban && contenedorValidacionIban != null && contenedorValidacionIban != undefined
    ) {
        contenedorValidacionIban.textContent = "";
    }
    
    if (bancoContainer && bancoContainer != null && bancoContainer != undefined) {
        bancoContainer.innerText = "";
    } else {
        console.error("COntenedor banco no encontrado.")
    }

    if (sucursalContainer && sucursalContainer != null && sucursalContainer != undefined) {
        sucursalContainer.innerText = "";
    } else {
        console.error("Contenedor sucursal no encontrado.")
    }

    if (digitosControlContainer && digitosControlContainer != null && digitosControlContainer != undefined) {
        digitosControlContainer.innerText = "";
    } else {
        console.error("Contenedor digitos de control no encontrado.")
    }

    if (numeroCuentaContainer && numeroCuentaContainer != null && numeroCuentaContainer != undefined) {
        numeroCuentaContainer.innerText = "";
    } else {
        console.error("Contenedor numero de cuenta no encontrado.");
    }
}


// Muestra el nombre del banco
export const muestraBanco = (codigoBanco: string) => {
    const banco = codigosBancos.find(banco => (banco.codigo === codigoBanco));

    if (banco) {
        const entidad = banco.entidad;

        if (bancoContainer && bancoContainer != null && bancoContainer != undefined) {
            entidad
                ? bancoContainer.innerText = entidad
                : bancoContainer.innerText = "El banco es erróneo";
        }
    }
}

// Muestra el número de la sucursal
export const muestraSucursal = (sucursal: string) => {
    if (sucursalContainer instanceof HTMLDivElement) {
        sucursal
            ? sucursalContainer.innerText = sucursal
            : sucursalContainer.innerText = "La sucursal es errónea";
    }
};

// Devuelve el dígito de control
export const muestraDigitoControl = (digitoControl1: string, digitoControl2: string) => {
    if (digitosControlContainer instanceof HTMLDivElement) {
        digitoControl1 && digitoControl2
            ? digitosControlContainer.innerText = `${digitoControl1}, ${digitoControl2}`
            : digitosControlContainer.innerText = "Uno o más digitos de control son erróneos";
    }
};

// Devuelve el número de cuenta
export const muestraNumeroCuenta = (numeroCuenta: string) => {
    if (numeroCuentaContainer instanceof HTMLDivElement) {
        numeroCuenta
            ? numeroCuentaContainer.innerText = numeroCuenta
            : numeroCuentaContainer.innerText = "El número de cuenta es erróneo";
    }
};
