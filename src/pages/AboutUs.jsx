import { useState } from "react";
import AuFirstsection from "../Components/aboutUs-Ui/AuFirstSection.jsx";
import Ausecondsection from "../Components/aboutUs-Ui/Ausecondsection.jsx";
import { motion, AnimatePresence } from "framer-motion";
import useTitle from "../customHooks/usetitle.jsx";
import useTopScroling from "../customHooks/topScroling.jsx";
export default function AboutUs() {
  useTitle("about us");
  useTopScroling();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <AuFirstsection />
        <Ausecondsection />
      </motion.div>
    </AnimatePresence>
  );
}
