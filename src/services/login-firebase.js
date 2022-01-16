import { auth } from "../firebase/firebase-config";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

export const Login = async (email, password) => {
  await setPersistence(auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(auth, email, password);
};
