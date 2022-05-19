import { db } from "../firebase/firebase-config";
import { ref, onValue } from "firebase/database";

export const getDataOnFirebase = () => {
  const res = [];
  onValue(ref(db), (snapShot) => {
    const data = snapShot.val();
    if (data !== null) {
      Object.values(data).forEach((item) => {
        res.push(item);
      });
    }
  });
  return res;
};
