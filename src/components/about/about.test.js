import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./index";

describe("testing about compoennt", () => {
  it("Render of ABout component", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(screen.getByTestId("about-component-testid")).toBeInTheDocument();
  });
});
