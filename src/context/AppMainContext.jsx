import { useQuery } from "@tanstack/react-query";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth, db } from "../firebase/firebasecon";
export const MainContext = createContext();
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
export default function AppMainContext({ children }) {
  const [user, loading, error] = useAuthState(auth);
  async function Getproducts() {
    try {
      const colRef = collection(db, "products");
      const querySnapshot = await getDocs(colRef);
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return products;
    } catch (error) {
      console.log(error);
    }
  }
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: ProductsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: Getproducts,
  });

  const initialState = {
    cart: JSON.parse(localStorage.getItem("Cart")) || [],
    Wishlist: JSON.parse(localStorage.getItem("Wishlist")) || [],
  };
  function reducer(state, action) {
    switch (action.type) {
      case "Add_To_Cart":
        return { ...state, cart: [...state.cart, action.payload] };

      case "Remove_From_Cart":
        return {
          ...state,

          cart: state.cart.filter((item) => item.cartId !== action.payload),
        };
      case "Empty_cart":
        return { ...state, cart: [] };
      case "Add_To_Wishlist":
        const existingItem = state.Wishlist.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          return {
            ...state,
            Wishlist: state.Wishlist.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        } else {
          return {
            ...state,
            Wishlist: [...state.Wishlist, action.payload],
          };
        }
      case "Remove_From_Wishlist":
        return {
          ...state,
          Wishlist: state.Wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      default:
        return state;
    }
  }
  /*add to cart function */
  function AddToCart(item) {
    try {
      dispatch({ type: "Add_To_Cart", payload: item });
      toast.success("Product added to cart", {
        position: "top-center",
        style: { fontSize: "18px", width: "350px" },
      });
    } catch {
      toast.error("unexpected Error, pleas try again");
    }
  }
  /*remove from cart */
  function Remove_from_cart(item) {
    try {
      dispatch({ type: "Remove_From_Cart", payload: item.cartId });
      toast.warn("item removed from cart");
    } catch {
      toast.error("unexpected Error, pleas try again");
    }
  }
  /* Empty cart */
  function Empty_cart() {
    dispatch({ type: "Empty_cart" });
  }
  /* add to wishlist function */
  function AddToWishlist(item) {
    try {
      if (!user) {
        toast.warn("please login first");
      } else {
        dispatch({ type: "Add_To_Wishlist", payload: item });

        if (!Wishlist?.map((item) => item.id).includes(item.id)) {
          toast.info("Product added to wishlist", {
            position: "top-center",
            style: { fontSize: "18px", width: "350px" },
          });
        } else {
          toast.warn("already in wishlist");
        }
      }
    } catch {
      toast.error("unexpected Error, pleas try again");
    }
  }
  function Remove_from_Wishlist(itemId) {
    try {
      dispatch({ type: "Remove_From_Wishlist", payload: itemId });
    } catch {
      toast.error("unexpected Error, pleas try again");
    }
  }
  const [{ cart, Wishlist }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
  }, [Wishlist]);
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  return (
    <MainContext.Provider
      value={{
        products,
        isProductsLoading,
        ProductsError,
        AddToCart,
        Remove_from_cart,
        Empty_cart,
        AddToWishlist,
        cart,
        Wishlist,
        subtotal,
        Remove_from_Wishlist,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
