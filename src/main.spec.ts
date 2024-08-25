import { ibanBienFormado, validaIban } from "./main"

describe("ibanBienFormado", () => {
    it.each([
        [ true, "ES21 1465 0100 72 2030876293"],
        [ true, "ES2114650100722030876293"] ,
        [ true, "ES21-1465-0100-72-2030876293"],
        [ true, "ES66.2100.0418.40.1234567891"],
        [ false, "ES621000418401234567891"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, iban) => {
        const resultado  = ibanBienFormado(iban);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("validaIban", () => {
    it.each([
        [ false, "ES21 1465 0100 72 2030876293"],
        [ false, "ES2114650100722030876293"] ,
        [ true, "ES21-1465-0100-72-2030876293"],
        [ true, "ES66.2100.0418.40.1234567891"],
        [ false, "ES620000418401234567891"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, iban) => {
        const resultado  = validaIban(iban);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("devuelveBanco", () => {
    it.each([
        [ "ING Bank NV", "ES21 1465 0100 72 2030876293"],
        [ "ING Bank NV", "ES2114650100722030876293"] ,
        [ "Bankinter", "ES21-0128-0100-72-2030876293"],
        [ "Caixabank", "ES66.2100.0418.40.1234567891"],
        [ "No se ha encontrado el banco", "ES620000418401234567891"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, iban) => {
        const resultado  = devuelveBanco(iban);
        expect(resultado).toBe(resultadoEsperado);
    });
});


export const devuelveBanco = () => {

};

export const devuelveSucursal = () => {

};

export const devuelveDigitoControl = () => {

};

export const devuelveNumeroCuenta = () => {

};