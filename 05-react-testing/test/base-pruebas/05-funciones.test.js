import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Funciones", () => {
  test("Pruebas de get User", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });
  test("Pruebas de getUsuarioActivo", () => {

    const testUser = {
      uid: "ABC567",
      username: "Jose",
    };

    const user = getUsuarioActivo(testUser.username);

    expect(testUser).toEqual(user);
  });
});
