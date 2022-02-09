import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders `React App` to the screen", () => {
  render(<App />);
  const element = screen.getByText("React App");
  expect(element).toBeInTheDocument();
});
