import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Test in 08-imp-exp.test.js", () => {
  test("getHeroe by id debe de retornar un heroe por un Id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    expect(heroe).toEqual(heroeData);
  });

  test("getHeroe by id debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test("Retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroesData = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    expect(heroes).toEqual(heroesData);
    expect(heroes.length).toBe(3);
  });

  test("Retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
