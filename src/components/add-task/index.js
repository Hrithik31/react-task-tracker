import React, { useState } from "react";
import styles from "./add-form.module.scss";
const AddTaskForm = ({ addTaskHandler }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add text");
      return;
    }

    addTaskHandler({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form data-testid="form-testid" className={styles["add-form"]}>
      <div className={styles["form-control"]}>
        <label className={styles["label"]}>Task</label>
        <input
          data-testid="input-text-testid"
          className={styles["input"]}
          type="text"
          name="add-task"
          placeholder="add your task here..."
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            event.stopPropagation();
          }}
        />
      </div>
      <div className={styles["form-control"]}>
        <label className={styles["label"]}>Day and Time</label>
        <input
          data-testid="date-testid"
          className={styles["input"]}
          type="datetime-local"
          name="add-day-time"
          placeholder="add your day and time here..."
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
            event.stopPropagation();
          }}
        />
      </div>
      <div className={styles["form-control-check"]}>
        <label className={styles["label"]}>set Reminder</label>
        <input
          data-testId="reminder-checkbox"
          className={styles["input"]}
          type="checkbox"
          name="add-reminder"
          value={reminder}
          checked={reminder}
          onChange={(event) => {
            setReminder(event.currentTarget.checked);
            event.stopPropagation();
          }}
        />
      </div>
      <input
        data-testid="submit-testid"
        className={`${styles["btn"]} ${styles["block"]}`}
        type="submit"
        onClick={submitHandler}
        value={"save task"}
      />
    </form>
  );
};

export default AddTaskForm;
