export default function CategoryButton({ img, title, onClick, Filters }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`px-1 ${
        Filters == title ? "bg-white text-black" : "bg-transparent text-white"
      }  w-25 h-auto flex flex-col items-center py-0.5 rounded-lg  cursor-pointer text-sm tracking-wider font-medium border border-white outline-none hover:bg-white  hover:text-black transition-all duration-300`}
    >
      <img className="w-6 " src={img} alt="pizza" />

      <span className="">{title} </span>
    </button>
  );
}
