import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en el archivo 05-funciones.test.js", () => {
  test("getUser debe retornar un objeto", () => {
    // Arrange
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // Act

    expect(user).toEqual(testUser);
    // Assert
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    // Arrange
    const nombre = "Juan";
    const testUser = {
      uid: "ABC567",
      username: nombre,
    };

    // Act
    const user = getUsuarioActivo(nombre);

    // Assert
    expect(user).toEqual(testUser);
  });
});
