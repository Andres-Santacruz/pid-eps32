import React, { useState } from "react";
import { useLocation } from "wouter";

import { useForm } from "../../../hooks/useForm";
import { login } from "../../../services/login-firebase";

import ArrowBack from "../../icons/ArrowBack";
import styles from "./styles.module.css";

const LoginPage = () => {
  const [, setLocation] = useLocation();
  const [values, onChange] = useForm();
  const [isError, setIsError] = useState({
    error: false,
    message: "",
  });

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
    if (password.length < 5) {
      setIsError({
        error: true,
        message: "El código debe ser mayor a 5 caracteres",
      });
      return;
    }
    login(email, password)
      .then((res) => {
        const { user } = res;
        if (user.email === "superadmin@unicauca.edu.co") {
          setLocation("/admin");
        } else {
          setLocation("/dashboard");
        }
      })
      .catch((err) => {
        setIsError({ error: true, message: err.message });
      });
  };

  return (
    <div className={styles.wraper}>
      <div className={styles.content}>
        <button className={styles.volver} onClick={() => setLocation("/")}>
          <ArrowBack />
        </button>
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
