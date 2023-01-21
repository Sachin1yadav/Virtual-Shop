import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setIsAuth(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsAuth(false);
    return signOut(auth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const continueWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsAuth(true);
    } catch (error) {
    //   console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    isAuth,
    createUser,
    logout,
    user,
    loginUser,
    forgotPassword,
    continueWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
