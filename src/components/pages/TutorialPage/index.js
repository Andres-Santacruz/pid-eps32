import React from "react";
import styles from "./styles.module.css";
const TutorialPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>
          Plataforma web para controlar un sistema viga - bola
        </h2>
        <p>
          En esta guia podras ver el analisis de un sistema viga - bola y podras
          aprender como utilizar el panel de control.
        </p>
        <img
          src="https://i.stack.imgur.com/UNf2U.png"
          alt="sistema viga bola"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default TutorialPage;
