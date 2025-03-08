import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebasecon";
import { Link, useLocation } from "react-router-dom";

export default function ProfileSidebar() {
  const [user] = useAuthState(auth);
  const LocationName = useLocation().pathname;

  return (
    <aside
      className={`hidden  lg:flex flex-col w-80 h-auto px-4 py-8 overflow-y-auto bg-white border-r rtl:border-l dark:bg-gray-900 dark:border-gray-700 
      `}
    >
      <div className="flex flex-col items-center mt-6 -mx-2">
        <span
          className="bg-amber-300  w-20 h-20 rounded-full flex justify-center items-center text-5xl font-medium"
          alt="avatar"
        >
          {user?.email.slice(0, 1).toUpperCase()}
        </span>
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          {user?.displayName}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link to={`/userPage/${user?.email}`}>
            <span
              className={`${
                LocationName.includes(user.email)
                  ? "bg-amber-400 text-white"
                  : "text-gray-400"
              } flex py-2 my-4 items-center px-4 hover:bg-amber-400  hover:text-white transition duration-500   rounded-lg`}
            >
              {" "}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Profile</span>
            </span>
          </Link>

          <Link to="/userPage/wishlist">
            <span
              className={`${
                LocationName.includes("wishlist")
                  ? "bg-amber-400 text-white"
                  : "text-gray-400"
              } flex items-center px-4 hover:bg-amber-400 py-2 hover:text-white transition duration-500   rounded-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <span className="mx-4 font-medium">wishlist</span>
            </span>
          </Link>
          <Link to="userPage/Order">
            <span
              className={`${
                LocationName.includes("Order")
                  ? "bg-amber-400 text-white"
                  : "text-gray-400"
              } flex py-2 my-4 items-center px-4 hover:bg-amber-400  hover:text-white transition duration-500   rounded-lg`}
            >
              {" "}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mx-4 font-medium">Order</span>
            </span>
          </Link>
          <Link to="userPage/onCart">
            <span
              className={`${
                LocationName.includes("onCart")
                  ? "bg-amber-400 text-white"
                  : "text-gray-400"
              } flex py-2 my-4 items-center px-4 hover:bg-amber-400  hover:text-white transition duration-500   rounded-lg`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="mx-4 font-medium">Cart</span>
            </span>
          </Link>
          <span className="flex items-center px-4 py-2 mt-4 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-4 font-medium">Settings</span>
          </span>
        </nav>
      </div>
    </aside>
  );
}
