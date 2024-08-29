export type codigoBancoType = {
    codigo: string,
    entidad: string
}

export const codigosBancos: codigoBancoType[] = [
    { codigo: '2080', entidad: "Abanca Corporación Bancaria"},
    { codigo: '0061', entidad: "Banca March"},
    { codigo: '0188', entidad: "Banco Alcalá"},
    { codigo: '0182', entidad: "Banco Bilbao Vizcaya Argentaria"},
    { codigo: '0130', entidad: "Banco Caixa Geral"},
    { codigo: '0234', entidad: "Banco Caminos"},
    { codigo: '2105', entidad: "Banco Castilla-La Mancha"},
    { codigo: '0240', entidad: "Banco de Crédito Social Cooperativo"},
    { codigo: '0081', entidad: "Banco de Sabadell"},
    { codigo: '0487', entidad: "Banco Mare Nostrum"},
    { codigo: '0186', entidad: "Banco Mediolanum"},
    { codigo: '0238', entidad: "Banco Pastor"},
    { codigo: '0075', entidad: "Banco Popular Español"},
    { codigo: '0049', entidad: "Banco Santander"},
    { codigo: '3873', entidad: "Banco Santander Totta"},
    { codigo: '2038', entidad: "Bankia"},
    { codigo: '0128', entidad: "Bankinter"},
    { codigo: '0138', entidad: "Bankoa"},
    { codigo: '0152', entidad: "Barclays Bank PLC"},
    { codigo: '3842', entidad: "BNP Paribas Paris"},
    { codigo: '3025', entidad: "Caixa de Credit del Enginyers"},
    { codigo: '2100', entidad: "Caixabank"},
    { codigo: '2045', entidad: "Caja de Ahorros y Monte de Piedad de Ontinyent"},
    { codigo: '3035', entidad: "Caja Laboral Popular CC"},
    { codigo: '3081', entidad: "Caja Rural Castilla-La Mancha3058 Cajamar Caja Rural"},
    { codigo: '2000', entidad: "Cecabank"},
    { codigo: '1474', entidad: "Citibank Europe PLC"},
    { codigo: '3821', entidad: "Commerzbank AG"},
    { codigo: '3877', entidad: "Danske Bank A/S"},
    { codigo: '0019', entidad: "Deutsche Bank SAE"},
    { codigo: '0239', entidad: "EVO Banco"},
    { codigo: '2085', entidad: "Ibercaja Banco"},
    { codigo: '1465', entidad: "ING Bank NV"},
    { codigo: '2095', entidad: "Kutxabank"},
    { codigo: '2048', entidad: "Liberbank"},
    { codigo: '0131', entidad: "Novo Banco"},
    { codigo: '0073', entidad: "Open Bank"},
    { codigo: '0108', entidad: "Société Générale"},
    { codigo: '2103', entidad: "Unicaja Banco"}
]

export const patronIban =  /^\w{2}(?<digitoControl1>\d{2})(\s|-|_|\.)?(?<codigoBanco>\d{4})(\s|-|_|\.)?(?<sucursal>\d{4})(\s|-|_|\.)?(?<digitoControl2>\d{2})(\s|-|_|\.)?(?<numeroCuenta>\d{10})$/;

// Elementos HTML
export const contenedorValidacionIban = document.getElementById("contenedor-validacion-iban") as HTMLDivElement;
export const bancoElement = document.getElementById("banco") as HTMLParagraphElement;
export const sucursalElement = document.getElementById("sucursal") as HTMLParagraphElement;
export const digitoControlElement = document.getElementById("digito-control") as HTMLParagraphElement;
export const numeroCuentaElement = document.getElementById("numero-cuenta") as HTMLParagraphElement;
export const botonEnviaIban = document.getElementById("comprueba-iban") as HTMLButtonElement;
export const ibanIntroducido = document.getElementById("campo-iban") as HTMLInputElement;