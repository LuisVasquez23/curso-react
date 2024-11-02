import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en el archivo 02-template-string.test.js", () => {
  test("getSaludo debe retornar Hola Luis", () => {
    // Arrange
    const name = "Luis";
    const message = getSaludo(name);
    // Act
    expect(message).toBe(`Hola ${name}`);
    // Assert
  });
});
