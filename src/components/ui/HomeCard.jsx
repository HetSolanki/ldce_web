export default function HomeCard({ imgUrl, title, bgColor }) {
  return (
    <div
      className={
        bgColor
          ? `bg-sky-950 lg:w-[13rem] lg:h-[12rem] sm:w-[10rem] sm:h-[9rem] w-[7rem] h-[6rem] text-white flex flex-col justify-center items-center p-[5px]`
          : "bg-white lg:w-[13rem] lg:h-[12rem] sm:w-[10rem] sm:h-[9rem] flex flex-col justify-center items-center w-[7rem] h-[6rem] p-[5px]"
      }
    >
      <img
        src={imgUrl}
        alt={title}
        height={"50px"}
        width={"50px"}
        className="sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]"
      />
      <h1 className="font-semibold text-md sm:text-2xl">{title}</h1>
    </div>
  );
}
