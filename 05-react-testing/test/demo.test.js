describe("Pruebas en Demo", () => {
  test("Prueba de ejemplo", () => {
    /*
        if (1 === 0) {
            throw new Error("Nunca deveria tener 0");
        }
  */

    const msg1 = "hi world!";

    const msg2 = msg1.trim();

    expect(msg1).toBe(msg2);
  });
});
