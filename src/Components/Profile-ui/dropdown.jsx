import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebasecon";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dropdown() {
  const [user] = useAuthState(auth);
  const toHome = useNavigate();
  async function Loagout() {
    try {
      if (confirm("sign out?")) {
        await signOut(auth);
        toHome("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      className=" absolute z-50 right-0 top-18   min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dropdown-with-icons"
    >
      <div className="p-1 space-y-0.5">
        <Link to={`/userPage/${user?.email}`}>
          <span className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Profile
          </span>
        </Link>
        <Link to="userPage/Order">
          <span className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-103 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Purchases
          </span>
        </Link>
        <Link to="/userPage/wishlist">
          <span className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-103 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
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
            Wishlist
          </span>
        </Link>
        <span
          onClick={Loagout}
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-103 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
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
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          Logout
        </span>
      </div>
    </div>
  );
}
