import { ibanBienFormado, muestraBanco, validaIban } from "./main"

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
        [ false, "ES21-1465-0100-72-2030876293"],
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
        [ "ING Bank NV", "1465"],
        [ "ING Bank NV", "1465"] ,
        [ "Bankinter", "0128"],
        [ "Caixabank", "2100"],
        [ "No se ha encontrado el banco", "0000"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, banco) => {
        const resultado  = muestraBanco(banco);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("devuelveSucursal", () => {
    it.each([
        [ "ING Bank NV", "1465"],
        [ "ING Bank NV", "1465"] ,
        [ "Bankinter", "0128"],
        [ "Caixabank", "2100"],
        [ "No se ha encontrado el banco", "0000"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, banco) => {
        const resultado  = muestraBanco(banco);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("devuelveDigitoControl", () => {
    it.each([
        [ "ING Bank NV", "1465"],
        [ "ING Bank NV", "1465"] ,
        [ "Bankinter", "0128"],
        [ "Caixabank", "2100"],
        [ "No se ha encontrado el banco", "0000"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, banco) => {
        const resultado  = muestraBanco(banco);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("devuelveBanco", () => {
    it.each([
        [ "ING Bank NV", "1465"],
        [ "ING Bank NV", "1465"] ,
        [ "Bankinter", "0128"],
        [ "Caixabank", "2100"],
        [ "No se ha encontrado el banco", "0000"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, banco) => {
        const resultado  = muestraBanco(banco);
        expect(resultado).toBe(resultadoEsperado);
    });
});

describe("devuelveNumeroCuenta", () => {
    it.each([
        [ "ING Bank NV", "1465"],
        [ "ING Bank NV", "1465"] ,
        [ "Bankinter", "0128"],
        [ "Caixabank", "2100"],
        [ "No se ha encontrado el banco", "0000"],
    ])
    ('Debería devolver %s si el iban es %s', (resultadoEsperado, banco) => {
        const resultado  = muestraBanco(banco);
        expect(resultado).toBe(resultadoEsperado);
    });
});