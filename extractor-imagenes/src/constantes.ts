export const patronImagenHtml = /^\s*?\<img src\s?=\s?"(?<link>.*\.*)" ?\/>$/gm;

// Elementos HTML
export const contenedorIntroducciontexto = document.getElementById("contenedor-validacion-iban") as HTMLDivElement;
export const campoCodigo = document.getElementById("campo-texto") as HTMLTextAreaElement;
export const botonExtraeImagenes = document.getElementById("boton-extrae-imagenes") as HTMLButtonElement;
export const contenedorDatosDevueltos = document.getElementById("contenedor-datos-devueltos") as HTMLDivElement;
