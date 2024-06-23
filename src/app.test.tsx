import { render } from "./test-utils.tsx";
import App from "./app.tsx";

describe("<App />", () => {
  it("should render", () => {
    const { getByText } = render(<App />);
    expect(getByText("React App")).toBeInTheDocument();
  });
});
