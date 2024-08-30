export const patronUrl =  /^\w{2}(?<digitoControl1>\d{2})(\s|-|_|\.)?(?<codigoBanco>\d{4})(\s|-|_|\.)?(?<sucursal>\d{4})(\s|-|_|\.)?(?<digitoControl2>\d{2})(\s|-|_|\.)?(?<numeroCuenta>\d{10})$/;

// Elementos HTML
export const contenedorIntroducciontexto = document.getElementById("contenedor-validacion-iban") as HTMLDivElement;
export const campoTexto = document.getElementById("campo-texto") as HTMLInputElement;
export const botonExtraeImagenes = document.getElementById("boton-extrae-imagenes") as HTMLButtonElement;