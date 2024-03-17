import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer
        data-testid="footer-component-testid"
        className={styles["footer"]}
      >
        <p>Copyright &copy; 2024 </p>
        {/* <a href="/about">About Us</a> */}
        <Link to="/about">About Us</Link>
      </footer>
    </>
  );
};

export default Footer;
