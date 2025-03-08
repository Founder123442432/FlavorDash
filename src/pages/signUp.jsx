import SignupForm from "../Components/signUpUi/signupForm";
import useTitle from "../customHooks/usetitle";

export default function SignUp({ setLogIN }) {
  useTitle("sign up");
  return (
    <>
      <SignupForm setLogIN={setLogIN} />
    </>
  );
}
