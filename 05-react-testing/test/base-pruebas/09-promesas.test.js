import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Promesas test", () => {
  test("Get heroes async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("Get heroes async Error si no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(error => {

        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

        done();
      });
  });
});
