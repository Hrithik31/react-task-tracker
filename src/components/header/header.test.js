import { render, screen } from "@testing-library/react";
import Header from "./index";
jest.mock("react-router-dom", () => ({
  // Mock implementation for useLocation
  useLocation: jest.fn().mockReturnValue({
    pathname: "/",
  }),
}));
describe("Header component testing", () => {
  it("Render of the Header component", () => {
    render(<Header />);
    expect(screen.getByTestId("header-testId")).toBeInTheDocument();
  });
  it("Render of the Header component with props", () => {
    render(
      <Header
        title="Task component"
        showAddTaskForm={true}
        clickHandler={jest.fn}
      />
    );
    expect(screen.getByTestId("header-testId")).toBeInTheDocument();
  });
});
