import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  //expect te backgroung

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  //check the button is enable
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  //check the checkbox start with unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox functionality", () => {
  render(<App />);
  //check the button is enable
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  //check the checkbox start with unchecked
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  //check if button is enable
  expect(colorButton).toBeDisabled();

  //check if the value is reset

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
