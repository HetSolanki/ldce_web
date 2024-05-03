export default function NewsCard({ imgUrl, date, text }) {
  return (
    <div className="w-60 mx-auto rounded-md overflow-hidden">
      <div className="h-60 overflow-hidden">
        <img
          src={imgUrl}
          alt="News-Image"
          className="h-full transition duration-200 ease-out hover:ease-in hover:scale-105"
        />
      </div>
      <p className="font-semibold text-gray-400 ps-2 pt-2">{date}</p>
      <p className="ps-2">{text}</p>
    </div>
  );
}
