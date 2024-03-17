import React from "react";
import styles from "./button.module.scss";
const Button = ({ buttonText = "Add", color = "white", clickHandler }) => {
  return (
    <button
      data-testid="button-testid"
      className={styles["btn"]}
      style={{ backgroundColor: color }}
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
