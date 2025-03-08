import { useContext } from "react";
import AppCheckoutContext, {
  AppCheckoutContextEl,
} from "../context/AppCheckoutContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MainContext } from "../context/AppMainContext";
import { motion } from "framer-motion";
import useTitle from "../customHooks/usetitle";
export default function ShippingAddress() {
  useTitle("Shipping Address");
  const { info, setinfo, productsIDs } = useContext(AppCheckoutContextEl);
  const { Empty_cart, cart } = useContext(MainContext);
  const ToChekout = useNavigate();
  const ToHome = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (
      info.firstName &&
      info.lastName &&
      info.email &&
      info.phone &&
      info.address &&
      info.city &&
      info.state &&
      info.zipCode
    ) {
      ToChekout(`/FinishOrder/${productsIDs}`);
    } else {
      toast.error("Please fill in all fields.");
    }
  }
  function cancel() {
    if (confirm("warning, you are about to cancel the order")) {
      Empty_cart();
      ToHome("/");
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="font-sans bg-white py-40"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
            Shipping Address
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Personal Details
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={info.firstName}
                      placeholder="First name"
                      onChange={(e) =>
                        setinfo({ ...info, firstName: e.target.value })
                      }
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={info.lastName}
                      onChange={(e) =>
                        setinfo({ ...info, lastName: e.target.value })
                      }
                      placeholder="Last name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={info.email}
                      onChange={(e) =>
                        setinfo({ ...info, email: e.target.value })
                      }
                      placeholder="Email address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      value={info.phone}
                      onChange={(e) =>
                        setinfo({ ...info, phone: e.target.value })
                      }
                      placeholder="Phone number"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                Shopping Address
              </h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      value={info.address}
                      onChange={(e) =>
                        setinfo({ ...info, address: e.target.value })
                      }
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      value={info.city}
                      onChange={(e) =>
                        setinfo({ ...info, city: e.target.value })
                      }
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      value={info.state}
                      onChange={(e) =>
                        setinfo({ ...info, state: e.target.value })
                      }
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      value={info.zipCode}
                      onChange={(e) =>
                        setinfo({ ...info, zipCode: e.target.value })
                      }
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button
              onClick={cancel}
              type="button"
              className="px-6 cursor-pointer py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              type="submit"
              className="px-6 py-3 cursor-pointer text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-amber-400"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
