import React, { useState } from "react";
import { Link } from "wouter";
import ArrowBack from "../../icons/ArrowBack";
import styles from "./styles.module.css";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    error: false,
    message: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onClickBtnError = () => {
    setIsError({ error: false, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email.includes("@unicauca.edu.co")) {
      setIsError({
        error: true,
        message: "El correo debe ser de la universidad",
      });
      return;
    }
  };

  return (
    <div className={styles.wraper}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.volver}>
            <ArrowBack />
          </a>
        </Link>
        <h2 className={styles.h2}>Iniciar Sesión</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              className={styles.formGroup_input}
              placeholder=" "
              autoComplete="off"
              onChange={onChange}
              value={values.email}
              name="email"
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <span className={styles.line}></span>
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.formGroup_input}
              type="number"
              id="password"
              placeholder=" "
              autoComplete="off"
              onChange={onChange}
              value={values.password}
              name="password"
            />
            <label htmlFor="password" className={styles.label}>
              Código
            </label>
            <span className={styles.line}></span>
          </div>
          <button
            className={styles.btnSubmit}
            type="submit"
            onClick={handleSubmit}
          >
            Entrar
          </button>
        </form>
        {isError.error && (
          <p className={styles.error}>
            <button className={styles.btn_err} onClick={onClickBtnError}>
              X
            </button>
            {isError.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
