import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from ".";

describe("button component testing:", () => {
  it("button render tesT:", () => {
    render(<Button />);
    expect(screen.getByTestId("button-testid")).toBeInTheDocument();
  });
  it("button click testing", () => {
    render(<Button buttonText="Add" color="white" clickHandler={jest.fn} />);
    screen.getByTestId("button-testid").click();
  });
});
