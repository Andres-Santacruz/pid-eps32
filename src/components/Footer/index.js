import React from "react";
import { Link } from "wouter";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>Content</div>
        <div className={styles.img_content}>
          <Link href="/">
            <img
              src="/logo.png"
              alt="escudo de unicauca"
              className={styles.logoImg}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
