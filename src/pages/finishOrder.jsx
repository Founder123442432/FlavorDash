import { useContext, useState } from "react";
import TotalInfo from "../Components/finishOrder-Ui/totalInfo";
import TotalProducts from "../Components/finishOrder-Ui/totalProducts";
import { AppCheckoutContextEl } from "../context/AppCheckoutContext";
import { MainContext } from "../context/AppMainContext";
import Msg from "../Components/finishOrder-Ui/msg";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/firebasecon";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useTitle from "../customHooks/usetitle";
import useTopScroling from "../customHooks/topScroling";
import { useNavigate } from "react-router-dom";
export default function FinishOrder() {
  useTitle("finish Your order");
  const [orderFinished, setorderFinished] = useState(false);
  const [finishingOrder, setfinishingOrder] = useState(false);
  const { info } = useContext(AppCheckoutContextEl);
  const { subtotal, cart, Empty_cart } = useContext(MainContext);
  const date = new Date();
  const orderDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} AT:${date.getHours()}:${date.getMinutes()}`;
  const [user] = useAuthState(auth);
  const ToHome = useNavigate();
  const finishOrder = {
    firstName: info.firstName,
    lastName: info.lastName,
    email: info.email,
    phone: info.phone,
    address: info.address,
    city: info.city,
    state: info.state,
    zipCode: info.zipCode,
    order: cart,
    orderDate: orderDate,
    status: "Issues",
    estimatedDelivery: "15-30 min",
    uid: user?.uid,
    subtotal,
  };

  async function SetOrder() {
    try {
      if (
        cart?.length === 0 ||
        !info.firstName ||
        !info.lastName ||
        !info.email ||
        !info.phone ||
        !info.address ||
        !info.city ||
        !info.state ||
        !info.zipCode ||
        !user?.uid
      ) {
        toast.error("no cart items or personal info found ,");
      } else {
        setfinishingOrder(true);
        const colRef = collection(db, "orders");
        await addDoc(colRef, finishOrder);
        setorderFinished(true);
        setfinishingOrder(false);
        Empty_cart();
      }
    } catch (error) {
      console.log(error);
      toast.error("unexpected Error, pleas try again");
      setfinishingOrder(false);
      setorderFinished(true);
    }
  }
  function cancel() {
    if (confirm("warning, you are about to cancel the order")) {
      Empty_cart();
      ToHome("/");
    }
  }
  return (
    <>
      <TotalInfo info={info} subtotal={subtotal} />
      <TotalProducts cart={cart} />
      <div className="flex flex-wrap justify-center gap-4 bg-black py-11">
        <button
          onClick={cancel}
          type="button"
          className="px-6 cursor-pointer py-3 text-sm font-semibold tracking-wide  border-2 text-gray-800 rounded-md bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={SetOrder}
          disabled={finishingOrder}
          type="submit"
          className={`px-6 py-3 ${
            finishingOrder ? "cursor-not-allowed" : "cursor-pointer"
          } text-sm font-semibold tracking-wide  text-white rounded-md bg-amber-400`}
        >
          {finishingOrder ? "Finishing..." : "Finish The Order"}
        </button>
      </div>
      {orderFinished && (
        <Msg
          setorderFinished={setorderFinished}
          fullName={`${info.firstName} ${info.lastName}`}
        />
      )}
    </>
  );
}
