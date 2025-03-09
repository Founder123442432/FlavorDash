import CategoryButton from "../buttons/categoryButton";
import FiltterIcon from "../ui/svgs/filter";
import pizza from "/src/assets/imgs/categorys/pizza.png";
import burrito from "/src/assets/imgs/categorys/burrito.png";
import charcuterie from "/src/assets/imgs/categorys/charcuterie.png";
import fastfood from "/src/assets/imgs/categorys/fast-food.png";
import fish from "/src/assets/imgs/categorys/fish.png";
import flatbread from "/src/assets/imgs/categorys/flatbread.png";
import gelato from "/src/assets/imgs/categorys/gelato.png";
import hamburger from "/src/assets/imgs/categorys/hamburger.png";
import salad from "/src/assets/imgs/categorys/salad.png";
import sandwich from "/src/assets/imgs/categorys/sandwich.png";
import spaguetti from "/src/assets/imgs/categorys/spaguetti.png";
import taco from "/src/assets/imgs/categorys/taco.png";
import SizeButton from "../buttons/sizeButton";
import Food from "/src/assets/imgs/categorys/food.png";
import Drink from "/src/assets/imgs/categorys/drink.png";
import Sweet from "/src/assets/imgs/categorys/sweet.png";
import ClearFilterButton from "../buttons/clearFilterButton";

