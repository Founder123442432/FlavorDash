import Star from "./star";

export default function Review({ img, text, date, name }) {
  return (
    <div className="break-inside-avoid p-4 rounded-lg bg-black relative w-full">
      <div className="flex flex-wrap items-center gap-4">
        <img
          src={img}
          className="w-14 h-14 rounded-full border-2 border-purple-500"
        />
        <div>
          <h4 className="text-white text-sm whitespace-nowrap font-bold">
            {name}
          </h4>
          <p className="mt-0.5 text-xs text-gray-500"> {date} </p>
        </div>
      </div>
      <div className="flex space-x-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
      </div>
      <div className="mt-6">
        <p className="text-white text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
