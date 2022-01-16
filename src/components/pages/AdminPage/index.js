import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";

import { useForm } from "../../../hooks/useForm";
import { useUser } from "../../../hooks/useUser";
import { register } from "../../../services/register-firebase";
import ArrowBack from "../../icons/ArrowBack";
import styles from "../LoginPage/styles.module.css";

const AdminPage = () => {
  const [, setLocation] = useLocation();
  const { user: userContext } = useUser();

  useEffect(() => {
    const stateOfUser = typeof userContext;
    if (stateOfUser === "undefined") {
      return;
    }
    const superadmin = "superadmin@unicauca.edu.co";
    if (userContext?.email !== superadmin || stateOfUser === "null")
      setLocation("/");
  }, [userContext, setLocation]);

  const [values, onChange] = useForm();
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState({ error: false, message: "" });

  const onClickBtnError = () => {
    setIsError({ error: false, message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (email.length < 3) {
      setIsError({
        error: true,
        message: "nombre debe ser mayor a 3 caracteres",
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
    const newEmail = email.includes("@unicauca.edu.co")
      ? email
      : email.toLowerCase() + "@unicauca.edu.co";
    const newPassword = Number(password);
    register(newEmail, newPassword).then((res) => {
      const { error, user, message } = res;
      console.log({ error, user });
      if (error) {
        setIsError({ error: true, message });
        return;
      }
      setUser(user);
    });
  };
  if (!userContext)
    return (
      <div className={styles.wraper}>
        <h2>Cargando...</h2>
      </div>
    );
  return (
    <div className={styles.wraper}>
      {user && <div className={styles.content}>Hay user</div>}
      {!user && (
        <div className={styles.content}>
          <button className={styles.volver} onClick={() => setLocation("/")}>
            <ArrowBack />
          </button>
          <h2 className={styles.h2}>GENERAR USUARIO</h2>
          {isError.error && (
            <p className={styles.error}>
              <button className={styles.btn_err} onClick={onClickBtnError}>
                X
              </button>
              {isError.message}
            </p>
          )}
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
                Ingrese un nombre
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
              Generar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
