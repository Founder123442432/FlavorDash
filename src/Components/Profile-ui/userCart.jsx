import React, { useContext } from "react";
import { MainContext } from "../../context/AppMainContext";
import useTitle from "../../customHooks/usetitle";

export default function UserCart() {
  const { cart } = useContext(MainContext);
  useTitle("In Your Cart");

  return (
    <div className="flex w-full flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-yellow-400 text-black py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <span className="text-sm font-semibold">{cart.length} items</span>
      </div>

      {/* Cart Items */}
      {cart.length === 0 && (
        <div className="flex-grow w-full flex items-center justify-center">
          {" "}
          no items found{" "}
        </div>
      )}
      <div className="flex-grow p-4">
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.cartId}
              className="flex items-center border-b border-gray-800 pb-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-yellow-400 font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