import { motion, AnimatePresence } from "framer-motion";
import useStopscroll from "../../customHooks/StopScroling";
export default function SmMsSidebar({ setSmsb, Smsb, setFilters, Filters }) {
  useStopscroll();
  return (
    <>
      <div
        onClick={() => setSmsb(!Smsb)}
        className="w-full lg:hidden fixed   bottom-0 right-0 left-0 z-55 top-0   backdrop-blur-2xl"
      ></div>
      <motion.aside
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.3 }}
        className="flex min-w-auto sm:h-screen lg:hidden top-0 fixed flex-col md:fixed bottom-0    border-r-1 border-gray-600  sm:w-auto md:w-90   px-5 py-3 overflow-y-auto bg-black z-56"
      >
        <span className="relative border-b-1 pb-3 flex items-center text-white text-lg font-bold">
          <FiltterIcon />

          <span className="ml-2"> Filters</span>
          <button onClick={() => setSmsb(!Smsb)} className="absolute right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 hover:scale-150 ease-in-out duration-300 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </span>

        <div className="flex flex-col justify-between flex-1  mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 mb-3 font-bold block text-sm text-gray-500 uppercase dark:text-gray-400">
                Category
              </label>

              <div className="flex justify-around flex-wrap gap-2">
                <CategoryButton
                  onClick={() => setFilters({ ...Filters, category: "Pizza" })}
                  title="Pizza"
                  Filters={Filters.category}
                  img={pizza}
                />
                <CategoryButton
                  onClick={() =>
                    setFilters({ ...Filters, category: "Burrito" })
                  }
                  Filters={Filters.category}
                  title="Burrito"
                  img={burrito}
                />
                <CategoryButton
                  onClick={() =>
                    setFilters({ ...Filters, category: "charcuterie" })
                  }
                  title="charcuterie"
                  Filters={Filters.category}
                  img={charcuterie}
                />
                <CategoryButton
                  onClick={() =>
                    setFilters({ ...Filters, category: "fastfood" })
                  }
                  title="fastfood"
                  Filters={Filters.category}
                  img={fastfood}
                />
                <CategoryButton
                  onClick={() =>
                    setFilters({ ...Filters, category: "Main Course" })
                  }
                  title="fish"
                  Filters={Filters.category}
                  img={fish}
                />
                <CategoryButton
                  onClick={() => setFilters({ ...Filters, category: "Pasta" })}
                  title="Pasta"
                  img={flatbread}
                  Filters={Filters.category}
                />
                <CategoryButton
                  onClick={() => setFilters({ ...Filters, category: "gelato" })}
                  title="gelato"
                  img={gelato}
                  Filters={Filters.category}
                />
                <CategoryButton
                  onClick={() =>
                    setFilters({ ...Filters, category: "Appetizer" })
                  }
                  Filters={Filters.category}
                  title="Appetizer"
                  img={hamburger}
                />
                <CategoryButton
                  onClick={() => setFilters({ ...Filters, category: "Wraps" })}
                  title="Wraps"
                  img={sandwich}
                  Filters={Filters.category}
                />
              </div>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 mb-3 font-bold block text-sm text-gray-500 uppercase dark:text-gray-400">
                Availability
              </label>
              <div className=" flex items-center">
                <label
                  htmlFor="available"
                  draggable
                  className="px-3 cursor-pointer text-xl font-bold block text-white"
                >
                  available
                </label>

                <input
                  id="available"
                  onChange={(e) =>
                    setFilters({
                      ...Filters,
                      availability: e.target.checked,
                    })
                  }
                  className="w-5 h-5 accent-white cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 mb-3 font-bold block text-sm text-gray-500 uppercase dark:text-gray-400">
                Size
              </label>
              <div className="flex justify-evenly">
                <SizeButton
                  Filters={Filters.size}
                  onClick={() => setFilters({ ...Filters, size: "Small" })}
                  text="Small"
                />
                <SizeButton
                  onClick={() => setFilters({ ...Filters, size: "Medium" })}
                  text="Medium"
                  Filters={Filters.size}
                />
                <SizeButton
                  onClick={() => setFilters({ ...Filters, size: "Large" })}
                  text="Large"
                  Filters={Filters.size}
                />
              </div>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 mb-3 font-bold block text-sm text-gray-500 uppercase dark:text-gray-400">
                Price
              </label>
              <div>
                <input
                  className="w-full  accent-amber-400 h-5 cursor-pointer"
                  step={1}
                  type="range"
                  min="0"
                  value={Filters.price}
                  onChange={(e) =>
                    setFilters({ ...Filters, price: Number(e.target.value) })
                  }
                  max="50"
                />
                <div className="flex justify-between mt-3">
                  <span
                    draggable
                    className="w-20 font-medium h-5 flex items-center py-3  justify-center bg-white"
                  >
                    {Filters.price || 0} $
                  </span>
                  <span
                    draggable
                    className="w-20 h-5 font-medium flex items-center py-3  justify-center bg-white"
                  >
                    200 $
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3 ">
              <label className="px-3 mb-3 font-bold block text-sm text-gray-500 uppercase dark:text-gray-400">
                Type
              </label>
              <div className="flex justify-between">
                <button
                  onClick={() => setFilters({ ...Filters, type: "Food" })}
                  className={`${
                    Filters.type == "Food"
                      ? "text-white bg-yellow-400 "
                      : "bg-white text-black"
                  } cursor-pointer  flex gap-2 items-center  px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-400 hover:text-white transition-all ease-in duration-200`}
                >
                  <img
                    className="w-7 rounded-full border bg-amber-400 "
                    src={Food}
                  />
                  <span>Food</span>
                </button>
                <button
                  onClick={() => setFilters({ ...Filters, type: "Drink" })}
                  className={`${
                    Filters.type == "Drink"
                      ? "text-white bg-yellow-400 "
                      : "bg-white text-black"
                  } cursor-pointer flex gap-2 items-center px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-400 hover:text-white transition-all ease-in duration-200`}
                >
                  <img
                    className="w-7 rounded-full border bg-amber-400 "
                    src={Drink}
                  />
                  <span>Drink</span>
                </button>
                <button
                  onClick={() => setFilters({ ...Filters, type: "Dessert" })}
                  className={`${
                    Filters.type == "Dessert"
                      ? "text-white bg-yellow-400 "
                      : "bg-white text-black"
                  } cursor-pointer flex gap-2 items-center  px-4 py-2 rounded-lg font-medium text-sm hover:bg-yellow-400 hover:text-white transition-all ease-in duration-200`}
                >
                  <img
                    className="w-7 rounded-full border bg-amber-400 "
                    src={Sweet}
                  />
                  <span>Dessert</span>
                </button>
              </div>
              {/*clear filter button */}

              {Filters && (
                <ClearFilterButton
                  onClick={() =>
                    setFilters({
                      category: "",
                      size: "",
                      price: 0,
                      type: "",
                      availability: true,
                    })
                  }
                />
              )}
            </div>
          </nav>
        </div>
      </motion.aside>
    </>
  );
}
