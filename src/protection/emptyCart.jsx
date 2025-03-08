import { useContext } from "react";
import { MainContext } from "../context/AppMainContext";

export default function EmptyCartProtection({ children }) {
  const { cart } = useContext(MainContext);
  return { children };
}
