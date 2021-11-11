import React from "react";
import GraficaSimulacion from "../../GraficaSimulacion";

import styles from "./styles.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.board}>
      <header className={styles.board__header}>
        <h2 className={styles.board__title}>Control PID</h2>
      </header>
      <div className={styles.board__content}>
        <div className={styles.panel}>
          <div className={styles.panel__consts}>
            <form className={styles.form}>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante P:</label>
                <input className={styles.form__input} type="number" />
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante I:</label>
                <input className={styles.form__input} type="number" />
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante D:</label>
                <input className={styles.form__input} type="number" />
              </div>
              <div className={styles.form__group}>
                <button className={styles.form__button} type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className={styles.panel__grafica}>
            <GraficaSimulacion />
          </div>
          <div className={styles.panel__variables}>
            <div className={styles.panel__variables__group}>
              <span className={styles.spantitle}>Set Point</span>
              <div>
                <span
                  className={styles.franga}
                  style={{ backgroundColor: "red" }}
                ></span>
                <span className={styles.info_num}>45</span>
              </div>
            </div>
            <div className={styles.panel__variables__group}>
              <span className={styles.spantitle}>Variable de proceso</span>
              <div>
                <span className={styles.franga}></span>
                <span className={styles.info_num}>45</span>
              </div>
            </div>
            <div className={styles.panel__variables__group_btn}>
              <button
                className={styles.form__button}
                style={{ backgroundColor: "red" }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.simulacion}>
        <div className={styles.simulacion__error}></div>
        <div className={styles.simulacion__graphic}></div>
        <div className={styles.simulacion__tresd}></div>
      </div>
    </div>
  );
};

export default DashboardPage;
