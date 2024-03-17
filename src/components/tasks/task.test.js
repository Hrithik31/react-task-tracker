import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Tasks from "./index";
import Task from "./task";
const tasks = [
  {
    id: "1",
    text: "Doctors Appointement",
    day: "Feb 5th at 2:30 pm",
    reminder: false,
  },
  {
    id: "3",
    text: "Doctors Appointement",
    day: "Feb 10th at 2:30 pm",
    reminder: true,
  },
  {
    id: "c1d0d02d-660a-4344-aad1-f75e9243f3e8",
    text: "Demo 1",
    day: "2024-03-17T12:45",
    reminder: true,
  },
];

describe("testing task index and task component", () => {
  it("testing indexjs tasks component with no tasks", () => {
    render(
      <BrowserRouter>
        <Tasks
          tasks={[]}
          onDeleteTaskHandler={jest.fn}
          reminderHandler={jest.fn}
        />
      </BrowserRouter>
    );
    expect(screen.getByTestId("notask-testid")).toBeInTheDocument();
  });
  it("testing indexjs tasks component with tasks", () => {
    render(
      <BrowserRouter>
        <Tasks
          tasks={tasks}
          onDeleteTaskHandler={jest.fn}
          reminderHandler={jest.fn}
        />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("notask-testid")).not.toBeInTheDocument();
  });

  it("testing task component", () => {
    const [task1, ,] = tasks;
    render(
      <BrowserRouter>
        <Task
          taskInfo={task1}
          onDeleteTaskHandler={jest.fn}
          reminderHandler={jest.fn}
        />
      </BrowserRouter>
    );
    const element = screen.getByTestId("task-id");
    expect(element).toBeInTheDocument();
    userEvent.dblClick(element);

    const deleteElement = screen.getByTestId("delete-click-taskid");
    userEvent.click(deleteElement);
  });
});
