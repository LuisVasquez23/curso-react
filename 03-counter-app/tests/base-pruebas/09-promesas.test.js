import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Test in 09-promesas.test.js", () => {
  test("getHeroeByIdAsync debe de retornar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then((heroe) => {
        const heroeData = {
          id: 1,
          name: "Batman",
          owner: "DC",
        };

        expect(heroe).toEqual(heroeData);
        done();
      })
      .catch((error) => {
        expect(error).toBe("No se pudo encontrar el héroe " + id);
        done();
      });
  });
});
