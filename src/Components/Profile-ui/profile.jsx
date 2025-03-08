import { useAuthState } from "react-firebase-hooks/auth";
import benner from "/src/assets/imgs/bannerimg.jpg";
import { auth } from "../../firebase/firebasecon";
import { useContext } from "react";
import { AppCheckoutContextEl } from "../../context/AppCheckoutContext";
import useTitle from "../../customHooks/usetitle";
export default function Profile() {
  const [user] = useAuthState(auth);
  const { info } = useContext(AppCheckoutContextEl);
  useTitle("profile");
  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img
            src={benner}
            draggable={false}
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[11rem]"
          />{" "}
          <div className="sm:w-[80%] w-[90%] mx-auto flex">
            <span
              alt="User Profile"
              className=" w-40 h-40 rounded-4xl  border-4 border-amber-400 bg-white flex justify-center items-center text-6xl outline-offset-2 outline-blue-500 relative  bottom-[4rem]"
            >
              {user?.email.slice(0, 1).toUpperCase()}
            </span>

            <h1 className="w-full text-left my-4 sm:mx-4 pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl text-xl font-serif">
              {user?.displayName || "N/A"}
            </h1>
          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 -top-4">
            <p className="w-fit text-gray-700  text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              debitis labore consectetur voluptatibus mollitia dolorem veniam
              omnis ut quibusdam minima sapiente repellendus asperiores
              explicabo, eligendi odit, dolore similique fugiat dolor,
              doloremque eveniet. Odit, consequatur. Ratione voluptate
              exercitationem hic eligendi vitae animi nam in, est earum culpa
              illum aliquam.
            </p>

            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">
                        full Name
                      </dt>{" "}
                      <dd className="text-lg font-semibold">
                        {user.displayName ||
                          info.firstName + " " + info.lastName ||
                          "N/A"}{" "}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">State</dt>
                      <dd className="text-lg font-semibold">
                        {info.state || "N/A"}{" "}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">city</dt>
                      <dd className="text-lg font-semibold">
                        {info.city || "N/A"}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">
                        address
                      </dt>
                      <dd className="text-lg font-semibold">
                        {info.address || "N/A"}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        {info.phone || "N/A"}{" "}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">Email</dt>
                      <dd className="text-lg font-semibold">
                        {user?.email || "N/A"}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg ">
                        zipCode
                      </dt>
                      <dd className="text-lg font-semibold ">
                        {info?.zipCode || "N/A"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
