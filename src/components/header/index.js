import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../button-component";
import styles from "./header.module.scss";
const Header = ({
  title = "Task Tracker Default",
  toggleFormVisibility,
  showAddTaskForm,
}) => {
  const location = useLocation();

  return (
    <>
      <header data-testid="header-testId" className={styles["header"]}>
        <h1>{title}</h1>
        {location?.pathname === "/" && (
          <Button
            buttonText={!showAddTaskForm ? "Add task" : "Close"}
            color={!showAddTaskForm ? "green" : "red"}
            clickHandler={toggleFormVisibility}
          />
        )}
      </header>
    </>
  );
};

export default Header;
