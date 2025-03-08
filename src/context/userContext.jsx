import { createContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../firebase/firebasecon";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/ui/Loader";
import { toast } from "react-toastify";
export const UserOcontext = createContext();
export default function UserContext({ children }) {
  const [user, loading] = useAuthState(auth);

  async function Getorders() {
    try {
      const q = query(collection(db, "orders"), where("uid", "==", user?.uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return data;
    } catch (err) {
      console.log(err);
      toast.error("unexpected Error, pleas try again");
      return [];
    }
  }
  const {
    data: orders,
    isError: isOrderError,
    isLoading: isOrderLoading,
  } = useQuery({
    queryKey: ["orders", user?.uid],
    queryFn: Getorders,
  });
  if (!user?.uid || isOrderLoading) return <Loader />;
  return (
    <UserOcontext.Provider value={{ orders, isOrderError, isOrderLoading }}>
      {children}
    </UserOcontext.Provider>
  );
}
