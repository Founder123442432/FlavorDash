import S3img from "/src/assets/videos/video7.mp4";
import { motion, AnimatePresence } from "framer-motion";
export default function Section3() {
  const varients = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
      <video
        autoPlay
        muted
        loop
        src={S3img}
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
        <motion.h5
          variants={varients}
          initial="initial"
          whileInView="whileInView"
          className="text-white sm:text-4xl text-2xl font-bold mb-6"
        >
          Where Passion Meets Flavor
        </motion.h5>
        <motion.p
          variants={varients}
          initial="initial"
          whileInView="whileInView"
          className="text-base font- text-center text-white"
        >
          At FlavorDash, food is more than just a meal—it’s a way to bring
          people together. We started with one goal in mind: to deliver food
          that tastes like home but feels like a five-star dining experience.
          From our expert chefs to our delivery team, we’re all about making
          your life easier and your meals unforgettable.
        </motion.p>
        <motion.button
          variants={varients}
          initial="initial"
          whileInView="whileInView"
          type="button"
          className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 "
        >
          Getting started now
        </motion.button>
      </div>
    </div>
  );
}
