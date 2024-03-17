import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Tasks from "./components/tasks";
import About from "./components/about";
import AddTaskForm from "./components/add-task";
import styles from "./app.module.scss";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);
  // fetch tasks from server
  const getTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTaskList(data);
  };
  // fetch task from server
  const getTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  };
  // Add Task Handler
  const addTaskHandler = async ({ text, day, reminder }) => {
    const newTaskId = uuidv4();

    // validation check:
    const validaityCheck = taskList.find(
      (task) => task.text === text && task.day === day
    );
    if (validaityCheck) {
      alert("Task already present in your list");
    } else {
      // making post request
      const res = await fetch(`http://localhost:5000/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: newTaskId, text, day, reminder }),
      });

      const data = await res.json();
      setTaskList([...taskList, data]);
    }
  };

  // toggle add button handler
  const toggleAddFormVisibility = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };
  // Delete Task
  const deleteTaskHandler = async (taskId) => {
    // making delete request
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });

    setTaskList(taskList.filter((task) => task.id !== taskId));
  };
  // Toggle Reminder
  const toggleReminderFunc = async (taskId) => {
    const taskToToggle = await getTask(taskId); // fetch the task
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }; //update task

    // send a PUT request to update on server
    const res = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json(); // fetch task again from the server with updated value

    const newTaskList = taskList.map((task) =>
      task.id === taskId
        ? {
            ...task,
            reminder: data.reminder,
          }
        : task
    );
    setTaskList(newTaskList);
  };
  return (
    <Router>
      <div className={styles["app"]} data-testid="app-testid">
        <div className={styles["container"]}>
          <Header
            title={"Task Tracker"}
            showAddTaskForm={showAddTaskForm}
            toggleFormVisibility={toggleAddFormVisibility}
          />
          <hr />

          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  {showAddTaskForm ? (
                    <>
                      <AddTaskForm addTaskHandler={addTaskHandler} />
                      <hr />
                    </>
                  ) : null}

                  <Tasks
                    tasks={taskList}
                    onDeleteTaskHandler={deleteTaskHandler}
                    reminderHandler={toggleReminderFunc}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
