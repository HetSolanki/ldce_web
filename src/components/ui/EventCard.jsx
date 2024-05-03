export default function EventCard({ date, imageUrl, text }) {
  return (
    <div className="w-60 mx-auto rounded-md overflow-hidden bg-white">
      <div className="h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="h-full transition duration-200 ease-out hover:ease-in hover:scale-105"
        />
      </div>
      <div className="p-3">
        <p className="font-semibold text-gray-400">{date}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
