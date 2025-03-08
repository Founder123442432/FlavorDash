import { motion, AnimatePresence } from "framer-motion";
import ContactImg from "/src/assets/imgs/slide3.jpg";
import { useState } from "react";
import axios from "axios";
import ThxMsg from "../Components/ui/ThxMsg";
import useTitle from "../customHooks/usetitle";
export default function ContactUs() {
  useTitle("contact us");
  const [OpenSmg, setOpenSmg] = useState(false);
  const [sending, setsending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: 0,
    Website: "",
    Company: "",
    Subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setsending(true);
      await axios.post("https://formspree.io/f/xgvokqaj", formData);

      setFormData({
        name: "",
        email: "",
        message: "",
        number: 0,
        Website: "",
        Company: "",
        Subject: "",
      });
      setsending(false);
      setOpenSmg(true);
    } catch (error) {
      setsending(false);
      alert("Oops! Something went wrong.");
      console.log(error);
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="font-[sans-serif]"
      >
        <div className=" w-full h-72">
          <img
            src={ContactImg}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="-mt-28 mb-6 px-4 ">
          <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-black rounded">
            <h2 className="text-xl text-white font-bold">
              d'ont hesitate reaching aot to us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid sm:grid-cols-2 gap-6"
            >
              <div>
                <label className="text-white text-sm block mb-2">
                  * Your Name
                </label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Name"
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-white text-sm block mb-2">
                  * Your Email
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-white text-sm block mb-2">
                  Your Number
                </label>
                <input
                  onChange={handleChange}
                  value={formData.number}
                  name="number"
                  type="number"
                  placeholder="Phone No."
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-white text-sm block mb-2">Website</label>
                <input
                  name="Website"
                  onChange={handleChange}
                  value={formData.Website}
                  type="text"
                  placeholder="Website"
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-white text-sm block mb-2">Company</label>
                <input
                  onChange={handleChange}
                  value={formData.Company}
                  name="Company"
                  type="text"
                  placeholder="Company"
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div>
                <label className="text-white  text-sm block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={formData.Subject}
                  name="Subject"
                  placeholder="Subject"
                  className="w-full text-white rounded py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-600 outline-none"
                />
              </div>
              <div className="col-span-full">
                <label className="text-white text-sm block mb-2">
                  * Message
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  required
                  placeholder="Message"
                  rows="6"
                  className="w-full text-white rounded px-4 border border-gray-300 text-sm pt-3 focus:border-blue-600 outline-none"
                ></textarea>
              </div>
              <div className="flex items-center col-span-full">
                <input
                  required
                  id="checkbox1"
                  type="checkbox"
                  className="w-4 h-4 mr-3 shrink-0"
                />
                <label htmlFor="checkbox1" className="text-sm text-gray-500">
                  I agree to the{" "}
                  <span href="" className="underline">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span href="" className="underline">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`text-white ${
                  sending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }  w-max bg-yellow-500 hover:bg-yellow-600 transition  tracking-wide rounded text-sm px-4 py-2.5`}
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="#fff"
                      className="mr-2 inline"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fillRule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clipRule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
          {OpenSmg && <ThxMsg />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
