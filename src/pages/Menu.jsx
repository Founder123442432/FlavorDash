import MenuS1 from "../Components/MenuUi/MuiS1";
import MenuS2 from "../Components/MenuUi/MuiS2";
import MenuS3 from "../Components/MenuUi/MuiS3";
import useTitle from "../customHooks/usetitle";
export default function Menu() {
  useTitle("menu");
  return (
    <>
      <MenuS1 />
      <MenuS2 />
      <MenuS3 />
    </>
  );
}
