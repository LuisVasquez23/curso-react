import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba con async-await", () => {
  test("GetImagen debe retornar un url", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  test("GetImagen debe retornar error si no obtenemos la imagen", async () => {
    const url = await getImagen();
    expect(url).toBe("No se encontró la imagen");
  });
});
