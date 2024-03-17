import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import AddTaskForm from ".";

describe("Testing add form component", () => {
  const mockAddTaskHandler = jest.fn();
  it("render of the component", () => {
    render(
      <BrowserRouter>
        <AddTaskForm />
      </BrowserRouter>
    );
    expect(screen.getByTestId("form-testid")).toBeInTheDocument();
  });
  it("testing all the input and click events", () => {
    render(
      <BrowserRouter>
        <AddTaskForm addTaskHandler={mockAddTaskHandler} />
      </BrowserRouter>
    );

    const inputTextElement = screen.getByTestId("input-text-testid");
    userEvent.type(inputTextElement, "Doctor Appointment");
    expect(screen.getByDisplayValue("Doctor Appointment")).toBeInTheDocument();

    //  date not workign

    const reminderCheckbox = screen.getByTestId("reminder-checkbox"); // Use role for accessibility

    // Simulate clicking the checkbox
    userEvent.click(reminderCheckbox);
    expect(reminderCheckbox).toBeChecked(); // Assert checkbox is checked

    // Simulate unchecking the checkbox
    userEvent.click(reminderCheckbox);
    expect(reminderCheckbox).not.toBeChecked();

    const submitElemnt = screen.getByTestId("submit-testid");
    userEvent.click(submitElemnt);
    expect(mockAddTaskHandler).toHaveBeenCalledTimes(1);
  });
  it("should prevent form submission if task text is empty", () => {
    render(<AddTaskForm addTaskHandler={mockAddTaskHandler} />);

    // Simulate form submission (click submit button)
    const submitButton = screen.getByTestId("submit-testid");
    userEvent.click(submitButton);

    expect(mockAddTaskHandler).not.toHaveBeenCalled();
  });
});
