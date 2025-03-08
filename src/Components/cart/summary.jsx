import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebasecon";
import { useState } from "react";

export default function Summary({ subtotal }) {
  const ToshippingAddress = useNavigate();
  const [user] = useAuthState(auth);
  const [noUser, setNoUser] = useState(false);
  function NavigateToshippingAddress() {
    if (!user) {
      setNoUser(true);
    } else {
      setNoUser(false);
      ToshippingAddress("/shippingAddress");
    }
  }
  return (
    <div className="bg-white h-max p-4 shadow-[0_2px_9px_-3px_rgba(61,63,68,0.3)] sticky top-0">
      <h3 className="text-lg font-bold text-gray-800">Order Summary</h3>

      <ul className="text-gray-800 text-sm space-y-3 mt-4">
        <li className="flex flex-wrap gap-4">
          Subtotal <span className="ml-auto font-bold">${subtotal} </span>
        </li>
        <li className="flex flex-wrap gap-4">
          Shipping <span className="ml-auto font-bold">Free</span>
        </li>
        <li className="flex flex-wrap gap-4">
          Tax <span className="ml-auto font-bold">$0.00</span>
        </li>
        <li className="flex flex-wrap gap-4 font-bold">
          Total <span className="ml-auto">${subtotal} </span>
        </li>
      </ul>

      <button
        onClick={NavigateToshippingAddress}
        type="button"
        className="mt-6 cursor-pointer text-sm px-4 py-2.5 w-full bg-blue-700 hover:bg-blue-800 tracking-wide text-white"
      >
        Checkout
      </button>
      {noUser && (
        <span className="text-sm text-red-600 block mt-2">
          pleas log in first{" "}
        </span>
      )}

      <div className="mt-6 space-y-6">
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-2">
            Secure payment
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Experience peace of mind with our secure payment options, ensuring
            your transactions are protected and reliable.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-2">
            Free delivery
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Enjoy the convenience of free delivery on all your orders, providing
            a cost-effective and seamless shopping experience.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-2">
            Easy to return
          </h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Simplify your shopping experience with hassle-free returns. Our easy
            return process ensures convenience and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
