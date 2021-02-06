import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders hello world message", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
