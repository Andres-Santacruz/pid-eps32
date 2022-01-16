import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  inMemoryPersistence,
  setPersistence,
} from "firebase/auth";

export const register = async (email, password) => {
  try {
    setPersistence(auth, inMemoryPersistence);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return { error: false, user };
  } catch (error) {
    console.log(error);
    return { error: true, message: error.message };
  }
};
