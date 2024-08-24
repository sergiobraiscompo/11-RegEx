import { ibanBienFormado } from "./main"

describe("Math functions", () => {
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