import VideoCard from "./videocard";
import video from "/src/assets/videos/video7.mp4";

import { motion } from "framer-motion";

export default function SecondSection() {
  const Parvarients = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };

  const Chilvarients = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <section className="text-gray-600 h-auto  md:mx-0 flex justify-center body-font bg-gray-900  items-center overflow-hidden">
      <motion.div
        variants={Parvarients}
        viewport={{ once: true }}
        initial="initial"
        whileInView="whileInView"
        className="lg:mx-16 md:mx-0    sm:mx-0 py-24"
      >
        <div className="flex flex-wrap">
          <motion.div variants={Chilvarients}>
            <VideoCard video={video} />
          </motion.div>
          <motion.div variants={Chilvarients}>
            <VideoCard video={video} />
          </motion.div>
          <motion.div variants={Chilvarients}>
            <VideoCard video={video} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
