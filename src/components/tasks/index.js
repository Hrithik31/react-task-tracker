import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import Task from "./task";
import styles from "./task.module.scss";
const Tasks = ({ tasks, onDeleteTaskHandler, reminderHandler }) => {
  return (
    <>
      {tasks?.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            taskInfo={task}
            onDeleteTaskHandler={onDeleteTaskHandler}
            reminderHandler={reminderHandler}
          />
        ))
      ) : (
        <div
          data-testid="notask-testid"
          className={`${styles["task"]} ${styles["no-task"]}`}
        >
          <span> No tasks to Show</span>
          <FaExclamationCircle className={styles["noColorExclamation"]} />
        </div>
      )}
    </>
  );
};

export default Tasks;
