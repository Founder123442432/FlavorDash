import { Link } from "react-router-dom";
import thximg from "/src/assets/imgs/auimg.png";
import useStopscroll from "../../customHooks/StopScroling";
import useTopScroling from "../../customHooks/topScroling";
export default function ThxMsg() {
  useStopscroll();
  useTopScroling();
  return (
    <div className="w-full absolute bottom-0 right-0 left-0 z-50 top-0   backdrop-blur-3xl flex items-center justify-center">
      <div className="relative [--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl py-9 bg-white  opacity-95 [box-shadow:var(--shadow)] max-w-[300px]">
        <div className="flex  flex-col items-center justify-between pt-9 px-6 pb-6 ">
          <span className=" mx-auto  -mt-16 mb-8">
            <img
              className="w-25 h-25 absolute left-[32%] -top-17 "
              src={thximg}
            />
          </span>

          <h1 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700">
            We've received your message
          </h1>

          <p className="w-full mb-4 text-sm text-justify">
            Thank you for reaching out! We've received your message and will get
            back to you as soon as possible. If it's urgent, feel free to
            contact us directly. Have a great day
          </p>

          <Link to="/">
            <button
              className="  font-semibold right-6 bottom-6 cursor-pointer py-2 px-8 w-max break-keep text-sm rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]"
              type="button"
            >
              Accept
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
