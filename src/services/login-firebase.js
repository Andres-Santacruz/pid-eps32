import { auth } from "../firebase/firebase-config";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";

export const login = async (email, password) => {
  await setPersistence(auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  await signOut();
};
