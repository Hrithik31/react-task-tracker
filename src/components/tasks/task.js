import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./task.module.scss";
const Task = ({ taskInfo, onDeleteTaskHandler, reminderHandler }) => {
  return (
    <div
      data-testid="task-id"
      className={`${styles["task"]} ${
        taskInfo?.reminder ? styles["reminder"] : ""
      }`}
      onDoubleClick={() => reminderHandler(taskInfo.id)}
    >
      <h3 className={styles["task-title"]}>
        {taskInfo?.text}
        <FaTimes
          data-testid="delete-click-taskid"
          onClick={() => onDeleteTaskHandler(taskInfo.id)}
          style={{
            color: "red",
            cursor: "pointer",
          }}
        />
      </h3>
    </div>
  );
};

export default Task;
