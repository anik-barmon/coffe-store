import React from "react";
import { AuthContest } from "./AuthContest";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createUser,
  }; // Placeholder for user information and authentication logic
  return <AuthContest value={userInfo}>{children}</AuthContest>;
};

export default AuthProvider;
