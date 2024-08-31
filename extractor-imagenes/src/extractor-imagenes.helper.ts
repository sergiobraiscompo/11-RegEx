import { patronUrl } from './constantes';
import * as shell from './shell';
import { reiniciaElementos } from './ui';

// Gestiona datos iban
export const extraeUrlImagenes = (texto: string) => {
    reiniciaElementos();
    let mensaje = "";
    const coincidencia = patronUrl.exec(texto);
    
    if (texto === "") {
        mensaje = "Por favor introduce un valor.";
    } else {
        if (coincidencia) {
            const lol = coincidencia.groups as any;            
            mensaje = "Extrayendo imágenes";
        }
    }
}


shell;