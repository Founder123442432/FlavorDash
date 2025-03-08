import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebasecon";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../context/AppMainContext";

export default function NoUserProtection({ children }) {
  const [user] = useAuthState(auth);
  const { cart } = useContext(MainContext);
  return !user || cart.length === 0 ? <Navigate to="/" /> : children;
}
