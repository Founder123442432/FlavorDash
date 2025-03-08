import CartElement from "../Components/cart/cartElement";
import { motion } from "framer-motion";
import useTitle from "../customHooks/usetitle";
export default function Cart() {
  useTitle("cart");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <CartElement />
    </motion.div>
  );
}
