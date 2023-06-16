/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
import axios from "axios";
const auth = getAuth(app);

const AuthPovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("https://ass12.vercel.appjwt", { email: currentUser.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
            console.log(data);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => unsubscribed;
  }, []);
  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPovider;
