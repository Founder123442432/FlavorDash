import { useContext, useState } from "react";
import SmMsSidebar from "../Components/orderFood-Ui/SmMsSidebar";
import Products from "../Components/orderFood-Ui/products";
import Sidebar from "../Components/orderFood-Ui/sidebar";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import useTopScroling from "../customHooks/topScroling";
import useTitle from "../customHooks/usetitle";
import { MainContext } from "../context/AppMainContext";
import Loader from "../Components/ui/Loader";
export default function OrderFood() {
  useTopScroling();
  useTitle("order food");
  const [Smsb, setSmsb] = useState(false);
  const [Filters, setFilters] = useState({
    category: "",
    size: "",
    price: 0,
    type: "",
    availability: true,
  });
  const { isProductsLoading } = useContext(MainContext);
  if (isProductsLoading) return <Loader />;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex"
    >
      <Sidebar Filters={Filters} setFilters={setFilters} />
      <AnimatePresence>
        {Smsb && (
          <SmMsSidebar
            Filters={Filters}
            setFilters={setFilters}
            setSmsb={setSmsb}
            Smsb={Smsb}
          />
        )}
      </AnimatePresence>

      <Products Filters={Filters} setSmsb={setSmsb} Smsb={Smsb} />
    </motion.div>
  );
}
