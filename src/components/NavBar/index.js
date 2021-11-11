import React from "react";
import styles from "./styles.module.css";
import { Link } from "wouter";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">Logo</Link>
        </div>
        <input type="checkbox" className={styles.input} id="input" />
        <label className={styles.hamburguer} htmlFor="input">
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </label>
        <ul
          className={styles.ul}
          onClick={() => {
            document.getElementById("input").checked = false;
          }}
        >
          <li className={styles.li}>
            <Link href="docs">Documentación</Link>
          </li>
          <li className={styles.li}>
            <Link href="tutorials">tutoriales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
