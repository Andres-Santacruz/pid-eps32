import { useState } from "react";

export const useForm = (initialState = { email: "", password: "" }) => {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return [values, onChange];
};
