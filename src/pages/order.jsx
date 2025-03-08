import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/AppMainContext";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../Components/ui/Loader";
import { toast } from "react-toastify";
import useTitle from "../customHooks/usetitle";
export default function Order() {
  const [chosenSize, setchosenSize] = useState({
    size: "",
    index: 0,
  });
  const {
    products,
    isProductsLoading,
    ProductsError,
    AddToCart,
    cart,

    AddToWishlist,
    Wishlist,
  } = useContext(MainContext);
  const { id } = useParams();
  const product = products?.find((product) => product.id === id);
  useTitle(`order ${product?.name}`);
  const cartProduct = {
    name: product?.name,
    size: chosenSize.size,
    id: product?.id,
    cartId: product?.id + Math.random().toString().slice(2),
    category: product?.category,
    img: product?.img,
    price: Object.values(product?.prices || {})[chosenSize.index],
    type: product?.type,
    quantity: 1,
    description: product?.description,
  };
  const wishlistProduct = {
    name: product?.name,
    description: product?.description,
    id: product?.id,
    category: product?.category,
    img: product?.img,
    quantity: 1,
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  if (isProductsLoading) return <Loader />;
  return (
    <div className="font-sans bg-white">
      <motion.div
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 lg:max-w-7xl max-w-4xl mx-auto"
      >
        <div className="grid  items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] py-20 rounded">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded shadow-md relative">
              <img
                src={product?.img}
                alt="Product"
                className="w-4/5 aspect-[251/171] rounded object-cover mx-auto"
              />
              <button type="button" className="absolute top-4 right-4">
                {Wishlist.map((item) => item.id).includes(
                  wishlistProduct?.id
                ) ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#ccc"
                    className="mr-1 hover:fill-[#333]"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center rounded p-2 shadow-md cursor-pointer">
                <img
                  src={product?.img}
                  alt="Product2"
                  className="w-full object-cover object-top"
                />
              </div>
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center rounded p-2 shadow-md cursor-pointer">
                <img
                  src={product?.img}
                  alt="Product2"
                  className="w-full object-cover object-top"
                />
              </div>
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center rounded p-2 shadow-md cursor-pointer">
                <img
                  src={product?.img}
                  alt="Product2"
                  className="w-full object-cover object-top"
                />
              </div>
              <div className="w-20 h-16 sm:w-24 sm:h-20 flex items-center justify-center rounded p-2 shadow-md cursor-pointer">
                <img
                  src={product?.img}
                  alt="Product2"
                  className="w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 mx-5">
            <h3 className="text-3xl mb-5 font-bold text-gray-800">
              {product?.name} | {product?.type}
            </h3>
            <p className=" space-x-1 mt-2">
              category: <span className="font-bold ">{product?.category}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">{product?.description}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-gray-800 text-2xl font-bold">
                $
                {
                  Object.values(product?.prices || { na: "N/A" })[
                    chosenSize.index
                  ]
                }
              </p>
              <p className="text-gray-500 text-base">Tax included</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Choose a Size</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {Object.keys(product?.prices || { na: "N/A" }).map(
                  (size, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setchosenSize({ index: i, size: size })}
                      className={`w-25 ${
                        chosenSize.size == size && "border-2 border-black"
                      } rounded-md h-10 cursor-pointer bg-yellow-400  text-white   shrink-0 transition-all`}
                    >
                      {size}{" "}
                    </button>
                  )
                )}
              </div>
            </div>
            {chosenSize.size && (
              <div className="flex gap-4 mt-12 max-w-md">
                <button
                  onClick={() => AddToCart(cartProduct)}
                  type="button"
                  className="w-full cursor-pointer px-4 py-2.5 outline-none border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => AddToWishlist(wishlistProduct)}
                  type="button"
                  className="w-full cursor-pointer px-4 py-2.5 outline-none border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Buy later
                </button>
              </div>
            )}{" "}
          </div>
        </div>

        <div className="mt-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6">
          <h3 className="text-xl font-bold text-gray-800">
            Product information
          </h3>
          <ul className="mt-4 space-y-6 text-gray-800">
            <li className="text-sm">
              TYPE <span className="ml-4 float-right">{product?.type} </span>
            </li>
            <li className="text-sm">
              category{" "}
              <span className="ml-4 float-right"> {product?.category} </span>
            </li>
            <li className="text-sm">
              ingredients{" "}
              <span className="ml-4 float-right">
                {product?.ingredients.map((item, i) => (
                  <span key={i} className="font-bold mr-1">
                    | {item}
                  </span>
                ))}
              </span>
            </li>
            <li className="text-sm">
              prices
              <span className="ml-4 float-right">
                {Object.entries(product?.prices || {}).join(" | ")}
              </span>
            </li>
            <li className="text-sm">
              sizes
              <span className="ml-4 float-right">
                {" "}
                {product?.sizes.map((size) => (
                  <span key={size}>
                    <b>|</b> {size}{" "}
                  </span>
                ))}{" "}
              </span>
            </li>
            <li className="text-sm">
              name <span className="ml-4 float-right"> {product?.name} </span>
            </li>
            <li className="text-sm">
              ID <span className="ml-4 float-right"> {product?.id} </span>
            </li>
            <li className="text-sm">
              availability
              <span className="ml-4 float-right">
                {product?.availability && "Available"}
              </span>
            </li>
            <li className="text-sm">
              calories
              <span className="ml-4 float-right">
                {" "}
                {Object?.entries(product?.calories || {}).join(" | ")}{" "}
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
