import { createContext, useContext, useEffect, useState } from "react";
import { MainContext } from "./AppMainContext";
export const AppCheckoutContextEl = createContext();

export default function AppCheckoutContext({ children }) {
  const [info, setinfo] = useState(
    JSON.parse(localStorage.getItem("info")) || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    }
  );

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(info));
  }, [info]);
  const { cart } = useContext(MainContext);
  const productsIDs = cart.reduce((acc, item) => acc + item.cartId, 0);
  return (
    <AppCheckoutContextEl.Provider value={{ info, setinfo, productsIDs }}>
      {children}
    </AppCheckoutContextEl.Provider>
  );
}
