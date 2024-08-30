import { patronUrl } from './constantes';
import * as shell from './shell';
import { reiniciaElementos } from './ui';

// Gestiona datos iban
export const extraeUrlImagenes = (texto: string) => {
    reiniciaElementos();
    const mensaje = "";
    const coincidencia = patronUrl.exec(texto);
    
    if (texto === "") {
        mensaje = "Por favor introduce un valor.";
    } else {
        if (coincidencia) {
            const { digitoControl1, codigoBanco, sucursal, digitoControl2, numeroCuenta } = coincidencia.groups as any;            
            mensaje = "Extrayendo imágenes";
        }
    }
}


shell;