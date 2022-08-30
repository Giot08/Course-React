import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas async", () => {
  test("Primer test async", async () => {
    const url = await getImagen();

    console.log(url);

    expect(typeof url).toBe("string");
  });
});
