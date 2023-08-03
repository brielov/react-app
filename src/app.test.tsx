import { render } from "@testing-library/react";
import App from "./app.tsx";

describe("<App />", () => {
  it("should render", () => {
    const { getByText } = render(<App />);
    expect(getByText("React App")).toBeInTheDocument();
  });
});
