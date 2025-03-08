import { useContext } from "react";
import Summary from "./summary";
import { MainContext } from "../../context/AppMainContext";
import { Link } from "react-router-dom";
export default function CartElement() {
  const { cart, Remove_from_cart, subtotal } = useContext(MainContext);

  if (cart.length == 0)
    return (
      <div className="h-screen  flex justify-center items-center">
        <p className="text-2xl font-bold">No items found</p>
      </div>
    );

  return (
    <div className="font-[sans-serif] bg-white h-full">
      <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800">Your shopping bag</h2>

        <div className="grid lg:grid-cols-3 gap-6 relative mt-6">
          <div className="lg:col-span-2 space-y-6">
            {cart?.map((product, i) => (
              <div
                key={i}
                className="p-2 bg-white shadow-[0_2px_9px_-3px_rgba(61,63,68,0.3)] relative"
              >
                <div className="grid sm:grid-cols-2 items-center gap-4">
                  <div className="bg-gradient-to-tr from-gray-300 via-gray-100 flex items-center justify-center to-gray-50 w-full h-full p-4 shrink-0 text-center">
                    <img
                      src={product.img}
                      className="w-86 h-full object-contain inline-block"
                    />
                  </div>

                  <div className="p-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.name}
                    </h3>

                    <ul className="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-4">
                      <li>Size: {product.size} </li>
                      <li>Type: {product.type} </li>
                      <li>{product.description}</li>
                    </ul>

                    <div className="flex items-center justify-between flex-wrap gap-4 mt-6">
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm text-gray-500">Qty:</h4>
                        <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max">
                          <button
                            type="button"
                            className="border-none outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2.5 h-2.5"
                              viewBox="0 0 121.805 121.804"
                            >
                              <path
                                d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                                data-original="#000000"
                              />
                            </svg>
                          </button>
                          <span className="text-gray-800 text-sm font-semibold px-3">
                            1
                          </span>
                          <button
                            type="button"
                            className="border-none outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2.5 h-2.5"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                                data-original="#000000"
                              />
                              <path
                                d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                                data-original="#000000"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-blue-600">
                          ${product.price}
                        </h4>
                      </div>
                    </div>

                    <div className="divide-x border-y grid grid-cols-2 text-center mt-6">
                      <Link
                        className="bg-transparent cursor-pointer hover:bg-amber-400 flex items-center justify-center py-3 text-gray-800 text-sm"
                        to={`/Order/${product.id}`}
                      >
                        <button type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5  fill-current mr-3 inline-block"
                            viewBox="0 0 128 128"
                          >
                            <path
                              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                              data-original="#000000"
                            ></path>
                          </svg>
                          <span className="inline-block cursor-pointer">
                            {" "}
                            View details
                          </span>
                        </button>
                      </Link>

                      <button
                        onClick={() => Remove_from_cart(product)}
                        type="button"
                        className="bg-transparent cursor-pointer hover:bg-amber-400 flex items-center justify-center py-3 text-gray-800 text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current mr-3 inline-block"
                          viewBox="0 0 390 390"
                        >
                          <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Summary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
