import { useState } from "react";
import Emailicon from "../ui/svgs/emilicon";
import PasswordIcon from "../ui/svgs/passwordIcon";
import PhoneIcon from "../ui/svgs/phoneIcon";
import Userion from "../ui/svgs/userion";
import signinImage from "/src/assets/imgs/signin-image.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebasecon";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function SignupForm({ setLogIN }) {
  const [SUerror, setSUerror] = useState(false);
  const [loading, setloading] = useState(false);
  const [SignUpInfo, setSignUpInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
  });

  async function signup(e) {
    e.preventDefault();
    if (
      !SignUpInfo.fullname ||
      !SignUpInfo.email ||
      !SignUpInfo.password ||
      !SignUpInfo.number
    ) {
      toast.error("please fill all the fields correctly");
      return;
    }

    try {
      setloading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        SignUpInfo.email,
        SignUpInfo.password
      );
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        fullname: SignUpInfo.fullname,
        number: SignUpInfo.number,
        email: SignUpInfo.email,
        createdAt: new Date(),
      });
      setloading(false);
      console.log("User Logged In:", userCredential.user);
    } catch (error) {
      setloading(false);
      console.error(error.message);
      setSUerror(
        `please fill all the fields correctly, Error: ${error.message}`
      );
    }
  }
  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src={signinImage}
            className="lg:max-w-[85%] w-full h-full aspect-square object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-yellow-400">
                Create an account
              </h2>
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  onChange={(e) =>
                    setSignUpInfo({
                      ...SignUpInfo,
                      fullname: e.target.value,
                    })
                  }
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter name"
                />
                <Userion />
              </div>
            </div>
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  onChange={(e) =>
                    setSignUpInfo({
                      ...SignUpInfo,
                      email: e.target.value,
                    })
                  }
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter email"
                />
                <Emailicon />
              </div>
            </div>
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  onChange={(e) =>
                    setSignUpInfo({
                      ...SignUpInfo,
                      password: e.target.value,
                    })
                  }
                  name="password"
                  type="password"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter password"
                />
                <PasswordIcon />{" "}
              </div>
            </div>
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Phone</label>
              <div className="relative flex items-center">
                <input
                  onChange={(e) =>
                    setSignUpInfo({
                      ...SignUpInfo,
                      number: e.target.value,
                    })
                  }
                  name="Phone"
                  type="number"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 pl-2 pr-8 py-3 outline-none"
                  placeholder="Enter Phone number"
                />
                <PhoneIcon />
              </div>
            </div>
            {SUerror && (
              <p className="block text-xs text-red-600 mt-3">{SUerror}</p>
            )}

            <div className="flex items-center mt-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                required
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-white ml-3 block text-sm"
              >
                I accept the{" "}
                <span className="text-yellow-500 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </span>
              </label>
            </div>

            <div className="mt-8">
              <button
                onClick={signup}
                type="submit"
                className="w-max cursor-pointer shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded  bg-yellow-400  focus:outline-none"
              >
                {loading ? (
                  <span>
                    Loading
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      fill="black"
                      className="ml-2 inline animate-spin"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="black"
                      />
                    </svg>
                  </span>
                ) : (
                  "Register"
                )}
              </button>
              <p className="text-sm text-white mt-8">
                Already have an account?{" "}
                <span
                  onClick={() => setLogIN(true)}
                  className="text-yellow-400 font-semibold cursor-pointer ml-1"
                >
                  Login here
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
