import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./Components/home-ui/footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/contact";
import Menu from "./pages/Menu";
import SignUp from "./pages/signUp";
import SignupProtection from "./protection/signUpProtection";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebasecon";
import Banner from "./Components/home-ui/banner";
import axios from "axios";
import Error404 from "./pages/404";
import OrderFood from "./pages/OrderFood";
import Order from "./pages/order";
import AppMainContext from "./context/AppMainContext";
import { ToastContainer } from "react-toastify";
import Cart from "./pages/cart";
import ShippingAddress from "./pages/shippingAddress";
import AppCheckoutContext from "./context/AppCheckoutContext";
import EmptyCartProtection from "./protection/emptyCart";
import FinishOrder from "./pages/finishOrder";
import NoUserProtection from "./protection/noUserProtaction";
import UserPage from "./pages/userPage";
import ProfileProtection from "./protection/profileProtection";
import Profile from "./Components/Profile-ui/profile";
import UserOrder from "./Components/Profile-ui/userOrder";
import UserContext from "./context/userContext";
import UserCart from "./Components/Profile-ui/userCart";
import WishlistDisplay from "./Components/Profile-ui/userwishlist";

function App() {
  const [banner, setBanner] = useState(true);
  const [LogIN, setLogIN] = useState(false);
  const [user] = useAuthState(auth);
  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   async function fetchLocation() {
  //     const response = await axios.get("https://api.ipregistry.co/?key=tryout");
  //     setLocation(response.data);
  //   }
  //   fetchLocation();
  // }, []);

  return (
    <AppMainContext>
      <ToastContainer />
      {/* {banner && <Banner setBanner={setBanner} />} */}

      <Navbar LogIN={LogIN} setLogIN={setLogIN} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/OrderOnline" element={<OrderFood />} />
        <Route path="/Order/:id" element={<Order />} />
        <Route
          path="/shippingAddress"
          element={
            <AppCheckoutContext>
              <NoUserProtection>
                <ShippingAddress />
              </NoUserProtection>
            </AppCheckoutContext>
          }
        />
        <Route
          path="/FinishOrder/:IDs"
          element={
            <AppCheckoutContext>
              <FinishOrder />
            </AppCheckoutContext>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/signUp"
          element={
            <SignupProtection>
              <SignUp setLogIN={setLogIN} />
            </SignupProtection>
          }
        />
        <Route
          element={
            <AppMainContext>
              <UserContext>
                <ProfileProtection>
                  <AppCheckoutContext>
                    <UserPage />
                  </AppCheckoutContext>
                </ProfileProtection>
              </UserContext>
            </AppMainContext>
          }
        >
          <Route path="/userPage/:username" element={<Profile />} />
          <Route path="/userPage/Order" element={<UserOrder />} />
          <Route path="/userPage/onCart" element={<UserCart />} />
          <Route path="/userPage/wishlist" element={<WishlistDisplay />} />
        </Route>
      </Routes>
      <Footer />
    </AppMainContext>
  );
}

export default App;
