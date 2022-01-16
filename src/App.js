import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import { UserContext } from "./components/contex/UserContext";
import { auth } from "./firebase/firebase-config";
import AppRouter from "./routers/AppRouter";

function App() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("Provider:  ", user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
