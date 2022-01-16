import { useContext } from "react";
import { UserContext } from "../components/contex/UserContext";

export const useUser = () => {
  return useContext(UserContext);
};
