import React from "react";
import { useLocation } from "wouter";

import styles from "./styles.module.css";
const IndexPage = () => {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/login");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>CONTROL PID A UN SISTEMA BARRA - BOLA</h1>
        <p>Una plataforma para controlar un sistema físico</p>
        <div>
          <button className={styles.btn} onClick={handleClick}>
            Comenzar
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
