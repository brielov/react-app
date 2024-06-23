import App from "./app.tsx";
import { render } from "./test-utils.tsx";

describe("<App />", () => {
  it("should render", () => {
    const { getByText } = render(<App />);
    expect(getByText("React App")).toBeInTheDocument();
  });
});
