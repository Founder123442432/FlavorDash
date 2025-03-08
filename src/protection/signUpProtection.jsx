import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebasecon";
import { Navigate } from "react-router-dom";

export default function SignupProtection({ children }) {
  const [user] = useAuthState(auth);
  return user ? <Navigate to="/" /> : children;
}
