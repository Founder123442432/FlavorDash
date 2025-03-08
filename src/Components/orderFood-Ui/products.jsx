import { useContext, useEffect, useState } from "react";
import Banner from "../home-ui/banner";
import FiltterIcon from "../ui/svgs/filter";
import { MainContext } from "../../context/AppMainContext";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";
import notFoundError from "/src/assets/imgs/notfound.png";
export default function Products({ setSmsb, Smsb, Filters }) {
  const {
    products,

    ProductsError,
    AddToWishlist,
    Wishlist,
  } = useContext(MainContext);

  const [ProductsFiltered, setProductsFiltered] = useState();
  useEffect(() => {
    let filtered = products;
    if (Filters.Availability) {
      filtered = filtered.filter(
        (product) => product.availability == Filters.availability
      );
    }
    if (Filters.category) {
      filtered = filtered.filter(
        (product) => product.category === Filters.category
      );
    }
    if (Filters.size) {
      filtered = filtered.filter((product) =>
        product.sizes.includes(Filters.size)
      );
    }
    if (Filters.price) {
      filtered = filtered.filter(
        (product) => product.prices.Regular >= Filters.price
      );
    }
    if (Filters.type) {
      filtered = filtered.filter((product) => product.type === Filters.type);
    }
    setProductsFiltered(filtered);
  }, [Filters, products]);

  return (
    <div className="w-full h-auto">
      <button
        onClick={() => setSmsb(!Smsb)}
        className="h-fit p-1 cursor-pointer md:fixed lg:hidden sm:fixed fixed z-50 top-auto left-0 bg-white "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fill=""
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </button>
      {ProductsFiltered?.length === 0 && (
        <div className="flex-col w-full text-white h-screen flex items-center  bg-black flex-wrap justify-center ">
          <img className="w-24 h-24" src={notFoundError} alt="not found" />
          <p className="mt-5"> Products Not Found</p>
        </div>
      )}
      <div className="flex w-full relative bg-black h-auto pb-70 flex-wrap justify-center  py-12  gap-4">
        {ProductsFiltered?.map((item) => (
          <Link key={item.id} to={`/Order/${item.id}`}>
            <div className="bg-[#C71585] z-40 w-70  flex flex-col rounded-md cursor-pointer transition-all relative overflow-hidden">
              <div className="p-4 sm:p-6">
                <div
                  onClick={() =>
                    AddToWishlist({
                      name: item?.name,
                      description: item?.description,
                      id: item?.id,
                      category: item?.category,
                      img: item?.img,
                      quantity: 1,
                    })
                  }
                  className="bg-pink-100 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer absolute top-2 right-2 sm:top-4 sm:right-4"
                >
                  {Wishlist?.map((item) => item.id).includes(item.id) ? (
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
                      width="16px"
                      className="fill-pink-600 z-50 inline-block"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  )}
                </div>

                <div className="w-full ">
                  <div>
                    <img
                      src={item.img}
                      alt="Product"
                      className="w-full   h-60 mt-2 aspect-[230/220]  object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-full text-center bg-[#ffffff] p-4">
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-black">
                    {item.name}
                  </h3>
                  <h4 className="text-sm sm:text-base text-black font-bold mt-4">
                    ${Object.values(item?.prices || { na: "N/A" })[0]}
                    <span className="text-gray-400 ml-2 font-medium">
                      {item.type || "N/A"}
                    </span>
                  </h4>
                </div>

                <button
                  type="button"
                  className="w-full cursor-pointer flex items-center justify-center gap-2 mt-6 px-2 py-2.5 sm:px-4 bg-black  text-sm text-white font-semibold rounded-md transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="white"
                      fill="white"
                    ></path>
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
