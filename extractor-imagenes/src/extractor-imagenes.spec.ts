import { extraeUrls } from "./extractor-imagenes.helper";


describe("extraeUrls", () => {
    it('Debería devolver las url de las imágenes de dentro del código', () => {
        // Arrange
        const resultadoEsperado = `
            <img src="http://localhost:3000/./mortadelo.webp" />
            <img src="http://localhost:3000/./filemon.webp" />
            <img src="http://localhost:3000/./ofelia.webp" />
            <img src="http://localhost:3000/./bacterio.webp" />
            <img src="http://localhost:3000/./rompetechos.webp" />
            <img src="http://localhost:3000/./superintendente.webp" />
            <img src="http://localhost:3000/./irma.webp" />
            <img src="http://localhost:3000/./director-general.webp"
            <img src="http://localhost:3000/./bestiajez.webp" />
            <img src="http://localhost:3000/./patrona.jpg" />
        `;

        // Act
        const resultado = extraeUrls();

        // Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});