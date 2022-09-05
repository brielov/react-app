import { fireEvent, render, screen } from "@testing-library/react";

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
  fireEvent.click(increment);
  expect(screen.getByTestId("count")).toHaveTextContent("1");
});

test("renders a button that decrements the count", () => {
  render(<App />);
  const decrement = screen.getByTestId("decrement");
  expect(decrement).toBeInTheDocument();
  fireEvent.click(decrement);
  expect(screen.getByTestId("count")).toHaveTextContent("-1");
});

test("renders a button that resets the count", () => {
  render(<App />);
  const increment = screen.getByTestId("increment");
  const reset = screen.getByTestId("reset");
  expect(reset).toBeInTheDocument();
  Array.from({ length: 3 }, () => fireEvent.click(increment));
  expect(screen.getByTestId("count")).toHaveTextContent("3");
  fireEvent.click(reset);
  expect(screen.getByTestId("count")).toHaveTextContent("0");
});
