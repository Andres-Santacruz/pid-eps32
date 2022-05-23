import { db } from "../firebase/firebase-config";
import { ref, set } from "firebase/database";

export const setDataOnFirebase = (data) => {
  set(ref(db, "test"), data);
};
