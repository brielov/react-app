import "@testing-library/jest-dom";
import { RenderOptions, render } from "@testing-library/react";
import React, { ReactElement } from "react";

function AllTheProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from "@testing-library/react";
export { customRender as render };
