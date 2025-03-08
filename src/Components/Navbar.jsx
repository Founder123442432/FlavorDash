import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Xbutton from "./buttons/Xbutton";
import logo from "/src/assets/imgs/logo.png";
import { Link, useLocation } from "react-router-dom";
import LoginForm from "./ui/loginForm";
import Avatar from "./ui/avatar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebasecon";
import { signOut } from "firebase/auth";
import AuthLoader from "./ui/authloader";
import { MainContext } from "../context/AppMainContext";
import Dropdown from "./Profile-ui/dropdown";
export default function Navbar({ LogIN, setLogIN }) {
  const [OpenNavbar, setOpenNavbar] = useState();
  const [user, loading, error] = useAuthState(auth);
  const { cart } = useContext(MainContext);

  const location = useLocation();
  useEffect(() => {
    setOpenNavbar(false);
    setLogIN(false);
  }, [location]);
  return (
    <nav className="flex     w-full  shadow-md py-4 px-4 sm:px-10 bg-black text-white font-[sans-serif] min-h-[70px] tracking-wide  ">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={logo}
          alt="logo"
          className="w-30 "
        />

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block"></li>
            <Link to="/">
              <li className="hover:text-black text-white  font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-[#fed700] rounded-2xl max-lg:border-b border-gray-300 max-lg:py-3 px-4  ">
                Home
              </li>
            </Link>
            <Link to="/Menu">
              <li className="hover:text-black text-white  font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-[#fed700] rounded-2xl max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                Menu
              </li>
            </Link>
            <Link to="/About-Us">
              <li className="hover:text-black text-white  font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-[#fed700] rounded-2xl max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                About
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-black text-white  font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-[#fed700] rounded-2xl max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                Contact
              </li>
            </Link>
            <Link to="/OrderOnline">
              <li className="hover:text-black text-white  font-semibold text-lg cursor-pointer transition-all duration-500 hover:bg-[#fed700] rounded-2xl max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                Order Online
              </li>
            </Link>
          </ul>
        </div>
        {/*mobile nav */}
        <AnimatePresence>
          {OpenNavbar && (
            <motion.ul
              initial={{ y: -1500 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ y: -1500 }}
              className={`z-70 lg:hidden  flex justify-round flex-col w-full fixed border-t-4 border-t-white h-[100dvh] bottom-0 left-0 bg-black`}
            >
              <button
                onClick={() => setOpenNavbar(false)}
                className="py-4 w-12 h-12 top-0 flex justify-center items-center cursor-pointer right-0 absolute bg-[#fed700] text-black "
              >
                <Xbutton />
              </button>
              <Link to="/">
                <li className="mt-15  h-24 flex items-center text-3xl border-b-white text-white  font-semibold s cursor-pointer transition-all duration-700  hover:bg-amber-300  max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                  Home
                </li>
              </Link>
              <Link to="/Menu">
                <li className="h-24 flex items-center text-3xl border-b-white text-white  font-semibold  cursor-pointer transition-all duration-700 hover:bg-amber-300   max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                  Menus
                </li>
              </Link>
              <Link to="/About-Us">
                <li className="h-24 flex items-center text-3xl border-b-white text-white  font-semibold  cursor-pointer transition-all duration-700 hover:bg-amber-300  max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                  About
                </li>
              </Link>
              <Link to="/Contact">
                <li className="h-24 flex items-center text-3xl border-b-white text-white  font-semibold  cursor-pointer transition-all duration-700 hover:bg-amber-300  max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                  Contact
                </li>
              </Link>
              <Link to="/OrderOnline">
                <li className="h-24 flex items-center text-3xl border-b-white text-white  font-semibold  cursor-pointer transition-all duration-700 hover:bg-amber-300  max-lg:border-b border-gray-300 max-lg:py-3 px-4 ">
                  Order Online
                </li>
              </Link>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="flex  max-lg:ml-auto space-x-4">
          <Link to="/cart">
            <button className="px-4 relative py-2 text-sm rounded-full font-bold text-gray-100  hover:text-black cursor-pointer border-2 bg-transparent hover:bg-gray-50 transition-all ease-in-out duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-red-100 transform bg-red-600  rounded-full">
                {cart.length}
              </span>
            </button>
          </Link>

          <>
            {loading ? (
              <AuthLoader />
            ) : (
              <>
                {!user ? (
                  <button
                    onClick={() => setLogIN(!LogIN)}
                    className="px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-[#fed700] bg-[#fed700] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white cursor-pointer"
                  >
                    Login
                  </button>
                ) : (
                  <Avatar />
                )}
              </>
            )}
          </>

          <button
            onClick={() => setOpenNavbar((OpenNavbar) => !OpenNavbar)}
            className="lg:hidden  cursor-pointer md:flex sm:flex  justify-center p-2 items-center w-auto h-auto rounded-full   bg-white text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {LogIN && <LoginForm setLogIN={setLogIN} />}
      </AnimatePresence>
    </nav>
  );
}
