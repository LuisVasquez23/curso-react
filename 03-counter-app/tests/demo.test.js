describe("Pruebas en el archivo demo.test.js", () => {
  test("esta prueba no debe de fallar ", () => {
    // 1. Iniciacialización - Arrange
    const message1 = "Hola Mundo";
    // 2. Estímulo - Act
    const message2 = message1.trim();
    // 3. Observar el comportamiento - Assert
    expect(message1).toBe(message2);
  });
});
