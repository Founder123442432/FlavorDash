import LearnMoreButton from "../buttons/learnmoreb";

export default function AuCard({ icon, title, description }) {
  return (
    <div className="border border-amber-400 px-6 py-12 cursor-pointer rounded-md">
      {icon}
      <h3 className="text-lg text-yellow-500 font-bold mb-2 text-">{title} </h3>
      <p className="text-white text-md">{description}</p>
      <LearnMoreButton bg="[#fbd802]" text="black" />
    </div>
  );
}
