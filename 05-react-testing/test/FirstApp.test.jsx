import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("first", () => {
  test("Debe hacer match con el snapshot", () => {
    const title = "Hola soy goku";
  });
  
  test("Mostrar un H!", () => {
    const title = "Hola soy goku";
    const { container, getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
  });
});
