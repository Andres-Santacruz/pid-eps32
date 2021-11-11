import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>Content</div>
        <div className={styles.img_content}>
          <img
            className={styles.img}
            src="https://via.placeholder.com/150"
            alt="logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
