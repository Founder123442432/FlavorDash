import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebasecon";
import { Navigate } from "react-router-dom";
import Loader from "../Components/ui/Loader";

export default function ProfileProtection({ children }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loader />;
  return user ? children : <Navigate to="/" />;
}
