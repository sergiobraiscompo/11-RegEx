import { botonExtraeImagenes, campoTexto } from "./constantes";
import { extraeUrlImagenes } from "./extractor-imagenes.helper";

botonExtraeImagenes?.addEventListener("click", () => {extraeUrlImagenes(campoTexto)});
