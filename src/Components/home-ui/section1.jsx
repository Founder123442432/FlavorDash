import { motion, AnimatePresence } from "framer-motion";
import img2 from "/src/assets/imgs/img3.jpg";
import img3 from "/src/assets/imgs/img6.jpg";
import { Link } from "react-router-dom";
export default function FirstSection({ h1, h1span, p, img, reverse }) {
  return (
    <div className="bg-gray-800 w-full font-[sans-serif]">
      <div className=" grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
        {!reverse && (
          <motion.img
            key="img3"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={img3}
            className="w-full h-full object-cover shrink-0"
          />
        )}
        <div className="p-8 mb-32 ">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="sm:text-4xl text-2xl font-bold text-white"
          >
            {h1} <span className="text-orange-400"> {h1span} </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ lineHeight: "2" }}
            className="mt-4 text-base-lg text-sm text-gray-300"
          >
            {p}
          </motion.p>
          <Link to="OrderOnline">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              type="button"
              className="px-6 cursor-pointer py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
            >
              Get started
            </motion.button>
          </Link>
        </div>
        {reverse && (
          <motion.img
            key="img2"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={img2}
            className="w-full h-full object-cover shrink-0"
          />
        )}
      </div>
    </div>
  );
}
