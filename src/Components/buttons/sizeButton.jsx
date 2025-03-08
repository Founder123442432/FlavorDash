export default function SizeButton({ text, onClick, Filters }) {
  return (
    <button
      onClick={onClick}
      className={`${
        Filters == text
          ? "text-[#7747FF] bg-gray-200"
          : "bg-[#7747FF] text-gray-50"
      } inline-block py-2 text-sm cursor-pointer px-6 rounded-l-xl rounded-t-xl  hover:bg-white hover:text-[#7747FF]   font-bold leading-loose transition duration-200`}
    >
      {text}
    </button>
  );
}
