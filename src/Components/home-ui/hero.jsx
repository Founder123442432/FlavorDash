import { useEffect, useState } from "react";
import banner1 from "/src/assets/imgs/slide1.jpg";
import banner2 from "/src/assets/imgs/slide2.jpg";
import banner3 from "/src/assets/imgs/slide3.jpg";
import banner4 from "/src/assets/imgs/slide4.jpg";
import banner5 from "/src/assets/imgs/slide5.jpg";
import banner6 from "/src/assets/imgs/slide6.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
export default function Hero() {
  const bannerImgs = [banner1, banner2, banner3, banner4, banner5, banner6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const inv = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide < bannerImgs.length - 1 ? prevSlide + 1 : 0
      );
    }, 4000);

    return () => clearInterval(inv);
  }, [bannerImgs.length]);

  return (
    <header className="relative  h-[100dvh] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          src={bannerImgs[currentSlide]}
          alt="Banner Image"
          className="shadow-2xl shadow-black absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="min-h-[350px] relative z-40 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:text-4xl lg:text-6xl lg:w-[800px] text-2xl font-bold mb-6"
        >
          Delicious Meals, Delivered to Your Doorstep!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="sm:text-lg text-base text-center text-gray-200"
        >
          Savor the taste of fresh, handcrafted dishes prepared with love. Your
          cravings are just a click awa{" "}
        </motion.p>
        <Link to="OrderOnline">
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            type="button"
            className="mt-12 cursor-pointer bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:border-transparent hover:bg-[#fed700] hover:text-black  "
          >
            OrderOnline
          </motion.button>
        </Link>
      </div>
    </header>
  );
}
