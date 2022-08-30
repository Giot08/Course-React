import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe("Prubea en strings", () => {
  test("El saludo debe retornar HOLA con NOMBRE", () => {
    const name = "Jose";
    const message = getSaludo(name);


    expect(message).toBe(`Hola ${name}`)


  });
});
