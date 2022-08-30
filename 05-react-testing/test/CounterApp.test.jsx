import { render, screen } from "@testing-library/react";
import { CounterApp  } from "../src/CounterApp";

describe("CounterApp", () => {
  const valor = 100;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={valor} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar 100", () => {
    render(<CounterApp value={valor} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
