import React, { useContext } from "react";
import { MainContext } from "../../context/AppMainContext";
import { Link } from "react-router-dom";
import useTitle from "../../customHooks/usetitle";

const WishlistDisplay = () => {
  const { Wishlist, Remove_from_Wishlist } = useContext(MainContext);
  useTitle("Wishlist");
  return (
    <div className="bg-black w-full text-white min-h-screen">
      {/* Header - Different style from cart */}
      <div className="bg-black border-b border-yellow-400 py-4 px-6">
        <h1 className="text-xl font-bold text-yellow-400">My Favorites</h1>
        <p className="text-gray-400 text-sm mt-1">
          Items you've saved for later
        </p>
      </div>

      {/* Wishlist Grid - Different layout from cart's list */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {Wishlist?.map((item) => (
          <Link className="z-10" key={item.id} to={`/Order/${item.id}`}>
            <div className="bg-gray-900 relative rounded-lg cursor-pointer overflow-hidden border border-gray-800 hover:border-yellow-400 transition-colors">
              <div className="flex">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="p-3 flex-grow">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {item.description || "Unknown"}
                  </p>
                  <p className="text-yellow-400 font-bold mt-2">
                    {" "}
                    {item.category}{" "}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    Remove_from_Wishlist(item);
                  }}
                  className="bg-red-500 z-50 absolute bottom-2 right-2 w-7 h-7 cursor-pointer rounded-full flex items-center justify-center "
                >
                  x
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state message - styled differently */}
      {Wishlist.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
            <span className="text-black text-2xl">★</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Your favorites list is empty
          </h3>
          <p className="text-gray-400 max-w-xs">
            Save your favorite meals to order them again quickly
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistDisplay;
