import React, { useEffect } from "react";
//import { ref } from "firebase/database";
import { useLocation } from "wouter";
//import { logOut } from "../../../services/login-firebase";
import { useUser } from "../../../hooks/useUser";
import GraficaSimulacion from "../../GraficaSimulacion";

import styles from "./styles.module.css";
import { setDataOnFirebase } from "../../../services/readData-firebase";
import { useForm } from "../../../hooks/useForm";

const DashboardPage = () => {
  const { user } = useUser();
  const [, setLocation] = useLocation();
  const [constPID, setConstPID] = useForm({ kp: 0, ki: 0, kd: 0 });
  useEffect(() => {
    const stateOfUser = typeof user;
    if (stateOfUser === "undefined") {
      return;
    }
    if (typeof user?.email === "undefined") {
      setLocation("/login");
    }
    return () => {
      console.log("se ejecuta el return");
    };
  }, [user, setLocation]);

  if (typeof user === "undefined") {
    return (
      <div className={styles.loading}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //setDataOnFirebase("");
    const kp = parseFloat(constPID.kp);
    const ki = parseFloat(constPID.ki);
    const kd = parseFloat(constPID.kd);
    const myData = { kp, ki, kd, isConnected: true, data: "" };
    console.log("vealas  ", myData);
    setDataOnFirebase(myData);
  };

  return (
    <div className={styles.board}>
      <header className={styles.board__header}>
        <h2 className={styles.board__title}>Control PID</h2>
      </header>
      <div className={styles.board__content}>
        <div className={styles.panel}>
          <div className={styles.panel__consts}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante P:</label>
                <input
                  className={styles.form__input}
                  name="kp"
                  type="number"
                  value={constPID.kp}
                  onChange={setConstPID}
                />
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante I:</label>
                <input
                  className={styles.form__input}
                  name="ki"
                  value={constPID.ki}
                  onChange={setConstPID}
                  type="number"
                />
              </div>
              <div className={styles.form__group}>
                <label className={styles.form__label}>constante D:</label>
                <input
                  className={styles.form__input}
                  name="kd"
                  value={constPID.kd}
                  onChange={setConstPID}
                  type="number"
                />
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
