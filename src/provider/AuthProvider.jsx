import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register user with email pass
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // register user with google and github
  const singUpWithApp = provider =>{
    setLoading(true);
    return signInWithPopup(auth,provider)
  }

  // update profile
  const profileUpdate = (name, image) => {
    return updateProfile(user, {
      displayName: name ? name : user.displayName,
      photoURL: image ? image : user.photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("logged from :", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { user, loading, signUpUser,singUpWithApp, profileUpdate, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
