import { render, screen } from "@testing-library/react";
import App from "./App";

describe("testing for app file", () => {
  it("renders learn react link", () => {
    render(<App />);
    expect(screen.getByTestId("app-testid")).toBeInTheDocument();
  });
});
