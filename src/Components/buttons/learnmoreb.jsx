export default function LearnMoreButton({ bg, text }) {
  return (
    <button
      className={`text-${text}  font-semibold px-3 py-2 mt-4 rounded-md cursor-pointer bg-${bg}`}
      href=""
    >
      Learn more
    </button>
  );
}
