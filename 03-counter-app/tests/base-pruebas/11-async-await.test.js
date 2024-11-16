import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba con async-await", () => {
  test("GetImagen debe retornar un url", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
