import { act, render, screen } from "@testing-library/react";

import App from "./app";

test("renders a default count of zero", () => {
  render(<App />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test("renders a button that increments the count", () => {
  render(<App />);
  const increment = screen.getByTestId("increment");
  expect(increment).toBeInTheDocument();
  act(() => increment.click());
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("renders a button that decrements the count", () => {
  render(<App />);
  const decrement = screen.getByTestId("decrement");
  expect(decrement).toBeInTheDocument();
  act(() => decrement.click());
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});

test("renders a button that resets the count", () => {
  render(<App />);
  const increment = screen.getByTestId("increment");
  const reset = screen.getByTestId("reset");
  expect(reset).toBeInTheDocument();
  act(() => {
    increment.click();
    increment.click();
    increment.click();
  });
  expect(screen.getByTestId("count")).toHaveTextContent("3");
  act(() => reset.click());
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});
