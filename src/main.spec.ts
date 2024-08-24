import { ibanBienFormado, validaIban } from "./main"

describe("ibanBienFormado", () => {
    it.each([
        [ true, "ES21 1465 0100 72 2030876293"],
        [ true, "ES2114650100722030876293"] ,
        [ true, "ES21-1465-0100-72-2030876293"],
        [ true, "ES6621000418401234567891"],
        [ false, "ES621000418401234567891"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, iban) => {
        const resultado  = ibanBienFormado(iban);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("validaIban", () => {
    it.each([
        [ true, "ES21 1465 0100 72 2030876293"],
        [ true, "ES2114650100722030876293"] ,
        [ true, "ES21-1465-0100-72-2030876293"],
        [ true, "ES6621000418401234567891"],
        [ false, "ES620000418401234567891"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, iban) => {
        const resultado  = validaIban(iban);
        expect(resultado).toBe(resultadoEsperado);
    });
});