import Review from "../ui/review";
import cl1 from "/src/assets/imgs/cl1.jpg";
import cl2 from "/src/assets/imgs/cl2.jpg";
import cl3 from "/src/assets/imgs/cl3.jpg";
import cl4 from "/src/assets/imgs/cl4.jpg";
import cl5 from "/src/assets/imgs/cl5.jpg";
import cl6 from "/src/assets/imgs/cl6.jpg";
import { motion } from "framer-motion";

export default function Reviews() {
  const clientReviews = [
    {
      name: "Emily R.",
      review:
        "The food was absolutely amazing! Everything was fresh, flavorful, and delivered on time. I’m so impressed with the quality and service. Highly recommend!",
      rating: 5,
      date: "2025-01-10",
      img: cl1,
    },
    {
      name: "James K.",
      review:
        "I’ve ordered from here multiple times, and they never disappoint. The portions are generous, and the delivery staff is always polite and prompt.",
      rating: 4.5,
      date: "2025-01-15",
      img: cl2,
    },
    {
      name: "Sophia M.",
      review:
        "The desserts are out of this world! The chocolate lava cake is my favorite. I can’t wait to order again!",
      rating: 5,
      date: "2025-01-18",
      img: cl3,
    },
    {
      name: "Michael P.",
      review:
        "Good food but delivery was slightly delayed. Still, the taste and quality made up for it. Will order again!",
      rating: 4,
      date: "2025-01-20",
      img: cl4,
    },
    {
      name: "Olivia H.",
      review:
        "The packaging was neat, and the food arrived hot and fresh. I love the variety on the menu—it’s hard to pick just one favorite dish!",
      rating: 5,
      date: "2025-01-22",
      img: cl5,
    },
    {
      name: "Daniel L.",
      review:
        "Great value for money! The family combo deals are perfect for our weekend get-togethers. Keep up the fantastic work!",
      rating: 4.5,
      date: "2025-01-25",
      img: cl6,
    },
  ];

  // Motion Variants
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-md sm:max-w-3xl py-10 lg:max-w-6xl mx-auto p-4 font-[sans-serif]">
      <h6 className="text-4xl font-semibold mb-4">Reviews</h6>
      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 space-y-4"
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
      >
        {clientReviews.map((review, index) => (
          <motion.div key={index} variants={childVariants}>
            <Review
              name={review.name}
              date={review.date}
              text={review.review}
              img={review.img}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
