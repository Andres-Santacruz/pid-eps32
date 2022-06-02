import React from "react";
import styles from "./styles.module.css";
const DocsPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Como hacer un controlador PID con IoT</h2>
        <p className={styles.text}>
          Aquí está una guía para hacer un controlador PID con IoT a un sistema
          viga - bola, utilizando herramientas de código abierto.
        </p>
        <img
          src="https://0901.static.prezi.com/preview/v2/jazpgg7itmzbs3spefi623ybn36jc3sachvcdoaizecfr3dnitcq_3_0.png"
          alt="sistema viga bola"
          className={styles.img}
        />
      </div>
      {/* crear lista de materiales */}
    </div>
  );
};

export default DocsPage;
