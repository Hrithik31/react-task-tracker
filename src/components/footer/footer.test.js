import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./index";

describe("Footer component testing", () => {
  it("render footer component", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByTestId("footer-component-testid")).toBeInTheDocument();
  });
});
