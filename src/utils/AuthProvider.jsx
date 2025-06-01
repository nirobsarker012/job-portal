import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase_auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //ObserverFunction
  useEffect(() => {
    const unSubscriber = (onAuthStateChanged) => (
      auth,
      (currenUrer) => {
        setUser(currenUrer);
        setLoading(false);
      }
    );
    return () => unSubscriber();
  }, []);

  // Passing Data
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
