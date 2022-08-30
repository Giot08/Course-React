import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Heroes", () => {
  test("Test de heroes", () => {
    const id = 100;
    const dc = "DC";
    const marvel = "Marvel";
    const hero = getHeroeById(id);

    const heroesDC = getHeroesByOwner(dc);
    const heroesMarvel = getHeroesByOwner(marvel);

    console.log(hero);

    // expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    expect(hero).toBeFalsy();

    expect(heroesDC.length).toBe(3);
    expect(heroesMarvel).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);

    expect(heroesDC).toContainEqual(
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
      }
    );
    expect(heroesMarvel).toContainEqual(
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      }
    );
  });
});
