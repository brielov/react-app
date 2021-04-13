import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders `hello world` to the screen", () => {
  render(<App />);
  const div = screen.getByText(/hello world/i);
  expect(div).toBeInTheDocument();
});
